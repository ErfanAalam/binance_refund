import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import Urlverify from "./Components/Urlverify";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function App() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleFaqClick = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "About Us",
      subheadings: ["About us", "Carrers", "Announcements", "News", "Press"],
    },
    {
      question: "Products",
      subheadings: ["About us", "Carrers", "Announcements", "News", "Press"],
    },
    {
      question: "Business",
      subheadings: [
        "Immediate Actions",
        "Reporting Process",
        "Recovery Options",
        "Prevention Tips",
      ],
    },
    {
      question: "Service",
      subheadings: [
        "Basic Security Measures",
        "Advanced Protection",
        "Red Flags to Watch",
        "Best Practices",
      ],
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="relative">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex gap-4">
            <img src="/Binance_Logo.svg.png" alt="Binance Logo" className="w-8 h-8" />
            <h1 className="text-[#f0bb0c] text-2xl font-bold tracking-widest">BINANCE</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-white hover:text-[#f0bb0c] transition-colors">Home</a>
            <a href="#" className="text-white hover:text-[#f0bb0c] transition-colors">About Us</a>
            <a href="#" className="text-white hover:text-[#f0bb0c] transition-colors">Contact Us</a>
            <a href="#" className="text-white hover:text-[#f0bb0c] transition-colors">Report</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          absolute top-0 left-0 w-full bg-[#191b21] 
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-y-14' : '-translate-y-full'} 
          md:hidden
        `}>
          <div className="flex flex-col p-4">
            <a href="#" className="text-white py-2 hover:text-[#f0bb0c] transition-colors">Home</a>
            <a href="#" className="text-white py-2 hover:text-[#f0bb0c] transition-colors">About Us</a>
            <a href="#" className="text-white py-2 hover:text-[#f0bb0c] transition-colors">Contact Us</a>
            <a href="#" className="text-white py-2 hover:text-[#f0bb0c] transition-colors">Report</a>
          </div>
        </div>
      </nav>

      {/* Url verify component */}
      <div>
        <Urlverify />
      </div>

      {/* homebanner */}

      <div className="py-[15vh] flex flex-col items-center px-4 gap-4">
        <h1 className="text-[#f0bb0c] text-2xl font-bold">Fraud Refund</h1>
        <p className="text-gray-300 text-center text-sm">
          Stay safe from scammers. Fake URL's to check any reports on your
          assets verify your web3 now.
        </p>
        <input
          type="text"
          placeholder="Enter your Transaction ID"
          className="mt-4 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#f0bb0c] w-72"
        />
        <button className="text-black font-semibold bg-[#f0bb0c] px-6 py-2 rounded">
          Submit report
        </button>
        <p className="text-gray-300 text-center text-sm">Safe and Secure</p>
      </div>

      {/* security tips */}

      <div className="flex justify-center flex-col items-center text-center gap-6 pb-[15vh]">
        <h1 className="text-4xl text-gray-300 mb-8">Security Tips</h1>
        <div className="box1 mb-6">
          <img src="img-1.jpg" alt="" className="w-20 h-20 mx-auto mb-3" />
          <h2 className="text-gray-400 text-2xl flex flex-col">
            General Security <span>Principles</span>
          </h2>
          <img src="tail.jpg" alt="" className="w-10 h-10 mx-auto mb-3" />
        </div>
        <div className="box2 mb-6">
          <img src="img-2.jpg" alt="" className="w-20 h-20 mx-auto mb-3" />
          <h2 className="text-gray-400 text-2xl flex flex-col">
            Common Scams on <span>Mobile Devices</span>
          </h2>
          <img src="tail.jpg" alt="" className="w-10 h-10 mx-auto mb-3" />
        </div>
        <div className="box3 mb-6">
          <img src="img-3.jpg" alt="" className="w-20 h-20 mx-auto mb-3" />
          <h2 className="text-gray-400 text-2xl flex flex-col">
            What is Phishing?
          </h2>
          <img src="tail.jpg" alt="" className="w-10 h-10 mx-auto mb-3" />
        </div>
      </div>

      {/* FAQ section */}

      <div className="px-4 ">
        <div className="max-w-2xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4 rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => handleFaqClick(index)}
              >
                <h2 className="text-gray-300 text-lg">{faq.question}</h2>
                <AddIcon
                  className={` transform transition-transform duration-200 text-white ${
                    expandedFaq === index ? "rotate-45" : ""
                  }`}
                />
              </div>
              {expandedFaq === index && (
                <div className="p-4 pt-0 text-gray-400">
                  <ul className="space-y-2">
                    {faq.subheadings.map((subheading, subIndex) => (
                      <li
                        key={subIndex}
                        className="cursor-pointer hover:text-[#f0bb0c] transition-colors"
                      >
                        {subheading}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Community */}

      <div className="community px-8 p-6">
        <h3>Community</h3>
        <div className="social-media flex gap-10 flex-wrap">
         <span> <TelegramIcon/></span> 
         <span> <FacebookIcon/></span> 
         <span>  <TwitterIcon/></span> 
         <span> <RedditIcon /></span> 
         <span> <InstagramIcon/></span> 
         <span> <YouTubeIcon/> </span> 
           
        </div>
      </div>
    </>
  );
}

export default App;
