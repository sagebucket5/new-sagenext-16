'use client'

import React, { useState, useRef } from "react";
import styles from "@styles/pages/app-dir.module.css";
import Countrycodes from "@/lib/countryCodes";
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Turnstile } from "@marsidev/react-turnstile";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const AppSideBarForm = () => {
    const router = useRouter();
    // const { executeRecaptcha } = useGoogleReCaptcha();
    const turnstileRef = useRef(null);
    const [tsToken, setTsToken] = useState(null);
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [selectedCountryCode, setSelectedCountryCode] = useState("1");
    const [selectedCountryName, setSelectedCountryName] = useState("USA/Canada");
    const [application, setApplication] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleCountryChange = (e) => {
        const code = e.target.value;
        setSelectedCountryCode(code);
        const selectedCountry = Countrycodes.find((obj) => obj.code === code);
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

        if (isSubmit) return;
        if (!validateForm()) return;
        if (!tsToken) {
            toast.error("Turnstile verification missing. Please try again.");
            return;
        }

        setIsSubmit(true);
        setLoading(true);

        const data = {
            name,
            company,
            email,
            phone,
            token: tsToken,
            selectedCountryCode,
            application,
            formName: "Free Quote",
            page: router.pathname || "App directory",
            subject: "Apps Directory Add ons",
            description: `<em>Add ons Hosting Apps Directory</em>`,
        };

        try {
            const res = await fetch("/api/trial-api", {
                method: "POST", body: JSON.stringify(data),
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
            toast.error("An error occurred while submitting the form.");
        } finally {
            setIsSubmit(false);
        }
    };

    return (
        <div className={styles.formContainer}>
            <form className="step_enquiry1 signUpForm p-2" onSubmit={handleTrialSubmit} >
                <span className="signUpFormBg" />
                <div className="signUp text-center">
                    <strong className="text-2xl leading-5">Your Perfect Solution <span className="text-[#3385F8]"> Awaits</span></strong> <br />
                    <p className="text-[16px] leading-[24px] mb-0">Get a Free Quote Now!</p>
                    <p className={styles.subHeading}>No Credit Card. No Long-term Contract</p>
                </div>
                <span id="duplocate_record" />
                <div className="instantForm form-main">
                    <div className="w-full my-3">
                        <input type="text" className="w-full" id="name" name="name" placeholder="Name*" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="w-full  my-3">
                        <input type="email" className="w-full" id="email" name="email" placeholder="Email*" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="w-full mb-3 ">
                        <input type="text" className="w-full" id="company" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>
                    <div className="w-full">
                        <div className="phone-number-outer-div">
                            <div className="country-code w-full flex justify-between items-center flex-wrap">
                                <select className="px-1" aria-label="Default select" onChange={handleCountryChange} required value={selectedCountryCode} >
                                    {Countrycodes.map((obj, index) => <option key={index} value={obj.code}>+{obj.code}</option>)}
                                </select>
                                <input type="text" className="onlynumber px-2" maxLength="10" required title="Please 10 Digit Numbres" id="phoneno" name="phoneno" placeholder="Phone*" value={phone} onChange={handleChange} />
                            </div>
                        </div>
                        {selectedCountryName && (<span className="text-[12px] text-[#3385F8] font-medium mt-1">Country: {selectedCountryName}</span>)}
                    </div>
                </div>
                <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onSuccess={(token) => setTsToken(token)}
                    onExpire={() => setTsToken(null)}
                    onError={() => setTsToken(null)}
                />
                <div className="text-center">
                    <button id="nextBtn" className="w-full py-1 px-1 border border-blue-700 rounded-[10px] bg-blue-600 text-white mt-2 hover:bg-transparent hover:text-blue-700 cursor-pointer hover:ring-blue-500 ring-1" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
                <div className="my-2 text-center"><label htmlFor="notification" className="text-[9px]">By clicking the Submit button, you agree to our <Link href='/privacy-policy'>Privacy Policy.</Link></label></div>
            </form>
        </div>
    )
}

export default AppSideBarForm