import { getMetaData } from "@/lib/metaData";

export async function generateMetadata() {
  const meta = getMetaData("privacy-policy");

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
          url: "/assets/images/contact-us/contact-us-banner.webp",
          secureUrl: "/assets/images/contact-us/contact-us-banner.webp",
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
      images: ["/assets/images/contact-us/contact-us-banner.webp"],
    },
  };
}

function PrivacyPolicy() {
  return (
    <>
      <section className="bg-[#efefef] px-5 pt-14">
        <div className={`lg:py-12 py-5`}>
          <h1 className={`text-center !text-[#2d4370] !leading-[70px] !text-[40px]`}>Privacy Policy</h1>
        </div>
      </section>
      <section>
        <div className="container py-6 mx-auto">
          <p className="text-black">
            In the course of serving its customers, Sagenext Infotech acquires,
            stores, and transmits customer communications and information that
            customers may regard as private or sensitive. Some of this
            information - such as the customer&apos;s name, address, telephone
            number, and credit card data - is provided to Sagenext Infotech by
            its customers to establish service. Other information - such as the
            customer&apos;s account status, choice of services, and customer
            logs - is created and maintained by Sagenext Infotech in the normal
            course of providing service. Sagenext Infotech also uses cookies,
            which are small pieces of information that a website can store in a
            designated file on a user&apos;s computer for various reasons. For
            example, Sagenext Infotech uses cookies on the landing pages of
            products sold online which record the customer information that is
            required on the order form. This information is then forwarded to an
            internal sales tracking database within Sagenext Infotech. Also,
            Sagenext Infotech may store customers electronic mail and other
            communications as a necessary incident to the transmission and
            delivery of those communications.
          </p>
          <p className="text-black pt-5">
            This Privacy Policy applies only to Sagenext Infotech&#8217;s
            treatment of data collected online and does not apply to any
            Sagenext Infotech data collection practices or the data collection
            practices of any third parties, Sagenext Infotech&apos;s customers,
            or any entities affiliated with Sagenext Infotech. Also, please note
            that use of Sagenext Infotech&apos;s website constitutes acceptance
            of this Privacy Policy. Sagenext Infotech&apos;s policies and
            procedures for handling customer information have been created with
            the understanding that Internet technologies are still evolving and
            that Internet business methods are continuing to evolve to meet the
            needs and opportunities of the changing technologies. As a result,
            Sagenext Infotech&apos;s policies and procedures are subject to
            change. Changes will be posted to the website and users agree to be
            bound by those changes.
          </p>
        </div>
      </section>
      <section className={`my-10`}>
        <div className={`bg-[#2d4370] h-[300px]`}></div>
        <div className={`container mx-auto`}>
          <div className={`-mt-[240px] px-5 bg-white py-12.5 rounded`}>
            <h2 className={``}>Data Security</h2>
            <p className={`text-justify text-black`}>
              Sagenext Infotech protects the confidentiality of its
              customers&#8217; information, account information and personal
              communications. To secure the information collected online,
              prevent unauthorized access, maintain data accuracy, and ensure
              the only appropriate use of information that is collected from
              customers, Sagenext Infotech has implemented appropriate physical,
              electronic, and managerial procedures. Further, Sagenext Infotech
              requires employees to keep customer information confidential.
              Sagenext Infotech cautions its customers and website visitors that
              no medium of communication, including the Internet, is entirely
              secure. Accordingly, Sagenext Infotech cannot be responsible for
              loss, corruption or unauthorized acquisition and use of personal
              information provided to our website, or for any damages resulting
              from such loss, corruption, unauthorized acquisition or
              unauthorized use. How is customer information used? Sagenext
              Infotech may share customer information with selected partners,
              for example, to provide customers with information about products
              which might be of interest to the customer or to enable the
              customer to take advantage of special partner programs. Sagenext
              Infotech may also use customer information to provide its
              customers with system information or information about new or
              upgraded products. In the case of a business transaction,
              including but not limited to, a merger or sale of a portion of
              Sagenext Infotech&apos;s assets, customer information will likely
              be part of the assets transferred. In this event, Sagenext
              Infotech will attempt to notify impacted customers that their
              information has been transferred.
            </p>
            <h2 className={` !mt-12.5`}>
              Disclosure of Customer Information and Communications
            </h2>
            <p className={`text-justify text-black`}>
              Sagenext Infotech will not otherwise disclose its customers&#8217;
              personal and account information unless Sagenext Infotech has
              reason to believe that disclosing such information is necessary to
              identify, make contact with, or bring legal action against someone
              who may be causing harm or interfering with the rights or property
              of Sagenext Infotech, Sagenext Infotech&apos;s customers, or
              others, or where Sagenext Infotech has a good faith belief that
              the law requires such disclosure. Sagenext Infotech also will not,
              except for reasons stated below, disclose to third parties the
              contents of any electronic mail or other electronic communications
              that Sagenext Infotech stores or transmits for its customers.
            </p>
            <p className="text-black pt-4">
              <b>
                The circumstances under which Sagenext Infotech will disclose
                such electronic customer communications are when :
              </b>
            </p>
            <ol className={`list-decimal marker:text-[#2d4370] marker:font-bold pl-[30px]`}>
              <li className="py-2">
                It is necessary to provide service to the customers.
              </li>
              <li className="py-2">
                It is necessary to protect the legitimate interests of Sagenext
                Infotech and its customers.
              </li>
              <li className="py-2">
                It is required to cooperate with interception orders, warrants,
                or other legal processes that Sagenext Infotech determines in
                its sole discretion to be valid and enforceable.
              </li>
              <li className="py-2">
                It is necessary to provide to a law enforcement agency when the
                contents are inadvertently obtained by Sagenext Infotech and
                appear to pertain to the commission of a crime.
              </li>
            </ol>
            <p className={`text-justify text-black`}>
              Sagenext Infotech disclaims any intention to censor, edit or
              engage in ongoing review or surveillance of communications stored
              on or transmitted through its facilities by customers or others.
              Sagenext Infotech will, however, review, delete or block access to
              communications that may harm Sagenext Infotech, its customers or
              third parties. The grounds on which Sagenext Infotech may take
              such action include, but are not limited to, actual or potential
              violations of Sagenext Infotech&#8217;s Acceptable Use Policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
