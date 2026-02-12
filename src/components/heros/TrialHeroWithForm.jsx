"use client";
import React, { useState, useRef } from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation';
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Turnstile } from "@marsidev/react-turnstile";
import countryCodes from '@/lib/countryCodes';
import { toast } from 'react-hot-toast';

const TrialHeroWithForm = () => {
    // const { executeRecaptcha } = useGoogleReCaptcha();
    const turnstileRef = useRef(null);
    const [tsToken, setTsToken] = useState(null);
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
    const [selectedCountryName, setSelectedCountryName] = useState("USA/Canada");
    const [phone, setPhone] = useState("");
    const [hearAboutUs, setHearAboutUs] = useState("");
    const [hearAboutUsOther, setHearAboutUsOther] = useState("");
    const [noOfUsers, setNumberOfUsers] = useState(0);
    const [application, setApplication] = useState("");
    const [appSerialKey, setAppSerialKey] = useState("");
    const [desireUserName, setDesireUserName] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleCountryChange = (e) => {
        const code = e.target.value;
        setSelectedCountryCode(code);
        const selectedCountry = countryCodes.find((obj) => obj.code === code);
        if (selectedCountry) {
            setSelectedCountryName(selectedCountry.country);
        }
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

    const handleTrialSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        if (!validateForm()) return;

        if (!tsToken) {
            toast.error("Turnstile verification missing. Please try again.");
            return;
        }

        setLoading(true);

        const data = {
            name,
            company,
            email,
            phone,
            selectedCountryCode,
            hearAboutUs,
            hearAboutUsOther,
            noOfUsers,
            application,
            appSerialKey,
            desireUserName,
            token: tsToken,
            formName: "Trial",
            page: "Trial",
            subject: "Free Trial",
        };

        try {
            const res = await fetch("/api/trial-api", {
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
            toast.error("An error occurred while submitting the form.");
            toast.error(error?.message || "An error occurred while submitting the form.");

            turnstileRef.current?.reset?.();
            setTsToken(null);
            setLoading(false);

        } finally {
            setIsSubmit(false);
            setLoading(false);

        }
    };
    return (
        <>
            <div className="relative w-full bg-[url('/assets/images/free-trial/banner_img.webp')] bg-no-repeat bg-cover bg-center py-[5px] banner">
                <header className=' relative z-50' >
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="w-1/2 md:w-auto">
                                <Link href="/" className="block">
                                    <img
                                        src="/logo/logo.png"
                                        alt="Logo"
                                        width={200}
                                        height={32}
                                        className="pt-2 object-contain"
                                    />
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-700 focus:outline-none"
                                    aria-label="Toggle navigation"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {isOpen ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        )}
                                    </svg>
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav
                                className={`${isOpen ? 'block' : 'hidden'
                                    } md:flex space-x-4 w-full md:w-auto md:items-center md:space-x-8 mt-4 md:mt-0`}
                            >
                                <Link
                                    href="https://www.thesagenext.com/about-us"
                                    className="block py-2 !text-black hover:text-blue-600"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="https://www.thesagenext.com/blog"
                                    className="block py-2 !text-black hover:text-blue-600"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="https://www.thesagenext.com/support"
                                    className="block py-2 !text-black hover:text-blue-600"
                                >
                                    Support
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>

                <div className="pt-28 relative z-50 container mx-auto trial">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="!text-[#013d8e] !text-[42px] font-semibold">
                                    7-Day Free Trial
                                </h1>
                                <p className="text-black !pb-3">
                                    See How Cloud can Streamline Your Tax and Accounting Practice.
                                </p>
                                <div className="pt-1 pb-5 lg:text-start text-center">
                                    <a
                                        href="tel:+18559227243"
                                        className="btn button btn-get-pricing2 relative mb-3"
                                    >
                                        <img
                                            src="/assets/images/free-trial/call_icon.svg"
                                            loading="lazy"
                                            className="inline mr-2 border-r-[2px_solid_#fff]"
                                            alt="call"
                                            width={20}
                                            height={20}
                                        />
                                        +1-855-922-7243
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="free_trila_about container mx-auto relative pt-12.5 pb-20">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-7 col-span-12 lg:pr-12.5 mt-12.5">
                        <h2 className="font-30 pb-2 sub-heading">
                            What does Sagenext have in Store for you?
                        </h2>
                        <p>
                            Experience premium cloud solutions with superior security and
                            reliability at anytime, anywhere. Our state-of-the-art cloud
                            hosting services help ease all your processes. Manage your
                            practice using our tech-based solution to add value and to attain
                            operational efficiency.
                        </p>
                        <ul className="marker grid grid-cols-2 mt-5 mb-2">
                            <li>Cross-device Compatibility</li>
                            <li>Multi-user Collaboration</li>
                            <li>Zero Downtime</li>
                            <li>Bank-grade Data security</li>
                            <li>Automated Backup</li>
                            <li>Customizable Platforms</li>
                            <li>24x7 Tech Support</li>
                            <li>5-minute Human Response</li>
                        </ul>
                    </div>
                    <div className="lg:col-span-5 col-span-12 order-lg-2 order-1">
                        <form
                            className="step_enquiry1 signUpForm"
                            onSubmit={handleTrialSubmit}
                        >
                            <span className="signUpFormBg" />
                            <div className="signUp">
                                <strong>Start Your Free Trial</strong>
                                <p>No Credit Card. No Long-term Contract</p>
                            </div>
                            <span id="duplocate_record" />
                            <div className="instantForm form-main">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name*"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email*"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company"
                                        placeholder="Company"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="phone-number-outer-div">
                                        <div className="country-code form-group">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                onChange={handleCountryChange}
                                                required
                                                value={selectedCountryCode}
                                            >
                                                <option value={""} disabled>
                                                    Code
                                                </option>
                                                {countryCodes.map((obj, index) => {
                                                    return (
                                                        <option key={index} value={obj.code}>
                                                            +{obj.code}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control onlynumber"
                                                maxLength="10"
                                                required
                                                title="Please 10 Digit Numbres"
                                                id="phoneno"
                                                name="phoneno"
                                                placeholder="Phone*"
                                                value={phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    {selectedCountryName && (
                                        <span
                                            style={{
                                                fontSize: "12px",
                                                color: "green",
                                                fontWeight: "500",
                                                marginTop: "3px",
                                            }}
                                        >
                                            Country: {selectedCountryName}
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Number of users"
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

                                <div className="form-group">
                                    <select
                                        onChange={(e) => setHearAboutUs(e.target.value)}
                                        required
                                        value={hearAboutUs}
                                    >
                                        <option value="">How did you hear about us ?* </option>
                                        <option value="Google Search">Google Search</option>
                                        <option value="Google Ads">Google Ads</option>
                                        <option value="Email / Newsletter">
                                            Email / Newsletter
                                        </option>
                                        <option value="Linkedin">Linkedin</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Twitter">Twitter</option>
                                        <option value="Reffered by a Friend">
                                            Reffered by a Friend
                                        </option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="other_here"
                                        id="other_here"
                                        className="form-control mt-2"
                                        placeholder="Comment"
                                        autoComplete="off"
                                        style={{
                                            display: hearAboutUs === "Other" ? "" : "none",
                                        }}
                                        value={hearAboutUsOther}
                                        onChange={(e) => setHearAboutUsOther(e.target.value)}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="d_username"
                                                name="d_username"
                                                placeholder="Desired username"
                                                value={desireUserName}
                                                onChange={(e) => setDesireUserName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <select
                                                onChange={(e) => setApplication(e.target.value)}
                                                // onChange={handleApplicationChange}
                                                value={application}
                                            >
                                                <option value="">Select Application</option>
                                                <option value="None">None</option>
                                                <option value="Desktop as a Service">
                                                    Desktop as a Service
                                                </option>
                                                <option value="QB Pro">QuickBooks Pro</option>
                                                <option value="QB Premier">QuickBooks Premier</option>
                                                <option value="QB Accounts">
                                                    QuickBooks Accountants
                                                </option>
                                                <option value="QB Enterprise">
                                                    QuickBooks Enterprise
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
                                                <option value="ATX Tax Software">
                                                    ATX Tax Software
                                                </option>
                                                <option value="Lacerte">Lacerte</option>
                                                <option value="Proseries">Proseries</option>
                                                <option value="TaxWise">TaxWise</option>
                                                <option value="Hosting VIrtual Desktop">
                                                    Hosting Virtual Desktop
                                                </option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="applicationKey"
                                        name="applicationKey"
                                        placeholder="Enter Application/ Product Serial Key"
                                        value={appSerialKey}
                                        onChange={(e) => setAppSerialKey(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 mt-3 text-start">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="notification"
                                            defaultValue={1}
                                            id="notification"
                                        />
                                        <label htmlFor="notification" className="ms-3 font-13">
                                            I&apos;d like to receive useful industry news, trends
                                            and updates directly to my inbox from Sagenext.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <Turnstile
                                ref={turnstileRef}
                                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                                onSuccess={(token) => setTsToken(token)}
                                onExpire={() => setTsToken(null)}
                                onError={() => setTsToken(null)}
                            />
                            <div className="mx-5 mt-3 text-center">
                                <button
                                    id="nextBtn"
                                    className="btn-get-pricing text-white inline-flex"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Request Free Trial"}
                                    <img
                                        src="/assets/images/free-trial/arrow-back.svg"
                                        loading="lazy"
                                        alt="Arrow"
                                        width={10}
                                        height={18}
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrialHeroWithForm
