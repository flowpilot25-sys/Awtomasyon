import { MongoClient } from 'mongodb';

const options = {};

// Lazily create (and cache) the MongoClient connection promise.
// The MONGODB_URI check and the actual connection are deferred until the
// first time the DB is used at runtime — NOT at module import / build time.
// This keeps `next build` from crashing when the env var isn't present in
// the build environment (e.g. Vercel Preview builds).
let cachedPromise: Promise<MongoClient> | undefined;

function connect(): Promise<MongoClient> {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  // Properly encode the MongoDB URI to handle special characters in password
  const uri = encodeURI(process.env.MONGODB_URI);

  if (process.env.NODE_ENV === 'development') {
    // In development, cache the promise on `global` so it survives the module
    // reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      globalWithMongo._mongoClientPromise = new MongoClient(uri, options).connect();
    }
    return globalWithMongo._mongoClientPromise;
  }

  return new MongoClient(uri, options).connect();
}

function getClientPromise(): Promise<MongoClient> {
  if (!cachedPromise) {
    cachedPromise = connect();
  }
  return cachedPromise;
}

// Preserve the existing default-export contract (`await clientPromise`) while
// staying lazy: the underlying connection is only established the first time
// the promise is awaited.
const clientPromise: Promise<MongoClient> = {
  then: (onfulfilled, onrejected) =>
    getClientPromise().then(onfulfilled, onrejected),
  catch: (onrejected) => getClientPromise().catch(onrejected),
  finally: (onfinally) => getClientPromise().finally(onfinally),
  [Symbol.toStringTag]: 'Promise',
} as Promise<MongoClient>;

export default clientPromise;
