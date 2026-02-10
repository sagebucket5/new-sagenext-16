"use client";

import React, { useEffect, useState } from "react";
import OfferExpiry from "@/lib/OfferExpiry";
import { FaAngleRight } from "react-icons/fa6";
import applications from "@/lib/applications";
import ListCountryCodes from "@/lib/countryCodes";
import { usePathname, useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { IoIosClose, IoIosArrowForward } from "react-icons/io";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";

export default function FormModal(props) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

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

  // --- helpers
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  // Lock body scroll + ESC close
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => /^(?!.*(\d)\1{6,9})\d{8,10}$/.test(phone);

  const validateForm = () => {
    if (!name) return toast.error("Please enter your name"), false;
    if (!countryCodes) return toast.error("Please select a country code"), false;
    if (!email || !validateEmail(email))
      return toast.error("Please enter a valid email address"), false;
    if (!phone || !validatePhone(phone))
      return toast.error("Please enter a valid phone number"), false;
    return true;
  };

  const handleSubmitCustmizedHosting = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmit(true);

    try {
      const token = await executeRecaptcha?.("submit");
      if (!token) {
        toast.error("Recaptcha verification failed");
        return;
      }

      const payload = {
        name,
        email,
        phone,
        company,
        application,
        noOfUsers,
        selectedCountryCode: countryCodes,
        hearAboutUs,
        hearAboutUsOther: hearAboutUs === "Other" ? hearAboutUsOther : "",
        token,
        pathname,
        subject: "Get Customized Hosting Solutions",
        description: `<em>Get Customized Hosting Solutions | ${pathname}</em>`,
      };

      const res = await fetch("/api/api-email-post", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      const resData = await res.json();

      if (resData.success) {
        toast.success("Thank you, Form Submitted Successfully");
        closeModal();
        router.push("thank-you/free-quote");
      } else {
        toast.error(resData.message || "Form submission failed");
      }
    } catch (err) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <>
      {/* Open button */}
      <button
        onClick={openModal}
        className={`${props.customClass || ""} ${
          props.isBanner ? "rounded-md lg:rounded-full" : "rounded-full"
        } px-8 py-3 h-[50px] w-full flex items-center justify-center cursor-pointer !font-semibold text-[16px] border text-white hover:!bg-white hover:!text-blue-900 bg-[#0151C1] whitespace-nowrap transition-all ease-in duration-200`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: hovered ? props.hoverColor || props.color : props.color,
          backgroundColor: hovered ? props.hoverBgColor || props.bgColor : props.bgColor,
          border: props.ctaBorder ? props.ctaBorder.replace(/_/g, " ") : undefined,
          fontWeight: props.fontWeight || "400",
        }}
      >
        {props.text ? props.text : "Request a Free Quote"}
        {props.showIcon == false ? "" : <IoIosArrowForward size={20} />}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[999]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-500/75 opacity-100 transition-opacity"
            onClick={closeModal}
          />

          {/* Modal container */}
          <div className="relative z-[1000] flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* Panel */}
            <div
              className="
                relative w-full max-w-[800px]
                overflow-hidden rounded-lg bg-white text-left shadow-xl
                transition-all
                sm:my-8
              "
              onClick={(e) => e.stopPropagation()} // prevent backdrop close on panel click
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute right-2.5 top-2.5 cursor-pointer"
                aria-label="Close modal"
              >
                <IoIosClose
                  size={27}
                  className="text-black bg-gray-200 hover:bg-gray-300 rounded-full"
                />
              </button>

              <div className="flex flex-col md:flex-row gap-6 rounded-[14px]">
                {/* Left */}
                <div className="md:w-1/2 rounded-[14px] flex flex-col justify-center lg:rounded-[8px_0px_0px_8px] bg-[url(/assets/component/Modal-Banner.webp)] bg-no-repeat bg-cover py-6 px-6">
                  <div className="mb-4">
                    <img
                      src="/footer/logo.png"
                      alt="logo"
                      loading="lazy"
                      width={190}
                      height={49}
                    />
                  </div>

                  <span className="text-[#e9e9e9] text-[12px] font-semibold mb-2">
                    🚀 Exclusive Tax Season Offer! 🚀
                  </span>

                  <ul className="list-disc pl-10 mb-4 text-white">
                    <li className="p-[5px] text-[12px] font-medium leading-3.5">
                      3 Months Free Hosting on Your Tax & Accounting Software.
                    </li>
                    <li className="p-[5px] text-[12px] font-medium leading-3.5">
                      Valid on Annual Prepay Plans
                    </li>
                    <li className="p-[5px] text-[12px] font-medium leading-3.5">
                      <OfferExpiry />
                    </li>
                    <li className="p-[5px] text-[12px] font-medium leading-3.5">
                      Move All Your Desktop Applications to the Cloud
                    </li>
                    <li className="p-[5px] text-[12px] font-medium leading-3.5">
                      Access Your Entire Workspace Anytime, Anywhere!
                    </li>
                  </ul>

                  <span className="text-[#e9e9e9] font-medium text-[12px] !leading-5">
                    Don&apos;t miss out-Upgrade to the Cloud Today!
                  </span>

                  <div className="modal-border mt-0.2">
                    <p className="!text-[12px] !leading-4 pb-4 !font-medium text-white">
                      Our Microsoft Certified professionals are available 24x7 to
                      understand your IT needs and queries.
                    </p>
                  </div>

                  <div className="mt-2">
                    <span className="block text-[12px] font-medium text-white mb-2">
                      Streamlined Interactions Just a Click Away
                    </span>

                    <button
                      type="button"
                      className="bg-transparent text-white px-3 py-1 cursor-pointer rounded-md border border-white flex items-center gap-2 hover:bg-white/10 transition-all duration-500"
                      onClick={() => {
                        // make sure zoho exists
                        if (typeof window !== "undefined" && window.$zoho?.salesiq?.floatwindow?.open) {
                          window.$zoho.salesiq.floatwindow.open();
                        }
                      }}
                    >
                      Chat Now <FaAngleRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Right */}
                <div className="md:w-1/2 mt-0 md:mt-3 py-[15px_24px] lg:px-[5px_24px] px-5">
                  <div className="pb-3 mb-1 text-center">
                    <span className="text-[18px] font-bold !text-[#464646] block">
                      Get A Free Quote Today
                    </span>
                    <p className="!text-[13px] !font-medium !leading-[22px] text-[#6e6e6e]">
                      Share your details and get instant subscription info
                    </p>
                  </div>

                  <form className="mt-0 space-y-2" onSubmit={handleSubmitCustmizedHosting}>
                    <input
                      type="text"
                      className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
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
                          <option key={index} value={app.value}>
                            {app.label}
                          </option>
                        ))}
                      </select>

                      <input
                        type="text"
                        className="w-1/3 border border-gray-200 !text-black !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                        placeholder="No. of users"
                        value={noOfUsers}
                        onChange={(e) => {
                          setNumberOfUsers(e.target.value.replace(/[^0-9]/g, ""));
                        }}
                      />
                    </div>

                    <input
                      type="text"
                      className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Company Name"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />

                    <input
                      type="email"
                      className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="flex gap-2">
                      <select
                        value={countryCodes}
                        onChange={(e) => setCountryCodes(e.target.value)}
                        className="w-1/4 border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                        style={{ color: "#929292" }}
                      >
                        <option value="">Code</option>
                        {ListCountryCodes.map((code) => (
                          <option key={code.code} value={code.code}>
                            +{code.code}
                          </option>
                        ))}
                      </select>

                      <input
                        type="text"
                        maxLength={10}
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <select
                      required
                      value={hearAboutUs}
                      onChange={(e) => setHearAboutUs(e.target.value)}
                      className="w-full border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                      style={{ color: "#929292" }}
                    >
                      <option value="">How did you hear about us?</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="Email / Newsletter">Email / Newsletter</option>
                      <option value="Linkedin">Linkedin</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Reffered by a Friend">Reffered by a Friend</option>
                      <option value="Other">Other</option>
                    </select>

                    {/* ✅ show only when Other selected */}
                    {hearAboutUs === "Other" && (
                      <input
                        type="text"
                        className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500 mt-2"
                        placeholder="Please specify"
                        value={hearAboutUsOther}
                        onChange={(e) => setHearAboutUsOther(e.target.value)}
                      />
                    )}

                    <p className="!text-[13px] text-[#6e6e6e] !leading-[18px] !font-medium mt-3 mb-4">
                      By submitting your details, you agree to accept Sagenext&apos;s Terms
                      of Use and{" "}
                      <Link href="/privacy-policy" className="text-blue-700 underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>

                    <div className="pb-3">
                      <button
                        type="submit"
                        disabled={isSubmit}
                        className="bg-[#013d8e] cursor-pointer text-white px-3 py-2 rounded-sm font-medium hover:bg-[#013e8eed] w-full md:w-[11vw] h-10 flex justify-center items-center disabled:opacity-60"
                      >
                        {isSubmit ? (
                          <AiOutlineLoading size={25} className="animate-spin" />
                        ) : (
                          "Get Started"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}