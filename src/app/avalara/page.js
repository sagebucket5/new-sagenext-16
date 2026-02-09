import React from "react";
import { getMetaData } from "@/lib/metaData";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("avalara");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Favalara%2Flogo.png&w=640&q=75",
          secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Favalara%2Flogo.png&w=640&q=75",
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
      images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Favalara%2Flogo.png&w=640&q=75"],
    },
  };
}

function avalara() {
  return (
    <>
      <section className="py-5 avlara-section space-y-16 md:pt-36 pt-20">
        <div className="container py-5 mx-auto">
          <div className="text-center">
            <div className="mx-auto place-items-center space-y-8">
              {/* <h2 className="hiddenAvalara">Avalara</h2> */}
              <Image
                src="/assets/images/avalara/logo.png"
                alt="Avalara"
                width={300}
                height={250}
              />
              <p className="pt-3 text-black default">
                <b>Avalara</b> is among the top leaders in providing
                tax-compliant solutions to SMBs! They are simplifying tax
                compliance with automation. Meeting the tax challenges can be
                hard for companies not fully aware of the laws &amp; thus
                Avalara is reducing the complexities of compliance at each
                stage, irrespective of the business size. They provide the
                platform to calculate accurate rates, file &amp; remit the data,
                &amp; manage the certificates. The solutions provided by Avalara
                are meant to work across platforms to manage the transaction
                data, whether it is a single platform or omnichannel platform.
                They have over 1000 signed partner integrations &amp; thus
                enabling the businesses to choose the integration that best
                works for them. This way businesses are able to reduce the
                non-compliance risks and reduce the audit risks with greater
                accuracy.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-8">
            <div className="w-[300px] h-[1px] bg-[#013D8E]" />
            <h2 className="text-center text-black font-italic font-weight-bold font-25 partner-horizontal-line">
              Solutions
            </h2>
            <div className="w-[300px] h-[1px] bg-[#013D8E]" />
          </div>
        </div>

        <div className="container qb-hosting-features bg-white mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 *:border *:rounded-2xl *:p-5">
            <div className={`grid-cols-1`}>
              <h3 className="text-black font-18 fw-600 mb-4">Tax Types</h3>
              <p className="text-black font-14 line-height-23 mb-0">
                It includes Sales &amp; Use Tax, Consumer Use Tax, &amp;
                International Tax. Businesses are getting one solution to
                calculate their tax rates &amp; manage the returns. The tax
                types are meant to simplify the tax
              </p>
            </div>
            <div className={`grid-cols-1`}>
              <h3 className="text-black font-18 fw-600 mb-4">
                Featured Services
              </h3>
              <p className="text-black font-14 line-height-23 mb-0">
                The featured services include AvaTax, returns, compliance
                documents, business licenses, and data &amp; insights! AvaTax is
                meant for the calculation of comprehensive &amp; current tax
                rates. It is a cloud-based
              </p>
            </div>
            <div className={`grid-cols-1`}>
              <h3 className="text-black font-18 fw-600 pb-1">
                Third-Party App Integration
              </h3>
              <p className="text-black font-14 line-height-23 mb-0">
                Avalara supports third-party app integration for smoother &amp;
                faster tax calculations &amp; filling returns! Businesses are
                able to automate the required tasks &amp; focus on other aspects
                of tax compliance. The popular integration includes Magento,
              </p>
            </div>
            <div className={`grid-cols-1`}>
              <h3 className="text-black font-18 fw-600 pb-1">
                Avalara Commerce Monitor
              </h3>
              <p className="text-black font-14 line-height-23 mb-0">
                It provides analysis from the Avalara index-tracking system
                monitoring the segments of the US economy. The Indices used are
                Avalara Comm-erce Monitor Manufactu-ring Index (engages the
                mechanical &amp;
              </p>
            </div>
            <div className={`grid-cols-1`}>
              <h3 className="text-black font-18 fw-600 mb-4">
                Resource Center
              </h3>
              <p className="text-black font-14 line-height-23 mb-0">
                It is the place to grow the knowledge of expertise of businesses
                &amp; professionals with educational tools &amp; guides. Connect
                with Avalara and get all the relevant details for tax filing
                &amp; returns. We are also updating our
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="col-span-1 lg:col-span-5 pt-0">
            <Image
              alt="Unlimited Technical Support"
              className="center img-live-border"
              src="/assets/images/avalara/mig2.png"
              height={450}
              width={450}
            />
          </div>
          <div className="col-span-1 lg:col-span-7">
            <h2 className="text-white font-25 font-weight-bold pt-1 pb-2 mob-center">
              Why Avalara
            </h2>
            <p className="default mob-center">
              Avalara provides a seamless Sales Tax Program meant to ease the
              hassle of businesses relying on tax return &amp; filling tools.
              They have a team of experts &amp; tax professionals with the right
              kind of details related to tax policies. The company has
              successfully managed tax on $19 billion in goods during Cyber Week
              in 2019. The platform is meant for businesses calculating the tax
              returns at peak times for retailers &amp; manufacturers. The
              company remitted $8.4 billion in taxes in 2019 &amp; also remits
              billions of dollars on behalf of customers looking for relief from
              the tedious work of tax calculation. They have the tools designed
              for global commerce and thus prepares businesses for growth in the
              global market. Reach out to Avalara if you’re looking for reliable
              tax tools &amp; solutions meant to ease the pressure on businesses
              related to tax compliance.
            </p>
          </div>
        </div>
      </section>
      <section className="white-bg py-5"></section>
    </>
  );
}

export default avalara;
