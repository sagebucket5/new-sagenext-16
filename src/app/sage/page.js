
import React from "react";
import { getMetaData } from "@/lib/metaData";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("sage");

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
          url: "/assets/images/windows-virtual-desktop/hero-img.png",
          secureUrl: "/assets/images/windows-virtual-desktop/hero-img.png",
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
      images: ["/assets/images/windows-virtual-desktop/hero-img.png"],
    },
  };
}

function sage() {

  const accordionData1 = [
    {
      title: "Sage Accounting",
      description:
        "Sage Accounting is an all-cloud based online accounting solution that allows businesses to automate workflows, generate, track and integrate payment links with invoices, keep expenses in check and manage the cash flow all with the ability to operate over a network remotely.",
    },
    {
      title: "Sage 50cloud Accounting",
      description:
        "Sage 50cloud is a powerful desktop accounting software that accommodates the cloud to enable businesses to access their business accounting data anywhere over a network. Sage 50cloud provides greater cash flow and invoice management, superior inventory management, cost tracking into and out of jobs and projects, a simplified payroll deployment function and comprehensive business reports making it the most popular accounting solutions for small businesses.",
    },
    {
      title: "Sage Timeslips",
      description:
        "Timeslips is an intuitive billing and time management software from Sage that helps businesses create highly accurate and prompt bills. Timeslips is a breakthrough billing solution enabling enterprises to record and monetize maximum billable hours to improve profitability through a simplistic platform with access over multiple devices.",
    },
    {
      title: "Sage HR",
      description:
        "Sage HR is a revolutionary human resource management tool for organizations and teams of all sizes. Sage HR helps businesses improve the visibility of company personnel to better manage teams through a platform that gives employees numerous self-service capabilities such as requests for leave, payslips, schedules and policies of the company amongst others. Sage HR helps firms retain and engage their employees better, faster and smoother.",
    },
    {
      title: "Sage X3",
      description:
        "The X3 is a new age ERP solution helping businesses consolidate control of operations and processes over the cloud. Improve supervision of your organization with Sage X3 with capabilities such as seamless supply chain management, faster time to market through production management and maintain profitability with better financial management all with tailored options for different industries.",
    },
    {
      title: "Sage Intacct",
      description:
        "Intacct from Sage is an AICPA endorsed cloud-based financial management suite with industry-specific customizations. Intacct enables high-level automation for sophisticated functions, comprehensive data analysis for the execution of strategies and real-time reporting of management processes for businesses of dimensions.",
    },
  ];

  const accordionData2 = [
    {
      title: "Sage HRMS",
      description:
        "Sage HRMS is a comprehensive and highly customizable software solution to help small and medium-sized businesses with employee lifecycle management through interactive tools to enable organizations to scout talent, retain personnel, improve employee management, alleviate the recruitment process and more through an all-digital green platform.",
    },
    {
      title: "Sage People",
      description:
        "People is a cloud-based HR application built on the Salesforce platform. The tool is tailored for maximum adaptability, real-time and through data analytics and international compliance to create a global HR solution to help increase productivity in the workplace and improve the employee experience.",
    },
    {
      title: "Sage CRM",
      description:
        "Sage’s CRM is a definitive tool for helping businesses retain and understand customers relationships to improve growth in revenues, smoother operations through the elimination of duplicating tasks and create a high-performance sales team with a data-driven approach.",
    },
  ];

  const accordionData3 = [
    {
      title: "Sage 100cloud",
      description:
        "Sage 100cloud is an all-around solution to help medium-sized businesses better administer manufacturing processes, get more control over wholesale distribution and manage various professional service processes. Sage 100cloud is a highly customizable and secure software that helps businesses mitigate risk and procure maximum information along with cloud connectivity to maintain control from anywhere in the world.",
    },
    {
      title: "Sage 300cloud",
      description:
        "Sage 300cloud is an advanced accounting and management software with support for multiple languages that helps mid-sized enterprises scale, automate and customize their needs with ease. Sage 300cloud is a holistic package with high-quality tools to help businesses manage virtually all business operations through a single, simplified platform all with the ability to use it over a network anywhere and anytime.",
    },
    {
      title: "Sage Fixed Assets",
      description:
        "Sage Fixed Assets is a modern asset management tool to help consolidate asset data to help make better decisions on acquisition, transfer and disposal of fixed assets. The interactive and easy-to-use to help reduce tax burdens and improve the structure of expenses to cut operating costs.",
    },
  ];

  return (
    <>
      <section className="pt-36">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <Image
              height={200}
              width={300}
              src="/assets/images/sage/logo.png"
              alt="sage"
              className="object-contain"
            />
            <p className="pt-3 text-black default w-full md:w-7/12">
              <b>Sage</b> is a global software solutions provider that enables
              businesses of all shapes and sizes to organize and perform
              sophisticated operations through a comprehensive suite of
              accounting, financial and management applications. With more than
              four decades of industry experience, Sage offers a host of
              solutions for a variety of industries and enterprises of different
              scales, and one of its most popular offerings is an
              internationally acclaimed advanced accounting software called Sage
              50.
            </p>
          </div>
        </div>

        <div className="container text-center my-16">
          <h2>Products and services</h2>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            <div className="lg:w-3/5">
              <h2>Accounting Solutions</h2>
              <p className="text-black default">
                Sage offers state-of-the-art and one of the most widely used
                suite of advanced accounting software with progressive
                capabilities that allow businesses to perform multiple
                accounting and related functions with the assistance of a
                unified platform. Sage provides innovative accounting solutions
                that can help your business improve efficiency and effectiveness
                without the use of a complicated system.
              </p>

              {accordionData1.map((data, index) => {
                return (
                  <Accordion key={index}>
                    <AccordionSummary>{data.title}</AccordionSummary>
                    <AccordionDetails>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.description,
                        }}
                      />
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
            <div className="lg:w-2/5">
              <Image
                height={300}
                width={600}
                alt="Unlimited Technical Support"
                className="center img-live-border"
                src="/assets/images/sage/4.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/5">
              <Image
                height={300}
                width={600}
                alt="Unlimited Technical Support"
                src="/assets/images/sage/1.png"
              />
            </div>

            <div className="lg:w-3/5">
              <h2>Human Resources and CRM Solutions</h2>
              <p className="text-black default">
                Sage offers a host of tools and applications with high
                integration capabilities and customization to help cater to your
                human resource and customer relationship management process
                effortlessly.
              </p>

              {accordionData2.map((data, index) => {
                return (
                  <Accordion key={index}>
                    <AccordionSummary >{data.title}</AccordionSummary>
                    <AccordionDetails>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.description,
                        }}
                      />
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/5">
              <h2>Business Management</h2>
              <p className="text-black default">
                Sage helps organizations manage processes and operations better
                with its package of holistic intuitive business management tools
                that create a flexible, efficient and productive work
                environment.
              </p>

              {accordionData3.map((data, index) => {
                return (
                  <Accordion key={index}>
                    <AccordionSummary>{data.title}</AccordionSummary>
                    <AccordionDetails>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.description,
                        }}
                      />
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
            <div className="lg:w-2/5">
              <Image
                height={300}
                width={600}
                alt="Unlimited Technical Support"
                className="center img-live-border"
                src="/assets/images/sage/2.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/5">
              <Image
                height={300}
                width={600}
                alt="Unlimited Technical Support"
                className="center"
                src="/assets/images/sage/3.png"
                style={{ marginTop: "-10px" }}
              />
            </div>
            <div className="lg:w-3/5">
              <h2>Why Sage</h2>
              <p className="default mob-center">
                Sage is a market leader in small and medium-sized business tools
                across the world, helping enterprises of various proportions
                satisfy their accounting, HRM and business management needs
                through its suite of intuitive applications and services that
                allow organisations from multiple industries to scale
                operations, improve efficiencies and increase productivity while
                helping enterprises reduce costs, grow revenues and raise
                profitability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default sage;
