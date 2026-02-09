'use client'
import React, { useState, useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { IoIosClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import toast from "react-hot-toast";
import ListCountryCodes from "@/lib/countryCodes";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";

export default function PricingModal({ selectedApps = [] }) {

  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
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
  const [appSummry, setAppSummry] = useState(selectedApps);

  useEffect(() => {
    setAppSummry([...selectedApps]);
  }, [selectedApps]);


  console.log("FormModal received selectedApps:", appSummry);

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
    try {
      console.log('Form submitted with apps:', selectedApps);
      toast.success("Thank you, Form Submitted Successfully");
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full px-8 py-3 h-[50px] w-full flex items-center justify-center cursor-pointer !font-semibold text-[16px] border text-white hover:!bg-white hover:!text-blue-900 bg-[#0151C1] whitespace-nowrap"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Request a Free Quote
        <IoIosArrowForward size={20} />
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-30">
        <DialogBackdrop transition className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-0">
            <DialogPanel transition className="relative w-full max-w-[830px] transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8">
              <button onClick={() => setOpen(false)} className="absolute bg-red right-2.5 top-2.5 cursor-pointer">
                <IoIosClose size={27} className="text-black bg-gray-200 hover:bg-gray-300 rounded-full" />
              </button>
              <div className="flex flex-col md:flex-row gap-6 bg-white rounded-[14px]">
                <div className="flex-1 lg:rounded-l-[14px] py-6 px-6 bg-[url('/assets/component/Modal-Banner.webp')] bg-contain">
                  <div className="flex items-center gap-1 mb-4">
                    <h3 className="h-[31px] font-semibold !text-white !text-[20px] leading-[154%] tracking-[0.01em] text-center">
                      Your Configuration
                    </h3>
                  </div>

                  <div>
                    <div className="mb-4">
                      <h4 className="!text-[15px] font-medium !text-white mb-3">Selected Applications</h4>
                      <div className="space-y-3">

                        <div className="space-y-3 max-h-[159px] overflow-y-auto pr-2 custom-scrollbar">
                          {appSummry.map((app) => (
                            <div
                              key={app.name}
                              className="flex items-center justify-between py-2 px-4 bg-white rounded-xl"
                            >
                              <div>
                                <div className="font-medium text-gray-900">{app.name}</div>
                                <div className="flex items-center gap-2 mt-1">

                                  <span
                                    className={`inline-flex font-semibold items-center px-2 py-1 rounded-xl text-xs
                                    ${app.type === "shared" ? "bg-[#0C0C48] text-white " : ""}
                                    ${app.type === "dedicated" ? "bg-[#ffd900] text-black" : ""}`}
                                  >
                                    {app.type.charAt(0).toUpperCase() + app.type.slice(1)}
                                  </span>

                                  <span className="text-sm font-medium text-[#B9B1B1]">
                                    {app.users} user{app.users > 1 ? 's' : ''}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-gray-900">${app.totalPrice}/mo</div>
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="!text-[15px] font-medium !text-white mb-3">Resources</h4>
                      <div className="justify-between py-2 px-4 bg-white rounded-xl ">
                        <div className="text-[14px] font-medium overflow-y-auto">
                          <div className="bg-white rounded-xl max-h-[80px] overflow-y-auto pr-2">
                            <div className="flex justify-between py-1 text-[14px] font-medium">
                              Storage : {appSummry.reduce((sum, app) => sum + (app.storage || 0), 0)} GB
                              <span className="text-black">Free</span>
                            </div>
                            <div className="flex justify-between py-2 text-[14px] font-medium">
                              <span className="text-black">
                                RAM : {appSummry.reduce((sum, app) => sum + (app.ram || 0), 0)} GB
                              </span>
                              <span className="text-black">Free</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-solid !border-gray-200">
                      <h4 className="font-semibold !text-xl !text-gray-900 mb-3">Pricing Summary</h4>
                      <div className="space-y-2 mt-1">
                        <div className="flex justify-between">
                          <span className="text-sm text-[#535252]">Monthly cost:</span>
                          <span className="text-sm font-medium">${selectedApps.reduce((sum, app) => sum + app.totalPrice, 0)
                          }/mo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#535353]">Billing Period</span>
                          <span className="text-sm font-medium">Monthly</span>
                        </div>
                        <hr className="my-3" />
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-900">Total (monthly):</span>
                          <span className="font-bold text-[#2563EB] text-lg">${selectedApps.reduce((sum, app) => sum + app.totalPrice, 0)
                          }</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 mt-0 md:mt-3 py-[15px_24px] lg:px-[5px_24px] px-5">
                  <div className="pb-3 mb-1 text-center">
                    <span className="text-[20px] font-bold !text-[#104195] block">
                      Get A Free Quote Today
                    </span>
                    <p className="!text-[15px] !leading-[22px] text-[#6e6e6e]">
                      Share your details and get instant subscription info
                    </p>
                    <p className="!text-[9px] text-black -mt-1">No CC Required • No Long-term Contracts</p>
                  </div>
                  <form className="mt-5 space-y-2 px-4" onSubmit={handleSubmitCustmizedHosting}>
                    <input
                      type="text"
                      className="w-full border mt-4 border-gray-200 !font-[400] !placeholder-[#6e6e6e] rounded-xl px-4 py-3 !text-[15px] focus:ring-blue-500 focus:border-blue-500"
                      aria-describedby="Name"
                      placeholder="Name*"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500 mt-2"
                      aria-describedby="Name"
                      placeholder="Company"
                      required
                      type="text"
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
                        className="flex-1 border font-normal border-gray-300 rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500 mt-2"
                      placeholder="Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="mt-2">
                      <select name="about_us"
                        onChange={(e) => setHearAboutUs(e.target.value)}
                        required
                        value={hearAboutUs} className="w-full border border-gray-200 !font-[400] rounded-lg px-3 py-3 !text-[16px] focus:ring-blue-500 focus:border-blue-500" style={{ color: '#929292' }}>
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
                    </div>

                    <div className="pt-3 mt-5">
                      <button
                        type="submit"
                        className="bg-blue-800 cursor-pointer border border-[#e9e9e9] text-white px-3 py-3 rounded-xl font-medium hover:bg-[#013e8eed] w-full h-14 flex items-center justify-center"
                      >
                        {isSubmit ? (
                          <span className="bg-[#0151C1] rounded-full">
                            <AiOutlineLoading size={25} className="animate-spin" />
                          </span>
                        ) : (
                          'Get Started'
                        )}
                      </button>
                    </div>
                    <p className="!text-[11px] text-[#6e6e6e] !leading-[18px] !font-medium mt-3 mb-4">
                      By submitting your details, you agree to accept Sagenext's Terms of Use and{" "}
                      <Link href="/privacy-policy" className="text-[#2563EB] underline">
                        Privacy Policy
                      </Link>.
                    </p>
                  </form>
                </div>
              </div>
              <style jsx>{`
                      .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
                      }
                      .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      .custom-scrollbar::-webkit-scrollbar-thumb {
                        background-color: #c1c1c1;
                        border-radius: 9999px;
                      }
                      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background-color: #a1a1a1;
                      }
                      `}</style>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
