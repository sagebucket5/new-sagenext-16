import styles from "@styles/pages/company/HipaaCompliance.module.css";
import { getMetaData } from "@lib/metaData";

export async function generateMetadata() {
  const meta = getMetaData("hipaa-compliance");

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
          url: "/logo/logo.webp",
          secureUrl: "https://www.thesagenext.com/_next/image?url=%2Flogo%2Flogo.png&w=384&q=75",
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
      images: ["/logo/logo.png"],
    },
  };
}

function HipaaCompliance() {
  return (
    <>
      <section className="bg-[#efefef] px-5 pt-14">
        <div className={`lg:py-12 py-5`}>
          <h1
            className={`text-center !text-[#2d4370] !leading-[70px] !text-[40px]`}
          >
            HIPAA Compliance
          </h1>
        </div>
      </section>
      <section className={`${styles["section-white"]} py-12`}>
        <div className="container mx-auto">
          <div className="w-12/12 text-center">
            <h2 className={` text-center`}>HIPAA and its importance</h2>
            <br />
            <p className={`${styles["user-policy"]} pb-5`}>
              Passed by the U.S. Congress in 1996, the Health Insurance
              Portability and Accountability Act (HIPAA) is a legislation that
              has been designed to make it easier for the workers in the United
              States to retain health insurance coverage during change or loss
              of jobs. Also, it encourages electronic health records to enhance
              the overall quality and efficiency of the healthcare system of the
              country through seamless information sharing.
            </p>
            <hr width="80%" className="mx-auto" />
            <h2 className={` text-center `}>
              Complete hosting solutions compliant with HIPAA guidelines
            </h2>
            <br />
            <p className={`${styles["user-policy"]}`}>
              As a prominent accounting and tax software hosting provider,
              Sagenext is committed to ensuring all-round protection of
              confidential data of the clients. Our SSAE-16 Type-II certified
              data centers are fully HIPAA compliant that enables us to deliver
              highly secured and continuous solutions. It allows covered
              entities along with their business associates subject to HIPAA to
              acquire a highly advanced, reliable and fully secured cloud
              infrastructure to store, process and maintain electronic protected
              health information (e-PHI).
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles["section-f6f6f6"]} py-10`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 lg:gap-10 gap-5 ">
            <div className="col-span-12 col-sm-12">
              <h3 className="!text-black text-center">
                Security measures that we follow for HIPAA compliance
              </h3>
              <p className={`text-center ${styles["default"]} text-color`}>
                We have deployed a number of industry-leading security measures
                at our data centers with storage, accessibility, management, and
                sharing of the data to ensure everything is in line with HIPAA
                compliance. The major policies that we practice include:
              </p>
            </div>
            <div className="lg:col-span-6 col-span-12 px-3 border-r">
              <ul className="list-disc">
                <li>
                  Role-specific logins with proper monitoring for all
                  useraccounts
                </li>
                <li>A strict privacy policy adhering to HIPAA guidelines</li>
                <li>
                  Highly trained and skilled professionals to keep a check on
                  data security
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 col-span-12 px-3">
              <ul className="list">
                <li>Application access control</li>
                <li>
                  Advanced media and device controls for media reuse and
                  disposal
                </li>
                <li>
                  Review of Business Associate Agreement (BAA) with every vendor
                  involved in data processing and handling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles["section-blue"]} ${styles["service-level"]} ${styles["hippa-compliance"]}`}>
        <div className="container mx-auto">
          <div className="grid py-12 text-white">
            <table>
              <thead>
                <tr className="">
                  <th>&nbsp;&nbsp; Secure</th>
                  <th>&nbsp;&nbsp; Comprehensive</th>
                  <th>&nbsp;&nbsp; Collaborative</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>
                    <p className="text-white px-4 text-justify">
                      Achieve the highest level of security determined by the
                      HIPAA&apos;s compliance requirements with our secured
                      cloud-based solutions based on HIPAA compliance-critical
                      software and hardware and deployed from Sagenext&apos;s data
                      centers.
                    </p>
                  </td>
                  <td>
                    <p className="text-white px-4 text-justify">
                      Our fully- compliant cloud facilities fulfill the
                      availability, confidentiality, and integrity of electronic
                      protected health information to meet the comprehensive
                      HIPAA compliance demands.
                    </p>
                  </td>
                  <td>
                    <p className="text-white px-4 text-justify">
                      Implement fully secured, HIPAA compliant solutions with an
                      associate that works collaboratively with you to make sure
                      that they incorporate the context of your particular
                      business requirements.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section-white-terms service-legeal-mob pt-4 pb-4
