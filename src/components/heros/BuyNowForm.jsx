"use client"
import countryCodes from '@/lib/countryCodes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react'
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Turnstile } from "@marsidev/react-turnstile";
import toast from 'react-hot-toast';

const BuyNowForm = () => {
    const router = useRouter();
    // const { executeRecaptcha } = useGoogleReCaptcha();
    const turnstileRef = useRef(null);
    const [tsToken, setTsToken] = useState(null);
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedCountryCode, setSelectedCountryCode] = useState("1");
    const [selectedCountryName, setSelectedCountryName] = useState("USA/Canada");
    const [noOfUsers, setNoOfUsers] = useState("");
    const [application, setApplication] = useState("");
    const [hearAboutUs, setHearAboutUs] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleCountryChange = (e) => {
        const code = e.target.value;
        setSelectedCountryCode(code);

        const selectedCountry = countryCodes.find((obj) => obj.code === code);
        if (selectedCountry) {
            setSelectedCountryName(selectedCountry.country); // Print the country name
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

    const handleSubmitBuynow = async (e) => {
        setLoading(true);
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
            hearAboutUs,
            token: tsToken,
            formName: "Buy Now",
            subject: "Buy Now Quickbooks",
            description: `<em>Buy Now Quickbooks  | Buy Now page</em>`,
            mailTitle: "Buy Now Quickbooks",
        };

        try {
            const res = await fetch("/api/api-email-post", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json', },
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
            if (error.name === 'AbortError') {
                toast.error("Request timed out. Please try again.");
            } else {
                toast.error("An error occurred while submitting the form.");
            }
            turnstileRef.current?.reset?.();
            setTsToken(null);
            setLoading(false);
        } finally {
            setIsSubmit(false);
            setLoading(false);
        }
    };
    return (
        <div className="main_header banner buy_now_banner">
            <div className="banner_contents buy-now mt-10 md:mt-28">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="lg:col-span-7 col-span-12 lg:pe-12.5 banner_left_content">
                            <h1>
                                Buy QuickBooks Desktop Enterprise with Sagenext
                            </h1>
                            <p className="main_sub_heading pt-2">
                                Sagenext: Intuit Authorized QuickBooks Solution Provider
                            </p>
                            <p>
                                Planning to buy a genuine QuickBooks License? We got you
                                covered.
                            </p>
                            <p className="lg:pe-12.5">
                                We are Intuit Authorized QuickBooks Resellers specialized in
                                sales of genuine licenses for all versions and editions of the
                                QuickBooks Software.
                            </p>
                            <div className="pt-3 pb-12.5 lg:text-start text-center">
                                <Link href="tel:+18559227243"
                                    className="py-2 px-4 rounded-md gap-2 !text-black btn-get-pricing2 border border-red-700 hover:bg-red-100 inline-flex relative mb-1">
                                    <img
                                        src="/assets/images/free-trial/call_icon.svg"
                                        alt="call"
                                        loading="lazy"
                                        className='border-r !text-white pe-2.5 border-red-700'
                                    />
                                    +1-855-922-7243

                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5 col-span-12 banner-form" id="banner_form">
                            <form onSubmit={handleSubmitBuynow}
                                id="onPageFormenquiry" className="step_enquiry1  signUpForm">
                                <div className="signUp">
                                    <img
                                        src="/assets/images/buy-now/qb-logo.png"
                                        alt="qb"
                                        loading="lazy"
                                        className="img-fluid"
                                        width={50}
                                        height={50}
                                    />
                                    <strong>
                                        Fill out the form to purchase your QuickBooks Enterprise license now.
                                    </strong>
                                </div>
                                <span id="duplocate_record" />
                                <div className="instantForm form-main">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name_txt"
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
                                    <div className="form-group grid grid-cols-12 lg:gap-x-8 gap-x-2">
                                        <div className="form-group col-span-3">
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
                                        <div className="form-group col-span-9">
                                            <input
                                                type="text"
                                                className="form-control onlynumber"
                                                maxLength="10"
                                                required
                                                title="Please Enter 10 Digit Numbres"
                                                id="phoneno"
                                                name="phoneno"
                                                placeholder="Phone"
                                                value={phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {selectedCountryName && (
                                            <span className="col-span-6 text-[12px] text-green-600 font-medium mt-[3px] w-full">Country: {selectedCountryName}</span>
                                        )}
                                    </div>
                                    <div className="form-group grid grid-cols-[3fr_8fr] lg:gap-x-5 gap-x-2">
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="noOfUsers"
                                            min="0"
                                            placeholder="Number of users*"
                                            required
                                            value={noOfUsers}
                                            onChange={(e) => setNoOfUsers(e.target.value)}
                                        />
                                        <select required name="application_name" onChange={(e) => setApplication(e.target.value)}>
                                            <option value="QuickBooks Enterprise">QuickBooks Enterprise</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            name="about_us"
                                            onChange={(e) => setHearAboutUs(e.target.value)}
                                            required
                                            value={hearAboutUs}
                                        >
                                            <option value="">How did you hear about us? </option>
                                            <option value="Google Search">Google Search</option>
                                            <option value="Google Ads">Google Ads</option>
                                            <option value="Email / Newsletter">Email / Newsletter</option>
                                            <option value="Linkedin">Linkedin</option>
                                            <option value="Facebook">Facebook</option>
                                            <option value="Twitter">Twitter</option>
                                            <option value="Reffered by a Friend">Reffered by a Friend </option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control mx-auto"
                                            name="company"
                                            placeholder="Company"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3 mt-3 text-start">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="notification"
                                                id="notification"
                                                required
                                                defaultValue={1}
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
                                <button id="nextBtn" className="inline-flex gap-2 btn-get-pricing" disabled={loading}>
                                    {loading ? "Loading..." : "Buy Now"}
                                    <img
                                        alt="Arrow"
                                        loading="lazy"
                                        width={10}
                                        height={18}
                                        src="/assets/images/free-trial/arrow-back.svg"
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyNowForm
