import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApolloWrapper from "../components/ApolloWrapper/ApolloWrapper";

import "/styles/globals.css";
// import { Head } from "next/document";

export const metadata = {
  title: "TruSkill Academy",
  description: "Truskill a digital courses provider website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap"
          rel="stylesheet"
        />
        </head>
      <body className=" text-foreground font-regular" style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 500 }}>
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
