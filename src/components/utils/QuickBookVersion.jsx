import Image from "next/image";
import React from "react";
import EnterpriseImage from "../../../public/assets/images/qb-versions/qb-enterprise.png";
import POSImage from "../../../public/assets/images/qb-versions/qb-pos.png";
import PremierImage from "../../../public/assets/images/qb-versions/qb-premier.png";
import ProImage from "../../../public/assets/images/qb-versions/qb-pro.png";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export const VersionCards = (props, key) => {
  return (
    <Link
      key={key}
      href={props.link || "#"}
      className="flex flex-col items-center justify-between max-w-[292px] h-[360px] rounded-xl overflow-hidden shadow-lg hover:-translate-y-2.5 transition-transform group"
    >
      <Image
        src={props.image}
        alt={props.title}
        width={292}
        height={126}
        className="w-[292px] h-[126px]"
      />

      <div className="text-left px-6 py-5 h-full flex flex-col items-center justify-between">
        <div className="space-y-5 h-full">
          <div className="flex flex-col">
            {props.title && (
              <h3
                dangerouslySetInnerHTML={{ __html: props.title }}
                className="!text-lg !tracking-[1%] !font-bold text-[#373B59] whitespace-pre-line mb-0!"
              />
            )}

            {props.subTitle && (
              <span className="!text-sm !font-medium !tracking-[1%] text-[#373B59]">
                {props.subTitle}
              </span>
            )}
          </div>

          {props.description && (
            <p className="!text-sm !tracking-tighter text-[#747474]">
              {props.description}
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="w-full flex items-center justify-center border border-[#11203331] rounded-lg group-hover:bg-[#0453AD] transition-all duration-200 group-hover:text-white">
          <span className="text-[11px] py-2 font-medium">Get Started</span>
          <FiArrowRight className="hidden group-hover:block transition-all duration-200" />
        </div>
      </div>
    </Link>
  );
};

const QuickBookVersion = () => {
  return (
    <section id="Versions" className="relative pt-[45px]">
      <div className="container mx-auto text-center space-y-10">
        <div className="flex flex-col gap-6 items-center">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              VERSIONS
            </span>
          </div>

          <div className="flex flex-col gap-4 max-w-5xl">
            <h2
              className={`text-[32px] leading-[100%] tracking-normal !font-normal`}
            >
              <strong>Which Versions of QuickBooks Do We Host?</strong>
            </h2>

            <span className="font-semibold text-[#494D52]">
              Sagenext Cloud Servers can Accommodate All QuickBooks Desktop
              Versions
            </span>

            <span className="text-[15px] text-[#797979]">
              Host all versions and editions of Windows-based QuickBooks program
              in a secure, multi-user cloud environment. Whether you are using
              the US, Canada, or the UK edition of QB Enterprise, Premier, Pro,
              or POS, you can get customised, affordable monthly, half-annually,
              and annual QuickBooks hosting plans as per your specific
              requirements.
            </span>
          </div>
        </div>

        {/* Version Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <VersionCards
            image={ProImage}
            title="QuickBooks Pro Hosting"
            subTitle=""
            link="/quickbooks-pro-hosting"
            description="QuickBooks Pro Hosting allows users to run operations remotely. It is Ideal for small businesses and accounting firms."
          />
          <VersionCards
            image={PremierImage}
            title="QuickBooks Premier Hosting"
            subTitle=""
            link="/quickbooks-premier-hosting"
            description="Experience smart, cloud-based QB Premier with our SSAE-18 Type II (SOC-2) certified data centers."
          />
          <VersionCards
            image={EnterpriseImage}
            title="QuickBooks Enterprise Hosting"
            subTitle=""
            link="/quickbooks-enterprise-hosting"
            description="Hosting QuickBooks Enterprise lets you take advantage of countless benefits with 24×7 support."
          />
          <VersionCards
            image={POSImage}
            title="QuickBooks POS Hosting"
            subTitle=""
            link="/quickbooks-pos-hosting"
            description="Hosted POS solutions offer maximum freedom and flexibility to help organize your retail business."
          />
        </div>
      </div>
    </section>
  );
};

export default QuickBookVersion;
