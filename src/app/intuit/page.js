import React from "react";
import { getMetaData } from "@/lib/metaData";
import SimpleAccordion from "@/components/utils/SimpleAccordion";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("intuit");

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
          url: "/assets/images/intuit/logo.png",
          secureUrl: "/assets/images/intuit/logo.png",
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
      images: ["/assets/images/intuit/logo.png"],
    },
  };
}

function intuit() {

  const accordionData = [
    {
      title: "New Business",
      description: `QuickBooks enables new businesses and startups to reach unprecedented heights and achieve their true potential; with the ability to use pre-installed automation templates businesses can leverage the numerous tools and comprehensive data to bring goals to fruition.<br>New businesses need the ability to scale fast and adapt to a rapidly changing businesses environment in dynamic markets across the globe. QuickBooks helps manage your business data and financials in ways that make sure that your business expectations never fall short.<br><br><b>QuickBooks can help you:</b></p><ul className="qlist text-black"><li>organize your finances;</li><li>help make informed decisions;</li><li>track your sales figures;</li><li>generate invoices; and more</li></ul><br><p className="text-black default">QuickBooks gives you access to unmatched guidance and support to make sure your business is always up and running.`,
    },
    {
      title: "Small Business",
      description: `Small business owners are the backbone of any economy and QuickBooks makes sure their foundations remain solid with its advanced accounting solutions to help manage businesses effortlessly.</p><p className="text-black default"><b>Small businesses can use QuickBooks to:</b></p><ul className="qlist text-black"><li>manage cash flow with the ability to accept payments within the ecosystem;</li><li>keep a check on payrolls and setup automatic payrolls to ensure peace of mind; and</li><li>monitor and manage your employees with digital clock-ins, working hour schedules, project management and detailed reports. </li></ul><br><p className="text-black default">QuickBooks is the most popular solution for small businesses that enables them to grow with their needs with the assurance of a stable management system.`,
    },
    {
      title: "Mid-sized Businesses",
      description: `QuickBooks is a complete solution for all accounting, and with its Enterprise offering, medium-sized businesses can elevate the processes without the hassles of a complicated system. QuickBooks Enterprise is the go-to software for mid-sized firms owing to its market-leading accounting and business management tools that allow large scale deployment, wide usage and universal access.</p><p className="text-black default"><b>QuickBooks Enterprise offers:</b></p><ul className="qlist text-black"><li>Industry-specific solutions to help businesses in all sectors take advantage of tailored capabilities;</li><li>robust reports that give you every opportunity to understand every aspect of your business and help you maintain profitability;</li><li>heavy customization and integration to fulfil specific requirements of your business the way you need it;</li><li>employee management to make sure your taxation and payroll duties are taken care of;</li><li>inventory management to help eliminate any scope of errors;</li><li>Best-in-class customer service that is always available to resolve your issues.</li></ul>`,
    },
  ];

  return (
    <>
      <section className="py-5 place-items-center space-y-16 md:pt-36 pt-20">
        <div className="container mx-auto place-items-center space-y-8">
          {/* <h1 className="hiddenAvalara">Intuit</h1> */}
          <Image
            src="/assets/images/intuit/logo.png"
            alt="quickbase"
            height={200}
            width={200}
          />
          <p className="pt-3 text-black default">
            <b>INTUIT’S QUICKBOOKS</b> is a highly regarded accounting software
            best suited to individuals, small businesses and accountants.
            QuickBooks is packed with an abundance of features that enable
            customers to manage incomes, cash flow, expenses and more. Through
            constant innovation and development, QuickBooks delivers the best
            user experience and capabilities such as generating invoices, making
            payments, creating comprehensive reports and even taxation.
            QuickBooks comes with a diverse range of plans and options to help
            service businesses of all shapes and sizes.
            <br />
            <br />
            Intuit is a leading provider of accounting and financial software
            solutions catering for individuals, small businesses and accounts
            around the world. It offers a host of applications to help users
            manage taxes, manage budgets, monitor credit scores, track
            expenditure along with a suite of capabilities for accounts to
            improve workflow and scalability. Intuit is the go-to software
            provider for your accounting needs and its QuickBooks software is
            one of the smartest solutions in the market that bring flexibility,
            scalability and convenience to the hands of users.
          </p>
        </div>

        <div className="container">
          <div className="col-lg-11 col-md-12 mx-auto">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="lg:w-5/12">
                <Image
                  height={200}
                  width={200}
                  alt="Unlimited Technical Support"
                  className="size-full object-contain"
                  src="/assets/images/intuit/img.png"
                />
              </div>
              <div className="lg:w-7/12">
                <h2 className="text-black font-25 font-weight-bold pt-2 pb-3 mob-center">
                  Solutions by types of businesses
                </h2>
                <SimpleAccordion accordionData={accordionData} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 place-items-center">
        <div className="container">
          <div>
            <h2>Features</h2>
          </div>

          <div className="grid lg:grid-cols-5 *:p-5 *:border *:rounded-2xl gap-5">
            <div>
              <div className="card-text py-2">
                <h3 className="default text-black font-18 font-weight-600 pb-2 line-height-23">
                  Invoicing
                </h3>
                <p className="default text-black m-0 pt-4">
                  Generate unlimited highly customized professional invoices
                  effortlessly, create and track GST bills and much more.
                </p>
              </div>
            </div>

            <div>
              <div className="card-text py-2">
                <h3 className="default  text-black font-18 font-weight-600 pb-2 line-height-23">
                  Reporting
                </h3>
                <p className="default text-black m-0 pt-4">
                  Receive real-time reports of how your business is performing,
                  predict and identify profits and losses with high precision
                  and get a detailed analysis of all your expenses.
                </p>
              </div>
            </div>

            <div>
              <div className="card-text py-2">
                <h3 className="default  text-black font-18 font-weight-600 pb-2 line-height-23">
                  Cash-flow management
                </h3>
                <p className="default text-black m-0">
                  Automate payments and reminders for dues against vendors to
                  never forget a payment while keeping track of cash with a
                  timely clearance.
                </p>
              </div>
            </div>

            <div>
              <div className="card-text py-2">
                <h3 className="default  text-black font-18 font-weight-600 pb-2 line-height-23">
                  Employee management
                </h3>
                <p className="default text-black m-0">
                  Manage billable hours for your employees through QuickBooks,
                  set up digital clock-ins. Oversee client billables within the
                  platform with the ability to automatically include them in
                  invoices.
                </p>
              </div>
            </div>

            <div>
              <div className="card-text py-2">
                <h3 className="default  text-black font-18 font-weight-600 pb-2 line-height-23">
                  Support
                </h3>
                <p className="default text-black m-0">
                  Resolve all your queries regarding QuickBooks with the help of
                  our highly trained customer support staff, which is equipped
                  to answer all your questions and trained to provide
                  exceptional guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="place-items-center mt-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="lg:w-5/12">
              <Image
                height={200}
                width={200}
                alt="Unlimited Technical Support"
                className="size-full object-contain"
                src="/assets/images/intuit/img1.png"
              />
            </div>
            <div className="lg:w-7/12">
              <h2>Why Choose QuickBooks?</h2>
              <p className="default mob-center">
                QuickBooks is a reliable market-leading accounting software that
                comes with an array of capabilities to help businesses scale,
                improve and revive their operations through an integrated suite
                of applications and features along with seamless cross-platform
                integration to deliver the best user experience. Furthermore,
                QuickBooks can easily be upgraded to newer versions and ensure
                seamless data migration. Businesses should opt for Quickbooks if
                they need a complete accounting solution with automation
                abilities and huge flexibility, without the hassles of a
                complicated system all for a budget-friendly pricing plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-16 place-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <h2 className="font-weight-bold font-25">What we offer </h2>
              <hr width="100%" className="sage50-border" />
              <p className="default text-black">
                Sagenext is an authorised Intuit Solutions Provider and
                QuickBooks hosting service provider. Businesses receive a free
                consultation on their needs and can purchase genuine QuickBooks
                licences through Sagenext at attractive rates. Sagenext is a
                leading provider of accounting software hosting services, and
                with its state-of-the-art cloud platform and robust
                infrastructure, allows businesses to host their QuickBooks
                software to gain access to their accounting data and
                capabilities anywhere in the world over a network.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default intuit;