lg:hidden block">
        <div className="container mx-auto">
          <div className="rounded-[12px]">
            <div className="col-lg-12 col-sm-12">
              <div id="option1" className="size_chart">
                <p>
                  Achieve the highest level of security determined by the
                  HIPAA&apos;s compliance requirements with our secured cloud-based
                  solutions based on HIPAA compliance-critical software and
                  hardware and deployed from Sagenext&apos;s data centers.
                </p>
              </div>
              <div id="option2" className="size_chart">
                <p>
                  Our fully- compliant cloud facilities fulfill the
                  availability, confidentiality, and integrity of electronic
                  protected health information to meet the comprehensive HIPAA
                  compliance demands.
                </p>
              </div>
              <div id="option3" className="size_chart">
                <p>
                  Implement fully secured, HIPAA compliant solutions with an
                  associate that works collaboratively with you to make sure
                  that they incorporate the context of your particular business
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-white pt-3 pb-3"></section>
      <section className={`${styles["section-blue-terms"]} pt-4 pb-4`}>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <h2 className="text-center mt-1 mb-1 text-white">
                Securing ePHI
              </h2>
              <p className="text-center mt-1 mb-1">
                Health Insurance Portability and Accountability Act requires the
                identifiers under (PHI) that comprises personal details
                including name, address, contact details, Social Security
                Number, which need to be protected. To ensure complete data
                protection at all levels including physical storage, network and
                data processing, we implement a number of steps like:
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles["section-white-terms"]}
${styles["securing-ephi"]} pt-4 pb-4`}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-12 bg-white rounded-[10px] mt-10">
            <div className="lg:col-span-4 col-span-12 border-r border-gray-200">
              <ul>
                <li>Risk Analysis</li>
                <li>Physical Security</li>
                <li>Antivirus</li>
                <li>Network Firewall</li>
                <li>Web Application Firewall</li>
                <li>Vulnerability Scanning</li>
                <li>Email Security</li>
                <li>DDoS Security</li>
              </ul>
            </div>
            <div className="lg:col-span-4 col-span-12 border-r border-gray-200">
              <ul>
                <li>Multi-level Authentication</li>
                <li>Encrypted Storage</li>
                <li>VPN Tunnels</li>
                <li>Identity and Access Management</li>
                <li>Encrypted Backups</li>
                <li>Disaster Recovery Scheme</li>
                <li>Single Sign-on</li>
                <li>Centralized Logging and Consistent Log Monitoring</li>
              </ul>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <ul>
                <li>Intrusion Detection and Prevention Mechanism</li>
                <li>File Integrity Monitoring</li>
                <li>Detection/Auditing of Devices Added</li>
                <li>Enterprise Identity and Access Management (IAM)</li>
                <li>Network Monitoring and Configuration Change Management</li>
                <li>Security Auditing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-4">
        <div className="container mx-auto">
          <div className="grid">
            <h2 className="font-25 text-center !font-bold">
              Security Auditing and Dashboard
            </h2>
          </div>
          <div className="grid grid-cols-12 pt-3">
            <div className="lg:col-span-8 col-span-6 ps-1 pe-0">
              <div className={`${styles["hippa-complaint"]}`}>
                HIPAA Compliant Hosting Options
              </div>
            </div>
            <div className="lg:col-span-4 col-span-6 ps-1 pe-0">
              <div className={`${styles["hosted-in"]} text-center`}>
                Hosted in Sagenext&apos;s Data Centers
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 border-b border-gray-200 py-3">
            <div className="lg:col-span-8 col-span-6 ps-1 pe-1">
              <p className="text-black">
                HIPAA Compliant Private Cloud Managed Hosting
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 border-b border-gray-200 py-3">
            <div className="lg:col-span-8 col-span-6 ps-1 pe-0">
              <p className="text-black">
                HIPAA Compliant Public Cloud Managed Hosting
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 border-b border-gray-200 py-3">
            <div className="lg:col-span-8 col-span-6 ps-1 pe-0">
              <p className="text-black">
                HIPAA Hybrid Managed Hosting (a combination of Cloud Hosting and
                Dedicated Server Hosting)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 border-b border-gray-200 py-3">
            <div className="lg:col-span-8 col-span-6 ps-1 pe-0">
              <p className="text-black">
                HIPAA Managed Hosting (on dedicated servers)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HipaaCompliance;
