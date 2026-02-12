"use client";

import ListCountryCodes from "@/lib/countryCodes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Turnstile } from "@marsidev/react-turnstile";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";


const DedicatedPricingModal = (props) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const turnstileRef = useRef(null);
  const [tsToken, setTsToken] = useState(null);

  const [phone, setPhone] = useState("");
  const [countryCodes, setCountryCodes] = useState("+1");
  const [noOfUsers, setNumberOfUsers] = useState(props.users ?? 1);
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("");
  const [plan, setPlan] = useState(props.chosenPlan ?? "Starter Plan");

  const application = props.application;

  const pathname = usePathname();
  const router = useRouter();

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  useEffect(() => {
    setNumberOfUsers(props.users ?? 1);
  }, [props.users, open]);

  // ESC close + body scroll lock
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
      application,
      noOfUsers,
      selectedCountryCode: countryCodes,
      plan,
      token: tsToken,
      pathname,
      subject: "Get Customized Hosting Solutions",
      description: `<em>Get Customized Hosting Solutions | ${pathname}</em>`,
    };

    try {
      // console.log("my data", data);
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
    <>
      {/* Trigger */}
      <button
        onClick={openModal}
        className={`${props.customClass || ""} ${props.isBanner ? "rounded-md lg:rounded-full" : "rounded-full"
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
        {props.showIcon == false ? "" : <IoIosArrowForward size={22} />}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[999]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-500/75"
            onClick={closeModal}
          />

          {/* Center */}
          <div className="relative z-[1000] flex min-h-full items-center justify-center p-4 text-center">
            {/* Panel */}
            <div
              className="relative w-full max-w-[400px] overflow-hidden rounded-lg bg-white text-left shadow-xl"
              onClick={(e) => e.stopPropagation()}
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

              <div className="flex flex-col gap-6 bg-white rounded-[14px]">
                <div className="mt-0 py-[15px_24px] px-5">
                  <div className="pb-3 mb-1 text-center">
                    <span className="text-[18px] font-bold !text-[#464646] block">
                      Get A Free Quote Today
                    </span>
                    <p className="!text-[13px] !font-medium !leading-[22px] text-[#6e6e6e]">
                      Share your details and get instant subscription info
                    </p>
                  </div>

                  <form className="mt-0 space-y-3" onSubmit={handleSubmitCustmizedHosting}>
                    <div className="flex gap-1">
                      <select
                        className="w-2/3 border border-gray-200 font-semibold rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                      >
                        <option value="Starter Plan">Starter Plan</option>
                        <option value="Intermediate Plan">Intermediate Plan</option>
                        <option value="Advance Plan">Advance Plan</option>
                      </select>

                      <select
                        value={noOfUsers}
                        className="w-1/3 border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) => setNumberOfUsers(Number(e.target.value))}
                      >
                        {Array.from({ length: 15 }).map((_, i) => (
                          <option key={i} value={i + 1}>
                            {i + 1} Users
                          </option>
                        ))}
                      </select>
                    </div>

                    <input
                      type="text"
                      className="w-full border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Name*"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <input
                      type="email"
                      className="w-full border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Email Address*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="flex gap-2">
                      <select
                        value={countryCodes}
                        onChange={(e) => setCountryCodes(e.target.value)}
                        className="w-1/4 border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                      >
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

                    <p className="text-[10px] text-[#6e6e6e] !leading-[18px] !font-medium mt-3 mb-4 text-center">
                      By submitting your details, you agree to accept Sagenext&apos;s
                      Terms of Use and{" "}
                      <Link href="/privacy-policy" className="text-blue-700 underline">
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
                    <div className="pb-3 w-full">
                      <button
                        type="submit"
                        disabled={isSubmit}
                        className="bg-[#013d8e] cursor-pointer text-white px-3 py-3 rounded-lg font-medium hover:bg-[#013e8eed] w-full flex justify-center items-center disabled:opacity-60"
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
};

export default DedicatedPricingModal;