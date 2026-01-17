import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://techwithsarthak.com'),
  title: {
    default: "Sarthak Kesarwani - Senior Cloud Engineer | GCP & AWS Expert",
    template: "%s | Sarthak Kesarwani"
  },
  description: "Sarthak Kesarwani is a Senior Cloud Engineer specializing in Google Cloud Platform (GCP), AWS, Terraform, and Generative AI. With 3+ years of experience in cloud infrastructure, microservices, and platform engineering. Based in New Delhi, India. Available for hire.",
  keywords: [
    "Sarthak Kesarwani",
    "Sarthak Kesarwani Cloud Engineer",
    "Sarthak Kesarwani GCP",
    "Sarthak Kesarwani portfolio",
    "Senior Cloud Engineer",
    "Cloud Engineer India",
    "Cloud Engineer Delhi",
    "GCP expert India",
    "Google Cloud Platform engineer",
    "AWS Solutions Architect",
    "Terraform specialist",
    "Cloud infrastructure engineer",
    "Generative AI engineer",
    "Agentic AI developer",
    "Kubernetes expert",
    "DevOps engineer",
    "Platform Engineering",
    "Cloud Migration specialist",
    "Microservices architect",
    "Tech portfolio",
    "Hire cloud engineer"
  ],
  authors: [{ name: "Sarthak Kesarwani", url: "https://techwithsarthak.com" }],
  creator: "Sarthak Kesarwani",
  publisher: "Sarthak Kesarwani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://techwithsarthak.com",
  },
  openGraph: {
    type: "profile",
    url: "https://techwithsarthak.com",
    title: "Sarthak Kesarwani - Senior Cloud Engineer | GCP & AWS Expert",
    description: "Senior Cloud Engineer with 3+ years of experience in GCP, AWS, Terraform, Kubernetes, and Generative AI. Specializing in cloud infrastructure, microservices, and platform engineering. Based in New Delhi, India.",
    siteName: "Sarthak Kesarwani - Cloud Engineer Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/images/Sarthak.jpeg",
        width: 800,
        height: 800,
        alt: "Sarthak Kesarwani - Senior Cloud Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@acloudtomato",
    creator: "@acloudtomato",
    title: "Sarthak Kesarwani - Senior Cloud Engineer",
    description: "Senior Cloud Engineer | GCP Expert | AWS Solutions Architect | Terraform | Kubernetes | Generative AI | Available for Hire",
    images: ["/images/Sarthak.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  verification: {
    google: "google-site-verification-code-here", // Add your Google Search Console verification code
  },
  category: "technology",
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
