import React from "react";
import styles from "@/styles/pages/tax/Ultratax-cs-hosting.module.css";
import Link from "next/link";
import Image from "next/image";
const data = [
  {
    link: "https://www.thesagenext.com/ultratax-cs-software",
    img: "https://www.thesagenext.com/assets/images/longforms/UltraTax%20CS%20Tax%20Software.png",
    alt: "What is Ultratax CS Professional Tax Software?",
    text: `What is Ultratax CS Professional Tax<br/> Software?`,
  },
  {
    link: "https://www.thesagenext.com/blog/bidens-tax-policies",
    img: "https://snb.thesagenext.com/blog/wp-content/uploads/2021/05/How-Bidens-Tax-Policies-benefits-Tax-and-Accounting-Firms-in-2021.jpg",
    alt: "How Does Biden Tax Policies Benefit Tax and Accounting Firms?",
    text: `How Does Biden Tax Policies Benefit Tax and Accounting Firms?`,
  },
  {
    link: "https://www.thesagenext.com/blog/what-is-a-w-2-form",
    img: "https://snb.thesagenext.com/blog/wp-content/uploads/2024/04/W-2-Forms-Explained.webp",
    alt: "What Is a W-2 Form? Benefits, How to Use It  for Tax Filing",
    text: `What Is a W-2 Form? Benefits, How<br/>to Use It  for Tax Filing`,
  },
  {
    link: "https://www.thesagenext.com/blog/what-is-tax-liability",
    img: "https://snb.thesagenext.com/blog/wp-content/uploads/2024/02/What-Is-Tax-Liability-1.webp",
    alt: "Tax Liability: Types, Importance and Calculation ",
    text: `Tax Liability: Types, Importance and <br/> Calculation `,
  },
];

const Expert = (props) => {
  const BlogData = props.Blogdata ? props.Blogdata : data;

  return (
    <div className="container mx-auto place-items-center">
      <div className="w-fit bg-[#71AAFF2E] rounded-full py-3 px-6">
        <span className="font-semibold text-[13px] text-[#31509F] uppercase">
          blogs
        </span>
      </div>

      <h2 className="mt-4!">
        Don&apos;t Miss Our Expert Advice on UltraTax CS Hosting
      </h2>
      <div className={`${styles.expertCard} mt-14`}>
        {BlogData.map((item, index) => (
          <Link
            key={index}
            href={item.link}
          >
            <div className={styles.expertOne}>
              <Image
                height={300}
                width={300}
                src={item.img}
                alt={item.alt}
                loading="lazy"
              />
              <h3 dangerouslySetInnerHTML={{ __html: item.text }}></h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Expert;
