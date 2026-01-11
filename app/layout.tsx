import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Sarthak Kesarwani - Senior Cloud Engineer",
  description: "Senior Cloud Engineer with 3+ years of experience in GCP, AWS, Terraform, and Generative AI. Specialized in cloud migrations, platform engineering, and AI solutions.",
  keywords: ["Cloud Engineer", "Google Cloud", "AWS", "Terraform", "Generative AI", "Vertex AI", "Cloud Architecture"],
  authors: [{ name: "Sarthak Kesarwani" }],
  openGraph: {
    title: "Sarthak Kesarwani - Senior Cloud Engineer",
    description: "Senior Cloud Engineer with expertise in GCP, AWS, and Generative AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
