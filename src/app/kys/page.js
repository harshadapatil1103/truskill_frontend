"use client";

import KYSTestExplainer from "@/src/components/kys/kys5";
import TestimonialsSection from "@/src/components/kys/kys6";
import React from "react";
import Kys1 from "@/src/components/kys/Kys1";
import Kys2 from "@/src/components/kys/Kys2";
import Kys3 from "@/src/components/kys/Kys3";
import Kys4 from "@/src/components/kys/Kys4";
import KYS7 from "@/src/components/kys/kys7";
import FAQPage from "@/src/components/kys/kys8";
import ScrollToTopButton from "@/src/components/ScrollToTopButton";
import Head from "next/head"; 

const Kys = () => {
  // Dynamic SEO Data
  const pageTitle =
    "Know Yourself Test | Assess Your Campus Placement Skills with TruSkill Academy";
  const pageDescription =
    "Take the Know Yourself (KYS) Test by TruSkill Academy to identify your strengths and weaknesses in campus placement skills. Unlock your potential for interviews, aptitude, and soft skills training today!";
  const pageKeywords =
    "Campus Placement Skill Test,, Aptitude and Soft Skill Assessment,Placement Preparation Self-Evaluation, Know your readiness test,Placement Training Test, Kyr test";
  const pageUrl = "https://www.truskill.in/kyr";
  const pageImage = "https://www.truskill.in/images/kys/kys1.png"; 

  // Structured Data (JSON-LD for FAQ)
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Know Your Strengths (KYS) program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Know Your Strengths (KYS) program is a comprehensive assessment designed to help individuals discover their unique strengths and leverage them for personal and professional growth.",
        },
      },
      {
        "@type": "Question",
        name: "How can KYS help me in personal development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KYS provides personalized insights into your strengths, enabling you to make informed decisions and unlock your full potential in various aspects of life.",
        },
      },
      // Add more FAQs here
    ],
  });

  return (
    <>
      {/* SEO Tags */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="author" content="Truskill" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{structuredData}</script>
      </Head>

      {/* Main Content */}
      <div className="w-full bg-white">
        <div className="mx-auto px-6 md:px-14 lg:px-28">
          {/* Section 1 */}
          <Kys1 />
          <Kys2 />
          <Kys3 />
          <Kys4 />
        </div>

        <div className="w-full">
          <KYSTestExplainer />
          <TestimonialsSection />
          <KYS7 />
          <FAQPage />
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Kys;
