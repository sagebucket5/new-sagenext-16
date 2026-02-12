import Link from "next/link";

const features = [
  {
    title: "Consultation",
    description:
      "Contact our team to explore the advantages of our solutions by discussing your business requirements.",
    cta: { href: "/contact-us", text: "Get in Touch" },
    imgSrc: "/assets/images/virtual-desktop/01/consultation.webp",
    highlightTop: true,
  },
  {
    title: "Ongoing Support",
    description:
      "We perform ongoing checks as well as technical assistance to guarantee that your applications perform as they should and that difficulties are remedied at once.",
    imgSrc: "/assets/images/virtual-desktop/01/support.webp",
  },
  {
    title: "Customized Plan",
    description: "We will create a plan that meets your specifications and budget.",
    imgSrc: "/assets/images/virtual-desktop/01/customized.webp",
  },
  {
    title: "Implementation",
    description:
      "Our professionals will manage the installation and transition phases, allowing for a seamless move to your new virtual desktop environment.",
    imgSrc: "/assets/images/virtual-desktop/01/implementation.webp",
    highlightTop: true,
  },
];

export default function FeatureCards() {
  return (
    <div className="container mx-auto pt-10">
      <div className="flex flex-wrap justify-center gap-y-12 gap-x-[30px]">
        {features.map((f, idx) => (
          <div
            key={`${f.title}-${idx}`}
            className={[
              "flex flex-1 basis-[34%] justify-between gap-2.5",
              "rounded-[10px] border-2 border-[#e0e0e0] bg-white",
              "p-[20px_0_0_20px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]",
              "transition-transform duration-200 hover:-translate-y-[5px]",
              "max-md:flex-col-reverse",
              f.highlightTop ? "border-t-[5px] border-t-[#03295F]" : "",
            ].join(" ")}
          >
            {/* Content */}
            <div className="flex-1">
              <h3 className="mb-2 text-[18px] font-bold">{f.title}</h3>

              <p className="text-[15px] leading-[25px] text-[#464646] text-justify max-md:w-[95%]">
                {f.description}{" "}
                {f.cta?.href ? (
                  <Link href={f.cta.href} className="text-blue-700 underline">
                    {f.cta.text}
                  </Link>
                ) : null}
              </p>
            </div>

            {/* Image */}
            <div className="relative h-[150px] w-[200px] shrink-0 max-md:mt-2.5 max-md:h-auto max-md:w-full">
              <img
                src={f.imgSrc}
                alt={f.title}
                loading="lazy"
                className="absolute bottom-[-13px] h-[150px] w-[200px] max-md:static max-md:mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}