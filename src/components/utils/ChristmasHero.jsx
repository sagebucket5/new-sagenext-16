"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef } from "react";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Turnstile } from "@marsidev/react-turnstile";
import { toast } from "react-hot-toast";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import applications from "@/lib/applications";
import ListCountryCodes from "@/lib/countryCodes";
import { AiOutlineLoading } from "react-icons/ai";

const ChristmasHero = () => {
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const turnstileRef = useRef(null);
  const [tsToken, setTsToken] = useState(null);
  const [phone, setPhone] = useState("");
  const [countryCodes, setCountryCodes] = useState("");
  const [company, setCompany] = useState("");
  const [noOfUsers, setNumberOfUsers] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("");
  const [application, setApplication] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [hearAboutUsOther, setHearAboutUsOther] = useState("");
  const pathname = usePathname();
  const router = useRouter();

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
    if (!countryCodes) {
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
      selectedCountryCode: countryCodes,
      hearAboutUs,
      hearAboutUsOther: hearAboutUs === "Other" ? hearAboutUsOther : "",
      token: tsToken,
      pathname,
      subject: "Get Customized Hosting Solutions",
      description: `<em>Get Customized Hosting Solutions | ${pathname}</em>`,
    };

    try {
      console.log("my data", data);
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
    <section className="bg-[url(/assets/images/christmas/christmas-bg.png)] bg-cover bg-no-repeat lg:min-h-[1110px] max-h-full max-w-screen mb-10 pt-24 lg:pt-40 text-center">
      <div className="container mx-auto place-items-center">
        <div className="flex flex-col items-center justify-center gap-4 text-white max-w-[1073px]">
          <h1 className="font-semibold text-[22.55px] lg:text-[46px] leading-none max-w-5xl">
            <strong className="font-bold text-3xl lg:text-[60px]">
              Santa&apos;s Here!
            </strong>{" "}
            Enjoy 3 Months Free on QuickBooks, Tax Apps & Sage Hosting! 🎁
          </h1>
          <p className="font-semibold text-lg *:font-bold *:text-[#55F9FF]">
            Offer valid on <span>Annual subscriptions only.</span>
          </p>
          <hr className="w-3/5 h-[1px] border-none bg-radial from-white to-white/0" />
          <span className="font-medium *:font-bold text-sm lg:text-xl">
            Celebrate this <b>festive 🎄✨ season</b> with an exclusive gift 🎁
            from us, <b>enjoy 3 months</b> of free hosting on QuickBooks, Tax
            Applications, and Sage on an <b>annual plan!</b> Experience smooth
            performance, secure access, and zero downtime as you move into the
            new year with confidence. Santa&apos;s savings are here just for
            you!
          </span>
        </div>

        <div
          className={`max-lg:hidden flex items-center justify-center gap-1 md:gap-2.5 text-white bg-white/10 w-fit mt-9 py-1.5 px-5 rounded-2xl`}
        >
          <span className={`text-xs lg:text-lg`}>
            <b>4.9</b> Stars
          </span>

          <span className={`flex text-[#FBDD3B] *:size-4 *:lg:size-[24px]`}>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
          </span>

          <span className={`text-xs lg:text-lg`}>500+ Reviews</span>
        </div>

        <div
          className={`max-lg:hidden flex flex-wrap items-center lg:justify-center gap-1 lg:gap-2.5 *:w-fit *:h-5 *:lg:h-10 *:bg-white *:rounded mt-4`}
        >
          <Link
            href="https://www.serchen.com/company/sagenext-infotech/reviews/"
            target="_blank"
          >
            <Image
              src="/assets/images/offer/logo-of-hero-sec/g1.png"
              alt="Serchen"
              width={114}
              height={35}
            />
          </Link>
          <Image
            src="/assets/images/offer/logo-of-hero-sec/g2.png"
            alt="Finances Online"
            width={155}
            height={35}
          />
          <Image
            src="/assets/images/offer/logo-of-hero-sec/g3.png"
            alt="Source Forge"
            width={148}
            height={35}
          />
          <Image
            src="/assets/images/offer/logo-of-hero-sec/g4.png"
            alt="G2"
            width={78}
            height={35}
          />
          <Link
            href="https://share.google/WeAwW6BQBfISYMQVh"
            target="_blank"
          >
            <Image
              src="/assets/images/offer/logo-of-hero-sec/g5.png"
              alt="Capterra"
              width={45}
              height={35}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg w-full lg:w-[408px] mx-auto mt-9">
          <div className="grid place-self-center">
            <p className="text-2xl! font-semibold! text-center text-[#0C2F61]">
              <span className="font-black text-red-600">
                Don&apos;t Wait 🧨
              </span>{" "}
              Special Christmas & New Year Offer
            </p>
            <span className="font-normal text-[10px]">
              No Credit Card • No Long-term Contract
            </span>
          </div>

          <div className="mt-0 md:mt-3">
            <form
              className="mt-0 space-y-2"
              onSubmit={handleSubmitCustmizedHosting}
            >
              <input
                type="text"
                className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                aria-describedby="Name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="flex gap-1">
                <select
                  value={application}
                  onChange={(e) => setApplication(e.target.value)}
                  className="flex-1 border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                  style={{ color: "#929292" }}
                >
                  {applications.map((app, index) => (
                    <option
                      key={index}
                      value={app.value}
                      className="placeholder-[#929292]"
                    >
                      {app.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="w-1/3 border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                  placeholder="No. of users"
                  name="number of users"
                  value={noOfUsers}
                  onChange={(e) => {
                    const numericPhone = e.target.value.replace(/[^0-9]/g, "");
                    setNumberOfUsers(numericPhone);
                  }}
                />
              </div>
              <input
                type="text"
                name="company"
                className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                aria-describedby="Name"
                placeholder="Your Company Name"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                type="email"
                name="email"
                className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex gap-2">
                <select
                  value={countryCodes}
                  onChange={(e) => setCountryCodes(e.target.value)}
                  className="w-1/4 relative border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                  style={{ color: "#929292" }}
                >
                  <option defaultValue="+1">Code</option>
                  {ListCountryCodes.map((code) => (
                    <option
                      key={code.code}
                      value={code.code}
                    >
                      +{code.code}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  maxLength={10}
                  name="phone"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <select
                name="about_us"
                onChange={(e) => setHearAboutUs(e.target.value)}
                required
                value={hearAboutUs}
                className="w-full border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                style={{ color: "#929292" }}
              >
                <option value="">How did you hear about us?</option>
                <option value="Google Search">Google Search</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Email &#x2F; Newsletter">
                  {" "}
                  Email / Newsletter
                </option>
                <option value="Linkedin">Linkedin</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="Reffered by a Friend">
                  {" "}
                  Reffered by a Friend{" "}
                </option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="comment"
                className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500 mt-2"
                placeholder="Comment"
                style={{ display: false ? "" : "none" }}
                value={hearAboutUsOther}
                onChange={(e) => setHearAboutUsOther(e.target.value)}
              />
              <p className="!text-[13px] text-[#6e6e6e] !leading-[18px] !font-medium mt-3 mb-4">
                By submitting your details, you agree to accept Sagenext's Terms
                of Use and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-700 underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                onSuccess={(token) => setTsToken(token)}
                onExpire={() => setTsToken(null)}
                onError={() => setTsToken(null)}
              />
              <div className="pb-3 place-items-center">
                <button
                  type="submit"
                  className=" bg-[#0151C1] cursor-pointer border-[1.5px_solid_#e9e9e9] text-white px-3 py-3 rounded-lg font-medium hover:bg-[#0151C1]/90 w-full flex justify-center"
                >
                  {isSubmit ? (
                    <span className="bg-blue-800 rounded-full">
                      <AiOutlineLoading
                        size={25}
                        className="animate-spin"
                      />
                    </span>
                  ) : (
                    "Get Started"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChristmasHero;
