import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      {/* Footer Top Section */}
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
        {/* About Section */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-gray-400 leading-relaxed">
            Logis.ae provides employers with human capital solutions that
            result in measurably improved employee and organizational
            performance while minimizing employment practice risk.
          </p>
        </div>

        {/* Our Services Section */}
<div className="flex flex-col items-start">
  <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
  <ul className="space-y-2 pl-4"> {/* Added padding-left */}
    <li>
      <a
        href="#cv-writing"
        className="hover:text-white transition-colors no-underline"
      >
        CV Writing
      </a>
    </li>
    <li>
      <a
        href="#job-alerts"
        className="hover:text-white transition-colors no-underline"
      >
        Job Alerts
      </a>
    </li>
    <li>
      <a
        href="#job-search-assistance"
        className="hover:text-white transition-colors no-underline"
      >
        Job Search Assistance
      </a>
    </li>
    <li>
      <a
        href="#webinar"
        className="hover:text-white transition-colors no-underline"
      >
        Webinar (Interview Training)
      </a>
    </li>
  </ul>
</div>

{/* Quick Links Section */}
<div className="flex flex-col items-start">
  <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
  <ul className="space-y-2 pl-4"> {/* Added padding-left */}
    <li>
      <a
        href="#about-us"
        className="hover:text-white transition-colors no-underline"
      >
        About Us
      </a>
    </li>
    <li>
      <a
        href="#contact-us"
        className="hover:text-white transition-colors no-underline"
      >
        Contact Us
      </a>
    </li>
    <li>
      <a
        href="#terms-conditions"
        className="hover:text-white transition-colors no-underline"
      >
        Terms & Conditions
      </a>
    </li>
    <li>
      <a
        href="#privacy-policy"
        className="hover:text-white transition-colors no-underline"
      >
        Privacy Policy
      </a>
    </li>
  </ul>
</div>



        {/* Contact Us Section */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400 leading-relaxed">P.O Box 20893, Dubai, UAE</p>
          <p className="text-gray-400">Email: info@logis.ae</p>
          <p className="text-gray-400">Phone: +971-4-123-4567</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#facebook"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#linkedin"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#twitter"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#instagram"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2024 Logis.ae. All Rights Reserved. Developed by Seekers
            Consultancy LLC.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#facebook"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#linkedin"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#twitter"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#instagram"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
