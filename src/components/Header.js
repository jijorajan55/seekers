import React, { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const categories = [
    {
      name: "Accounts / Taxation / Audit",
      subBranches: [
        "Accountant General",
        "Accountant",
        "Cost Accountant/ICWA",
        "Accounts Head/GM-Accounts",
        "Data Entry Operator",
        "Accounts Executive",
      ],
    },
    {
      name: "Customer Services / Helpdesk / Telecalling",
      subBranches: [
        "Customer Service Executive",
        "Customer Service Manager",
        "Fresher",
        "Manager Service Delivery",
        "Director Customer Service",
        "Senior Customer Service Executive",
      ],
    },
    {
      name: "Logistics / Supply Chain / Distribution / Transportation",
      subBranches: [
        "Airport Jobs - Others",
        "Computer Operator/Data Entry",
        "Document Controller",
        "Operations Executive",
        "Logistics Executive",
        "Logistics Coordinator",
      ],
    },
    {
      name: "Operations / Trade Management / Service Process",
      subBranches: [
        "Computer Operator/Data Entry",
        "Document Controller",
        "Operations Executive",
        "Logistics Executive",
        "Logistics Coordinator",
      ],
    },
    {
      name: "Sales / Business Development / Sales Coordination / Telesales",
      subBranches: [
        "Sales Executive",
        "Senior Sales Executive",
        "Business Development Manager",
        "Sales Manager",
      ],
    },
    {
      name: "Warehousing / Warehouse / Store / Storage",
      subBranches: [
        "Warehouse Manager",
        "Store/Warehouse Assistant",
        "Store/Warehouse Manager",
        "Store/Warehouse Supervisor",
      ],
    },
  ];  

  const dropdowns = {
    services: [
      "Professional CV Writing",
      "Career Counselling",
      "Job Search & Interview Training",
      "Job Search Assistance",
      "Social Media Presence",
      "Job Alerts",
      "CV Highlight / Featured Profile",
      "CV Distribution",
      "Webinar (Interview Training)",
    ],
    employerServices: [
      "Job Posting",
      "CV Search",
      "Recruitment Software",
      "Employer Branding",
      "End to End Recruitment",
      "RPO",
      "Training & Induction",
    ],
    learning: ["Candidates", "Employers"],
    registration: ["Candidate Registration", "Employer Registration"],
    employer: ["Login", "Register"],
  };  

  // Handle Mouse Enter
  const handleMouseEnter = (dropdownName) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveDropdown(dropdownName);
  };

  // Handle Mouse Leave
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 300); // 300ms delay
    setHoverTimeout(timeout);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between py-2 px-6 container mx-auto">
        <div>
          <img src={logo} alt="Logo" className="h-[70px] w-auto" />
        </div>
        <div className="flex space-x-4">
          <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </button>
          <button className="py-2 px-4 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            Register
          </button>
        </div>
      </div>

      <nav className="bg-gray-100">
        <ul className="flex justify-center space-x-6 py-3">
          {/* Home */}
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-600 no-underline">
              Home
            </a>
          </li>

          {/* All Jobs */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("allJobs")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer">All Jobs</span>
            {activeDropdown === "allJobs" && (
              <div className="absolute top-10 left-0 bg-white shadow-lg p-6 grid grid-cols-2 gap-4 w-[600px] z-10 pointer-events-auto">
                {categories.map((category, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-gray-800 mb-2">{category.name}</h4>
                    <ul>
                      {category.subBranches.map((item, i) => (
                        <li key={i} className="text-gray-600 hover:text-blue-600 cursor-pointer">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>

          {/* Services */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer">Services</span>
            {activeDropdown === "services" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4 w-60 z-10 pointer-events-auto">
                {dropdowns.services.map((item, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-blue-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Employer Services */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("employerServices")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
              Employer Services
            </span>
            {activeDropdown === "employerServices" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4 w-60 z-10 pointer-events-auto">
                {dropdowns.employerServices.map((item, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-blue-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Learning */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("learning")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer">Learning</span>
            {activeDropdown === "learning" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4 w-60 z-10">
                {dropdowns.learning.map((item, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-blue-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Registration */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("registration")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer">Registration</span>
            {activeDropdown === "registration" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4 w-60 z-10">
                {dropdowns.registration.map((item, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-blue-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Employer */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("employer")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
              Employer
            </span>
            {activeDropdown === "employer" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4 w-40 z-10">
                {dropdowns.employer.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 hover:text-blue-600 cursor-pointer py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Contact Us */}
          <li>
            <a href="/contact-us" className="text-gray-700 hover:text-blue-600 no-underline">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
