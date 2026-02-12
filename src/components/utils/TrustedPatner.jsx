import Image from "next/image";
import ToolTip from "./ToolTip";

const logos = [
  { src: "/assets/images/Trusted/upper-ogos/u1.png", alt: "wasabi", width: 124, height: 108 },
  { src: "/assets/images/Trusted/upper-ogos/u2.png", alt: "QuickBooks Solutions Provider", width: 124, height: 108 },
  { src: "/assets/images/Trusted/upper-ogos/u3.png", alt: "Oracle netSuite", width: 125, height: 108 },
  { src: "/assets/images/Trusted/upper-ogos/u4.png", alt: "avalara", width: 120, height: 108 },
  { src: "/assets/images/Trusted/upper-ogos/u5.png", alt: "Comma100", width: 120, height: 108 },
  { src: "/assets/images/Trusted/upper-ogos/u6.png", alt: "QuickBooks ProAdvisor", width: 124, height: 108 },
];

const logos2 = [
  { src: "/assets/images/Trusted/down-logos/d1.png", alt: "TerminalWorks", width: 119, height: 108 },
  { src: "/assets/images/Trusted/down-logos/d2.png", alt: "Duo MFA", width: 124, height: 108 },
  { src: "/assets/images/Trusted/down-logos/d3-2.png", alt: "veem", width: 125, height: 108 },
  { src: "/assets/images/Trusted/down-logos/d4.png", alt: "Sage 50 Solutions Provider", width: 124, height: 108 },
  { src: "/assets/images/Trusted/down-logos/d5.png", alt: "Quickbase Authorized Partner", width: 124, height: 108 },
  { src: "/assets/images/Trusted/down-logos/d6.png", alt: "I-Drive", width: 124, height: 108 },
];

// Single reusable row (pure CSS marquee)
function MarqueeRow({ items, duration = "35s", reverse = false }) {
  return (
    <div className="flex place-content-center">
      <div
        className="
          relative w-full overflow-hidden
          [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0))]
        "
        style={{
          ["--marquee-duration"]: duration,
          ["--marquee-direction"]: reverse ? "reverse" : "normal",
        }}
      >
        {/* Track */}
        <div className=" flex w-max will-change-transform motion-reduce:animate-none animate-[trustedMarquee_var(--marquee-duration)_linear_infinite] [animation-direction:var(--marquee-direction)]">
          {[...items, ...items].map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex items-center justify-center shrink-0 w-[119px] mx-[30px]"
            >
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                loading="lazy"
                className="h-[108px] object-cover brightness-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TrustedPartner(props) {
  return (
    <section className="py-[41px] px-0 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center md:mb-5 mb-7">
          <ToolTip bg="#71AAFF2E" text="Trusted by 500+" size="10px" boxShadow="-2.49px 2.49px 6.97px 0px #00000014"/>
        </div>

        <div className="text-center">
          <span
            className=" block pt-3 mb-5 text-[28px] font-bold text-[#31416c] leading-normal px-5 max-md:text-[32px] max-md:tracking-[2px]"
            dangerouslySetInnerHTML={{
              __html: props.heading || "<span class='font-extralight'>Trusted Partner</span>: Expertise You Can Trust",
            }}
          />

          <p
            className="max-w-[987px] mx-auto text-[#464646] text-[18px] font-medium leading-[29px] px-5 pt-2 max-md:text-left max-md:w-full min-[501px]:max-[992px]:w-[50vw]">
            {props.content || "Trusted Partners Play a Vital Role in Ensuring a Seamless Hosting Experience."}
          </p>

          <p className=" max-w-[987px] mx-auto text-[#797979] text-[16px] font-normal leading-[29px] px-5 pt-[0.8rem] max-md:text-center max-md:w-full min-[501px]:max-[992px]:w-[91vw]">
            {props.contenttext || "These carefully selected partners contribute their expertise in technology, infrastructure and support solutions, enhancing reliability and performance. Through this collaboration, Sagenext delivers a dependable and efficient hosting environment, allowing users to work without disruptions and enjoy optimal stability and security."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[70px] pt-[70px]">
        <MarqueeRow items={logos} duration="28s" />
        <MarqueeRow items={logos2} duration="30s" reverse />
      </div>

    </section>
  );
}