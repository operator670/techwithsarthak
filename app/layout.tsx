import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Sarthak Kesarwani - Senior Cloud Engineer",
  description: "Senior Cloud Engineer with 4+ years of experience in GCP, AWS, Terraform, and Generative AI. Specialized in cloud migrations, platform engineering, and AI solutions.",
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
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
          :root {
            --background: 210 200 185; /* Professional Warm Tan */
          }
          body {
            background-color: rgb(210, 200, 185);
            background-image: 
              linear-gradient(to right, rgba(128, 128, 128, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 1px, transparent 1px);
            background-size: 40px 40px;
          }
          [data-theme="dark"] body {
             background-color: rgb(9, 9, 11);
             background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          }
        `}} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
