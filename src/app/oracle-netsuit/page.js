import { getMetaData } from "@/lib/metaData";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("oracle-netsuit");

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
          url: "/assets/images/oracle/logo.png",
          secureUrl: "/assets/images/oracle/logo.png",
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
      images: ["/assets/images/oracle/logo.png"],
    },
  };
}

function oraclenetsuit() {
  return (
    <>
      <section className="py-5 space-y-16 md:pt-36 pt-20">
        <div className="container mx-auto">
          <div className="mx-auto place-items-center space-y-8">
            {/* <h1 className="text-black!">Oracle-Netsuit</h1> */}
            <Image
              src="/assets/images/oracle/logo.png"
              alt="quickbase"
              width={300}
              height={250}
            />
            <p className="pt-3 text-black default">
              <b>Oracle Netsuit</b> is a platform that enables businesses to
              manage their fundamental processes through a consolidated setup.
              NetSuite helps businesses with a host of services including ERP,
              financial tracking, hosting, CRM, inventory management and more;
              with the flexibility of a wide range of business applications.
              NetSuite&apos;s offerings include software and solutions that help
              businesses receive tailored services for their requirements to
              help them succeed in dedicated goals and achieve overall success.
            </p>
          </div>
        </div>

        <div className="container mx-auto">
          <div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-8">
                <div className="w-[300px] h-[1px] bg-[#013D8E]" />
                <h3 className="text-black font-25 font-weight-bold pb-2">
                  Offerings
                </h3>
                <div className="w-[300px] h-[1px] bg-[#013D8E]" />
              </div>
              <p>
                NetSuite provides a comprehensive business system offering a
                range of capabilities and services to leading businesses around
                the world.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 *:border gap-5 *:rounded-2xl mt-10">
              <div className="col-lg-3 col-md-6 p-5">
                <h3 className="text-black text-center">
                  Enterprise Resource Planning (ERP)
                </h3>
                <p className="text-black font-15 line-height-23 p-2">
                  NetSuite&apos;s Enterprise Resource Planning is a new-age
                  solution that helps businesses perform a range of backoffice
                  operations as well as financial business processes such as
                  accounting, inventory management and more.{" "}
                </p>
              </div>

              <div className="col-lg-3 col-md-6 p-5">
                <h3 className={`text-black text-center`}>
                  Global Business Management (OneWorld){" "}
                </h3>
                <p className="text-black font-15 line-height-23 p-2">
                  OneWorld is a solution from NetSuite that enables enterpris-es
                  to improve workflow between internat-ional and
                  multi-subsidi-ary operations through a unified and integra-ted
                  business management platform.{" "}
                </p>
              </div>

              <div className="col-lg-3 col-md-6 p-5">
                <h3 className="text-black text-center">
                  Customer Relationship Management (CRM)
                </h3>
                <p className="text-black font-15 line-height-23 p-2">
                  NetSuite offers a state-of-theart CRM software that helps
                  consolidate customer lifecycle information and provides a
                  holistic view of orders, cross-sell, renewals and servicing in
                  reference to the customers of a business.
                </p>
              </div>

              <div className="col-lg-3 col-md-6 p-5">
                <h3 className="text-black text-center">
                  NetSuite Professional Services Automation (PSA)
                </h3>
                <p className="text-black font-15 line-height-23 p-2">
                  NetSuite PSA a simplistic business offering that allows for
                  impeccable planning, tracking and execution of projects along
                  with seamless integration with various NetSuite capabilities.
                </p>
              </div>

              <div className="col-lg-3 col-md-6 p-5">
                <h3 className={`text-black text-center`}>OpenAir</h3>
                <p className="text-black font-15 line-height-23 p-2">
                  OpenAir from Netsuite is a comprehensive solution that enables
                  businesses to impr-ove efficiency and profitability through
                  effortless managem-ent, real-time information and exhaustive
                  reporting that can be accessed remotely.
                </p>
              </div>

              <div className="col-lg-3 col-md-6 p-5">
                <h3 className={`text-black text-center`}>
                  Omnichannel Commerce (SuiteCommerce)
                </h3>
                <p className="text-black font-15 line-height-23 p-2">
                  For modern e-commerce entities, SuiteCommerce is an
                  unparall-eled platform that helps busin-esses personalize and
                  enhance the shopping experie-nce for their customers across
                  multiple mediu-ms along with the ability to integrate
                  back-office systems with the point-of-sale.
                </p>
              </div>

              <div className="col-lg-3 col-md-6 p-5">
                <h3 className={`text-black text-center`}>SuiteSuccess</h3>
                <p className="text-black font-15 line-height-23 p-2">
                  SuiteSuccess is a methodology from NetSuite that helps
                  businesses tailor their working environments in a manner that
                  helps them scale and grow at unprecedented rates within a
                  short span of time without the use of high value resources or
                  an overhaul of an existing system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="oracle-solution mx-auto mt-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="p-2 bg-[#013d8e] w-fit">
              <Image
                alt="Unlimited Technical Support"
                className="center size-24 object-contain"
                src="assets/images/oracle/icn1.png"
                height={100}
                width={300}
              />
            </div>
            <div>
              <h2>Solution</h2>
              <p>
                NetSuite enables a wide range of businesses to take advantage of
                its cutting edge technology to help them get ahead of the
                competition even in the toughest of markets
              </p>
            </div>
            <div className="col-lg-2 col-md-12 pt-0"></div>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            <div className="mb-3">
              <p className="text-black default text-left">
                NetSuite helps startups scale faster to meet their growing
                requirements and achieve business goals faster than existing
                competitors.
              </p>
              <hr width="50%" className="mt-5" />
            </div>
            <div className="mb-3">
              <p className="text-black default text-left">
                Fast-growing businesses can leverage NetSuite&apos;s ability to
                deliver software and technology that helps transition their
                processes to smoother operations.
              </p>
              <hr width="50%" className="mt-5" />
            </div>
            <div className="mb-3">
              <p className="text-black default text-left">
                Family-Owned businesses now have the ability to compete with
                modern enterprises through NetSuite&apos;s array of solutions
                that help them manage inventory, accounts and operations with a
                high degree of control and data driven goals.
              </p>
              <hr width="50%" className="mt-5" />
            </div>
            <div className="mb-3">
              <p className="text-black default text-left">
                Small business owners can take advantage of NetSuite&apos;s
                simplistic platforms that are budgetfriendly and allow for rapid
                expansion efforts as and when needed.
              </p>
              <hr width="50%" className="mt-5" />
            </div>

            <div className="mb-3">
              <p className="text-black default ">
                Firms running mid-sized operations need high levels of
                convenience and comprehensive data access and reports, to ensure
                their operations are always at par with their standards.
                NetSuite helps them manage processes through tailored solutions
                that adapt to their needs.
              </p>
              <hr width="50%" className="mt-5" />
            </div>
            <div className="mb-3">
              <p className="text-black default ">
                Private equity backing often leads to rampant changes in
                management accompanied with rapid mergers, cross-border deals
                and expansion into international markets. NetSuite helps them
                maneuver through complicated decisions and manage sophisticated
                organizational changes.
              </p>
              <hr width="50%" className="mt-5" />
            </div>
            <div className="mb-3">
              <p className="text-black default ">
                Large enterprises across the globe are always faced with a range
                of challenges. The dynamics of an ever changing often overburden
                existing systems in place, and this is where NetSuite can help
                these large businesses exceed their potential, transcend
                saturation and maintain smooth operations without compromising
                on their growth needs.
              </p>
              <hr width="50%" className="mt-5" />
            </div>
            <div className="mb-3">
              <p className="text-black default ">
                Venture capital backed companies often need to execute rapid
                changes and maintain competitive edge in the fast-paced markets.
                NetSuite&apos;s solutions help satiate their need for rapidly
                changing requirements and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <Image
                alt="Unlimited Technical Support"
                className="center"
                src="/assets/images/oracle/img.png"
                height={450}
                width={450}
              />
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-white font-25 font-weight-bold pt-2 pb-3 mob-center">
                Why choose Netsuite
              </h2>
              <p>
                NetSuite is a future-ready solution that combines leading cloud
                capabilities under a single platform to simplify a host of
                modern business management processes. It helps reduce costs of
                businesses of all shapes and sizes without compromising on
                features that provide a competitive advantage.
                <br />
                <br />
                NetSuite is a holistic tool for users to consolidate multiple
                services under a single offering with high customization and
                integration capabilities. Businesses can leverage
                NetSuite&apos;s highly diverse portfolio of tailored solutions
                to compete in international markets coupled with comprehensive
                reports, metrics and an unmatched assemblage of information. The
                digital age relies heavily on a data approach to solve complex
                business problems in order to achieve maximum efficiency and
                high productivity, in order to realise business potentials and
                enable expansion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default oraclenetsuit;
