
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useApp } from "../contexts/AppContext";

export const Footer = () => {
  const { language } = useApp();
  
  const footerLinks = {
    company: [
      { label: language === "en" ? "About Us" : "អំពីយើង", href: "/about" },
      { label: language === "en" ? "Contact" : "ទំនាក់ទំនង", href: "/contact" },
      { label: language === "en" ? "Careers" : "ការងារ", href: "/careers" },
    ],
    support: [
      { label: language === "en" ? "Help Center" : "មជ្ឈមណ្ឌលជំនួយ", href: "/help" },
      { label: language === "en" ? "Safety" : "សុវត្ថិភាព", href: "/safety" },
      { label: language === "en" ? "Cancellation Options" : "ជម្រើសបោះបង់", href: "/cancellations" },
      { label: language === "en" ? "COVID-19" : "កូវីដ-១៩", href: "/covid" },
    ],
    legal: [
      { label: language === "en" ? "Privacy Policy" : "គោលការណ៍ឯកជនភាព", href: "/privacy" },
      { label: language === "en" ? "Terms of Service" : "លក្ខខណ្ឌនៃសេវាកម្ម", href: "/terms" },
    ],
  };
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-cambodia-red to-cambodia-blue bg-clip-text text-transparent">
                Khmer Travel Compass
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {language === "en" 
                ? "Discover Cambodia's beauty with our comprehensive travel guide and booking platform." 
                : "រកឃើញសម្រស់កម្ពុជាជាមួយមគ្គុទ្ទេសក៍ដំណើរកម្សាន្ត និងវេទិកាកក់របស់យើង។"}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cambodia-blue">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cambodia-blue">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cambodia-blue">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {language === "en" ? "Company" : "ក្រុមហ៊ុន"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-600 dark:text-gray-400 hover:text-cambodia-red">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {language === "en" ? "Support" : "គាំទ្រ"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-600 dark:text-gray-400 hover:text-cambodia-red">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {language === "en" ? "Legal" : "ផ្លូវច្បាប់"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-600 dark:text-gray-400 hover:text-cambodia-red">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Khmer Travel Compass. {language === "en" ? "All rights reserved." : "រក្សាសិទ្ធិគ្រប់យ៉ាង។"}
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="mr-2 text-sm text-gray-600 dark:text-gray-400">
              {language === "en" ? "Accepted Currencies:" : "រូបិយប័ណ្ណដែលទទួលយក:"}
            </span>
            <span className="bg-white dark:bg-gray-800 rounded px-2 py-1 text-sm font-medium mr-2">USD</span>
            <span className="bg-white dark:bg-gray-800 rounded px-2 py-1 text-sm font-medium">KHR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
