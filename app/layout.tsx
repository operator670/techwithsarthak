import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Sarthak Kesarwani - Senior Cloud Engineer | GCP, AWS, Terraform",
  description: "Senior Cloud Engineer with 3+ years of experience in GCP, AWS, Terraform, and Generative AI. Specialized in cloud migrations, platform engineering, AI solutions, and agentic systems.",
  keywords: ["Cloud Engineer", "Google Cloud", "AWS", "Terraform", "Generative AI", "Vertex AI", "Cloud Architecture", "FastAPI", "NextJS", "Cloud Run", "Agentic AI", "ADK"],
  authors: [{ name: "Sarthak Kesarwani", url: "https://techwithsarthak.com" }],
  creator: "Sarthak Kesarwani",
  publisher: "Sarthak Kesarwani",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://techwithsarthak.com",
  },
  openGraph: {
    title: "Sarthak Kesarwani - Senior Cloud Engineer",
    description: "Senior Cloud Engineer with expertise in GCP, AWS, Terraform, and Generative AI",
    type: "website",
    url: "https://techwithsarthak.com",
    siteName: "Sarthak Kesarwani Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Kesarwani - Senior Cloud Engineer",
    description: "Senior Cloud Engineer with 3+ years of experience in cloud infrastructure and AI solutions",
    creator: "@sarthak_dev",
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://techwithsarthak.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sarthak Kesarwani",
              "title": "Senior Cloud Engineer",
              "url": "https://techwithsarthak.com",
              "email": "official.sarthak905@gmail.com",
              "jobTitle": "Senior Cloud Engineer",
              "location": {
                "@type": "Place",
                "address": "New Delhi, India"
              },
              "sameAs": [
                "https://github.com/operator670",
                "https://linkedin.com/in/sarthak-kesarwani"
              ],
              "knowsAbout": [
                "Google Cloud Platform",
                "AWS",
                "Terraform",
                "Generative AI",
                "Cloud Architecture",
                "Microservices",
                "FastAPI",
                "Next.js",
                "Agentic AI"
              ]
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
