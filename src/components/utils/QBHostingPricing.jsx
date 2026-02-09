import Link from "next/link";
import Script from "next/script";

const PLANS = [
  { key: "starter", plan: "Starter", storage: 5, bonus: false },
  { key: "intermediate", plan: "Intermediate", storage: 10, bonus: false, popular: true },
  { key: "advance", plan: "Advance", storage: 10, bonus: true },
];

const PRICES = {
  shared: {
    monthly: {
      starter: { mrp: 36, cost: 33 },
      intermediate: { mrp: 46, cost: 43 },
      advance: { mrp: 54, cost: 49 },
    },
    annual: {
      starter: { mrp: 396, cost: 365 },
      intermediate: { mrp: 516, cost: 464 },
      advance: { mrp: 588, cost: 529 },
    },
  },
  dedicated: {
    monthly: {
      starter: { mrp: 64, cost: 59 },
      intermediate: { mrp: 85, cost: 80 },
      advance: { mrp: 185, cost: 180 },
    },
    annual: {
      starter: { mrp: 708, cost: 637 },
      intermediate: { mrp: 960, cost: 864 },
      advance: { mrp: 2160, cost: 1944 },
    },
  },
};

function PricingCard({
  plan,
  description,
  mrp,
  cost,
  annual,
  storage,
  popular,
  bonus,
}) {
  return (
    <div
      className={`min-w-[300px] lg:min-w-[370px] h-[570px] lg:h-[600px] ${!popular ? "hover:shadow-xl max-lg:shadow-xl" : "shadow-xl"
        } flex flex-col items-center justify-start overflow-hidden relative transition-all px-7 max-lg:border border-neutral-200 max-lg:rounded-xl
      snap-start`}
    >
      {popular && (
        <div className="absolute w-full h-10 rotate-45 top-10 -right-2/6 bg-[#FAB737] grid place-items-center">
          <div className="w-full font-medium text-white">POPULAR</div>
        </div>
      )}

      <div className="py-6 flex flex-col gap-9 w-full">
        <div className="place-items-start pt-10">
          <div>
            <span className="text-2xl font-bold capitalize text-[#464646]">
              {plan}
            </span>
          </div>

          {description && (
            <div>
              <span className="text-sm">{description}</span>
            </div>
          )}
        </div>

        <div className="grid items-start justify-start gap-2">
          <div className="flex items-baseline gap-2">
            <div className="text-5xl">
              <span className="text-[#6E6E6E] font-semibold">${cost}</span>
              <span className="text-[#6E6E6E] ml-2 text-2xl leading-[154%] line-through">
                ${mrp}
              </span>
              <span className="!text-2xl text-[#6E6E6E]">
                {annual ? "/year" : "/month"}
              </span>
            </div>
          </div>

          <span className="text-sm w-fit">Save Upto 10% with Annual Plan</span>
        </div>
      </div>

      <Link
        href="/trial"
        className={`w-full border-2 border-[#00399A] ${popular
          ? "bg-[#00399A] hover:bg-white !text-white hover:text-[#00399A]!"
          : "bg-white hover:bg-[#00399A] !text-[#00399A] hover:text-white!"
          } rounded-full flex items-center justify-center py-4 transition-all gap-2`}
      >
        <span className="font-semibold">Get a Free Trial Now</span>
        <span aria-hidden>→</span>
      </Link>

      <div className="w-full flex flex-col items-start pt-5 gap-7">
        <div>
          <span>What you&apos;ll get:</span>
        </div>

        <ul className="w-full space-y-3 *:gap-3 *:whitespace-nowrap">
          <li className="flex items-center">
            <span aria-hidden>✓</span>
            <span className="text-[#767575] text-[15px]">1 User</span>
          </li>
          <li className="flex items-center">
            <span aria-hidden>✓</span>
            <span className="text-[#767575] text-[15px]">{storage} GB Storage</span>
          </li>
          <li className="flex items-center">
            <span aria-hidden>✓</span>
            <span className="text-[#767575] text-[15px]">For One Application</span>
          </li>
          <li className="flex items-center">
            <span aria-hidden>✓</span>
            <span className="text-[#767575] text-[15px]">24x7 Support</span>
          </li>

          {bonus && (
            <li className="flex items-center">
              <span aria-hidden>✓</span>
              <div className="flex gap-2">
                <span className="text-[#767575] text-[15px]">
                  Outlook + 5GB Storage
                </span>
                <span className="bg-[#E1EEFF] text-[#041CBA] px-2 py-1 font-medium text-xs rounded-full">
                  Bonus
                </span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

function CardsRow({ mode, billing }) {
  const priceBucket = PRICES[mode][billing];

  return (
    <div
      className="
        w-full
        flex gap-5
        lg:items-start lg:justify-center
        lg:pt-16
        max-lg:py-10

        /* mobile slider replacement: CSS scroll-snap, no JS */
        max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:px-3
        max-lg:scroll-smooth
      "
      role="list"
      aria-label={`${mode} ${billing} plans`}
    >
      {PLANS.map((p) => {
        const pr = priceBucket[p.key];
        return (
          <PricingCard
            key={`${mode}-${billing}-${p.key}`}
            plan={p.plan}
            mrp={pr.mrp}
            cost={pr.cost}
            annual={billing === "annual"}
            storage={p.storage}
            popular={!!p.popular}
            bonus={!!p.bonus}
          />
        );
      })}
    </div>
  );
}

export default function QBHostingPricing({ heading = "QuickBooks Hosting Pricing & Plans", subHeading = "Enjoy high performance and QuickBooks Hosting", subHeading2,
}) {
  return (
    <section id="Pricing" className="relative pt-20">
      {/* tiny script toggles visibility; no React state */}
      <Script id="qb-pricing-toggle" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(){
  var root = document.getElementById("qb-pricing-root");
  if (!root) return;

  function setState(nextMode, nextBilling) {
    root.dataset.mode = nextMode;
    root.dataset.billing = nextBilling;

    // update active button styles
    root.querySelectorAll("[data-mode-btn]").forEach(function(btn){
      btn.setAttribute("aria-pressed", btn.dataset.modeBtn === nextMode ? "true" : "false");
    });
    root.querySelectorAll("[data-billing-btn]").forEach(function(btn){
      btn.setAttribute("aria-pressed", btn.dataset.billingBtn === nextBilling ? "true" : "false");
    });

    // show the correct block
    root.querySelectorAll("[data-plans]").forEach(function(el){
      var ok = el.dataset.mode === nextMode && el.dataset.billing === nextBilling;
      el.style.display = ok ? "" : "none";
    });
  }

  // defaults
  setState("shared", "monthly");

  root.addEventListener("click", function(e){
    var t = e.target;
    // climb up to button
    while (t && t !== root && !t.dataset) t = t.parentElement;
    if (!t || t === root) return;

    if (t.dataset.modeBtn) {
      setState(t.dataset.modeBtn, root.dataset.billing || "monthly");
    }
    if (t.dataset.billingBtn) {
      setState(root.dataset.mode || "shared", t.dataset.billingBtn);
    }
  });
})();
          `,
        }}
      />

      <div id="qb-pricing-root" className="container mx-auto text-center place-items-center">
        <div className="flex flex-col gap-6">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              PRICING
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-[32px] leading-[125%] tracking-normal !font-normal">
              <strong>{heading}</strong>
            </h2>

            <div>
              <span className="text-lg font-semibold text-[#494D52]">
                {subHeading}
              </span>
            </div>

            {subHeading2 && (
              <div>
                <span className="leading-7">{subHeading2}</span>
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-5 items-center lg:items-end lg:justify-between lg:border-b border-b-neutral-300 lg:mt-16 max-w-[1180px]">
          {/* Shared/Dedicated */}
          <div className="h-full flex gap-5">
            <button
              type="button"
              data-mode-btn="shared"
              aria-pressed="true"
              className=" px-3 py-2.5 uppercase border-b cursor-pointer transition aria-pressed:border-b-black aria-pressed:text-black aria-[pressed=false]:border-b-transparent" >
              <span className="text-lg font-semibold">Shared</span>
            </button>

            <button type="button" data-mode-btn="dedicated" aria-pressed="false"
              className=" px-3 py-2.5 uppercase border-b cursor-pointer transition aria-pressed:border-b-black aria-pressed:text-black aria-[pressed=false]:border-b-transparent">
              <span className="text-lg font-semibold">Dedicated</span>
            </button>
          </div>

          <div className="flex gap-3">
            <button type="button" data-billing-btn="monthly" aria-pressed="true"
              className=" px-5 py-2.5 min-w-[170px] font-semibold transition border aria-pressed:bg-[#31416C] aria-pressed:text-white aria-pressed:border-transparent aria-[pressed=false]:bg-white aria-[pressed=false]:text-[#31416C] aria-[pressed=false]:border-neutral-300">
              Monthly Plan
            </button>
            <button type="button" data-billing-btn="annual" aria-pressed="false"
              className=" px-5 py-2.5 min-w-[170px] font-semibold transition border aria-pressed:bg-[#31416C] aria-pressed:text-white aria-pressed:border-transparent aria-[pressed=false]:bg-white aria-[pressed=false]:text-[#31416C] aria-[pressed=false]:border-neutral-300">
              Annual Plan
            </button>
          </div>

        </div>

        {/* Plans: render ALL variants in HTML, hide/show with tiny script */}
        <div data-plans data-mode="shared" data-billing="monthly">
          <CardsRow mode="shared" billing="monthly" />
        </div>

        <div data-plans data-mode="shared" data-billing="annual" style={{ display: "none" }}>
          <CardsRow mode="shared" billing="annual" />
        </div>

        <div data-plans data-mode="dedicated" data-billing="monthly" style={{ display: "none" }}>
          <CardsRow mode="dedicated" billing="monthly" />
        </div>

        <div data-plans data-mode="dedicated" data-billing="annual" style={{ display: "none" }}>
          <CardsRow mode="dedicated" billing="annual" />
        </div>
      </div>
    </section>
  );
}


// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { FiArrowRight } from "react-icons/fi";
// import {
//   IoIosArrowBack,
//   IoIosArrowForward,
//   IoMdArrowDropdown,
// } from "react-icons/io";
// import { IoCheckmark } from "react-icons/io5";

// const PricingCard = (props) => {
//   return (
//     <>
//       <div
//         className={`min-w-[300px] lg:min-w-[370px] h-[570px] lg:h-[600px] ${!props.popular ? "hover:shadow-xl max-lg:shadow-xl" : "shadow-xl"
//           } flex flex-col items-center justify-start overflow-hidden relative transition-all px-7 max-lg:border border-neutral-200 max-lg:rounded-xl`}
//       >
//         {props.popular && (
//           <>
//             <div className="absolute w-full h-10 rotate-45 top-10 -right-2/6 bg-[#FAB737] grid place-items-center">
//               <div className="w-full font-medium text-white">POPULAR</div>
//             </div>
//           </>
//         )}

//         <div className="py-6 flex flex-col gap-9 w-full">
//           <div className="place-items-start pt-10">
//             <div>
//               <span className="text-2xl font-bold capitalize text-[#464646]">
//                 {props.plan}
//               </span>
//             </div>

//             {props.description && (
//               <div>
//                 <span className="text-sm">{props.description}</span>
//               </div>
//             )}
//           </div>

//           <div className="grid items-start justify-start gap-2">
//             <div className="flex items-baseline gap-2">
//               <div className="text-5xl">
//                 <span className="text-[#6E6E6E] font-semibold">
//                   ${props.cost}
//                 </span>
//                 <span className="text-[#6E6E6E] ml-2 text-2xl leading-[154%] line-through">
//                   ${props.mrp}
//                 </span>
//                 <span className="!text-2xl text-[#6E6E6E]">
//                   {props.annual ? "/year" : "/month"}
//                 </span>
//               </div>
//             </div>

//             <span className="text-sm w-fit">
//               Save Upto 10% with Annual Plan
//             </span>
//           </div>
//         </div>

//         {/* CTA */}
//         <Link
//           href="/trial"
//           className={`w-full border-2 border-[#00399A] ${props.popular
//             ? "bg-[#00399A] hover:bg-white !text-white hover:text-[#00399A]!"
//             : "bg-white hover:bg-[#00399A] !text-[#00399A] hover:text-white!"
//             } rounded-full flex items-center justify-center py-4 transition-all gap-2`}
//         >
//           <span className="font-semibold">Get a Free Trial Now</span>
//           <FiArrowRight />
//         </Link>

//         <div className="w-full flex flex-col items-start pt-5 gap-7">
//           <div>
//             <span>What you&apos;ll get:</span>
//           </div>

//           <ul className="w-full space-y-3 *:gap-3 *:whitespace-nowrap">
//             <li className="flex items-center">
//               <IoCheckmark />
//               <span className="text-[#767575] text-[15px]">1 User</span>
//             </li>
//             <li className="flex items-center">
//               <IoCheckmark />
//               <span className="text-[#767575] text-[15px]">
//                 {props.storage} GB Storage
//               </span>
//             </li>
//             <li className="flex items-center">
//               <IoCheckmark />
//               <span className="text-[#767575] text-[15px]">
//                 For One Application
//               </span>
//             </li>
//             <li className="flex items-center">
//               <IoCheckmark />
//               <span className="text-[#767575] text-[15px]">24x7 Support</span>
//             </li>
//             {props.bonus && (
//               <li className="flex items-center">
//                 <IoCheckmark />
//                 <div className="flex gap-2">
//                   <span className="text-[#767575] text-[15px]">
//                     Outlook + 5GB Storage
//                   </span>
//                   <span className="bg-[#E1EEFF] text-[#041CBA] px-2 py-1 font-medium text-xs rounded-full">
//                     Bonus
//                   </span>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// const QBHostingPricing = (props) => {
//   const [dedicated, setDedicated] = useState(false);
//   const [annual, setAnnual] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [index, setIndex] = useState(0);

//   const handlePrev = () => {
//     setIndex((prev) => (prev - 1 + 3) % 3);
//   };

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % 3);
//   };

//   return (
//     <section id="Pricing" className="relative pt-20">
//       <div className="container mx-auto text-center place-items-center">
//         <div className="flex flex-col gap-6">
//           <div>
//             <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
//               PRICING
//             </span>
//           </div>

//           <div className="space-y-4">
//             <h2 className={`text-[32px] leading-[125%] tracking-normal !font-normal`}>
//               <strong>
//                 {props.heading ? props.heading : "QuickBooks Hosting Pricing & Plans"}
//               </strong>
//             </h2>

//             <div>
//               <span className="text-lg font-semibold text-[#494D52]">
//                 {props.subHeading ? props.subHeading : "Enjoy high performance and QuickBooks Hosting"}
//               </span>
//             </div>

//             {props.subHeading2 && (
//               <div>
//                 <span className="leading-7">{props.subHeading2}</span>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="w-full flex flex-col lg:flex-row gap-5 items-center lg:items-end lg:justify-between lg:border-b border-b-neutral-300 lg:mt-16 max-w-[1180px]">
//           {/* stated for shared and dedicated plans */}
//           <div className="h-full flex gap-5">
//             <div
//               onClick={() => setDedicated(false)}
//               className={`px-3 py-2.5 transition-all duration-200 cursor-pointer border-b uppercase ${dedicated ? "border-b-transparent" : "border-b-black"}`}>
//               <span className="text-lg font-semibold">Shared</span>
//             </div>

//             <div
//               onClick={() => setDedicated(true)}
//               className={`px-3 py-2.5 transition-all duration-200 cursor-pointer border-b uppercase ${dedicated ? "border-b-black" : "border-b-transparent"}`}>
//               <span className="text-lg font-semibold">Dedicated</span>
//             </div>
//           </div>

//           <div
//             onClick={() => setOpen(!open)}
//             className="bg-[#31416C] h-full px-5 py-2.5 relative min-w-[250px] cursor-pointer"
//           >
//             <span className="flex items-center justify-center gap-2 text-white font-semibold">
//               {annual ? "View Annual Plan" : "View Montly Plan"}
//               <IoMdArrowDropdown size={20} />
//             </span>

//             {open && (
//               <div className="absolute z-10 bg-white top-full right-0 border border-neutral-400 w-full *:p-2 *:cursor-pointer *:hover:bg-blue-100 *:not-last:border-b *:border-neutral-400 *:hover:font-medium">
//                 <div onClick={() => { setAnnual(false); setOpen(false); }}>
//                   View Montly Plan
//                 </div>
//                 <div onClick={() => { setAnnual(true); setOpen(false); }}>
//                   View Annual Plan
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Pricing Cards */}
//         <div className="max-lg:overflow-hidden w-full">
//           <div
//             className={`w-full flex lg:items-start lg:justify-center gap-5 ${index === 0 ? "pl-3" : "pl-0"} lg:pt-16 max-lg:py-10`}
//             style={{ transform: `translateX(-${index * 300}px)` }}
//           >
//             <PricingCard plan="Starter"
//               mrp={!dedicated ? (!annual ? "36" : "396") : !annual ? "64" : "708"}
//               cost={!dedicated ? (!annual ? "33" : "365") : !annual ? "59" : "637"}
//               storage="5"
//             />
//             <PricingCard
//               popular
//               plan="Intermediate"
//               mrp={!dedicated ? (!annual ? "46" : "516") : !annual ? "85" : "960"}
//               cost={!dedicated ? (!annual ? "43" : "464") : !annual ? "80" : "864"}
//               storage="10"
//             />
//             <PricingCard
//               bonus
//               plan="Advance"
//               mrp={!dedicated ? (!annual ? "54" : "588") : !annual ? "185" : "2160"}
//               cost={!dedicated ? (!annual ? "49" : "529") : !annual ? "180" : "1944"}
//               storage="10"
//             />
//           </div>
//         </div>

//         <div className="lg:hidden absolute flex gap-3 *:text-2xl -bottom-5 left-1/2 -translate-x-1/2">
//           <button
//             onClick={handlePrev}
//             className="border rounded-full flex items-center justify-center p-1"
//           >
//             <IoIosArrowBack size={20} color="black" />
//           </button>
//           <button onClick={handleNext} className="border rounded-full flex items-center justify-center p-1">
//             <IoIosArrowForward size={20} color="black" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QBHostingPricing;
