import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const VersionCards = (props, key) => {
  return (
    <Link
      key={key}
      href={props.link || "#"}
      className={`flex ${props.vertical ? "flex-col" : "max-lg:flex-col"
        } gap-5 items-center justify-between rounded-xl overflow-hidden shadow-lg hover:-translate-y-2.5 transition-transform group p-4 min-h-[223px] ${props.cardClassName
        }`}
    >
      <Image
        src={props.image}
        alt={props.title}
        width={292}
        height={126}
        className={`${props.vertical ? "w-[90%] h-[220px]" : "w-[142px] h-[96%]"
          } ${props.imgClassName ? props.imgClassName : ""}`}
      />

      <div className="text-left h-full flex flex-col max-lg:gap-3 items-center justify-between">
        <div className="space-y-2 h-full">
          <div className="flex flex-col">
            {props.title && (
              <h3
                dangerouslySetInnerHTML={{ __html: props.title }}
                className="!text-lg leading-[132%] !tracking-[1%] !font-bold text-[#373B59]! mb-0!"
              />
            )}

            {props.subTitle && (
              <span className={`!text-sm !font-medium !tracking-[1%] text-[#373B59] ${props.subTitleClassName}`}>
                {props.subTitle}
              </span>
            )}
          </div>

          {props.description && (
            <p className={`!text-sm tracking-[1%] text-[#747474] ${props.descClassName}`}>
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

const QuickBooksVersion2 = () => {
  return (
    <section
      id="Versions"
      className="relative pt-20"
    >
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

            <span className="text-[17px] text-[#6D6D6D]">
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
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-5">
          <VersionCards
            image="/assets/images/qb-versions/qb-enterprise-2.png"
            title="QuickBooks Enterprise Hosting"
            link="/quickbooks-enterprise-hosting"
            description="Hosting QuickBooks Enterprise lets you take advantage of countless benefits with 24×7 support."
            cardClassName="col-span-1 row-span-2"
            vertical
          />
          <VersionCards
            image="/assets/images/qb-versions/qb-pro-2.png"
            title="QuickBooks Pro Hosting"
            link="/quickbooks-pro-hosting"
            description="QuickBooks Pro Hosting allows users to run operations remotely. It is Ideal for small businesses and accounting firms."
            cardClassName="col-span-1 row-span-1"
          />
          <VersionCards
            image="/assets/images/qb-versions/qb-accountant.png"
            title="QuickBooks Accountant Hosting"
            link="/quickbooks-accountant-hosting"
            description="QuickBooks accountant hosting enables accounting firms & accountants to access the software seamlessly from anywhere, at any time. Get QB cloud-hosted now. Get Started"
            cardClassName="col-span-1 row-span-1"
            descClassName="line-clamp-4"
          />
          <VersionCards
            image="/assets/images/qb-versions/qb-premier-2.png"
            title="QuickBooks Premier Hosting"
            link="/quickbooks-premier-hosting"
            description="Experience smart, cloud-based QB Premier with our SSAE-18 Type II (SOC-2) certified data centers."
            cardClassName="col-span-1 row-span-1"
          />

          <VersionCards
            image="/assets/images/qb-versions/qb-pos-2.png"
            title="QuickBooks POS Hosting"
            link="/quickbooks-pos-hosting"
            description="Hosted POS solutions offer maximum freedom and flexibility to help organize your retail business."
            cardClassName="col-span-1 row-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default QuickBooksVersion2;
