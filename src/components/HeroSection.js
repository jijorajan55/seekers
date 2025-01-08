import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Carousel library (react-slick)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heroImage1 from "../assets/hero-image1.jpg";
import heroImage2 from "../assets/hero-image2.jpg";
import heroImage3 from "../assets/hero-image3.jpg";

import ctaImage from "../assets/cta-image.jpg";
import employerImage from "../assets/employer-image.jpg";
import blogImage from "../assets/blog-image.jpg";
import jobImage from "../assets/job-image.jpg";

const Hero = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");
  const [dynamicText, setDynamicText] = useState("Developer");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  
  const suggestions = ["Developer", "Designer", "Marketing", "Engineer"];
  
  useEffect(() => {
    const roles = ["Developer", "Designer", "Marketer", "Engineer"];
     let index = 0;
      const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setDynamicText(roles[index]);
     }, 2000);
    return () => clearInterval(interval);
   }, []);
  
    const handleKeywordChange = (e) => {
      const input = e.target.value;
      setKeyword(input);
      if (input) {
        setFilteredSuggestions(
          suggestions.filter((s) =>
            s.toLowerCase().startsWith(input.toLowerCase())
          )
        );
      } else {
        setFilteredSuggestions([]);
      }
    };
  
    const handleSearch = () => {
      if (!keyword && !category && !location) {
        alert("Please enter at least one search criterion.");
        return;
      }
      console.log("Searching for:", { category, location, keyword });
    };
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 3000, 
      adaptiveHeight: true, 
      centerMode: false,
    };    
  
    return (
      <>
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white">
        {/* Carousel */}
        <Slider {...sliderSettings}>
  <div>
    <img
      src={heroImage1}
      alt="Hero Slide 1"
      style={{ width: "100%", height: "400px", objectFit: "cover" }}
    />
  </div>
  <div>
    <img
      src={heroImage2}
      alt="Hero Slide 2"
      style={{ width: "100%", height: "400px", objectFit: "cover" }}
    />
  </div>
  <div>
    <img
      src={heroImage3}
      alt="Hero Slide 3"
      style={{ width: "100%", height: "400px", objectFit: "cover" }}
    />
  </div>
</Slider>


  {/* Content Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
    <h1 className="text-4xl font-bold mb-4 animate-fadeIn">
      Find Your Dream <span className="text-blue-500">{dynamicText}</span> Job Today
    </h1>

    {/* Search Fields */}
    <div className="flex flex-wrap justify-center gap-4 animate-fadeIn mb-4">
      <div className="relative w-60">
        <input
          type="text"
          placeholder="Search by keywords"
          value={keyword}
          onChange={handleKeywordChange}
          className="py-2 px-3 rounded border border-gray-300 text-gray-800 w-full"
        />
        {filteredSuggestions.length > 0 && (
          <ul className="absolute bg-white border mt-1 rounded w-full text-gray-800 z-10 shadow-lg">
            {filteredSuggestions.map((s, index) => (
              <li
                key={index}
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => setKeyword(s)}
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="py-2 px-3 rounded border border-gray-300 text-gray-800 w-60"
      />
    </div>

    {/* Additional Search Fields */}
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      <select
        className="py-2 px-3 rounded border border-gray-300 text-gray-800 w-60"
      >
        <option value="">Select Sub Industry</option>
        <option value="SubIndustry1">Sub Industry 1</option>
        <option value="SubIndustry2">Sub Industry 2</option>
        <option value="SubIndustry3">Sub Industry 3</option>
      </select>

      <select
        className="py-2 px-3 rounded border border-gray-300 text-gray-800 w-60"
      >
        <option value="">Select Functional Area</option>
        <option value="FunctionalArea1">Functional Area 1</option>
        <option value="FunctionalArea2">Functional Area 2</option>
        <option value="FunctionalArea3">Functional Area 3</option>
      </select>

      <select
        className="py-2 px-3 rounded border border-gray-300 text-gray-800 w-60"
      >
        <option value="">Select Designation</option>
        <option value="Designation1">Designation 1</option>
        <option value="Designation2">Designation 2</option>
        <option value="Designation3">Designation 3</option>
      </select>
    </div>

    {/* Common Search Button */}
    <button
      onClick={handleSearch}
      className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-transform transform hover:scale-105 animate-pulse"
    >
      Search
    </button>
  </div>
</section>

{/* Jobs Section */}
<section className="py-12 bg-gray-50">
  <div className="container mx-auto grid md:grid-cols-3 gap-6 px-6">
    {/* Jobs By Location */}
    <div className="bg-blue-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Jobs By Location</h3>
      <div className="flex flex-wrap gap-2">
        {[
          "UAE",
          "Saudi Arabia",
          "Qatar",
          "Kuwait",
          "Oman",
          "Bahrain",
          "Abu Dhabi",
          "Dubai",
          "Sharjah",
          "Riyadh",
        ].map((location, index) => (
          <button
            key={index}
            className="py-1 px-3 border border-gray-300 rounded-full text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors text-sm"
          >
            {location}
          </button>
        ))}
        <button className="py-1 px-3 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-sm">
          +39 More
        </button>
      </div>
    </div>

    {/* Jobs By Category */}
    <div className="bg-blue-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Jobs By Category</h3>
      <div className="flex flex-wrap gap-2">
        {[
          "Top Management",
          "Accounts / Tax",
          "Banking / Financial Services",
          "Construction / Civil Engg",
          "HR / Industrial Relations",
        ].map((category, index) => (
          <button
            key={index}
            className="py-1 px-3 border border-gray-300 rounded-full text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors text-sm"
          >
            {category}
          </button>
        ))}
        <button className="py-1 px-3 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-sm">
          +97 More
        </button>
      </div>
    </div>

    {/* Jobs By Designation */}
    <div className="bg-blue-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Jobs By Designation</h3>
      <div className="flex flex-wrap gap-2">
        {[
          "Software Engineer",
          "Data Scientist",
          "Product Manager",
          "Marketing Specialist",
          "Human Resources Manager",
        ].map((designation, index) => (
          <button
            key={index}
            className="py-1 px-3 border border-gray-300 rounded-full text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors text-sm"
          >
            {designation}
          </button>
        ))}
        <button className="py-1 px-3 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-sm">
          +50 More
        </button>
      </div>
    </div>
  </div>
</section>

{/* Top Employers Section */}
<section className="py-12 bg-gradient-to-r from-blue-50 to-gray-50">
  <div className="container mx-auto">
    <div className="flex justify-between items-center mb-6 px-6">
      <h2 className="text-3xl font-bold text-gray-800">Top Employers</h2>
      <a
        href="#viewAllEmployers"
        className="text-blue-600 font-semibold hover:underline"
      >
        View All
      </a>
    </div>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
      {Array(4)
        .fill(null)
        .map((_, idx) => (
          <div
            key={idx}
            className="relative bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-gray-200 bg-gradient-to-b from-blue-100 to-gray-100 overflow-hidden">
              <img
                src={employerImage}
                alt={`Employer ${idx + 1} Logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600">
              Employer {idx + 1}
            </h3>
            <p className="text-gray-600 mb-4">
              Leading company in innovation and talent acquisition.
            </p>
            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
              Featured
            </span>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">
              View Jobs
            </button>
          </div>
        ))}
    </div>
  </div>
</section>


{/* Call to Action Section */}
<section className="relative overflow-hidden">
  {/* Background Image */}
  <img
    src={ctaImage}
    alt="CTA Banner"
    className="w-full h-[300px] object-cover"
  />

  {/* Animated Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-70 animate-gradient-x"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
    <h2 className="text-4xl font-bold mb-4 text-shadow-md">
      Get Discovered by Top Employers
    </h2>
    <p className="mb-6 text-lg">
      Join thousands of professionals and start your career journey today.
    </p>
    {/* Button */}
    <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition-transform transform hover:scale-110 hover:shadow-lg">
      Register for Free
    </button>
    {/* Animated Arrow */}
    <div className="mt-6 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>

  {/* Parallax Scrolling Effect */}
  <style>
    {`
      section.relative {
        perspective: 1px;
        transform-style: preserve-3d;
      }
      img.object-cover {
        transform: translateZ(-1px) scale(2);
      }
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 6s ease infinite;
      }
      @keyframes gradient-x {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      .text-shadow-md {
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
      }
    `}
  </style>
</section>


{/* Latest Jobs Section */}
<section className="py-12 bg-blue-50">
  <div className="container mx-auto">
    {/* Section Header */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Latest Job Openings</h2>
      <a href="#viewAllJobs" className="text-blue-600 font-semibold hover:underline">
        View All
      </a>
    </div>

    {/* Jobs Grid */}
    <div className="grid md:grid-cols-4 gap-6">
      {Array(4)
        .fill(null)
        .map((_, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-blue-100 rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-600"
          >
            {/* Job Thumbnail */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
          <img
            src={jobImage}
            alt={`Job Thumbnail ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

            {/* Job Title */}
            <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600">
              Job Title {idx + 1}
            </h3>

            {/* Job Description */}
            <p className="text-gray-600 mb-4">
              Discover exciting opportunities that align with your skills and career goals.
            </p>

            {/* Job Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-green-100 text-green-700 py-1 px-3 rounded-full">
                Full-Time
              </span>
              <span className="text-xs bg-blue-100 text-blue-700 py-1 px-3 rounded-full">
                Remote
              </span>
              <span className="text-xs bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full">
                Urgent
              </span>
            </div>

            {/* Apply Button */}
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-transform transform hover:scale-110">
              Apply Now
            </button>
          </div>
        ))}
    </div>
  </div>
</section>

{/* Boost Your Job Hunt Section */}
<section className="py-12 bg-blue-50">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    {/* Left: Text Content */}
    <div className="md:w-1/3 text-left mb-6 md:mb-0">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="orange"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m6-9H6"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Boost Your Job Hunt</h2>
      </div>
      <p className="text-gray-700">
        Get a CV that highlights your profile and increase views by up to 50%.
      </p>
    </div>

    {/* Right: Service Cards */}
    <div className="md:w-2/3 grid md:grid-cols-3 gap-6">
      {/* Service 1: Professional CV Writing */}
      <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="blue"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Professional CV Writing</h3>
        <p className="text-gray-600 mb-4">
          Get a professionally written CV to highlight your strengths.
        </p>
        <a href="#cvWriting" className="text-blue-600 font-semibold hover:underline">
          Learn More →
        </a>
      </div>
      {/* Service 2: Career Counselling */}
      <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="green"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Career Counselling</h3>
        <p className="text-gray-600 mb-4">
          Expert guidance to identify the right career path.
        </p>
        <a href="#careerCounselling" className="text-blue-600 font-semibold hover:underline">
          Learn More →
        </a>
      </div>
      {/* Service 3: Job Search Assistance */}
      <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="orange"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Job Search Assistance</h3>
        <p className="text-gray-600 mb-4">
          Find perfect job opportunities tailored to your skills.
        </p>
        <a href="#jobSearch" className="text-blue-600 font-semibold hover:underline">
          Learn More →
        </a>
      </div>
    </div>
  </div>
</section>


{/* Latest Blogs Section */}
<section className="py-12 bg-gradient-to-b from-white to-gray-100">
  <div className="container mx-auto">
    {/* Section Header */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Here are some good reads for your career!
      </h2>
      <a href="#viewAllBlogs" className="text-blue-600 font-semibold hover:underline">
        View All
      </a>
    </div>

    {/* Blogs Grid */}
    <div className="grid md:grid-cols-4 gap-6">
      {Array(4)
        .fill(null)
        .map((_, idx) => (
          <div
            key={idx}
            className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            {/* Blog Image with Overlay */}
            <div className="relative">
              <img
                src={blogImage}
                alt={`Blog Thumbnail ${idx + 1}`}
                className="w-full h-[150px] object-cover"
              />
              {/* Ribbon Tag */}
              <span
                className={`absolute top-2 left-2 ${
                  idx === 0 ? "bg-red-500" : "bg-green-500"
                } text-white text-xs py-1 px-3 rounded-full`}
              >
                {idx === 0 ? "Trending" : "New"}
              </span>
            </div>

            {/* Blog Content */}
            <div className="p-5">
              {/* Blog Title */}
              <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-blue-600">
                Blog Title {idx + 1}
              </h3>

              {/* Blog Description */}
              <p className="text-sm text-gray-600">
                Discover career advice, industry trends, and success tips to enhance your professional journey.
              </p>

              {/* Read More Button */}
              <div className="mt-4 text-right">
                <a
                  href="#readMore"
                  className="inline-block text-blue-600 font-semibold hover:underline transition-transform transform hover:translate-x-1"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
</section>
</>
);
};

export default Hero;
