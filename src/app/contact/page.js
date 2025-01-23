"use client";

import React, { useState } from "react";
import Head from "next/head";

const countries = [
  { code: "+91", name: "India" },
  { code: "+1", name: "USA" },
  { code: "+44", name: "UK" },
  { code: "+81", name: "Japan" },
];

const ContactForm = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if any required field is empty
    if (!firstName || !lastName || !email || !message || !phoneNumber) {
      // Updated to phoneNumber
      alert("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Log values to check if all fields are populated
    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      countryCode,
    }); // Updated to phoneNumber

    try {
      // Sending request to backend API
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
          phoneNumber,
          countryCode,
        }),
      });

      // Check if the response is successful
      if (response.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
      } else {
        const errorDetails = await response.text();
        console.error("API error:", errorDetails);
        setStatus("error");
      }
    } catch (error) {
      console.error("Request failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f9fafb] px-8 py-12">
      <Head>
        <title>
          Contact Us | TruSkill – Your Partner in Professional Growth
        </title>
        <meta
          name="description"
          content="Get in touch with TruSkill for any inquiries, support, or feedback. Whether you need assistance with our upskilling programs or want to partner with us, we're here to help. Connect with our team today!"
        />
        <meta
          name="keywords"
          content="Contact TruSkill,
, Get in touch with TruSkill
, Reach out to TruSkill
, TruSkill support
, Truskill Academy"
        />
        <meta name="author" content="Truskill Academy Team" />
      </Head>
      <div className="mt-20 w-full max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <h2 className="text-lg font-bold text-black-600">Contact Us</h2>
          <h1 className="text-3xl font-semibold mt-2 text-gray-800">
            "We'd Love to Hear from You!"
          </h1>
        </div>

        {status === "success" && (
          <p className="text-green-600 text-center mb-4">
            Message sent successfully! We will get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mb-4">
            Something went wrong. Please try again later.
          </p>
        )}

        <div className="grid md:grid-cols-[2fr,1fr] gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                    className="w-full p-3 rounded-lg border border-gray-600 text-sm"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="w-full p-3 rounded-lg border border-gray-600 text-sm"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email Address"
                  className="w-full p-3 rounded-lg border border-gray-600 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex gap-2">
                <div>
                  <label
                    htmlFor="countryCode"
                    className="block text-sm font-medium text-gray-700">
                    Country Code
                  </label>
                  <select
                    id="countryCode"
                    className="w-32 p-3 rounded-lg border border-gray-100 text-sm"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    placeholder="XXX-XX-XXXXX"
                    className="w-full p-3 rounded-lg border border-gray-600 text-sm"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave us a Message..."
                  rows={6}
                  className="w-full p-3 rounded-lg border border-gray-600 text-sm resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded text-sm font-medium transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-500"
                }`}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-xl">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">📞 +91 9082574346</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">✉️ info@truskill.in</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">📍 Andheri, Mumbai, Maharashtra</span>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <blockquote className="text-gray-600 italic text-sm">
                "Education is the most powerful weapon which you can use to
                change the world."
              </blockquote>
              <p className="text-gray-500 text-sm mt-2">— Nelson Mandela</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
