"use client";
import { useState } from 'react'
import styles from "@styles/pages/company/partners.module.css";
import Link from 'next/link';
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const PartnerHeroWithForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [business, setBusiness] = useState("");
    const [hearAboutUs, setHearAboutUs] = useState("");
    const [message, setMessage] = useState("");
    const [program, setProgram] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const router = useRouter();


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        if (!name) {
            toast.error("Please enter your name");
            return false;
        }
        if (!email || !validateEmail(email)) {
            toast.error("Please enter a valid email address");
            return false;
        }
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmit(true);

        const token = await executeRecaptcha('submit');

        if (!token) {
            toast.error("Recaptcha verification failed");
            setIsSubmit(false);
            return;
        }
        const data = {
            name,
            email,
            phone,
            business,
            hearAboutUs,
            message,
            program,
            token,
            page: "Partners - Register Yourself",
            subject: "Become a Partner"
        };

        try {
            const res = await fetch("/api/partner-api", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const resData = await res.json();
            if (resData.success) {
                toast.success("Thank you, Form Submitted Successfully");
                router.push(`/thank-you/partners`);
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
        <section className={`bg-[#2d4370] py-6 lg:h-[450px]`}>
            <div className="container mx-auto pt-16">
                <div className="grid grid-cols-12 items-center">
                    <div className="lg:col-span-7 col-span-12 lg:pb-28">
                        <div className={`text-white ${styles["affiliate"]}`}>
                            - Affiliate and Reseller Programs
                        </div>
                        <h1 className="text-white leading-[40px] p-2">
                            Become a <br className='hidden lg:block' />
                            Sagenext Partner
                        </h1>
                    </div>
                    <div
                        className={`lg:col-span-5 col-span-12 pb-6 ps-12.5 pe-12.5 ${styles["form"]}`}
                    >
                        <div className={`${styles["partner-form"]}`}>
                            <form
                                onSubmit={handleSubmit}
                            >
                                <div className="col-lg-12 pt-2">
                                    <h4 className={`${styles["book-title"]}`}>
                                        Register Yourself
                                    </h4>
                                </div>
                                <div className={` ${styles["partner-form-sec"]}`}>
                                    <div className="form-group mt-3">
                                        <input
                                            type="text"
                                            className={`${styles["form-control"]} p-1`}
                                            name="name"
                                            placeholder="Name *"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            type="email"
                                            className={`${styles["form-control"]} p-1`}
                                            name="email"
                                            placeholder="Email *"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            type="number"
                                            className={`${styles["form-control"]} onlynumberfreedemo p-1`}
                                            maxLength={15}
                                            id="phoneno"
                                            name="phoneno"
                                            placeholder="Phone *"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <span
                                            className="numbererror"
                                            style={{ color: "red" }}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            type="text"
                                            className={`${styles["form-control"]} p-1`}
                                            name="company"
                                            placeholder="Business Name"
                                            onChange={(e) => setBusiness(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <select
                                            name="about_us"
                                            onChange={(e) => setHearAboutUs(e.target.value)}
                                            required
                                            value={hearAboutUs}
                                            className={`${styles["form-control"]} p-1`}
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
                                    <div className="form-group mt-3">
                                        <input
                                            type="text"
                                            className={`${styles["form-control"]} p-1`}
                                            name="message"
                                            placeholder="Message"
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group pt-1 pb-1 ">
                                        <div className="flex items-center justify-around text-center">
                                            <div
                                                className={` pe-1 ${styles["radio-toolbar"]}`}
                                            >
                                                <input
                                                    type="radio"
                                                    id="radioReseller"
                                                    name="radioFruit"
                                                    defaultValue="Reseller Program"

                                                    required
                                                    onChange={() => setProgram("Reseller Program")}
                                                />
                                                <label
                                                    htmlFor="radioReseller"
                                                    style={{
                                                        color:
                                                            program === "Reseller Program"
                                                                ? "blue"
                                                                : "initial",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Reseller Program
                                                </label>
                                            </div>
                                            <div
                                                className={` pe-1 ${styles["radio-toolbar"]}`}
                                            >
                                                <input
                                                    type="radio"
                                                    id="radioAffiliate"
                                                    name="radioFruit"
                                                    defaultValue="Affiliate Program"
                                                    onChange={() => setProgram("Affiliate Program")}
                                                />
                                                <label
                                                    htmlFor="radioAffiliate"
                                                    style={{
                                                        color:
                                                            program === "Affiliate Program"
                                                                ? "blue"
                                                                : "initial",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Affiliate Program
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        By submitting this form, you agree to our{" "}
                                        <Link href="/privacy-policy">privacy policy. </Link>
                                        We use your data for communication only, and you can opt
                                        out at any time.
                                    </p>
                                </div>
                                <button className={` ${styles["btn-partner"]}`}>
                                    {isSubmit ? ("Wait...") : ("SUBMIT")}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerHeroWithForm
