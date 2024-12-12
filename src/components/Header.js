import React, { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Categories and their sub-branches
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

  return (
    <header className="bg-white shadow-md">
  {/* Top Bar */}
  <div className="flex items-center justify-between py-4 px-6 container mx-auto">
    {/* Logo */}
    <div className="ml-4 flex justify-start">
      <img src={logo} alt="Logo" className="h-[90px] w-auto" />
    </div>
    {/* Authentication Buttons */}
    <div className="flex space-x-4">
      <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
        Login
      </button>
      <button className="py-2 px-4 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
        Register
      </button>
    </div>
  </div>

  {/* Navigation */}
  <nav className="bg-gray-100">
    <ul className="flex justify-center space-x-6 py-4">
      <li>
        <a href="/" className="text-gray-700 hover:text-blue-600 no-underline">
          Home
        </a>
      </li>
      <li className="relative group">
        <button
          onClick={() =>
            setActiveCategory(activeCategory === "all-jobs" ? null : "all-jobs")
          }
          className="text-gray-700 hover:text-blue-600 no-underline"
        >
          All Jobs
        </button>
        {/* Dropdown for All Jobs */}
        {activeCategory === "all-jobs" && (
          <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-80 z-10">
            <div className="p-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory("all-jobs")}
                  className="mb-4"
                >
                  <h4 className="font-bold text-gray-800">{category.name}</h4>
                  {/* Sub-branches */}
                  {activeCategory === category.name && (
                    <ul className="pl-4 mt-2">
                      {category.subBranches.map((branch, branchIndex) => (
                        <li
                          key={branchIndex}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          {branch}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </li>
      <li>
        <a
          href="/candidate-services"
          className="text-gray-700 hover:text-blue-600 no-underline"
        >
          Candidate Services
        </a>
      </li>
      <li>
        <a
          href="/employer-services"
          className="text-gray-700 hover:text-blue-600 no-underline"
        >
          Employer Services
        </a>
      </li>
      <li>
        <a
          href="/learning"
          className="text-gray-700 hover:text-blue-600 no-underline"
        >
          Learning
        </a>
      </li>
      <li>
        <a
          href="/registration"
          className="text-gray-700 hover:text-blue-600 no-underline"
        >
          Registration
        </a>
      </li>
      <li>
        <a
          href="/contact-us"
          className="text-gray-700 hover:text-blue-600 no-underline"
        >
          Contact Us
        </a>
      </li>
    </ul>
  </nav>
</header>
);
};

export default Header;
