import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";

const BinanceReport = () => {
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
            <div className="flex gap-1">
              <img
                src="/Binance_Logo.svg.png"
                alt="Binance Logo"
                className="w-8 h-8"
              />
              <h1 className="text-[#f0bb0c] text-2xl font-bold tracking-widest">
                BINANCE
              </h1>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <a
                href="#"
                className="text-white hover:text-[#f0bb0c] transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-[#f0bb0c] transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white hover:text-[#f0bb0c] transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-white hover:text-[#f0bb0c] transition-colors"
              >
                Report
              </a>
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
          <div
            className={`
            absolute top-0 left-0 w-full bg-[#191b21] 
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-y-14" : "-translate-y-full"} 
            md:hidden
          `}
          >
            <div className="flex flex-col p-4">
              <a
                href="#"
                className="text-white py-2 hover:text-[#f0bb0c] transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white py-2 hover:text-[#f0bb0c] transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white py-2 hover:text-[#f0bb0c] transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-white py-2 hover:text-[#f0bb0c] transition-colors"
              >
                Report
              </a>
            </div>
          </div>
        </nav>
  
        {/* Homepage for support */}
  
        <div className="flex items-center justify-between m-4 ">
          <h1 className="text-2xl font-bold">FAQ</h1>
          <div className="flex gap-6">
            <SearchIcon />
            <ListIcon />
          </div>
        </div>
  
        <div className="mx-4 flex flex-col gap-4 md:mx-[35%]">
          <div className="mb-2">
            <h1 className="text-lg font-bold">
              How to Report Scams on Binance Support?
            </h1>
            <p className="text-gray-400">2022-08-29 14:28</p>
          </div>
  
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">1. How do I report a scam?</h3>
            <p className="text-sm">
              You can directly click on this link{" "}
              <span className="text-[#F0B90B]">Scam self report</span> to report
              the scam on Binance.{" "}
            </p>
            <p className="text-sm">
              Alternatively, there are 3 ways you can report a scam on Binance.{" "}
            </p>
            <p className="text-sm">
              1. Go to the details page of the transaction that you've identified
              as fraudulent. Click <strong>[Report Scam]</strong>
            </p>
            <p className="text-sm">
              You’ll be redirected to the Case Report Form, where you can enter
              and submit your case details.
            </p>
            <img src="/img1.png" alt="" />
          </div>
  
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              2. Log in to your verified Binance account on the{" "}
              <a href="/" className="text-[#F0B90B]">
                official Binance website
              </a>{" "}
              and click on the{" "}
              <strong className="text-[#F0B90B]">[Binance Support]</strong> icon
              at the bottom right of the screen.{" "}
            </p>
            <img src="/img2.png" alt="" />
          </div>
  
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              In the Self Service section, click <strong>[View All]</strong>.
              Then, scroll down to <strong>[Non-P2P Related Scam Report]</strong>.
              You’ll be redirected to the Case Report Form where you can enter
              your case details.
            </p>
            <img src="/img3.png" alt="" />
          </div>
  
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              3. Log in to your verified Binance account on the{" "}
              <span className="text-[#f0b90b]">official Binance website</span> and
              click on the
              <strong className="text-[#f0b90b]">[Binance Support]</strong> icon
              at the bottom right of the screen.
            </p>
            <p className="text-sm">
              Explain your situation clearly. For example, enter a statement
              similar to the one shown in the below screenshot. Alternatively, you
              may use other scam-related statements/keywords, such as “I want to
              file a scam report”, “I was cheated.”
            </p>
            <img src="/img4.png" alt="" />
            <p className="text-sm">
              Click on the case report link provided by the Customer Service
              response to be redirected to the Case Report Form. Enter your case
              details and submit.
            </p>
          </div>
  
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">
              2. Do I need to log in to my Binance account to use the Case Report
              Form?
            </h3>
            <p className="text-sm">
              Currently, the Case Report Form is only available to Binance users.
              If you want to report a case via the link provided in the Customer
              Service response, please log in to your verified Binance account
              first. You can report cases through{" "}
              <span className="text-[#f0b90b]">Binance Support</span> directly if
              you haven’t logged in to your Binance account.
            </p>
          </div>
  
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">
              3. Under what circumstances can I report scams via the Case Report
              Form?
            </h3>
            <p className="text-sm">
              You can report scams through the Case Report Form in any of the
              following situations:
            </p>
            <ul className="list-disc text-sm mx-4">
              <li>
                A fake Binance representative is contacting you by phone, text
                message, or email to request a transfer;
              </li>
              <li>
                A platform that claims to offer high yield and high returns
                requires you to deposit, but then denies your withdrawals;
              </li>
              <li>
                You deposited funds onto a platform that claims to help you profit
                from trading, but later denies your withdrawals unless you pay
                extremely high fees;
              </li>
              <li>
                Someone contacts you through your social media account and offers
                to help you invest, but disappears after receiving the transfer;
              </li>
              <li>
                Someone contacts you through a dating platform and offers to help
                you invest, but disappears after receiving the transfer;
              </li>
              <li>
                A fake bank representative contacts you and offers to help you
                invest in cryptocurrency, but disappears after receiving the
                transfer;
              </li>
              <li>
                A live-streaming platform that claims to be partnering with
                Binance requires you to transfer money to an unknown account for a
                giveaway, but disappears after receiving the transfer;
              </li>
              <li>
                A fake customer support staff pretends to help you pass KYC or
                make a transfer and asks you to let them remotely control your
                computer, but your funds disappear after your interaction with
                them
              </li>
              <li>
                You fell for a classic Ponzi scheme that requires you to invest
                and invite your friends to deposit on fake third-party service
                platforms. Your funds disappear after making the deposits.
              </li>
              <li>
                Someone you know, such as a relative, friend, or an acquaintance
                introduced by your friend, scammed you out of your crypto via your
                Binance account;
              </li>
              <li>
                You bought goods from a fake shopping website or individual, but
                after you transferred funds from your Binance account, the goods
                were never delivered;
              </li>
              <li>
                When you encounter someone who claims that they can offer you a
                job opportunity but requires you to make a financial deposit
                before you can start the job;
              </li>
            </ul>
          </div>
  
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">4. How to choose the [Report Type]?</h3>
            <ul className="list-disc text-sm mx-4">
              <li>
                If you were scammed by a fake shopping website or individual
                selling physical or digital goods at significantly lower than
                average market prices, or by being invited to participate in a
                giveaway or airdrop, and the items, rewards, or services (e.g.,
                loss recovery) were never delivered after you sent payment via
                your Binance account, select{" "}
                <strong>[Payment without Delivery]</strong>;
              </li>
              <li>
                If you were scammed by someone you met on social media, dating, or
                messaging app, who arranged a cryptocurrency trade on a
                third-party app and disappeared after receiving your crypto,
                select <strong>[Off-Platform Crypto Exchange]</strong>;
              </li>
              <li>
                If you were threatened by someone with the disclosure of
                sensitive, embarrassing, or private information (e.g., explicit
                videos) unless you made a payment or met other demands, select{" "}
                <strong>[Blackmail or Extortion]</strong>;
              </li>
              <li>
                If you were scammed by someone who claims they can get you a
                job/income opportunity but requires a financial deposit before you
                can start the job/work, select{" "}
                <strong>[Job or Income Scam]</strong>;
              </li>
              <li>
                If you were scammed by someone who convinced you to invest in a
                platform promising high returns, contacted you via a dating
                platform and offered to help you invest, or deceived you with
                promises of high returns through a website/app or by claiming to
                be a crypto expert, investor, or broker, select{" "}
                <strong>[Fake Investment];</strong>
              </li>
              <li>
                If you transferred assets from your Binance account to someone
                claiming to be a Binance employee, or if someone impersonated a
                representative from a bank, police, tax bureau, customs,
                government authority, well-known wallet or exchange, study abroad
                agency, or even a friend to gain your trust and convince you to
                transfer funds, and then disappeared after receiving them, select{" "}
                <strong>[Impersonation Scams]</strong>;
              </li>
              <li>
                If you were scammed by someone who convinced you to install remote
                access software (e.g., AnyDesk) to gain access to your crypto
                account and then made unauthorized transactions, select{" "}
                <strong>[Remote Access Scams]</strong>;
              </li>
              <li>
                If you were scammed by someone who abandoned a project and
                disappeared with the funds you’ve invested, select [Rug Pull];
              </li>
              <li>
                If you were scammed by a relative, a friend in real life, or
                someone introduced by a friend that they met in person, select{" "}
                <strong>[Known Acquaintance Fraud]</strong>;
              </li>
              <li>
                If you were scammed during a face-to-face meeting where someone
                promised a crypto exchange but disappeared after you transferred
                your funds, select <strong>[Face2Face Fraud]</strong>;
              </li>
              <li>
                If you were scammed by someone who guided you to buy tokens that
                turned out to be fake and had no value, select{" "}
                <strong>[Fake Token Fraud]</strong>;
              </li>
              <li>
                If you received physical or digital items (e.g., accounts,
                software) that were not as described by the seller, select{" "}
                <strong>[Item Not as Described]</strong>;
              </li>
              <li>
                If you have other cases to report, but the circumstances don’t
                match any of the existing categories, select{" "}
                <strong>[Others]</strong>.
              </li>
            </ul>
          </div>
  
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">
              5. How to find the transaction I made from my Binance account to the
              scammer's address?
            </h2>
            <p className="text-sm">
              To find the transaction you made from your Binance account to the
              scammer’s address, please select the relevant transaction ID from
              your transaction or withdrawal history. If you can’t find the
              transaction, please adjust the time frame and you should be able to
              see the relevant transaction.
            </p>
          </div>
  
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">
              6. If I have been scammed through other methods (i.e., NFT scams),
              can I still use the Case Report Form?
            </h2>
            <p className="text-sm">
              Currently, the Case Report Form only supports reporting withdrawal
              and payment scams. For other scams, e.g., NFT scams, please contact{" "}
              <span className="text-[#F0B90B]">Binance Support</span> to report
              your case.
            </p>
          </div>
  
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">
              7. Will I be notified of case investigation updates?
            </h2>
            <p className="text-sm">
              We will do our best to keep you informed. However, we may be
              restricted by law or compliance from disclosing explicit details
              about our ongoing investigations to users.
            </p>
            <p className="text-sm">
              Therefore, we encourage you to report any scams to law enforcement.
              Binance works closely with authorities to support their
              investigations and help prosecute those involved in fraudulent
              activities
            </p>
          </div>
  
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">8. How can Binance help me?</h2>
            <p className="text-sm">
              <strong>
                Please note that blockchain transactions are irreversible and
                anonymous
              </strong>
              . This means that despite our best efforts, it may be unlikely that
              we, as an exchange, can recover the scammed funds.
            </p>
            <p className="text-sm">
              Although fund recovery isn’t guaranteed, the best course of action
              is to report the incident to law enforcement, who may collaborate
              with experienced blockchain investigators to pursue the theft
              further.
            </p>
            <p>
              For more information on how to avoid cryptocurrency scams, check out
              these articles:
            </p>
            <ul className="list-disc mx-4">
              <li className="text-[#f0b90b] text-sm">
                How to Identify Scammers Impersonating Binance on Telegram
              </li>
              <li className="text-[#f0b90b] text-sm">
                How to Prevent Phishing Attacks
              </li>
              <li className="text-[#f0b90b] text-sm">
                Know your scam series Blog
              </li>
              <li className="text-[#f0b90b] text-sm">
                Anti-Phishing Codes and How to Protect Yourself
              </li>
            </ul>
          </div>
  
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">
              9. Is there any other way to report a scam if I can’t submit the
              Case Report Form?
            </h2>
            <p>
              If you see an error when submitting the Case Report Form, you can
              contact Binance Support to provide details on the scam manually.
              Please provide the following information:
            </p>
            <ul className="list-disc mx-4 text-sm">
              <li>Screenshot of the error when submitting the form;</li>
              <li>
                Fraudulent transaction information, including Transaction ID,
                date, amount, and scammer’s wallet address scammer’s Binance ID;
              </li>
              <li>
                A brief description of how the suspect approached you and how the
                scam works; Fraudulent website and social media links (if any);
              </li>
              <li>
                The username or handle of the suspect’s social media accounts (if
                they contacted you on social media);
              </li>
              <li>The suspect’s cryptocurrency address (if any);</li>
              <li>
                If you have received a phishing email, please export the email as
                a .eml file and share it with us;
              </li>
              <li>Relevant screenshots of the conversation with the suspect.</li>
            </ul>
          </div>
  
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">
              10. I was not scammed but I wanted to submit scam-related
              information. How do I submit this information?
            </h2>
            <p className="text-sm">
              You can submit the scam-related information via the same Case Report
              Form. Please follow the following steps:
            </p>
            <p className="text-sm">1. Select <strong>[No]</strong> on the pop-up “Have You Lost Money?”</p>
            <img src="/img5.png" alt="" />
            <p className="text-sm">2. You’ll be redirected to the Scam Report page. Under “Report type”, select <strong>[Others]</strong>. Under “Others”, enter “Providing scam leads.”</p>
            <img src="/img6.png" alt="" />
            <p className="text-sm">3. After that, proceed to provide information of the scam in the relevant fields.</p>
            <img src="/img7.png" alt="" />
            <p>4. Lastly, check the “terms of use box” and click <strong>[Submit]</strong>.</p>
            <img src="/img8.png" alt="" />
          </div>
  
          <div className=" text-white rounded-lg p-4 py-6 flex items-center gap-4 max-w-md md:max-w-lg lg:max-w-xl shadow-lg border border-gray-700">
          <img
            src="/Binance_Logo.svg.png"
            alt="Promo"
            className="w-16 h-16 object-cover"
          />
          <div className="flex-1">
            <p className="text-sm md:text-base font-medium">
              Register Now - Get up to <span className="text-yellow-400">100 USDT</span> in
              trading fee rebate (for verified users)
            </p>
            <button className="bg-yellow-500 text-black text-sm font-bold py-2 px-2 rounded mt-2 hover:bg-yellow-600">
             <a href="https://www.google.com"> Register Now</a>
            </button>
          </div>
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
            <span>
              {" "}
              <TelegramIcon />
            </span>
            <span>
              {" "}
              <FacebookIcon />
            </span>
            <span>
              {" "}
              <TwitterIcon />
            </span>
            <span>
              {" "}
              <RedditIcon />
            </span>
            <span>
              {" "}
              <InstagramIcon />
            </span>
            <span>
              {" "}
              <YouTubeIcon />{" "}
            </span>
          </div>
        </div>
      </>
    );
  }


export default BinanceReport
