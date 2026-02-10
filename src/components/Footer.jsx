"use client";

import React, { useState, useRef } from "react";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import { ImFacebook2, ImYoutube, ImLinkedin2 } from "react-icons/im";
import { FaXTwitter, FaPinterestP, FaInstagram, FaGooglePlusG, } from "react-icons/fa6";
import toast from "react-hot-toast";
import getCurrentYear from "@lib/utils";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Turnstile } from "@marsidev/react-turnstile";
const FormModal = React.lazy(() => import("@/components/FormModal"));

const Solutions = [
  { text: "QuickBooks Hosting", href: "/quickbooks-hosting" },
  { text: "Buy QuickBooks License", href: "/buy-quickbooks-license" },
  { text: "Sage Hosting", href: "/sage-hosting" },
  { text: "Tax Software Hosting", href: "/tax-software-hosting" },
  { text: "Small Business Hosting", href: "/small-business-hosting" },
  { text: "Law Firms Hosting", href: "/law-firms-hosting" },
  { text: "Virtual Desktop Hosting", href: "/virtual-desktop-hosting" },
  {
    text: "Desktop as a Service Hosting",
    href: "/desktop-as-a-service-hosting",
  },
  { text: "Managed IT Services", href: "/managed-it-services-near-me" },
  { text: "Remote Desktop Hosting", href: "/remote-desktop-hosting" },
  {
    text: "Windows Virtual Desktop Hosting",
    href: "/windows-virtual-desktop-hosting",
  },
];
const getToKnow = [
  { text: "Pricing Plans", href: "/pricing" },
  { text: "HIPAA Compliance", href: "/hipaa-compliance" },
  { text: "Vision and mission", href: "/our-vision-and-mission" },
  { text: "Sagenext vs Group Sage", href: "/sagenext-vs-the-group-sage" },
  { text: "Service Level Agreement", href: "/service-level-agreement" },
  { text: "Cookie Policy", href: "/cookie-policy" },
  { text: "User Acceptance Policy", href: "/user-acceptance-policy" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "About Us", href: "/about-us" },
  { text: "Contact Us", href: "/contact-us" },
];
const resources = [
  { text: "Blog", href: "/blog" },
  { text: "Support", href: "/support" },
  { text: "Article", href: "/article" },
  { text: "Video", href: "/videos" },
  { text: "App Directory", href: "/app-directory" },
  { href: "/trial", text: "Get a Free trial" },
];
const company = [
  { text: "Data Centers", href: "/data-centers" },
  { text: "My Account", href: "https://portal.thesagenext.com/login" },
  { text: "Status Page", href: "https://status.thesagenext.com/" },
  { text: "Data Security", href: "/data-security" },
  { text: "Partner With Us", href: "/partners" },
  { text: "Schedule Meeting", href: "/schedule-meeting" },
];

const NewFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const turnstileRef = useRef(null);
  const [tsToken, setTsToken] = useState(null);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateData = () => {
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address"); return false;
    } return true;
  };
  const subScribeNewsLetter = async (e) => {
    e.preventDefault();

    if (isSubmit) return;
    if (!validateData()) return;
    if (!tsToken) {
      toast.error("Turnstile verification missing. Please try again.");
      return;
    }

    setIsSubmit(true);

    const data = {
      email,
      token: tsToken,
      subject: "Newsletter User Add",
      subjectUser: "Subscribed Sagenext Newsletter",
    };

    try {
      const res = await fetch("/api/newsletter-api", {
        method: "POST", body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", },
      });

      const resData = await res.json().catch(() => ({}));

      if (!res.ok || !resData?.success) {
        throw new Error(resData?.message || "Form submission failed");
      }

      toast.success("You are Subscription is Confirmed");

      turnstileRef.current?.reset?.();
      setTsToken(null);

    } catch (error) {
      toast.error("An error occurred while Subscribing you");
      turnstileRef.current?.reset?.();
      setTsToken(null);
    } finally {
      setEmail("");
      setIsSubmit(false);
    }
  };
  return (
    <>
      <section className="lg:pt-[90px] lg:pb-[60px] lg:bg-[url(/footer/footerbg.webp)] bg-left-top bg-[length:100%_102%] bg-no-repeat bg-[#011d45] py-[50px] relative">
        <div className="container mx-auto">
          <div className="flex justify-between max-md:flex-wrap max-md:p-5 max-md:items-center">
            <div className="grid max-lg:place-items-center max-lg:text-center gap-[18px] mb-10">
              <img src="/footer/logo.png" alt="logo" loading="lazy" height={40} className="object-fit-cover" width={218} />
              <p className="text-[#e6e6e6]/80 max-w-[322px] lg:max-w-[400px] leading-[140%]!">
                Sagenext Infotech LLC 3540 Wheeler RD STE 109 Wheeler Executive
                Center Augusta GA 30909 (USA)
              </p>
              <label htmlFor="follow_us" className="text-white/30 text-xs"> Follow us </label>

              {/* Social Links */}
              <div className="max-w-[77%] lg:max-w-fit flex items-center justify-center lg:justify-stretch flex-wrap gap-2.5 *:border *:border-white/30 *:h-[45px] *:w-[45px] *:flex *:items-center *:justify-center *:rounded-full *:hover:[&>svg]:scale-125 *:transition-all **:transition-all **:duration-300">
                <a href="https://www.facebook.com/sagenextinfo" target="_blank" rel="nofollow" aria-label="Facebook"> <ImFacebook2 size={16} color="white" /> </a>
                <a href="https://www.linkedin.com/company/sagenext-infotech-llc" target="_blank" rel="nofollow" aria-label="Linkedin" > <ImLinkedin2 size={16} color="white" /> </a>
                <a href="https://www.pinterest.com/Sagenextinfotech/" target="_blank" rel="nofollow" aria-label="Pinterest"> <FaPinterestP size={16} color="white" /> </a>
                <a href="https://twitter.com/sagenextinfo" aria-label="Twitter" target="_blank" rel="nofollow"> <FaXTwitter size={16} color="white" /> </a>
                <a href="https://www.youtube.com/user/sagenextinfo" aria-label="Youtube" target="_blank" rel="nofollow"> <ImYoutube width={22} height={16} color="white" /> </a>
                <a href="https://g.co/kgs/wLwqWbR" aria-label="Google" target="_blank" rel="nofollow"> <FaGooglePlusG size={16} color="white" /></a>
                <a href="https://www.instagram.com/sagenext_infotech/" aria-label="Instagram" target="_blank" rel="nofollow"> <FaInstagram size={16} color="white" /> </a>
              </div>
            </div>

            <div className="text-center lg:text-end flex flex-col lg:items-end mb-10 gap-[18px]">
              <label className="font-medium text-[40px] max-lg:text-[32px] leading-[120%] tracking-[-2%] mb-0 lg:text-end text-[#e6e6e6]" htmlFor="email">
                Join Our Newsletter
              </label>
              <p className="text-[#e6e6e6]/80 max-w-[322px] lg:max-w-[400px] leading-[140%]!">
                Let&apos;s stay connected! Subscribe for expert insights,
                special offers, and updates.
              </p>
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                onSuccess={(token) => setTsToken(token)}
                onExpire={() => setTsToken(null)}
                onError={() => setTsToken(null)}
              />
              <div className="mb-3 relative mt-5 w-4/5 h-[49px] flex items-center cursor-pointer ml-auto rounded-full border border-[#dfdfdf] max-lg:mx-auto">
                <input autoComplete="true" type="text" id="email" className="flex flex-grow flex-shrink-0 basis-[calc(100%-99px)] text-sm outline-0 bg-black/0 pt-[0.7rem] pb-[0.7rem] pl-[15px] text-white placeholder:text-white" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="absolute text-black text-[13px] font-medium h-[43px] w-[99px] right-0.5 top-0.5 rounded-full bg-[#f4ac04]" type="submit" onClick={subScribeNewsLetter}>
                  {isSubmit ? "Submitting..." : "Subscribe"}{" "}
                </button>
              </div>
            </div>
          </div>

          {/* center border */}
          <div className="h-0.5 w-full mb-[50px] bg-radial from-white/70 to-black/0" />

          <div className="grid lg:grid-cols-12 gap-[35px]">
            <div className="lg:col-span-3 p-9 rounded-[36px] whitespace-nowrap border border-white/40 bg-[#0d2445BD] flex flex-col">
              <h3 className="tracking-[0.18px] text-white! font-semibold! text-xl! leading-6 pb-[17px] border-b-2! border-[#ffffff38]">
                Accounting Solutions
              </h3>

              <div className="flex flex-col pt-2.5 gap-[15px] *:relative *:overflow-hidden *:h-[21px] *:leading-[23px]">
                {Solutions.map((ctaItem, index) =>
                  ctaItem.href == "#" ? (
                    <p key={index} className="group decoration-white! text-white!" style={{ transition: "transform .45s cubic-bezier(.25, 1.7, .7, 1), opacity .45s cubic-bezier(.54, 1.39, .93, .76)", }}>
                      <span className="absolute left-0 opacity-0 group-hover:opacity-100 -translate-y-[19px] group-hover:-translate-y-0.5 transition-all ease-in-out underline"> {ctaItem.text} </span>
                      <span className="absolute left-0 opacity-100 group-hover:opacity-0 group-hover:translate-y-[19px] -translate-y-0.5 transition-all ease-in-out"> {ctaItem.text} </span>
                    </p>
                  ) : (
                    <a key={index} href={ctaItem.href} className="group decoration-white! text-white!"
                      style={{ transition: "transform .45s cubic-bezier(.25, 1.7, .7, 1), opacity .45s cubic-bezier(.54, 1.39, .93, .76)", }}>
                      <span className="absolute left-0 opacity-0 group-hover:opacity-100 -translate-y-[19px] group-hover:-translate-y-0.5 transition-all ease-in-out underline">
                        {ctaItem.text}
                      </span>
                      <span className="absolute left-0 opacity-100 group-hover:opacity-0 group-hover:translate-y-[19px] -translate-y-0.5 transition-all ease-in-out">
                        {ctaItem.text}
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="lg:col-span-3 p-9 rounded-[36px] whitespace-nowrap border border-white/40 bg-[#0d2445BD]">
              <h3 className="tracking-[0.18px] text-white! font-semibold! text-xl! leading-6 pb-[17px] border-b-2! border-[#ffffff38]">
                Get to Know Us
              </h3>
              <div className="flex flex-col pt-2.5 gap-[15px] *:relative *:overflow-hidden *:h-[21px] *:leading-[23px]">
                {getToKnow.map((ctaItem, index) =>
                  ctaItem.href == "#" ? (
                    <p key={index} className="group decoration-white! text-white!" style={{ transition: "transform .45s cubic-bezier(.25, 1.7, .7, 1), opacity .45s cubic-bezier(.54, 1.39, .93, .76)", }}>
                      <span className="absolute left-0 opacity-0 group-hover:opacity-100 -translate-y-[19px] group-hover:-translate-y-0.5 transition-all ease-in-out underline">
                        {ctaItem.text}
                      </span>
                      <span className="absolute left-0 opacity-100 group-hover:opacity-0 group-hover:translate-y-[19px] -translate-y-0.5 transition-all ease-in-out">
                        {ctaItem.text}
                      </span>
                    </p>
                  ) : (
                    <a key={index} href={ctaItem.href} className="group decoration-white! text-white!" style={{ transition: "transform .45s cubic-bezier(.25, 1.7, .7, 1), opacity .45s cubic-bezier(.54, 1.39, .93, .76)", }}>
                      <span className="absolute left-0 opacity-0 group-hover:opacity-100 -translate-y-[19px] group-hover:-translate-y-0.5 transition-all ease-in-out underline">
                        {ctaItem.text}
                      </span>
                      <span className="absolute left-0 opacity-100 group-hover:opacity-0 group-hover:translate-y-[19px] -translate-y-0.5 transition-all ease-in-out">
                        {ctaItem.text}
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="lg:col-span-6 grid lg:grid-cols-2 gap-y-[22px] gap-x-[35px] *:col-span-1 *:lg:last:col-span-2">
              <div className="p-9 rounded-[36px] whitespace-nowrap border border-white/40 bg-[#0d2445BD]">
                <h3 className="tracking-[0.18px] text-white! font-semibold! text-xl! leading-6 pb-[17px] border-b-2! border-[#ffffff38]">
                  Resources
                </h3>
                <div className="flex flex-col pt-2.5 gap-[15px] *:relative *:overflow-hidden *:h-[21px] *:leading-[23px]">
                  {resources.map((ctaItem, index) =>
                    ctaItem.href == "#" ? (
                      <p key={index} className="group decoration-white! text-white!" style={{ transition: "transform .45s cubic-bezier(.25, 1.7, .7, 1), opacity .45s cubic-bezier(.54, 1.39, .93, .76)", }}>
                        <span className="absolute left-0 opacity-0 group-hover:opacity-100 -translate-y-[19px] group-hover:-translate-y-0.5 transition-all ease-in-out underline">
                          {ctaItem.text}
                        </span>
                        <span className="absolute left-0 opacity-100 group-hover:opacity-0 group-hover:translate-y-[19px] -translate-y-0.5 transition-all ease-in-out">
                          {ctaItem.text}
                        </span>
                      </p>
                    ) : (
                      <a key={index} href={ctaItem.href} className="group decoration-white! text-white!" style={{ transition: "transform .45s cubic-bezier(.25, 1.7, .7, 1), opacity .45s cubic-bezier(.54, 1.39, .93, .76)", }}>
                        <span className="absolute left-0 opacity-0 group-hover:opacity-100 -translate-y-[19px] group-hover:-translate-y-0.5 transition-all ease-in-out underline">
                          {ctaItem.text}
                        </span>
                        <span className="absolute left-0 opacity-100 group-hover:opacity-0 group-hover:translate-y-[19px] -translate-y-0.5 transition-all ease-in-out">
                          {ctaItem.text}
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>

              <div className="p-9 rounded-[36px] whitespace-nowrap border border-white/40 bg-[#0d2445BD]">
                <h3 className="tracking-[0.18px] text-white! font-semibold! text-xl! leading-6 pb-[17px] border-b-2! border-[#ffffff38]">
                  Company
                </h3>
                <div className="flex flex-col pt-2.5 gap-[15px] *:relative *:overflow-hidden *:h-[21px] *:leading-[23px]">
                  {company.map((ctaItem, index) =>
                    ctaItem.href == "#" ? (
                      <p
                        key={index}
                        className="group decoration-white! text-white!"
                        style={{
                          transition:
                            "transform .45s cubic-bezier(.25, 1.7, .7, 1), opacity .45s cubic-bezier(.54, 1.39, .93, .76)",
                        }}
                      >
                        <span className="absolute left-0 opacity-0 group-hover:opacity-100 -translate-y-[19px] group-hover:-translate-y-0.5 transition-all ease-in-out underline">
                          {ctaItem.text}
                        </span>
                        <span className="absolute left-0 opacity-100 group-hover:opacity-0 group-hover:translate-y-[19px] -translate-y-0.5 transition-all ease-in-out">
                          {ctaItem.text}
                        </span>
                      </p>
                    ) : (
                      <a
                        key={index}
                        href={ctaItem.href}
                        className="group decoration-white! text-white!"
                        style={{
                          transition:
                            "transform .45s cubic-bezier(.25, 1.7, .7, 1), opacity .45s cubic-bezier(.54, 1.39, .93, .76)",
                        }}
                      >
                        <span className="absolute left-0 opacity-0 group-hover:opacity-100 -translate-y-[19px] group-hover:-translate-y-0.5 transition-all ease-in-out underline">
                          {ctaItem.text}
                        </span>
                        <span className="absolute left-0 opacity-100 group-hover:opacity-0 group-hover:translate-y-[19px] -translate-y-0.5 transition-all ease-in-out">
                          {ctaItem.text}
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>

              <div className="lg:col-span-3 px-9 pt-8 pb-6 rounded-[36px] whitespace-nowrap border border-white/40 bg-[#0d2445BD]">
                <h3 className="text-xl! leading-6! pb-[17px] font-bold! text-white! tracking-[0.18px]">
                  Get in Touch
                </h3>

                <div
                  className={`flex flex-col lg:flex-row flex-wrap items-stretch lg:items-center justify-between gap-5 lg:gap-3`}
                >
                  <div className="flex gap-3 flex-col">
                    <a
                      href="mailto:sales@thesagenext.com"
                      className="flex gap-2 !text-white"
                    >
                      <MdOutlineMail
                        color="white"
                        size={24}
                      />{" "}
                      sales[at]thesagenext.com
                    </a>
                    <a
                      href="tel:+1-855-922-7243"
                      className="flex gap-2 !text-white"
                    >
                      <MdOutlinePhone
                        color="white"
                        size={24}
                      />{" "}
                      +1-855-922-7243
                    </a>
                  </div>
                  <div>
                    <FormModal
                      text="Get a Quote"
                      customClass="bg-white text-blue-900! hover:bg-[#0151C1]! hover:text-white! border-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#0d2445]">
        <div className="container mx-auto">
          <div className="*:leading-[22px]! max-w-[615px] mx-auto pt-[25px] px-1.5 md:px-[25px] pb-2 *:text-[13px]! text-center text-[#d6d6d6]">
            <p>
              Sagenext Infotech LLC is an independent cloud hosting company that
              hosts legally licensed QuickBooks, Sage Products, and other tax
              and accounting applications.
            </p>

            {/* separator */}
            <div className="h-0.5 w-[55%] bg-radial from-white/70 to-black/0 mt-2.5 mx-auto mb-2" />

            <p>
              <strong className="font-black">Copyright © </strong>{" "}
              {getCurrentYear()} Sagenext Infotech LLC. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* payment methods */}
        <div className="flex py-3 bg-white justify-center items-center px-3 mb-5">
          <div className="flex items-center justify-center flex-wrap gap-y-[15px] gap-x-10 mb-2 px-5">
            <img loading="lazy" src="/footer/f1.svg" alt="american express" width={58} height={25} />
            <img loading="lazy" src="/footer/f2.svg" alt="visa" width={35} height={25} />
            <img loading="lazy" src="/footer/f3.svg" alt="mastercard" width={35} height={25} />
            <img loading="lazy" src="/footer/f4.svg" alt="paypal" width={45} height={25} />
            <img loading="lazy" src="/footer/f5.svg" alt="BBB Accredited business" width={60} height={30} className="h-[30px]" />
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=797fba4e-03cc-4eac-ac0d-07322de8ff08&refurl=https://www.thesagenext.com" title="DMCA.com Protection Status" rel="nofollow" target="_blank">
              <img loading="lazy" src="/footer/f6.png" alt="DMCA.com Protection Status" width={65} height={30} className="object-fit-cover" />
            </a>
            <img loading="lazy" src="/footer/f7.svg" alt="MSP Alliance" width={70} height={25} />
            <a href="https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=SECDV&v_search=https://www.thesagenext.com/&x=6&y=5" rel="nofollow" target="_blank" >
              <img loading="lazy" src="/footer/f8.svg" alt="Secured by sectigo" width={45} height={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFooter;
