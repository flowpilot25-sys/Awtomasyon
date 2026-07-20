"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
  slug: string;
  tags?: string[];
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <section id="blog" className="px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">Latest Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              From Our Blog
            </h2>
            <p className="text-xl text-muted-foreground">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return null; // Silently fail if there's an error
  }

  if (posts.length === 0) {
    return null; // Don't show section if no posts
  }

  return (
    <section id="blog" className="px-6 py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">Latest Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              From Our Blog
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Tips, guides, and insights on AI agents, automation, and business efficiency
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <ScrollAnimation
              key={post.id}
              animation="fade-in-up"
              delay={index * 100}
            >
              <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-all duration-500 group hover:scale-105 h-full flex flex-col overflow-hidden">
                {/* Blog Image */}
                {post.imageUrl && (
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.imageUrl})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                )}

                <CardHeader className="flex-1">
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <CardTitle className="text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>

                  <CardDescription className="text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </CardDescription>

                  {/* Meta Info */}
                  <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* View All Button */}
        <ScrollAnimation animation="fade-in-up" delay={400}>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
              asChild
            >
              <Link href="/blog">
                View All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
