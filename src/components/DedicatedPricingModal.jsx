"use client";
import ListCountryCodes from "@/lib/countryCodes";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";

const DedicatedPricingModal = (props) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [phone, setPhone] = useState("");
  const [countryCodes, setCountryCodes] = useState("+1");
  const [noOfUsers, setNumberOfUsers] = useState(props.users ?? 1);
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("");
  const [plan, setPlan] = useState(props.chosenPlan ?? "Starter Plan");

  //application will be default with reference to where this modal is being used
  const application = props.application;

  // open && console.log("users", props.users, noOfUsers);
  // open && console.log("plan", props.chosenPlan, plan);

  //to update the number of users when updating in the pricing card
  useEffect(() => {
    setNumberOfUsers(props.users);
  }, [props.users, open]);

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
    const token = await executeRecaptcha("submit");
    if (!token) {
      toast.error("Recaptcha verification failed");
      setIsSubmit(false);
      return;
    }

    const data = {
      name,
      email,
      phone,
      application,
      noOfUsers,
      selectedCountryCode: countryCodes,
      plan,
      token,
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
      <button
        onClick={() => setOpen(true)}
        className={`${props.customClass || ""} ${
          props.isBanner ? "rounded-md lg:rounded-full" : "rounded-full"
        } px-8 py-3 h-[50px] w-full flex items-center justify-center cursor-pointer !font-semibold text-[16px] border text-white hover:!bg-white hover:!text-blue-900 bg-[#0151C1] whitespace-nowrap transition-all ease-in duration-200`}
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
        }}
      >
        {props.text ? props.text : "Request a Free Quote"}

        {props.showIcon == false ? "" : <IoIosArrowForward size={22} />}
      </button>
      <Dialog
        open={open}
        onClose={setOpen}
        className="relative z-30"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <DialogPanel
              transition
              className="relative !max-w-[400px] transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute bg-red right-2.5 top-2.5 cursor-pointer"
              >
                <IoIosClose
                  size={27}
                  className="text-black bg-gray-200 hover:bg-gray-300 rounded-full"
                />
              </button>

              <div className="flex flex-col md:flex-row gap-6 bg-white rounded-[14px]">
                <div className="mt-0 md:mt-3 py-[15px_24px] px-5">
                  <div className="pb-3 mb-1 text-center">
                    <span className="text-[18px] font-bold !text-[#464646] block">
                      Get A Free Quote Today
                    </span>
                    <p className="!text-[13px] !font-medium !leading-[22px] text-[#6e6e6e]">
                      Share your details and get instant subscription info
                    </p>
                  </div>
                  <form
                    className="mt-0 space-y-3"
                    onSubmit={handleSubmitCustmizedHosting}
                  >
                    <div className="flex gap-1">
                      <select
                        type="text"
                        className="w-2/3 border border-gray-200 font-semibold !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                        aria-describedby="Plan Chosen"
                        placeholder="Plan Chosen"
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                      >
                        <option value="Starter Plan">Starter Plan</option>
                        <option value="Intermediate Plan">
                          Intermediate Plan
                        </option>
                        <option value="Advance Plan">Advance Plan</option>
                      </select>

                      <select
                        value={noOfUsers}
                        className="w-1/3 relative border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) => setNumberOfUsers(e.target.value)}
                      >
                        {/* <option defaultValue="+1">select</option> */}
                        {Array.from({ length: 15 }).map((_, number) => (
                          <option
                            key={number}
                            value={number + 1}
                            defaultChecked={noOfUsers === props.users}
                          >
                            {number + 1} Users
                          </option>
                        ))}
                      </select>
                    </div>

                    <input
                      type="text"
                      className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                      aria-describedby="Name"
                      placeholder="Your Name*"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <input
                      type="email"
                      name="email"
                      className="w-full border border-gray-200 !font-[400] !placeholder-[#929292] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Email Address*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <select
                        value={countryCodes}
                        onChange={(e) => setCountryCodes(e.target.value)}
                        className="w-1/4 relative border border-gray-200 !font-[400] rounded-lg px-3 py-2.5 !text-[16px] focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Country Code"
                      >
                        {/* <option defaultValue="+1">select</option> */}
                        {ListCountryCodes.map((code) => (
                          <option
                            key={code.code}
                            value={code.code}
                            defaultChecked={countryCodes === code.code}
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

                    <p className="text-[10px]! text-[#6e6e6e] !leading-[18px] !font-medium mt-3 mb-4 text-center">
                      By submitting your details, you agree to accept Sagenext's
                      Terms of Use and{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-blue-700 underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <div className="pb-3 w-full">
                      <button
                        type="submit"
                        className=" bg-[#013d8e] cursor-pointer border-[1.5px_solid_#e9e9e9] text-white px-3 py-3 rounded-lg font-medium hover:bg-[#013e8eed] w-full flex justify-center"
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
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DedicatedPricingModal;
