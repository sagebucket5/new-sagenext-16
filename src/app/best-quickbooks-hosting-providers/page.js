import BlueCta from "@/components/buttons/BlueCta";
import FormModal from "@/components/FormModal";
import BestProviderHero from "@/components/heros/BestProviderHero";
import FAQ from "@/components/utils/FAQ";
import SkillSection from "@/components/utils/SkillSection";
import { getMetaData } from "@lib/metaData";
import Image from "next/image";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export async function generateMetadata() {
  const meta = getMetaData("best-quickbooks-hosting-providers");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    robots: meta.robots,
    openGraph: {
      locale: "en_US",
      type: "website",
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      siteName: "Sagenext Infotech LLC",
      images: [
        {
          url: "/assets/component/quickbooks2.webp",
          secureUrl: "/assets/component/quickbooks2.webp",
          width: 210,
          height: 314,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      site: "@sagenextinfo",
      creator: "@sagenextinfo",
      images: ["/assets/component/quickbooks2.webp"],
    },
  };
}

const steps = [
  {
    heading: "Discover & Planning",
    desc: "We'll look at which QuickBooks versions you want to use, how many people you need access for, what extra apps you want to host, and any special security or compliance requirements.",
  },
  {
    heading: "Environment Setup",
    desc: "Sagenext will now set up your QuickBooks cloud environment by building servers, creating user access, installing QuickBooks and approved add-ons, and implementing security rules and backup routines.",
  },
  {
    heading: "Data Migration",
    desc: "Your QuickBooks company files are then moved to the cloud via a secure transfer, checked for accuracy, and tested to confirm everything works before going live. We go through a rigorous checklist to ensure a safe, secure data migration.",
  },
  {
    heading: "Going Live with Training",
    desc: "After everything checks out, your team starts using QuickBooks through the Sagenext portal or Remote Desktop. Optional onboarding helps users get familiar with logging in and accessing shared resources.",
  },
  {
    heading: "Management & Support",
    desc: "Your QuickBooks files are securely transferred to the cloud, verified for accuracy, and tested to confirm everything works as expected.",
  },
];

const BestQuickbooksHostingProvider = () => {
  return (
    <>
      <BestProviderHero />

      <SkillSection />

      {/* about section */}
      <section
        id="Benefits"
        className="container mx-auto place-items-center text-center space-y-3 max-lg:my-20"
      >
        <div className="flex flex-col gap-6">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              About
            </span>
          </div>

          <h2
            className={`text-[32px] leading-[125%] tracking-normal font-bold!`}
          >
            QuickBooks Cloud Hosting Providers 2026 | Top-Rated QB Hosts
          </h2>
        </div>

        <span className="text-[17px] text-[#494D52] leading-[154%]">
          If you are a CPA, an Accountant, or a Tax professional in the United
          States, then your clients are trusting you with more than just
          figures. That is where the best QuickBooks cloud hosting providers
          would step in. They would enable you to have safe, secure, and
          continuous access to your QuickBooks Desktop programs and data without
          having to relinquish the tools and workflows you already know. To get
          a better view of what Sagenext and others offer, we have curated a
          detailed comparison table for the major QuickBooks hosting providers.
        </span>
      </section>

      {/* table */}
      <section className="relative my-20 container mx-auto">
        <div className="flex flex-col gap-6 items-center text-center">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              DIFFERENCES
            </span>
          </div>

          <h2
            className={`text-[32px] leading-[133%] tracking-normal max-w-[722px]`}
          >
            Top 4 Intuit Authorized QuickBooks Hosting Providers on Cloud
          </h2>
        </div>

        <div className="mt-16 lg:place-items-center overflow-x-scroll">
          <table className="border-separate border-spacing-0 border border-[#BFBFBF] rounded-xl table-fixed! overflow-hidden lg:max-w-7xl">
            <thead>
              <tr className="*:py-5 *:w-1/5 *:not-last:border-r *:border-r-[#CFCFCF] bg-[#2157E0] *:text-white! *:text-start! *:pl-5 *:max-lg:min-w-3xs!">
                <th>Feature</th>
                <th>Sagenext</th>
                <th>Rightworks</th>
                <th>Summit</th>
                <th>Verito</th>
              </tr>
            </thead>

            <tbody className="*:*:first:font-bold *:*:first:text-black *:*:text-[#626262] *:even:bg-[#F8FAFF]">
              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>Intuit Authorized</td>
                <td>
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </td>
                <td>
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </td>
                <td>
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </td>
                <td>
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </td>
              </tr>

              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>Security Features</td>
                <td>
                  256-bit{" "}
                  <Link href="https://www.thesagenext.com/what-is-end-to-end-encryption">
                    end-to-end encryption
                  </Link>
                  , TFA, MFA, antivirus, anti-malware, firewall protection
                </td>
                <td>MFA, antimalware, antivirus, and standard encryption. </td>
                <td>MFA, antimalware, antivirus, and standard encryption. </td>
                <td>MFA, antimalware, antivirus, and standard encryption. </td>
              </tr>

              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>Data Security Compliance</td>
                <td>
                  SSAE-18, SOC2, HIPAA, and NIST cybersecurity framework
                  compliance.{" "}
                </td>
                <td>SOC2 tier 3/4 data centers</td>
                <td>SOC2 tier 2 data centers</td>
                <td>SOC2 tier 2 data centers</td>
              </tr>
              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>Free Trial</td>
                <td>
                  <Link href="https://www.thesagenext.com/trial">
                    7-day free trial
                  </Link>
                </td>
                <td>
                  <IoMdClose
                    size={22}
                    className="text-[#F59E0C] min-w-fit"
                  />
                </td>
                <td>
                  <IoMdClose
                    size={22}
                    className="text-[#F59E0C] min-w-fit"
                  />
                </td>
                <td>
                  <IoMdClose
                    size={22}
                    className="text-[#F59E0C] min-w-fit"
                  />
                </td>
              </tr>

              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>Uptime Server</td>
                <td>99.999%</td>
                <td>99.5%</td>
                <td>99.99%</td>
                <td>99.99%</td>
              </tr>

              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>Designed For</td>
                <td>SMBs, CPAs, accountants, accounting/tax firms</td>
                <td>SMBs</td>
                <td>SMBs</td>
                <td>SMBs</td>
              </tr>

              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>Data Backup</td>
                <td>45-day rolling on data backup plan</td>
                <td>90-day automated backup only</td>
                <td>15-day backup plan</td>
                <td>Up to 30-day backup plan</td>
              </tr>

              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>Customer Support</td>
                <td>Dedicated customer support team</td>
                <td>Limited Support</td>
                <td>Limited Support</td>
                <td>Limited Support</td>
              </tr>

              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>Pricing Plan</td>
                <td>Starts at $33 per month</td>
                <td>Starts at $69 per month</td>
                <td>Request a quote</td>
                <td>Request a quote</td>
              </tr>

              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>App Integration</td>
                <td>Supports over 200+ addons & integrations</td>
                <td>Support some addons & integrations</td>
                <td>Support some addons & integrations</td>
                <td>Support some addons & integrations</td>
              </tr>

              <tr className="*:px-5 *:py-5 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
                <td>Experience Years</td>
                <td>15+ years</td>
                <td>12+ years</td>
                <td>11+ years</td>
                <td>15 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* cta */}
      <div className="w-full mx-auto text-center place-items-center my-20 grid gap-10 bg-[url(/assets/images/qb-hosting/banner-2.png)] bg-cover">
        <h2 className="w-4/5 lg:w-[50%] text-[#0C336B]!">
          Why Wait? Book Your{" "}
          <span className="italic text-[#0C336B]/70">QuickBooks Hosting</span>{" "}
          Services NOW!
        </h2>
        <FormModal
          text="Request A Free Quote"
          customClass="w-fit!"
        />
      </div>

      {/* why sagenext */}
      <section className="container mx-auto text-center my-20">
        <div className="flex flex-col gap-6 items-center text-center">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              Why Sagenext
            </span>
          </div>

          <h2
            className={`text-[32px] leading-[133%] tracking-normal max-w-[722px]`}
          >
            Why is Sagenext the Best QuickBooks Cloud Hosting Provider?
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 my-16 *:border-b-4 *:border-b-[#FDC736] *:p-6 *:pt-10">
          <div className="lg:col-span-4 bg-white border border-neutral-300 rounded-2xl text-left shadow-lg">
            <div className="mb-2">
              <h3 className="text-xl! text-[#464646]!">
                Enterprise-Grade Security for Sensitive Financial Data
              </h3>
            </div>
            <p>
              Your QuickBooks files contain sensitive information, including
              Social Security numbers (SSNs), banking data, payroll information,
              and other private financial records. Sagenext handles that
              information with the care you would expect from a cloud hosting
              company. We use the{" "}
              <span className="font-semibold">
                strongest security features with strict physical protections and
                built-in redundancy.
              </span>
            </p>
          </div>

          <div className="lg:col-span-4 bg-white border border-neutral-300 rounded-2xl text-left shadow-lg">
            <div className="mb-2">
              <h3 className="text-xl! text-[#464646]!">
                Host Multiple Apps in One Integrated Cloud Environment
              </h3>
            </div>
            <p>
              <span className="font-semibold">
                Sagenext lets you host multiple compatible third-party apps in a
                single environment,
              </span>{" "}
              so your staff doesn&apos;t have to switch between separate
              systems. This can include tax software, workflow and practice
              tools, time and billing apps, document management systems, and
              Microsoft Office programs like Excel, Outlook, and more.
            </p>
          </div>

          <div className="lg:col-span-4 bg-white border border-neutral-300 rounded-2xl text-left shadow-lg">
            <div className="mb-2">
              <h3 className="text-xl! text-[#464646]!">
                Flexible, Transparent Pricing With No Hidden IT Costs
              </h3>
            </div>
            <p>
              Unlike other hosting providers that only sell large, quote-based
              plans,{" "}
              <span className="font-semibold">
                Sagenext keeps things clear and flexible.
              </span>{" "}
              You pay per user, can adjust seats as staffing shifts, and can use
              your own QuickBooks licenses or get help obtaining them. Billing
              stays simple without extra IT charges.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white border border-neutral-300 rounded-2xl text-left shadow-lg">
            <div className="mb-2">
              <h3 className="text-xl! text-[#464646]!">
                Purpose-Built Hosting for SMBs and Financial Professionals
              </h3>
            </div>
            <p>
              <span className="font-semibold">
                Built for SMBs, CPAs, accountants, tax professionals, and
                individuals.
              </span>{" "}
              Sagenext is not your generic cloud hosting provider; it offers
              end-to-end hosting services.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white border border-neutral-300 rounded-2xl text-left shadow-lg">
            <div className="mb-2">
              <h3 className="text-xl! text-[#464646]!">
                Full Support for All QuickBooks Desktop Editions
              </h3>
            </div>
            <p>
              <span className="font-semibold">
                Supports all editions of{" "}
                <Link href="https://www.thesagenext.com/quickbooks-hosting">
                  QuickBooks hosting
                </Link>
              </span>
              . Sagenext is not your generic cloud hosting provider; it offers
              end-to-end hosting services.
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="flex items-center justify-between bg-radial to-[#18436A] from-[#2E84D0] h-[400px] lg:h-[434px] lg:pl-[10vw]">
        <div className="flex flex-col items-center lg:items-start gap-6 w-full">
          <div className="lg:mb-3 lg:mt-4">
            <span className="bg-[#71AAFF2E] text-white font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              Exciting Offer
            </span>
          </div>

          <span className="font-bold! lg:text-4xl! text-white! lg:max-w-3/4 max-lg:text-center">
            Try QuickBooks Cloud Hosting Risk-Free
          </span>

          <div className="flex flex-col lg:flex-row items-center gap-5">
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              customClass="border-white"
            />

            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5!"
              isBanner
            />
          </div>
        </div>

        <Image
          src="/assets/images/qb-hosting/offerImg-1.png"
          alt="offerImg"
          height={434}
          width={582}
          className="h-full max-lg:hidden"
        />
      </section>

      {/* qb-hosting icons */}
      <section className="container mx-auto text-center my-20">
        <div className="flex flex-wrap items-start justify-center gap-5 *:tracking-[1%] *:[&>p]:max-w-[180px] *:[&>p]:w-full *:leading-[139%] relative">
          <div className="grid place-items-center gap-5">
            <Image
              src="/assets/images/qb-hosting/benefits-1.svg"
              alt="qbBenefits"
              height={45}
              width={45}
            />

            <p>Supports 200+ Integrations from third-party</p>
          </div>

          <div className="h-[100px] w-[1px] bg-radial from-black to-white/50 max-lg:hidden" />

          <div className="grid place-items-center gap-5">
            <Image
              src="/assets/images/qb-hosting/benefits-2.svg"
              alt="qbBenefits"
              height={45}
              width={45}
            />

            <p>
              Subscribe for 12 months and get 15 months of usage. (Total 15
              months)
            </p>
          </div>

          <div className="h-[100px] w-[1px] bg-radial from-black to-white/50 max-lg:hidden" />

          <div className="grid place-items-center gap-5">
            <Image
              src="/assets/images/qb-hosting/benefits-3.svg"
              alt="qbBenefits"
              height={45}
              width={45}
            />

            <p>15000+ Customers served</p>
          </div>

          <div className="h-[100px] w-[1px] bg-radial from-black to-white/50 max-lg:hidden" />

          <div className="grid place-items-center gap-5">
            <Image
              src="/assets/images/qb-hosting/benefits-4.svg"
              alt="qbBenefits"
              height={45}
              width={45}
            />

            <p>500+ Apps hosted successfully</p>
          </div>

          <div className="h-[100px] w-[1px] bg-radial from-black to-white/50 max-lg:hidden" />

          <div className="grid place-items-center gap-5">
            <Image
              src="/assets/images/qb-hosting/benefits-5.svg"
              alt="qbBenefits"
              height={45}
              width={45}
            />

            <p>500+ Addons support</p>
          </div>

          <div className="h-[100px] w-[1px] bg-radial from-black to-white/50 max-lg:hidden" />

          <div className="grid place-items-center gap-5">
            <Image
              src="/assets/images/qb-hosting/benefits-6.svg"
              alt="qbBenefits"
              height={45}
              width={45}
            />

            <p>24/7/365 days of dedicated customer support team</p>
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="w-full my-16 bg-[#F4F9FF] py-16">
        <div className="container mx-auto text-center place-items-center">
          <div className="w-fit place-self-center bg-[#71AAFF2E] rounded-full py-3 px-6">
            <span className="font-semibold text-[13px] text-[#051E41]">
              STEPS
            </span>
          </div>

          <div className="pt-5 max-w-2xl">
            <h2 className="font-normal! text-[32px] text-[#0C336B] leading-[133%]">
              How <b>Sagenext QuickBooks Hosting</b> Works: A{" "}
              <b>Step‑by‑Step</b> Guide
            </h2>
          </div>

          <div className="lg:px-20 flex flex-col max-lg:gap-6 gap-10 items-center justify-center pt-8 lg:pt-16 w-full">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex lg:items-center justify-center gap-5 lg:gap-10"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="bg-blue-400/50 rounded-full h-20 w-20 lg:h-28 lg:w-28 aspect-square flex items-center justify-center">
                    <div className="bg-blue-400 rounded-full w-12 h-12 lg:h-20 lg:w-20 grid place-items-center text-white font-semibold text-2xl">
                      {index + 1}
                    </div>
                  </div>

                  <span className="font-medium ">Step {index + 1}</span>
                </div>

                <div className="bg-white px-6 py-10 border border-[#00106D1F] rounded-[22px] w-full h-full text-start grid gap-3 border-b-4 border-b-[#FDC736]">
                  <span className="text-xl font-semibold text-[#013D8E]">
                    {step.heading}
                  </span>
                  <p className="leading-[133%]!">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <div className="w-full mx-auto text-center place-items-center my-20 grid gap-10 bg-[url(/assets/images/qb-hosting/banner-2.png)] bg-cover">
        <h2 className="w-4/5 lg:w-[50%] text-[#0C336B]!">
          Book your{" "}
          <span className="italic text-[#0C336B]/70">
            QuickBooks cloud hosting
          </span>{" "}
          plan with Sagenext Today!
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <BlueCta href1="/trial" text1="Get A Free Trial Now" />
          <FormModal text="Request A Free Quote" customClass="h-full! py-3.5! border border-blue-900!" isBanner />
        </div>
      </div>

      <FAQ faqTitle="FAQs" />
      <script
        id="page_best-quickbooks-hosting-providers_Faq"
        key="page_best-quickbooks-hosting-providers_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Which cloud provider does Intuit use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Intuit primarily uses Rightworks as its official cloud infrastructure provider for QuickBooks hosting, and many businesses also choose Sagenext as a trusted alternative for reliable, secure cloud hosting of QuickBooks and related applications."
              }
            }, {
              "@type": "Question",
              "name": "What is the best cloud hosting provider?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sagenext is one of the best cloud hosting providers in the United States, alongside Rightworks, Verito Technologies, Ace Clouds, and Summit."
              }
            }, {
              "@type": "Question",
              "name": "Can multiple users work in the same QuickBooks file at once?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Multi-user access does work in the same QuickBooks file at the same time. You can give each person their own login, control which files they can see, and work together in real time."
              }
            }, {
              "@type": "Question",
              "name": "How is QuickBooks hosting different from QuickBooks Online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Online is a separate, web‑based product from Intuit. QuickBooks hosting lets you keep using QuickBooks Desktop (Pro, Premier, Enterprise, Accountant, etc.) online from anywhere. In ‍ ‌‍ ‍‌ ‍ ‌‍ ‍‌ case your company requires features that are only available on Desktop or existing workflows, you can still upgrade your access to hosted QuickBooks Desktop with Sagenext without sacrificing the functionality that you depend  ‍ ‌‍ ‍‌ ‍ ‌‍ ‍‌on."
              }
            }]
          }),
        }}
      />
    </>
  );
};

export default BestQuickbooksHostingProvider;
