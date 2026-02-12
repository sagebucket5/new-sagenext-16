"use client";
import styles from '@styles/component/heros/offerHero.module.css';
import styles2 from "@styles/pages/offer.module.css";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Turnstile } from "@marsidev/react-turnstile";
import React, { useState, useRef } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { BiPhone } from "react-icons/bi";
import { IoMdStarHalf, IoMdStar } from "react-icons/io";
import Countrycodes from "@/lib/countryCodes";
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import Link from 'next/link';

const OfferHead = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const { executeRecaptcha } = useGoogleReCaptcha();
    const turnstileRef = useRef(null);
    const [tsToken, setTsToken] = useState(null);
    const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [noOfUsers, setNumberOfUsers] = useState();
    const [email, setEmail] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [name, setName] = useState("");
    const [application, setApplication] = useState("");

    const pathname = usePathname();
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
    };
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

    const handleSubmitOffer = async (e) => {
        e.preventDefault();

        if (isSubmit) return;
        if (!validateForm()) return;
        if (!tsToken) {
            toast.error("Turnstile verification missing. Please try again.");
            return;
        }

        setIsSubmit(true);
        const data = {
            name,
            email,
            phone,
            company,
            application,
            noOfUsers,
            selectedCountryCode,
            token: tsToken,
            pathname,
            subject: "Get Customized Hosting Solutions",
            description: `<em>Get Customized Hosting Solutions | Offer Page </em>`,
        };

        try {
            const res = await fetch("/api/api-email-post", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            const resData = await res.json().catch(() => ({}));

            if (!res.ok || !resData?.success) {
                throw new Error(resData?.message || "Form submission failed");
            }

            toast.success("Thank you, Form Submitted Successfully");

            turnstileRef.current?.reset?.();
            setTsToken(null);
            router.push("/thank-you/free-quote");
        } catch (error) {
            toast.error(error?.message || "An error occurred while submitting the form.");

            turnstileRef.current?.reset?.();
            setTsToken(null);
        } finally {
            setIsSubmit(false);
        }
    };
    return (
        <div className="bg-[url('/assets/images/offer/herobg.webp')] bg-cover bg-center">
            <header className={styles["offer-header"]}>
                <div className={styles["logo-container"]}>
                    <Link href="/" >
                        <img
                            src="/footer/logo.png"
                            alt="Logo"
                            width={145}
                            height={40}
                            priority='true'
                        />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className={styles["menu-button"]} onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <IoMdClose size={28} />
                    ) : (
                        <HiMenuAlt3 size={28} />
                    )}
                </button>

                {/* Navigation Container */}
                <nav className={`${styles["nav-container"]} ${isMenuOpen ? styles["nav-open"] : ""}`}>
                    <div className={styles["nav-links"]}>
                        <Link href="/about-us" onClick={toggleMenu}>About</Link>
                        <Link href="/contact-us" onClick={toggleMenu}>Contact</Link>
                    </div>
                    <Link href='#form' className={styles["cta-button"]}>
                        Grab this offer
                    </Link>
                </nav>
                <Link href='#form' className={styles["cta-button"]}>
                    Grab this offer
                </Link>
            </header>
            <div className='max-w-[1350px] mx-auto md:pt-10 pt-6 px-2 lg:px-0'>
                <div className='grid grid-cols-1 xl:grid-cols-2  pb-10 items-center'>
                    <div className={` lg:pb-0 !pb-10 ${styles2.leftContent}`}>
                        {/* Rating Section */}
                        <div className={styles2.ratingSection}>
                            <span className='text-lg text-white'>
                                <strong className='!font-black'>4.9</strong> Stars
                            </span>
                            <span className="flex text-[20px] text-[#F7D314]">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStarHalf />
                            </span>
                            <span className="text-[16px] opacity-90 -ml-1">860+ Reviews</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className={'mainHeadline  text-center xl:text-start'}>
                            Maximize Your Software's Full Potential: <strong className='lg:!text-[42px] !text-[28px] !font-black'>  Get <span className='text-[#ffe201] !font-[700] text-[31px] block  lg:inline lg:text-[48px] px-1 bg-[rgba(225,225,225,0.183)] text-shadow-[0_4px_4px_rgba(0,0,0,.25)]'>3 Months FREE </span> Hosting  with Sagenext!</strong>
                        </h1>

                        {/* Description */}
                        <p className="lg:!text-[20px] opacity-90 !font-medium !text-[17px] !text-[#ffffff] text-center xl:text-start">
                            Move your QuickBooks, Sage Accounting, Drake, Lacerte Tax Software, or Virtual Desktops to the cloud with Sagenext and <span className={styles2.highlight2}> pay zero for the first 90 days.</span>
                        </p>

                        {/* CTA Buttons */}
                        <div className={styles2.ctaButtons}>
                            <Link href="tel:+1-855-922-7243" className={styles2.phoneButton}>
                                <BiPhone className={styles2.phoneIcon} size={20} /> +1-855-922-7243
                                <svg className={styles2.polygon} xmlns="http://www.w3.org/2000/svg" width="46" height="58" fill="none" viewBox="0 0 46 58">
                                    <path fill="#EDF3FD" fillOpacity=".13" d="M45.716-16.893 45.042 85.04l-88.276-52.147 88.95-49.786Z" />
                                </svg>
                            </Link>
                            <Link href="/pricing" className={styles2.pricingButton}>
                                Check Pricing & Plan
                            </Link>
                        </div>

                        {/* Partner Logos */}
                        <div className="flex flex-wrap gap-2 items-center xl:justify-start justify-center">
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
                                width={47}
                                height={35}

                            />
                        </div>
                    </div>

                    {/* Right Form Section */}
                    <div className='border border-white bg-[rgba(255,225,225,0.12)] rounded-[34px] max-w-[500px] w-full p-2.5 xl:ml-auto xl:mr-4 mr-auto ml-auto h-full lg:max-h-[615px]' id="form-section">
                        <div className="md:p-[35px_45px_30px_45px] p-5 bg-white h-full rounded-[25px]" id="form">
                            <div className='text-center mb-[26px]'>
                                <h3 style={{ fontWeight: "900 !important" }} className='!text-[#2355FA] !text-[26px] leading-[33px]'>Get A Free Quote Today</h3>
                                <p className='!text-[#020202] md:!text-[15px] !text-[13px] font-light !leading[33px] mb-3'>Share Your Details And Get Instant Subscription Info</p>
                                <div className="flex items-center justify-center gap-2 mb-3 text-[11px]">
                                    <span>No CC Required</span>
                                    <span className='scale-250'>•</span>
                                    <span>No Long-term Contracts</span>
                                </div>
                            </div>

                            <form
                                className='flex flex-col gap-6'
                                onSubmit={handleSubmitOffer}
                            >
                                <input
                                    type="text"
                                    placeholder="Name*"
                                    name='name'
                                    autoComplete="true"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    className='outline-none text-[17px] border-b border-[#E2E2E2] p-[8px_12px] text-[#585858] focus:border-[#2355FA] focus:ring-1 focus:ring-[#2355FA] transition-all duration-300'
                                />
                                <div className='grid grid-cols-[1fr_80px] lg:grid-cols-[1fr_130px]  gap-4'>
                                    <select
                                        required
                                        name='application'
                                        onChange={(e) => setApplication(e.target.value)}
                                        className='outline-none text-[17px] border-b border-[#E2E2E2] text-[#585858] focus:border-[#2355FA] focus:ring-1 focus:ring-[#2355FA] transition-all duration-300 !p-[8px_2px]'
                                    >
                                        <option value="">Select Application</option>
                                        <option value="None">None</option>
                                        <option value="Desktop as a Service">Desktop as a Service</option>
                                        <option value="QB Pro">QuickBooks Pro</option>
                                        <option value="QB Premier"> QuickBooks Premier </option>
                                        <option value="QB Accounts">QuickBooks Accountants</option>
                                        <option value="QB Enterprise">QuickBooks Enterprise</option>
                                        <option value="QB POS">QuickBooks POS</option>
                                        <option value="Sage 50">Sage 50</option>
                                        <option value="Sage 100">Sage 100</option>
                                        <option value="Sage 100 contractor">Sage 100 Contractor</option>
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
                                        autoComplete="true"
                                        name='noOfUsers'
                                        className='outline-none text-[17px] border-b border-[#E2E2E2] p-[8px_12px] text-[#585858] focus:border-[#2355FA] focus:ring-1 focus:ring-[#2355FA] transition-all duration-300'
                                        required
                                        value={noOfUsers}
                                        onChange={(e) => {
                                            const numericPhone = e.target.value.replace(/[^0-9]/g, "");
                                            setNumberOfUsers(numericPhone);
                                        }}
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Company"
                                    name='company'
                                    autoComplete="true"
                                    required
                                    className='outline-none text-[17px] border-b border-[#E2E2E2] p-[8px_12px] text-[#585858] focus:border-[#2355FA] focus:ring-1 focus:ring-[#2355FA] transition-all duration-300'
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                                <div className="grid md:grid-cols-[80px_1fr] grid-cols-[80px_1fr] gap-4">
                                    <select
                                        required
                                        onChange={handleCountryChange}
                                        name='countryCode'
                                        className='outline-none text-[17px] border-b border-[#E2E2E2]  text-[#585858] focus:border-[#2355FA] focus:ring-1 focus:ring-[#2355FA] transition-all duration-300 !p-[8px_2px]'
                                    >
                                        <option value="" className='!text-[#585858]'>Country Code*</option>
                                        {Countrycodes.map((obj, index) => (
                                            <option key={index} value={obj.code} className='!text-[#585858]'>
                                                +{obj.code}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        maxLength={10}
                                        name='phone'
                                        autoComplete="true"
                                        placeholder="Phone*"
                                        required
                                        value={phone}
                                        className='outline-none text-[17px] border-b border-[#E2E2E2] p-[8px_12px] text-[#585858] focus:border-[#2355FA] focus:ring-1 focus:ring-[#2355FA] transition-all duration-300'
                                        onChange={handleChange}
                                    />
                                </div>
                                <input
                                    type="email"
                                    name='email'
                                    autoComplete="true"
                                    placeholder="Email ID *"
                                    required
                                    className='outline-none text-[17px] border-b border-[#E2E2E2] p-[8px_12px] text-[#585858] focus:border-[#2355FA] focus:ring-1 focus:ring-[#2355FA] transition-all duration-300'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                                                <Turnstile
                                    ref={turnstileRef}
                                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                                    onSuccess={(token) => setTsToken(token)}
                                    onExpire={() => setTsToken(null)}
                                    onError={() => setTsToken(null)}
                                />
                                <button type="submit" className='submitButton appearance-none'>
                                    {isSubmit ? "Wait..." : "Get Started"}
                                </button>
                                <p className='!text-[#8b8b8b] !text-[11px] !leading-3 text-center !mb-0 -mt-2.5'>
                                    We use your data for communication only, and you can opt out at any time
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferHead;

