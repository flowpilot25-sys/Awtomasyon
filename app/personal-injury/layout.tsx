import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Employees for Personal Injury Law Firms | Awtomasyon",
  description:
    "Capture more cases with AI Employees that answer every call, qualify every lead, and schedule consultations automatically — 24/7. Works with Clio, Filevine, MyCase, and Litify.",
  alternates: {
    canonical: "https://awtomasyon.com/personal-injury",
  },
  openGraph: {
    url: "https://awtomasyon.com/personal-injury",
    type: "website",
    title: "AI Employees for Personal Injury Law Firms | Awtomasyon",
    description:
      "Capture more cases with AI Employees that answer every call, qualify every lead, and schedule consultations automatically — 24/7.",
    images: ["/Awtomasyon.png"],
    siteName: "Awtomasyon",
  },
};

export default function PersonalInjuryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
