import styles from "@/styles/pages/company/servicelevelagreement.module.css";
import { getMetaData } from "@/lib/metaData";
import PointersTab from "@/components/PointersTab";

export async function generateMetadata() {
  const meta = getMetaData("service-level-agreement");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
    robots: meta.robots,
  };
}

function ServiceLevelAgreement() {
  return (
    <>
      <section className="bg-[#efefef] px-5 pt-14">
        <div className={`lg:py-12 py-5`}>
          <h1 className={`text-center !text-[#2d4370] !leading-[70px] !text-[40px]`}>Service Level Agreement</h1>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-12.5">
          <h2 className={`md-heading`}>
            Service Level Agreement of Sagenext Infotech
          </h2>
          <p className={`!leading-[23px] !text-[15px] text-justify !text-black pt-3`}>
            <b>
              ANY REFERENCE TO “COMPANY, WE, US, AND/OR OUR” IN THIS AGREEMENT
              SHALL BE UNDERSTOOD TO MEAN SAGENEXT INFOTECH LLC. ANY REFERENCE
              TO “CUSTOMERS AND YOU” IN THIS AGREEMENT SHALL BE UNDERSTOOD TO
              MEAN THE SERVICE USERS.
            </b>
          </p>
          <p className={`!leading-[23px] !text-[15px] text-justify text-black`}>
            This Service Level Agreement is a mutual agreement between the
            company and the customers, which defines the type and quality of
            services provided by the company to the customers. It includes both
            Virtual Server Hosting Plans and Virtual Applications Hosting Plans
            and is applicable to every customer, who has ordered any services
            from Sagenext and their account is active on Sagenext&#8217;s cloud
            servers.
          </p>
          <p className={`!leading-[23px] !text-[15px] text-justify text-black`}>
            This SLA is entered into by and between the company and customers as
            of the date the agreement is signed; which is the date of acceptance
            by customers.
          </p>
        </div>
      </section>
      <section
        className={`${styles["bg2"]} service-level ${styles["scope-service"]}`}
      >
        <PointersTab />
      </section>
      <section>
        <div className="container mx-auto py-4">
          <h2 className={`md-heading pb-3`}>
            Some guidelines that SLAs consists of are as follows{" "}
          </h2>
          <ol className={`list-decimal mark-blue px-3`}>
            <li className="my-1">
              What percentage of the time services will be available to the
              customers?
            </li>
            <li className="my-1">
              The number of customers that can be served concurrently.
            </li>
            <li className="my-1">
              Specific performance benchmarks to which real performance will be
              periodically compared.
            </li>
            <li className="my-1">
              The time schedule for notification in advance of network changes
              that may affect customers.
            </li>
            <li className="my-1">
              Sagenext Infotech help-desk response time for various varieties of
              issues.
            </li>
            <li className="my-1">
              Dial-in access availability provided by service provider Sagenext.
            </li>
            <li className="my-1">
              Usage statistics that will be provided by Sagenext.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default ServiceLevelAgreement;
