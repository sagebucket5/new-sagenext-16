'use client'
import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import OfferExpiry from '@/lib/OfferExpiry';
import { FaAngleRight } from 'react-icons/fa6';
import applications from '@/lib/applications';
import ListCountryCodes from "@/lib/countryCodes";
import { usePathname, useRouter } from 'next/navigation';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { IoIosClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
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

    try {
      console.log('my data', data);
      const res = await fetch("/api/api-email-post", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', },
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
      <button onClick={() => setOpen(true)} className={`${props.customClass || ""} ${(props.isBanner ? "rounded-md lg:rounded-full" : "rounded-full")} px-8 py-3 h-[50px] w-full flex items-center justify-center cursor-pointer !font-semibold text-[16px] border text-white hover:!bg-white hover:!text-blue-900 bg-[#0151C1] whitespace-nowrap transition-all ease-in duration-200`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: hovered ? props.hoverColor || props.color : props.color,
          backgroundColor: hovered
            ? props.hoverBgColor || props.bgColor
            : props.bgColor,
          border: props.ctaBorder
            ? props.ctaBorder.replace(/_/g, " ")
            : undefined,
          fontWeight: props.fontWeight || "400",
        }}>

        {props.text ? props.text : 'Request a Free Quote'}

        {props.showIcon == false ? '' : <IoIosArrowForward size={20} />}
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-30">
        <DialogBackdrop transition className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel transition className="relative !max-w-[800px] transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">

              <button onClick={() => setOpen(false)} className="absolute bg-red right-2.5 top-2.5 cursor-pointer"> <IoIosClose size={27} className="text-black bg-gray-200 hover:bg-gray-300 rounded-full" /> </button>

              <div className="flex flex-col md:flex-row gap-6 bg-white rounded-[14px]">
                <div className="md:w-1/2 rounded-[14px] flex flex-col justify-center lg:rounded-[14px_0px_0px_14px] bg-[url(/assets/component/Modal-Banner.webp)] bg-no-repeat bg-cover py-6 px-6">
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
                  <ul className="list-disc pl-10 mb-4 text-white ">
                    <li className="p-[5px] text-[12px] font-medium leading-3.5">
                      3 Months Free Hosting on Your Tax & Accounting Software.
                    </li>
                    <li className="p-[5px] text-[12px] font-medium leading-3.5">
                      Valid on Annual Prepay Plans
                    </li>
                    <li className="p-[5px] text-[12px] font-medium leading-3.5">
                      <OfferExpiry />{" "}
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
                      className="bg-transparent text-white px-3 py-1 cursor-pointer rounded-md border border-white flex items-center gap-2 hover:bg-white/10 transition-all duration-500"
                      onClick={() => { $zoho.salesiq.floatwindow.open(); }}
                    >
                      Chat Now
                      <FaAngleRight size={20} />
                    </button>
                  </div>
                </div>
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
                      aria-describedby="Name"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="flex gap-1">
                      <select value={application}
                        onChange={(e) => setApplication(e.target.value)} className="flex-1 border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500" style={{ color: '#929292' }}>
                        {applications.map((app, index) => (
                          <option key={index} value={app.value} className="placeholder-[#929292]">
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
                      <select value={countryCodes} onChange={(e) => setCountryCodes(e.target.value)} className="w-1/4 relative border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500" style={{ color: '#929292' }}>
                        <option defaultValue="+1">Code</option>
                        {ListCountryCodes.map((code) => (
                          <option key={code.code} value={code.code}>
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
                    <select name="about_us"
                      onChange={(e) => setHearAboutUs(e.target.value)}
                      required
                      value={hearAboutUs} className="w-full border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500" style={{ color: '#929292' }}>
                      <option value="">How did you hear about us?</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="Email &#x2F; Newsletter"> Email / Newsletter</option>
                      <option value="Linkedin">Linkedin</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Reffered by a Friend"> Reffered by a Friend </option>
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
                      <Link href="/privacy-policy" className="text-blue-700 underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <div className="pb-3">
                      <button type="submit"
                        className=" bg-[#013d8e] cursor-pointer border-[1.5px_solid_#e9e9e9] text-white px-3 py-2 rounded-sm font-medium hover:bg-[#013e8eed] w-full md:w-[11vw] h-10 flex justify-center">
                        {isSubmit ? (
                          <span className="bg-blue-800 rounded-full">
                            <AiOutlineLoading size={25} className="animate-spin" />
                          </span>
                        ) : ('Get Started')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
