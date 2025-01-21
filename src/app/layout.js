import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApolloWrapper from "../components/ApolloWrapper/ApolloWrapper";

import "/styles/globals.css";

export const metadata = {
  title: "TruSkill Academy",
  description:
    "TruSkill Academy is a digital courses provider website helping you thrive in a fast-paced world.",
  keywords:
    "online courses, skill development, digital learning, TruSkill Academy",
  url: "https://www.truskillacademy.com",
  image: "/images/social-share.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Font Preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TruSkill Academy",
              url: metadata.url,
              logo: metadata.image,
              description: metadata.description,
            }),
          }}
        />
      </head>
      <body
        className="text-foreground font-regular"
        style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 500 }}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <ApolloWrapper>{children}</ApolloWrapper>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
