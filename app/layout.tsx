import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Sarthak Kesarwani - Senior Cloud Engineer Portfolio | Hire Me | Portfolio Design",
  description: "Portfolio of Sarthak Kesarwani, Senior Cloud Engineer with 3+ years of experience in GCP, AWS, Terraform, and Generative AI. View projects, skills, and experience. Perfect example of professional portfolio design for engineers and developers.",
  keywords: [
    "Sarthak Kesarwani",
    "Cloud Engineer",
    "Senior Cloud Engineer",
    "Cloud Engineer hire",
    "Cloud Engineer portfolio",
    "GCP expert",
    "GCP architect",
    "AWS architect",
    "AWS specialist",
    "Terraform specialist",
    "Cloud infrastructure",
    "Cloud infrastructure engineer",
    "Generative AI engineer",
    "Solution Architect",
    "Cloud Migration",
    "Platform Engineering",
    "Portfolio design",
    "Developer portfolio",
    "Portfolio example",
    "Tech portfolio"
  ],
  authors: [{ name: "Sarthak Kesarwani", url: "https://techwithsarthak.com" }],
  creator: "Sarthak Kesarwani",
  publisher: "Sarthak Kesarwani",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://techwithsarthak.com",
  },
  openGraph: {
    title: "Sarthak Kesarwani - Senior Cloud Engineer Portfolio",
    description: "Professional portfolio featuring cloud infrastructure projects, AI solutions, and portfolio design inspiration for engineers",
    type: "website",
    url: "https://techwithsarthak.com",
    siteName: "Sarthak Kesarwani Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Kesarwani - Cloud Engineer Portfolio",
    description: "Senior Cloud Engineer | Portfolio Design | GCP | AWS | Terraform | Generative AI",
    creator: "@sarthak_dev",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
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
