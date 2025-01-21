import React from "react";
import Head from "next/head"; // Import for adding meta tags
import AboutTech from "@/src/components/about/aboutTech";
import Main from "@/src/components/about/main";
// import AboutTruskill from '@/src/components/about/AboutTruskill';
import PersonalisedDashboard from "@/src/components/about/personalisedDashboard";
import TechLibrary from "@/src/components/about/techLibrary";
import ProgressTracker from "@/src/components/about/ProgressTracker";
import ResumeMaker from "@/src/components/about/ResumeMaker";
import MockInterview from "@/src/components/about/MockInterview";
import CollegeAssistanceModule from "@/src/components/about/collegeAssistance";
import SolutionCard from "@/src/components/about/solutionCard";
import KeyFeatures from "@/src/components/about/keyFeature";
import DashboardStatistics from "@/src/components/about/dashBoardStatistics";
import FAQWithScrollingLogos from "@/src/components/about/faqWithScroll";
import MagicLoop from "@/src/components/about/magicLoop";
import ScrollToTopButton from "@/src/components/ScrollToTopButton";
import Statitics from "@/src/components/about/Statistics";

const TruSkillAcademy = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>
          About Us | TruSkill Academy - Campus Placement Training Experts
        </title>
        <meta
          name="description"
          content="Learn about TruSkill Academy, your trusted partner in campus placement training. Discover our mission to enhance problem-solving, creativity, and communication skills through innovative learning strategies."
        />
        <meta
          name="keywords"
          content="About TruSkill
, Online upskilling platform
, Trusted learning platform
, TruSkill story
,Truskill Academy
, Best Placement Training Institute in Pune
, Placement Training near me
, Truskill Academy Contact"
        />
        <meta name="author" content="TruSkill Academy" />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="About Us | TruSkill Academy - Campus Placement Training Experts"
        />
        <meta
          property="og:description"
          content="Learn about TruSkill Academy, your trusted partner in campus placement training. Discover our mission to enhance problem-solving, creativity, and communication skills through innovative learning strategies."
        />
        <meta property="og:url" content="https://www.truskill.in/about" />
        <meta property="og:image" content="public/images/about/aboutUs1.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="public/images/about/aboutUs1.png" />
        <meta
          name="twitter:title"
          content="About Us | TruSkill Academy - Campus Placement Training Experts"
        />
        <meta
          name="twitter:description"
          content="Learn about TruSkill Academy, your trusted partner in campus placement training. Discover our mission to enhance problem-solving, creativity, and communication skills through innovative learning strategies."
        />
        <meta name="twitter:image" content="public/images/about/aboutUs1.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "TruSkill Academy",
              url: "https://www.truskill.in",
              description:
                "Learn about TruSkill Academy, your trusted partner in campus placement training. Discover our mission to enhance problem-solving, creativity, and communication skills through innovative learning strategies.",
              logo: "public/images/logo/logo.png",
              sameAs: [
                "https://www.facebook.com/truskillacademy",
                "https://twitter.com/truskillacademy",
                "https://www.linkedin.com/company/truskillacademy",
              ],
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <Main />
      <AboutTech />
      {/* <AboutTruskill /> */}
      <PersonalisedDashboard />
      <TechLibrary />
      <ProgressTracker />
      <ResumeMaker />
      <MockInterview />
      <CollegeAssistanceModule />
      <MagicLoop />
      <SolutionCard />
      <KeyFeatures />
      <DashboardStatistics />
      <Statitics />
      <FAQWithScrollingLogos />
      <ScrollToTopButton />
    </>
  );
};

export default TruSkillAcademy;
