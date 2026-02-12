import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import { ImFacebook2, ImYoutube, ImLinkedin2 } from "react-icons/im";
import { FaXTwitter, FaPinterestP, FaInstagram, FaGooglePlusG } from "react-icons/fa6";

import NewsletterForm from "./NewsletterForm";
import FormModal from "@/components/FormModal";

const SOLUTIONS = [
  { text: "QuickBooks Hosting", href: "/quickbooks-hosting" },
  { text: "Buy QuickBooks License", href: "/buy-quickbooks-license" },
  { text: "Sage Hosting", href: "/sage-hosting" },
  { text: "Tax Software Hosting", href: "/tax-software-hosting" },
  { text: "Small Business Hosting", href: "/small-business-hosting" },
  { text: "Law Firms Hosting", href: "/law-firms-hosting" },
  { text: "Virtual Desktop Hosting", href: "/virtual-desktop-hosting" },
  { text: "Desktop as a Service Hosting", href: "/desktop-as-a-service-hosting" },
  { text: "Managed IT Services", href: "/managed-it-services-near-me" },
  { text: "Remote Desktop Hosting", href: "/remote-desktop-hosting" },
  { text: "Windows Virtual Desktop Hosting", href: "/windows-virtual-desktop-hosting" },
];

const KNOW_US = [
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

const RESOURCES = [
  { text: "Blog", href: "/blog" },
  { text: "Support", href: "/support" },
  { text: "Article", href: "/article" },
  { text: "Video", href: "/videos" },
  { text: "App Directory", href: "/app-directory" },
  { text: "Get a Free trial", href: "/trial" },
];

const COMPANY = [
  { text: "Data Centers", href: "/data-centers" },
  { text: "My Account", href: "https://portal.thesagenext.com/login", external: true },
  { text: "Status Page", href: "https://status.thesagenext.com/", external: true },
  { text: "Data Security", href: "/data-security" },
  { text: "Partner With Us", href: "/partners" },
  { text: "Schedule Meeting", href: "/schedule-meeting" },
];

const SOCIALS = [
  { href: "https://www.facebook.com/sagenextinfo", label: "Facebook", Icon: ImFacebook2 },
  { href: "https://www.linkedin.com/company/sagenext-infotech-llc", label: "LinkedIn", Icon: ImLinkedin2 },
  { href: "https://www.pinterest.com/Sagenextinfotech/", label: "Pinterest", Icon: FaPinterestP },
  { href: "https://twitter.com/sagenextinfo", label: "Twitter/X", Icon: FaXTwitter },
  { href: "https://www.youtube.com/user/sagenextinfo", label: "YouTube", Icon: ImYoutube },
  { href: "https://g.co/kgs/wLwqWbR", label: "Google", Icon: FaGooglePlusG },
  { href: "https://www.instagram.com/sagenext_infotech/", label: "Instagram", Icon: FaInstagram },
];

function FooterLinks({ title, items = [] }) {
  return (
    <div className="p-9 rounded-[36px] border border-white/40 bg-[#0d2445BD]">
      <h3 className="tracking-[0.18px] text-white! font-semibold! text-xl! leading-6 pb-[17px] border-b-2! border-[#ffffff38]">
        {title}
      </h3>

      <ul className="pt-5 flex flex-col gap-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              target={it.external ? "_blank" : undefined}
              rel={it.external ? "nofollow noopener noreferrer" : "nofollow"}
              className="!text-white/90 hover:text-white hover:underline underline-offset-4 transition"
            >
              {it.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="lg:pt-[90px] lg:pb-[60px] lg:bg-[url(/footer/footerbg.webp)] bg-left-top bg-[length:100%_102%] bg-no-repeat bg-[#011d45] py-[50px] relative">
        <div className="container mx-auto">
          <div className="flex justify-between max-md:flex-wrap max-md:p-5 max-md:items-center gap-12">
            {/* Brand + socials */}
            <div className="grid max-lg:place-items-center max-lg:text-center gap-[18px] mb-10">
              <Image src="/footer/logo.png" alt="Sagenext" loading="lazy" width={218} height={40} className="object-contain"/>

              <p className="text-[#e6e6e6]/80 max-w-[400px] leading-[140%]!">
                Sagenext Infotech LLC 3540 Wheeler RD STE 109 Wheeler Executive Center Augusta GA 30909 (USA)
              </p>

              <span className="text-white/30 text-xs">Follow us</span>

              <div className="max-w-[77%] lg:max-w-fit flex items-center justify-center lg:justify-start flex-wrap gap-2.5">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <Link key={href} href={href} aria-label={label} target="_blank" rel="nofollow noopener noreferrer"
                    className="border border-white/30 h-[45px] w-[45px] flex items-center justify-center rounded-full hover:opacity-90 transition"
                  >
                    <Icon size={16} color="white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter (client component) */}
            <NewsletterForm />
          </div>

          {/* divider */}
          <div className="h-0.5 w-full mb-[50px] bg-radial from-white/70 to-black/0" />

          {/* Links grid */}
          <div className="grid lg:grid-cols-12 gap-[35px]">
            <div className="lg:col-span-3">
              <FooterLinks title="Accounting Solutions" items={SOLUTIONS} />
            </div>

            <div className="lg:col-span-3">
              <FooterLinks title="Get to Know Us" items={KNOW_US} />
            </div>

            <div className="lg:col-span-6 grid lg:grid-cols-2 gap-y-[22px] gap-x-[35px]">
              <FooterLinks title="Resources" items={RESOURCES} />
              <FooterLinks title="Company" items={COMPANY} />

              {/* Get in touch */}
              <div className="lg:col-span-2 px-9 pt-8 pb-6 rounded-[36px] border border-white/40 bg-[#0d2445BD]">
                <h3 className="text-xl leading-6 pb-[17px] font-bold !text-white tracking-[0.18px]">
                  Get in Touch
                </h3>

                <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center justify-between gap-5 lg:gap-3">
                  <div className="flex gap-3 flex-col">
                    <Link href="mailto:sales@thesagenext.com" className="flex gap-2 !text-white hover:underline">
                      <MdOutlineMail color="white" size={24} />
                      sales[at]thesagenext.com
                    </Link>

                    <Link href="tel:+1-855-922-7243" className="flex gap-2 !text-white hover:underline">
                      <MdOutlinePhone color="white" size={24} />
                      +1-855-922-7243
                    </Link>
                  </div>

                  <FormModal
                    text="Get a Quote"
                    customClass="bg-white text-blue-900! hover:bg-[#0151C1]! hover:text-white! border-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="bg-[#0d2445]">
        <div className="container mx-auto">
          <div className="max-w-[615px] mx-auto pt-[25px] px-1.5 md:px-[25px] pb-2 text-center text-[#d6d6d6]">
            <p className="text-[13px] leading-[22px]!">
              Sagenext Infotech LLC is an independent cloud hosting company that hosts legally licensed QuickBooks,
              Sage Products, and other tax and accounting applications.
            </p>

            <div className="h-0.5 w-[55%] bg-radial from-white/70 to-black/0 mt-2.5 mx-auto mb-2" />

            <p className="text-[13px] leading-[22px]!">
              <strong className="font-black">Copyright © </strong>
              {year} Sagenext Infotech LLC. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Payments */}
        <div className="flex py-3 bg-white justify-center items-center px-3 mb-5">
          <div className="flex items-center justify-center flex-wrap gap-y-[15px] gap-x-10 mb-2 px-5">
            <Image loading="lazy" src="/footer/f1.svg" alt="american express" width={58} height={25} />
            <Image loading="lazy" src="/footer/f2.svg" alt="visa" width={35} height={25} />
            <Image loading="lazy" src="/footer/f3.svg" alt="mastercard" width={35} height={25} />
            <Image loading="lazy" src="/footer/f4.svg" alt="paypal" width={45} height={25} />
            <Image loading="lazy" src="/footer/f5.svg" alt="BBB Accredited business" width={60} height={30} className="h-[30px]" />

            <Link
              href="https://www.dmca.com/Protection/Status.aspx?ID=797fba4e-03cc-4eac-ac0d-07322de8ff08&refurl=https://www.thesagenext.com"
              title="DMCA.com Protection Status"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <Image loading="lazy" src="/footer/f6.png" alt="DMCA.com Protection Status" width={65} height={30} className="object-contain" />
            </Link>

            <Image loading="lazy" src="/footer/f7.svg" alt="MSP Alliance" width={70} height={25} />

            <Link
              href="https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=SECDV&v_search=https://www.thesagenext.com/&x=6&y=5"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <Image loading="lazy" src="/footer/f8.svg" alt="Secured by sectigo" width={45} height={25} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}