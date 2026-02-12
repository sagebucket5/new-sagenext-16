"use client"

import React, { useState, useRef } from "react"
import Classes from "@styles/pages/company/contact.module.css";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import toast from "react-hot-toast";
import { FaAngleRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Countrycodes from "@/lib/countryCodes";
import BlueCta from "@/components/buttons/BlueCta";
import Link from "next/link";
import { Turnstile } from "@marsidev/react-turnstile";
import Image from "next/image";

const ContactForm = () => {
  const router = useRouter();
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const turnstileRef = useRef(null);
  const [tsToken, setTsToken] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [loading, setLoading] = useState(false);
  const pathname = router.pathname;
  const handleCountryChange = (e) => {
    const code = e.target.value;
    setSelectedCountryCode(code);

    const selectedCountry = Countrycodes.find((obj) => obj.code === code);
    if (selectedCountry) {
      setSelectedCountryName(selectedCountry.country); // Print the country name
    }
  };

  const handleChat = () => {
    $zoho.salesiq.floatwindow.open();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePhone = (phone) => {
    const phoneRegex = /^(?!.*(\d)\1{6,9})\d{8,10}$/;
    return phoneRegex.test(phone);
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validateForm()) {
  //     return;
  //   }
  //   if (!tsToken) {
  //     toast.error("Turnstile verification missing. Please try again.");
  //     return;
  //   }
  //   setLoading(true);
  //   const data = {
  //     name,
  //     email,
  //     phone,
  //     message,
  //     hearAboutUs,
  //     token: tsToken,
  //     subject: "Contact Us",
  //     pathname,
  //     description: "Contact us Form Request"
  //   };
  //   try {
  //     const res = await fetch("/api/contact-us-api", {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const resData = await res.json();
  //     if (resData.success) {
  //       toast.success("Thank you, Form Submitted Successfully");
  //       router.push("thank-you/free-quote");
  //     } else {
  //       toast.error(resData.message || "Form submission failed");
  //     }
  //   } catch (error) {
  //     toast.error("An error occurred while submitting the form.");
  //   } finally {
  //     setLoading(true);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!validateForm()) return;

    if (!tsToken) {
      toast.error("Turnstile verification missing. Please try again.");
      return;
    }

    setLoading(true);

    const payload = {
      name,
      email,
      phone,
      message,
      hearAboutUs,
      token: tsToken,
      subject: "Contact Us",
      pathname,
      description: "Contact us Form Request",
    };

    try {
      const res = await fetch("/api/contact-us-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // handle non-json / empty body safely
      const resData = await res.json().catch(() => ({}));

      if (!res.ok || !resData?.success) {
        throw new Error(resData?.message || "Form submission failed");
      }

      toast.success("Thank you, Form Submitted Successfully");

      // Turnstile token is single-use → reset & clear token
      turnstileRef.current?.reset?.();
      setTsToken(null);

      router.push("/thank-you/free-quote"); // ✅ add leading slash
    } catch (error) {
      toast.error(error?.message || "An error occurred while submitting the form.");

      // get a fresh token next time
      turnstileRef.current?.reset?.();
      setTsToken(null);
    } finally {
      setLoading(false); // ✅ critical fix
    }
  };

  return (
    <>
      <section className={`${Classes["contact-section"]}`}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="px-3">
              <div
                className={`${Classes["form-container"]} relative rounded-3`}
              >
                <div
                  className={`${Classes["top-element"]} flex justify-center absolute top-0 start-1/2 -translate-1/2`}
                >
                  <Image height={50} width={50}
                    src="/assets/images/contact-us/ellipse-contact1.svg"
                    className={`${Classes["ele1"]}`}
                    alt="master1"
                  />
                  <Image height={50} width={50}
                    src="/assets/images/contact-us/ellipse-contact2.svg"
                    className={`${Classes["ele2"]}`}
                    alt="master2"
                  />
                  <Image height={50} width={50}
                    src="/assets/images/contact-us/ellipse-contact3.svg"
                    className={`${Classes["ele3"]}`}
                    alt="master3"
                  />
                </div>
                <h3 className="text-center">
                  <span className="md:block hidden">
                    Request a Call Back or Drop a Message
                  </span>
                  <span className="md:hidden block">
                    We&apos;d love to hear from you
                  </span>
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="relative mb-4">
                    <input
                      type="text"
                      className={`peer ${Classes["custom-appearance-none"]} pt-2 h-11 appearance-none bg-white border-b border-black text-gray-900 block text-[16px] font-normal leading-6 px-3  w-full transition-all duration-150 ease-in-out peer-focus:appearance-none peer-focus:ring-0 outline-0`}
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label className={`${Classes["custom-label"]} absolute left-0 top-0 z-[2] h-full px-3 text-left text-ellipsis whitespace-nowrap overflow-hidden pointer-events-none transition-all duration-100 ease-in-out origin-top-left border-0 border-transparent peer-focus:top-[-10px] peer-focus:scale-90 peer-focus:text-sm peer-focus:text-blue-500`}>
                      {name ? "" : "Name"}
                    </label>
                  </div>

                  <div className="relative mb-4">
                    <input
                      type="email"
                      className={`peer ${Classes["custom-appearance-none"]} pt-2 h-11 appearance-none !bg-white border-b border-black text-gray-900 block text-[16px] font-normal leading-6 px-3  w-full transition-all duration-150 ease-in-out peer-focus:appearance-none peer-focus:ring-0 outline-0`}
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className={`${Classes["custom-label"]} absolute left-0 top-0 z-[2] h-full px-3 text-left text-ellipsis whitespace-nowrap overflow-hidden pointer-events-none transition-all duration-100 ease-in-out origin-top-left border-0 border-transparent peer-focus:top-[-10px] peer-focus:scale-90 peer-focus:text-sm peer-focus:text-blue-500`}>
                      {email ? "" : "Email"}
                    </label>
                  </div>
                  <div className="relative mb-4">
                    <div className="grid grid-cols-12 gap-x-1">
                      <div className="lg:col-span-3 col-span-4">
                        <select
                          className={`peer ${Classes["custom-appearance-none"]} pt-2 h-11 appearance-none bg-white border-b border-black text-gray-900 block text-[16px] font-normal leading-6 px-3  w-full transition-all duration-150 ease-in-out peer-focus:appearance-none peer-focus:ring-0 outline-0`}
                          aria-label="select country code"
                          onChange={handleCountryChange}
                          value={selectedCountryCode}
                        >
                          <option value={""} disabled>
                            Code
                          </option>
                          {Countrycodes.map((obj, index) => (
                            <option key={index} value={obj.code}>
                              +{obj.code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="lg:col-span-9 col-span-8 pe-2 relative">
                        <input
                          type="text"
                          className={`peer ${Classes["custom-appearance-none"]} pt-2 h-11 appearance-none bg-white border-b border-black text-gray-900 block text-[16px] font-normal leading-6 px-3  w-full transition-all duration-150 ease-in-out peer-focus:appearance-none peer-focus:ring-0 outline-0`}
                          name="phone"
                          maxLength="10"
                          title="Please Enter 10 Digit Numbres"
                          style={{ padding: "1rem 0.75rem" }}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                        <label className={`${Classes["custom-label"]} absolute left-0 top-0 z-[2] h-full px-3 text-left text-ellipsis whitespace-nowrap overflow-hidden pointer-events-none transition-all duration-100 ease-in-out origin-top-left border-0 border-transparent peer-focus:top-[-10px] peer-focus:scale-90 peer-focus:text-sm peer-focus:text-blue-500`}>
                          {phone ? "" : "Phone"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <textarea
                      className={`peer ${Classes["custom-appearance-none"]} appearance-none bg-white border-b border-black rounded text-gray-900 block text-base font-normal leading-6 px-3 py-[1.7rem_1.5rem] w-full transition-all duration-150 ease-in-out outline-0 rounded-0`}
                      name="sms"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder=""
                      required
                    ></textarea>
                    <label className={`${Classes["custom-label"]} absolute left-0 top-0 z-[2] h-full px-3 text-left text-ellipsis whitespace-nowrap overflow-hidden pointer-events-none transition-all duration-100 ease-in-out origin-top-left border-0 border-transparent peer-focus:top-[-6px] peer-focus:scale-90 peer-focus:text-sm peer-focus:text-blue-500`}>
                      {message ? " " : "Leave  Your Message Here"}
                    </label>
                  </div>
                  <div className="relative mb-4">
                    <select
                      name="about_us"
                      onChange={(e) => setHearAboutUs(e.target.value)}
                      required
                      value={hearAboutUs}
                      className={`outline-0 ${Classes["custom-appearance-none bg-white border-b border-black rounded text-gray-900 block text-base font-normal leading-6 px-3 py-1.5 w-full transition-all duration-150 ease-in-out "]} appearance-none bg-white border-b border-black rounded text-gray-900 block text-base font-normal leading-6 px-3 py-1.5 w-full transition-all duration-150 ease-in-out  rounded-0`}
                      style={{ padding: "1rem 0.75rem" }}
                    >
                      <option value="">How did you hear about us? </option>
                      <option value="Google Search">Google Search</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="Email / Newsletter">
                        Email / Newsletter
                      </option>
                      <option value="Linkedin">Linkedin</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Reffered by a Friend">
                        Reffered by a Friend{" "}
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onSuccess={(token) => setTsToken(token)}
                    onExpire={() => setTsToken(null)}
                    onError={() => setTsToken(null)}
                  />
                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className={`rounded-[50px] inline-flex items-center justify-center gap-1 bg-[#0151C1] w-54 py-2.5 text-white font-semibold`}
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
                      <FaAngleRight
                        width="7"
                        height="10"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="px-3">
              <h3 className={`${Classes["entry-title"]}`}>
                OUR CORPORATE OFFICE
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.6264443836567!2d-82.07894128511069!3d33.485075154852574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f82d22cf6ee3bb%3A0xb516de370c89d4b0!2sSagenext%20Infotech%20LLC!5e0!3m2!1sen!2sin!4v1630043974706!5m2!1sen!2sin"
                width="100%"
                height="556px"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className={`${Classes["become-partner"]}`}>
        <div className="container mx-auto">
          <div className={`${Classes["custom-row"]} grid grid-cols-12`}>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 px-3">
              <div className={`${Classes["inner-col"]} bg-white rounded-3`}>
                <h4>Become a Partner</h4>
                <p className="mb-0">
                  Join our lucrative partnership programs to explore new
                  opportunities for financial growth.
                </p>
                <BlueCta
                  className={Classes["custom-btn"]}
                  anchorIcon1={Classes["custom-anchor"]}
                  text1="Become Partner"
                  href1="/partners"
                />
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 px-3">
              <div className={`${Classes["inner-col"]} bg-white rounded-3`}>
                <h4>Solutions Consultation</h4>
                <p className="mb-0">
                  For any sales related queries connect with us at:
                </p>
                <span className={Classes["info-span"]}>
                  <span className={Classes["highlight"]}>USA:</span>{" "}
                  <Link href="tel:1-855-922-7243">1-855-922-7243</Link> <br />
                  <Link href="mailto:sales@thesagenext.com">
                    sales[at]thesagenext.com
                  </Link>
                </span>

                <button
                  onClick={handleChat}
                  className={`rounded-[50px] inline-flex items-center justify-center gap-1 bg-[#0151C1] w-54 py-2.5 text-white font-semibold`}
                >
                  Chat With Us
                  <FaAngleRight className="ms-3 mb-1"
                    width="7"
                    height="10"
                  />
                </button>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 px-3">
              <div className={`${Classes["inner-col"]} bg-white rounded-3`}>
                <h4>Always-on Support</h4>
                <p className="mb-0">
                  We are available round the clock for your assistance.
                </p>
                <span className={Classes["info-span"]}>
                  <span className={Classes["highlight"]}>USA:</span>{" "}
                  <Link href="tel:1-855-922-7243">1-855-922-7243</Link> <br />
                  <span className={Classes["highlight"]}>Intl.</span>{" "}
                  <Link href="tel:1-801-610-6141 ">1-801-610-6141 </Link>
                  <br />
                  <Link href="mailto:support@thesagenext.com">
                    support[at]thesagenext.com
                  </Link>
                </span>
                <button
                  onClick={handleChat}
                  className={`rounded-[50px] inline-flex items-center justify-center gap-1 bg-[#0151C1] w-54 py-2.5 text-white font-semibold`}
                >
                  Chat With Us
                  <FaAngleRight
                    className="ms-3 mb-1"
                    width="7"
                    height="10"
                  />
                </button>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 px-3">
              <div className={`${Classes["inner-col"]} bg-white rounded-3`}>
                <h4>For Billing</h4>
                <p className="mb-0">Monday to Friday 9:00 AM - 8:00 PM ET</p>
                <span className={Classes["info-span"]}>
                  <Link href="mailto:accounting@thesagenext.com">
                    accounting[at]thesagenext.com
                  </Link>{" "}
                </span>

                <span className={Classes["info-span"]}>
                  Visit the{" "}
                  <Link href="https://portal.thesagenext.com/login"
                    className={`${Classes.link}`}
                  >
                    My Account
                  </Link>{" "}
                  to make changes in your billing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm;