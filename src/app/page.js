// import Footer from '../components/Footer';
import Home1 from "../components/Home/Home1";
import Home2 from "../components/Home/Home2";
import Home3 from "../components/Home/Home3";
import Home4 from "../components/Home/Home4";
import Home5 from "../components/Home/Home5";
import Home6 from "../components/Home/Home6";
// import Home7 from "../components/Home/Home7";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Home8 from "../components/Home/Home8";
import ContactForm from "./contact/page";

function Page() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: "Your Website Name",
    description: "This is your website description for better SEO.",
    publisher: {
      "@type": "Organization",
      name: "Your Company Name",
    },
  };

  return (
    <div>
      <Head>
        <title>
          Empowering Careers with Comprehensive Campus Placement Training
        </title>
        <meta
          name="description"
          content="Achieve your dream campus placement with TruSkill Academy. Explore expert-led training programs in aptitude, communication, technical skills, and more. Empower your career today."
        />
        <meta
          property="og:title"
          content="Empowering Careers with Comprehensive Campus Placement Training"
        />
        <meta
          property="og:description"
          content="Achieve your dream campus placement with TruSkill Academy. Explore expert-led training programs in aptitude, communication, technical skills, and more. Empower your career today."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://truskill.in/Home/Home1.png"
        />
        <meta property="og:url" content="https://truskill.in" />
        <meta
          name="twitter:card"
          content="Achieve your dream campus placement with TruSkill Academy. Explore expert-led training programs in aptitude, communication, technical skills, and more. Empower your career today"
        />
        <meta
          name="twitter:title"
          content="Empowering Careers with Comprehensive Campus Placement Training"
        />
        <meta
          name="twitter:description"
          content="Achieve your dream campus placement with TruSkill Academy. Explore expert-led training programs in aptitude, communication, technical skills, and more. Empower your career today"
        />
        <meta
          name="twitter:image"
          content="https://truskill.in/Home/Home1.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="px-6 md:px-20 lg:px-40 bg-white">
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
        <Home5 />
        <Home6 />
        {/* <Home7 /> */}
        {/* Home7 - testimonials component hide temporarily */}
        <ScrollToTopButton className="justify-right" />
        <Home8 />
        <ContactForm />
      </div>
    </div>
  );
}

export default Page;
