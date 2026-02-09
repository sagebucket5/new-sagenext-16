"use client";

import { useState } from "react";
import { FiArrowRight, FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import DedicatedPricingModal from "../DedicatedPricingModal";

const pricingMap = {
  1: 59,
  2: 80,
  3: 115,
  4: 150,
  5: 180,
  6: 210,
  7: 240,
  8: 260,
  9: 285,
  10: 310,
  11: 335,
  12: 345,
  13: 365,
  14: 385,
  15: 390,
};
const RAM = {
  1: 4,
  2: 6,
  3: 6,
  4: 8,
  5: 10,
  6: 10,
  7: 10,
  8: 12,
  9: 12,
  10: 14,
  11: 14,
  12: 16,
  13: 16,
  14: 18,
  15: 18,
};
const storageMap = {
  1: 6,
  2: 12,
  3: 18,
  4: 24,
  5: 30,
  6: 36,
  7: 42,
  8: 56,
  9: 63,
  10: 70,
  11: 77,
  12: 120,
  13: 130,
  14: 140,
  15: 195,
};
const starterPlan = [
  "Access Anytime, Anywhere",
  "Supports all QuickBooks versions (Pro, Premier, or Enterprise)",
  "Fully assisted setup & migration",
  " GB Dedicated Storage per User",
  "99.99% Uptime with High-Speed Storage",
  "Automated Backups (30-Day Retention)",
  "Secure Multi-User Access",
  "Tier 4 & Tier 5 data centers",
  "SOC 1, SOC 2 & SOC 3 Compliant",
  "24x7 Expert Support (from QuickBooks and cloud specialists)",
  "Google Chrome, Adobe Reader, and secure internet browser included.",
  "On-demand Microsoft Excel",
  "Network firewalls & enterprise-grade antivirus",
  "Unlimited bandwidth",
  "Enterprise-Grade Security",
  "High-speed storage drives",
];
const intermediatePlan = [
  "Mac, mobile & multi-monitor support",
  "Automated backups (45 days) + offsite backups for added data protection",
  " GB storage per user",
  "SSD-Based High-Performance Infrastructure",
  "Security Information & Event Management (SIEM)",
  "Advanced Security with SIEM Monitoring",
  "SSD-based infrastructure",
  "Business Continuity & Disaster Recovery Built In",
  "Host multiple QuickBooks files",
  "High-Performance Dedicated Server Resources",
  "Remote printing support",
  "Premium support",
  "Copy & paste file transfer",
  "Automatic QuickBooks updates",
  "On-demand Microsoft Word & Excel",
  "Office 365 sync",
  "App integrations (Expensify, Bill.com, WooCommerce, Avalara, Fishbowl & more)",
  "User-Level Access Controls & Permissions",
  "Secure VPN & MFA Options",
  "Unlimited Bandwidth with No Throttling",
  "Tier-4 & Tier-5 Data Center Hosting",
  "SOC 1, SOC 2 & SOC 3 Compliant Infrastructure",
];
const advancePlan = [
  "Multi-Factor Authentication (MFA)",
  "Zero Trust security framework",
  " GB Dedicated Storage per User",
  "Unlimited QuickBooks File Storage",
  "NVMe super-fast drives",
  "User & folder permissions",
  "Unlimited storage (QuickBooks files only)",
  "High-availability infrastructure with redundancy",
  "Remote app setup",
  "Advanced User & Folder Permissions",
  "Custom Idle Time & Session Controls",
  "Next-Generation Firewall Protection",
  "Dedicated Security Operations Team",
  "24×7 monitoring",
  "Secure Browser-Based Login (No Local RDP Exposure)",
  "Remote App Setup & Custom Configuration",
  "Next-generation firewall layer",
  "Dedicated security team",
  "User idle time control",
  "vSAN storage",
  "Custom idle time settings",
  "Secure browser-based login",
  "Role-Based Access Control (RBAC)",
  "IP Whitelisting & Geo-Blocking",
  "End-to-End Encryption (Data at Rest & in Transit)",
  "Compliance-Ready Hosting (SOC 1, SOC 2, SOC 3)",
  "Audit Logs & Activity Tracking",
  "Unlimited Bandwidth (No Throttling)",
  "Priority White-Glove Support",
];

const PricingCard = (props) => {
  const addUser = () => {
    if (props.users === 15) return;
    else {
      props.setUsers((prev) => prev + 1);
    }
  };

  const removeUser = () => {
    if (props.users === props.minUsers) return;
    else {
      props.setUsers((prev) => prev - 1);
    }
  };

  return (
    <>
      <div
        className={`max-md:min-w-full lg:w-full lg:max-w-[396px] bg-white ${
          props.popular ? "h-[938px]" : "h-[900px]"
        } flex flex-col items-center justify-start border-[3px] border-[#E2EBFF] rounded-[19px] px-5 transition-all relative`}
      >
        <div className={`w-full flex flex-col gap-5 text-center relative`}>
          {props.popular && (
            <>
              <div className="absolute top-0 left-1/2 -translate-1/2 bg-linear-to-b from-[#102457] to-[#9EE6F6] font-semibold text-[10px] px-3 py-2 text-white rounded-full">
                MOST POPULAR
              </div>
            </>
          )}

          <h3 className="flex flex-col items-center gap-2 mb-0!">
            <span
              className={`text-xl font-bold uppercase text-[#1C1C1C] border border-t-0 border-[#2371D8]/10 w-fit px-10 pb-2 rounded-b-2xl ${
                props.popular ? "pt-6" : "pt-4"
              }`}
            >
              {props.plan}
            </span>
            <span className="text-[13px]! text-[#1c1c1c]/70! font-normal">
              {" "}
              {props.subHeading ?? "QuickBooks Dedicated Hosting Pricing"}
            </span>
          </h3>

          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex items-baseline gap-2">
              <div className="text-5xl text-green-5">
                <span className="text-3xl font-medium line-through">
                  ${props.cost + 5}
                </span>{" "}
                <span className="font-semibold text-[#0151C1]">
                  ${props.cost}
                </span>{" "}
                <span className="!text-[13px] font-medium  text-[#909090]">
                  per user/month
                </span>
              </div>
            </div>

            {!props.showDynamicList && (
              <span className="text-sm font-medium text-[#656565]">
                Save Upto 10% with Annual Plan
              </span>
            )}
          </div>

          <div className="grid space-y-2 bg-[#F9FBFA] rounded-xl py-4">
            <span className="font-semibold text-black/80">Number of users</span>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={removeUser}
                className="cursor-pointer disabled:opacity-50"
                disabled={props.users === props.minUsers}
              >
                <FiMinus
                  size={44}
                  className="bg-[#D6F3FB] p-1.5 rounded-full border border-[#5EB2D0] text-[#0151C1]"
                />
              </button>
              <span className="text-2xl border border-[#E5E5E5] rounded max-w-[80px] h-[48px] w-full place-content-center">
                {props.users}
              </span>
              <button
                onClick={addUser}
                className="cursor-pointer disabled:opacity-50"
                disabled={props.users === 15}
              >
                <GoPlus
                  size={44}
                  className="bg-[#D6F3FB] p-1 rounded-full border border-[#5EB2D0] text-[#0151C1]"
                />
              </button>
            </div>
          </div>

          <DedicatedPricingModal
            text={props.ctaText || "Get Started"}
            icon={<FiArrowRight size={20} />}
            customClass="h-[55px]"
            users={props.users}
            application="QuickBooks"
            chosenPlan={`${props.plan} Plan`}
          />
        </div>

        {props.description && (
          <div className="text-center mt-5 font-semibold text-sm text-[#535353] leading-[154%]">
            {props.description}
          </div>
        )}

        <div
          className={`w-full flex flex-col items-start *:pl-5 ${
            props.description ? "pt-3" : "pt-10"
          } gap-4 max-h-fit overflow-y-hidden`}
        >
          <ul className="w-full space-y-4.5 *:cursor-default! pb-5 max-h-full overflow-y-auto">
            {props.showDynamicList && (
              <>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 aspect-square rounded-full bg-[#A8C6ED] ring-2 ring-blue-400/30" />
                  <span className="text-[#767575] font-medium text-[15px]">
                    Users: {props.minUsers} (add more as needed)
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 aspect-square rounded-full bg-[#A8C6ED] ring-2 ring-blue-400/30" />
                  <span className="text-[#767575] font-medium text-[15px]">
                    RAM: {props.RAM}GB
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 aspect-square rounded-full bg-[#A8C6ED] ring-2 ring-blue-400/30" />
                  <span className="text-[#767575] font-medium text-[15px]">
                    Storage: {props.storage}GB (6GB per user)
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 aspect-square rounded-full bg-[#A8C6ED] ring-2 ring-blue-400/30" />
                  <span className="text-[#767575] font-medium text-[15px]">
                    Included Apps: {props.apps}
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 aspect-square rounded-full bg-[#A8C6ED] ring-2 ring-blue-400/30" />
                  <span className="text-[#767575] font-medium text-[15px]">
                    Save up to 10% with annual billing
                  </span>
                </li>
              </>
            )}

            <li>
              <span className="font-semibold">
                {props.showFeaturesHeading
                  ? `${props.plan} Plan Features`
                  : "What's included:"}
              </span>
            </li>

            {props.contents.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3"
              >
                <div className="h-2 w-2 aspect-square rounded-full bg-[#A8C6ED] ring-2 ring-blue-400/30" />
                {item.includes("storage per user") ||
                item.includes("Storage per User") ? (
                  <span className="text-[#767575] font-medium text-[15px]">
                    {props.storage} {item}
                  </span>
                ) : (
                  <span className="text-[#767575] font-medium text-[15px]">
                    {item}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-3 right-3 bg-white rounded-full border border-neutral-200 p-1 shadow-md">
          <MdKeyboardDoubleArrowDown size={16} />
        </div>
      </div>
    </>
  );
};

const QbDedicatedHostingPricing = (props) => {
  const [users1, setUsers1] = useState(1);
  const [users2, setUsers2] = useState(2);
  const [users3, setUsers3] = useState(5);
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* toggle states */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-5 py-3 bg-white w-fit place-self-center">
        {/* stated for monthly or annual plans */}
        <div className="flex gap-5 items-center justify-center">
          <div
            className={`rounded-[10px] px-3 lg:px-5 py-2.5 transition-all duration-300 ${
              annual ? "text-[#656565]" : "text-[#2371D8] bg-[#EFF6FF]"
            }`}
          >
            <span className={`font-semibold transition-all duration-300`}>
              Monthly
            </span>
          </div>

          {/* toggle button */}
          <div
            onClick={() => setAnnual(!annual)}
            className={`w-[66px] h-[37px] rounded-full p-1 flex items-center transition-all duration-200 cursor-pointer ${
              !annual
                ? "border border-transparent bg-[#CFD3D9] justify-start"
                : "outline-[3px] outline-[#378EFF33] bg-[#2273ED] justify-end"
            }`}
          >
            <div className={`h-full w-1/2 bg-white rounded-full relative`} />
          </div>

          <div
            className={`rounded-[10px] px-3 lg:px-5 py-2.5 transition-all duration-300 space-x-1 ${
              annual ? "text-[#2371D8] bg-[#EFF6FF]" : "text-[#656565]"
            }`}
          >
            <span className={`font-semibold transition-all duration-300`}>
              Annual
            </span>
            <span className="text-[#27A373] font-semibold py-1 px-2 rounded-full bg-[#DCFCE7]">
              -10%
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-screen max-lg:overflow-x-hidden">
        <div className="min-w-full flex flex-row items-end lg:justify-center gap-10 max-lg:overflow-x-auto pt-10">
          <PricingCard
            plan="Starter"
            subHeading={props.subHeading}
            description={props.description && props.description[0]}
            cost={
              !annual
                ? pricingMap[users1]
                : Math.ceil(pricingMap[users1] * 12 * 0.9)
            }
            storage={storageMap[users1]}
            RAM={RAM[users1]}
            users={users1}
            setUsers={setUsers1}
            minUsers={1}
            contents={props.starterFeatures ?? starterPlan}
            ctaText="Get Started with Starter"
            showDynamicList={props.showDynamicList}
            showFeaturesHeading={props.showFeaturesHeading}
          />
          <PricingCard
            popular
            plan="Intermediate"
            subHeading={props.subHeading}
            description={props.description && props.description[1]}
            cost={
              !annual
                ? pricingMap[users2]
                : Math.ceil(pricingMap[users2] * 12 * 0.90)
            }
            storage={storageMap[users2]}
            RAM={RAM[users2]}
            users={users2}
            setUsers={setUsers2}
            minUsers={2}
            contents={props.intermediateFeatures ?? intermediatePlan}
            ctaText="Get Started with Intermediate"
            showDynamicList={props.showDynamicList}
            showFeaturesHeading={props.showFeaturesHeading}
          />
          <PricingCard
            bonus
            plan="Advance"
            subHeading={props.subHeading}
            description={props.description && props.description[2]}
            cost={
              !annual
                ? pricingMap[users3]
                : Math.ceil(pricingMap[users3] * 12 * 0.90)
            }
            storage={storageMap[users3]}
            RAM={RAM[users3]}
            users={users3}
            setUsers={setUsers3}
            minUsers={5}
            contents={props.advanceFeatures ?? advancePlan}
            ctaText="Get Started with Advance"
            showDynamicList={props.showDynamicList}
            showFeaturesHeading={props.showFeaturesHeading}
          />
        </div>
      </div>
    </div>
  );
};

export default QbDedicatedHostingPricing;
