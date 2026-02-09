'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { IoMdStarHalf, IoMdStar } from "react-icons/io";
import { BiPhone } from "react-icons/bi";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Countrycodes from '@/lib/countryCodes';
import styles from '@/styles/component/heros/QbHero.module.css';
import Link from 'next/link';
const QbWithForm = (props) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [selectedCountryCode, setSelectedCountryCode] = useState("1");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [noOfUsers, setNumberOfUsers] = useState();
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("");
  const [application, setApplication] = useState("");
  const router = useRouter();
  const pathname = router.pathname;
  const handleCountryChange = (e) => {
    const code = e.target.value;
    setSelectedCountryCode(code);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePhone = (phone) => {
    const phoneRegex = /^(?!.*(\d)\1{6,9})\d{8,10}$/;
    return phoneRegex.test(phone);
  };
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
  };
  const validateForm = () => {
    if (!name) {
      toast.error("Please enter your name");
      return false;
    }
    if (!selectedCountryCode) {
      toast.error("Please select a country code");
      return false;
    }
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!phone || !validatePhone(phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }
    return true;
  };
  const handleSubmitCustmizedHosting = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmit(true);
    const token = await executeRecaptcha("submit");
    if (!token) {
      toast.error("Recaptcha verification failed");
      setIsSubmit(false);
      return;
    }

    const data = {
      name,
      email,
      phone,
      company,
      application,
      noOfUsers,
      selectedCountryCode,
      token,
      pathname,
      subject: "Get Customized Hosting Solutions",
      description: `<em>Get Customized Hosting Solutions | ${pathname}</em>`,
    };

    try {
      const res = await fetch("/api/api-email-post", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const resData = await res.json();
      if (resData.success) {
        toast.success("Thank you, Form Submitted Successfully");
        router.push("thank-you/free-quote");
      } else {
        toast.error(resData.message || "Form submission failed");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <>
      <div className={styles.offerWrapper}>

        <div className={styles.mainContent}>
          <div className={styles.leftContent}>
            {/* Rating Section */}
            <div className={styles.ratingSection}>
              <span className={styles.ratingNumber}>
                <strong>4.9</strong> Stars
              </span>
              <span className={styles.stars}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
              </span>
              <span className={styles.reviewCount}>860+ Reviews</span>
            </div>
            {props.subtext && (<p className='mt-3 -mb-2 !text-white' dangerouslySetInnerHTML={{ __html: props.subtext }} />)}
            {/* Main Headline */}
            <h1 className={styles.mainHeadline} dangerouslySetInnerHTML={{ __html: props.title }} />
            {/* Description */}
            {props.description && (<p className={styles.description} dangerouslySetInnerHTML={{ __html: props.description }} />)}
            {props.listDisc && (
              <ul className={styles.list}>
                {props.listDisc.map((item, key) => <li key={key} className={styles.list_item}><img src={item.src} alt={item.name} width={20} />{item.name}</li>)}
              </ul>
            )}
            {/* CTA Buttons */}
            <div className={styles.ctaButtons}>
              <Link href="tel:+1-855-922-7243" className={styles.phoneButton}>
                <BiPhone className={styles.phoneIcon} size={20} /> +1-855-922-7243
                <svg className={styles.polygon} xmlns="http://www.w3.org/2000/svg" width="46" height="58" fill="none" viewBox="0 0 46 58">
                  <path fill="#EDF3FD" fillOpacity=".13" d="M45.716-16.893 45.042 85.04l-88.276-52.147 88.95-49.786Z" />
                </svg>
              </Link>
              <Link href="/pricing" className={styles.pricingButton}>
                Check Pricing & Plan
              </Link>
            </div>

            {/* Partner Logos */}
            <p className={styles.trustedBy}>Trusted by</p>
            <div className={styles.partnerLogos}>
              <img
                src="/assets/images/offer/logo-of-hero-sec/g1.png"
                alt="Serchen"
                width={114}
                height={35}
              />
              <img
                src="/assets/images/offer/logo-of-hero-sec/g2.png"
                alt="Finances Online"
                width={155}
                height={35}
              />
              <img
                src="/assets/images/offer/logo-of-hero-sec/g3.png"
                alt="Source Forge"
                width={148}
                height={35}
              />
              <img
                src="/assets/images/offer/logo-of-hero-sec/g4.png"
                alt="G2"
                width={78}
                height={35}
              />
              <img
                src="/assets/images/offer/logo-of-hero-sec/g5.png"
                alt="Capterra"
                style={{ width: "45px" }}
                height={35}
              />
            </div>
          </div>

          {/* Right Form Section */}

            <div className={styles.formSection} id="form-section">
              <div className={styles.formCard} id="form">
                <div>
                  <h3>Get A Free Quote Today</h3>
                  <p>Share Your Details And Get Instant Subscription Info</p>
                  <div className={styles.formFeatures}>
                    <span>No CC Required</span>
                    <span>•</span>
                    <span>No Long-term Contracts</span>
                  </div>
                </div>

                <form
                  className={styles.quoteForm}
                  onSubmit={handleSubmitCustmizedHosting}
                >
                  <input
                    type="text"
                    placeholder="Name*"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className={styles.formRow1}>
                    <select
                      required
                      onChange={(e) => setApplication(e.target.value)}
                      value={application}
                    >
                      <option value="">Select Application</option>
                      <option value="None">None</option>
                      <option value="Desktop as a Service">
                        Desktop as a Service
                      </option>
                      <option value="QB Pro">QuickBooks Pro</option>
                      <option value="QB Premier"> QuickBooks Premier </option>
                      <option value="QB Accounts">
                        {" "}
                        QuickBooks Accountants{" "}
                      </option>
                      <option value="QB Enterprise">
                        {" "}
                        QuickBooks Enterprise{" "}
                      </option>
                      <option value="QB POS">QuickBooks POS</option>
                      <option value="Sage 50">Sage 50</option>
                      <option value="Sage 100">Sage 100</option>
                      <option value="Sage 100 contractor">
                        Sage 100 Contractor
                      </option>
                      <option value="Sage 300">Sage 300</option>
                      <option value="Sage 300 CRE">Sage 300 CRE</option>
                      <option value="Sage 500">Sage 500</option>
                      <option value="Drake">Drake</option>
                      <option value="Ultra-Tax CS">Ultra-Tax CS</option>
                      <option value="ATX Tax Software"> ATX Tax Software </option>
                      <option value="Tax Dome">Tax Dome</option>
                      <option value="Tax1099">Tax1099</option>
                      <option value="TaxAct">TaxAct</option>
                      <option value="Lacerte">Lacerte</option>
                      <option value="Proseries">Proseries</option>
                      <option value="TaxWise">TaxWise</option>
                      <option value="Hosting Virtual Desktop">Hosting Virtual Desktop</option>
                      <option value="other">Other</option>
                    </select>
                    <input
                      type="text"
                      placeholder="No of User"
                      required
                      value={noOfUsers}
                      onChange={(e) => {
                        const numericPhone = e.target.value.replace(
                          /[^0-9]/g,
                          ""
                        );
                        setNumberOfUsers(numericPhone);
                      }}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <div className={styles.formRow2}>
                    <select
                      required
                      onChange={handleCountryChange}
                      value={selectedCountryCode}
                    >
                      <option value="">Country Code*</option>
                      {Countrycodes.map((obj, index) => (
                        <option key={index} value={obj.code}>
                          +{obj.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="Phone*"
                      required
                      value={phone}
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email ID"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className={styles.submitButton}>
                    {isSubmit ? "Wait..." : "Get Started"}
                  </button>
                  <p className={styles.formDisclaimer}>
                    We use your data for communication only, and you can opt out
                    at any time
                  </p>
                </form>
              </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default QbWithForm;
