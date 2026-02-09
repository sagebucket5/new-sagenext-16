import { getMetaData } from "@/lib/metaData";
// import styles from "../styles/quickbase.module.css";

import React from "react";

export async function generateMetadata() {
  const meta = getMetaData("quickbase");

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
          url: "/assets/images/quickbase/logo.png",
          secureUrl: "/assets/images/quickbase/logo.png",
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
      images: ["/assets/images/quickbase/logo.png"],
    },
  };
}

function quickbase() {
  return (
    <>
      <section className="pt-20 mx-auto place-items-center">
        <div className="container">
          <div className="flex">
            <div className="flex flex-col lg:flex-row gap-10 py-10">
              <img
                src="/assets/images/quickbase/logo.png"
                alt="quickbase"
                width={300}
                className="lg:w-1/5 object-contain"
              />
              <p className="pt-3 text-black default">
                <b>QuickBase</b> is a low-code development platform that enables
                users to create and deploy a suite of applications and
                ecosystems. QuickBase allows non-developers to execute complex
                functions and enables collaborative development amongst users to
                facilitate development in a fast-paced business environment.
              </p>
            </div>
          </div>
        </div>

        <div className="container qb-hosting-features bg-white">
          <div className="grid lg:grid-cols-3 *:border gap-5 *:p-5 *:rounded-2xl">
            <div className="pt-3 pb-3 ">
              <div className="">
                <div className="flex flex-col">
                  <img
                    className="w-10 border rounded-md aspect-square p-1.5 object-contain"
                    src="/assets/images/quickbase/icn1.png"
                    height={55}
                  />
                  <h3>Low-code development</h3>
                </div>
                <p className="qb-features">
                  QuickBase is a low-code platform that allows users from
                  non-technical backgrounds to build professional applications
                  while facilitating the collaboration of multiple teams on a
                  project, helping achieve time-bound goals and reducing IT
                  costs.
                </p>
              </div>
            </div>
            <div className="pt-3 pb-3 ">
              <div className="">
                <div className="flex flex-col">
                  <img
                    className="w-10 border rounded-md aspect-square p-1.5 object-contain"
                    src="/assets/images/quickbase/11.png"
                    height={55}
                  />
                  <h3>Seamless integration</h3>
                </div>
                <p className="qb-features">
                  QuickBase offers enterprise-grade security with a
                  comprehensive suite of safety features and a regulatory
                  compliance program having earned the most challenging
                  certifications such as SOC1, HIPAA, EU-US Privacy Shield and
                  DFARS.
                </p>
              </div>
            </div>
            <div className="pt-3 pb-3 ">
              <div className="">
                <div className="flex flex-col">
                  <img
                    className="w-10 border rounded-md aspect-square p-1.5 object-contain"
                    src="/assets/images/quickbase/icn2.png"
                    height={55}
                  />
                  <h3>Real-time application deployment</h3>
                </div>
                <p className="qb-features">
                  QuickBase enables uninterrupted deployment of applications
                  with real-time changes reflected through its platform without
                  ever having to take the application offline. Why choose
                  QuickBase?
                </p>
              </div>
            </div>
            <div className="pt-3 pb-3 ">
              <div className="">
                <div className="flex flex-col">
                  <img
                    className="w-10 border rounded-md aspect-square p-1.5 object-contain"
                    src="/assets/images/quickbase/icn3.png"
                    height={55}
                  />
                  <h3>Collaborative development</h3>
                </div>
                <p className="qb-features">
                  QuickBase allows continuous improvement to complex business
                  applications with smooth adjustents. It allows users to deploy
                  and manage applications in real-time with high levels of
                  customization without the hassle of legacy systems, and with
                  its shared data repository project management across multiple
                  teams is effortless.
                </p>
              </div>
            </div>
            <div className="pt-3 pb-3 ">
              <div className="">
                <div className="flex flex-col">
                  <img
                    className="w-10 border rounded-md aspect-square p-1.5 object-contain"
                    src="/assets/images/quickbase/icn4.png"
                    height={55}
                  />
                  <h3>Security</h3>
                </div>
                <p className="qb-features">
                  QuickBase helps link your projects across multiple systems in
                  real-time from a single platform. The flawless integration and
                  smooth transitionning of QuickBase allow users to deploy and
                  coo-rdinate workflows across applications from a singular
                  point.
                </p>
              </div>
            </div>
            <div className="pt-3 pb-3 ">
              <div className="">
                <div className="flex flex-col">
                  <img
                    className="w-10 border rounded-md aspect-square p-1.5 object-contain"
                    src="/assets/images/quickbase/icn5.png"
                    height={55}
                  />
                  <h3>Cost</h3>
                </div>
                <p className="qb-features">
                  QuickBase helps scale down expenditure by saving up on IT
                  costs owing to its high standards of security, time-efficient
                  development platform and capability to integrate applications
                  and workflows on a single platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white-bg pb-5 mx-auto place-items-center pt-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="col-lg-3 col-md-12 pt-0">
              <img
                alt="Unlimited Technical Support"
                className="center"
                src="/assets/images/quickbase/app1.png"
                height={300}
              />
            </div>
            <div className="col-lg-9 col-md-12 pr-0">
              <h2 className="text-black font-25 font-weight-bold pt-2 pb-3 mob-center">
                What can you do with QuickBase?
              </h2>
              <p className="text-black default mob-center">
                Sagenext Infotech has a team of highly skilled, dedicated, and
                experienced professionals available round-the-clock. We know
                that your business can&apos;t be put on pause, so we make sure
                that we are always here to provide you the highest level of
                support through that and Phone service when you need it. We are
                here so that you can work without any interruption on your
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto place-items-center container py-16 text-center flex flex-col gap-6">
        <div className="flex items-center justify-center gap-8">
          <div className="min-w-[80px] max-w-[300px] h-[1px] bg-[#013D8E]" />
          <h2>Solutions</h2>
          <div className="min-w-[80px] max-w-[300px] h-[1px] bg-[#013D8E]" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 *:w-full">
          <div className="col-lg-6 col-md-12 section-f6f6f6 use-case-specific border rounded-2xl p-5 text-left">
            <h2>Use case-specific solutions</h2>
            <p className="text-black default mob-center">
              QuickBase&apos;s host of features aids multiple use-cases, and
              businesses can capitalize on them to best serve their needs. Such
              as its automation capabilities that help streamline supply chain
              management, the collaborative platform that ensures comfortable
              project management across several teams and its workflow
              integration to help HR departments adhere to company objectives.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 industry-specific border rounded-2xl p-5 text-left">
            <h2>Industry-specific solutions</h2>
            <p className="text-black default mob-center">
              A number of industry-tailored solutions at QuickBase allow varied
              capabilities amongst users. Government agencies can take advantage
              of QuickBase&apos;s unparalleled security features helping keep
              citizens data secure at all times, or manufacturers can utilize
              intricate workflows to equip their workforce with accurate and
              prompt information, or construction companies can exploit the
              efficiencies of QuickBase to save time and costs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default quickbase;
