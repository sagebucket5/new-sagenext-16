import { getMetaData } from "@/lib/metaData";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("terminalworks");

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
          url: "assets/images/terminalworks/logo.png",
          secureUrl: "assets/images/terminalworks/logo.png",
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
      images: ["assets/images/terminalworks/logo.png"],
    },
  };
}

import React from "react";
function terminalworks() {
  return (
    <>
      <section className="py-5 space-y-16 md:pt-36 pt-20 place-items-center mx-auto">
        <div className="container py-5 mx-auto">
          <div className="mx-auto place-items-center space-y-8 text-center">
            {/* <h1 className="hiddenAvalara">TerminalWorks</h1> */}
            <Image
              src="/assets/images/terminalworks/logo.png"
              alt="terminalworks"
              width={200}
              height={200}
            />
            <p className="text-black default">
              <b>Terminalworks</b> is a leading remote desktop printing and
              scanning solutions provider for businesses of all sizes, combining
              intuitive tools to help facilitate remote desktop abilities to
              print and scan over a network through a rudimentary setup and
              installation with a cost-effective pricing model. Terminalworks
              ensures that your scanning and printing needs are served without
              the setbacks and hassles of traditional drivers, plugins and
              third-party clients, through the use of its proprietary
              technologies in a host of software, libraries and applications
              that lead the segment in remote desktop printing and scanning
              processes.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 mx-auto">
              <div className="flex items-center justify-center gap-8">
                <div className="w-[300px] h-[1px] bg-[#013D8E]" />
                <h2>What Terminalworks offers?</h2>
                <div className="w-[300px] h-[1px] bg-[#013D8E]" />
              </div>
              <p className="default text-black text-center">
                Terminalworks offers a host of applications that help users
                execute remote desktop printing and scanning functions with
                ease.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div>
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="text-black font-25 font-weight-bold pt-2 pb-3 mob-center">
                  TSPrint
                </h2>
                <p className="text-black default">
                  TSPrint is a remote desktop printing software that works with
                  Terminal Services, Remote Desktop, VDI and Citrix
                  environments. It provides effortless printing functionality
                  combined with a suite of additional tools to help users
                  navigate through their requirements.
                </p>
              </div>
              <div className="lg:col-span-5">
                <Image height={300} width={300}
                  alt="Unlimited Technical Support"
                  className="center img-live-border"
                  src="assets/images/terminalworks/1.png"
                />
              </div>
            </div>

            <div className="mt-8">
              <b className="text-lg">TSPrint gives users:</b>
              <br />
              <br />

              <div>
                <ul className="list-disc space-y-2 max-md:px-4">
                  <li>
                    A driverless printing experience for utmost convenience, and
                    no concerns about compression or file transfer.{" "}
                  </li>
                  <li>
                    The ability to work on any network ensures that users do not
                    require any supplementary network configurations so far as
                    they are connected to the terminal server.{" "}
                  </li>
                  <li>
                    Easy file transfer with simple clicks to your local
                    workstation to make sure your data is where you want it to
                    be.{" "}
                  </li>
                  <li>
                    Instant deployment to make sure users do not have to endure
                    an arduous installation or configuration process, TSPrint is
                    equipped with a plug-and-play technology and silent
                    installation option for deployment across your network.{" "}
                  </li>
                  <li>
                    Printing over a network allows users to send print commands
                    to any printer that is connected to the network.{" "}
                  </li>
                  <li>
                    Best-in-class printing performance is made possible through
                    TSPrint&apos;s high-quality compression technology to ensure
                    the fastest printing experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-5 place-items-center`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="text-black font-25 font-weight-bold pt-2 pb-3 mob-center">
                TSScan
              </h2>
              <p className="text-black default">
                TSScan gives terminal servers the ability to execute scanning
                functions over the network and provides a centralized document
                editing and archiving platform. TSScan comes with
                TWAIN-compliant scanner mapping for almost every remote
                computing solution. TSScan compiles a list of your local imaging
                devices for easy access on your remote desktop server and its
                advanced compression technology ensures zero loss in image
                quality.
              </p>
            </div>
            <div className="col-lg-12 col-md-12 pt-2">
              <h2 className="left-aligned-featured text-black font-25 font-weight-bold">
                TSScan comes with:
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 pt-2 gap-5 *:not-last:p-3">
            <div className={`border rounded-xl`}>
              <p className="default text-black m-0">
                Seamless remote scanning capabilities to use any device
                connected over a network to make scanned copies with ease.
              </p>
            </div>
            <div className={`border rounded-xl`}>
              <p className="default text-black m-0">
                Compression and encryption of data over the network help TSScan
                complete tasks with high speeds and maximum data security.
              </p>
            </div>
            <div className={`border rounded-xl`}>
              <p className="default text-black m-0">
                Scan to the desired formats with TSScan&apos;s ability to create
                scan directly to JPEG, TIFF, BMP or even PDFs.
              </p>
            </div>
            <div className={`border rounded-xl`}>
              <p className="default text-black m-0">
                Cutting-edge compression technology ensures that image quality
                is never compromised while maintaining the high speed of taking
                scans.
              </p>
            </div>
            <div className={`text-center`}>
              <Image height={300} width={300}
                src="assets/images/terminalworks/2.png"
                alt="TSS Scan"
                className="mt-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="white-bg py-5 place-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 pt-0 border-end">
              <h2>UniTwain</h2>
              <p className="text-black default">
                Terminalworks&apos; enables users to import all document formats
                through its virtual TWAIN device which replicates a scanner and
                allows users to haul images and snaps from documents just like a
                physical device.
              </p>
            </div>
            <div className="pt-8">
              <h2>UniTwain offers:</h2>
              <div className="max-md:px-4">
                <ul className="list-disc text-black">
                  <li>
                    The ability to import various image formats including BMP,
                    JPEG, TIFF and PNG while allowing users to edit and sort
                    them.
                  </li>
                  <li>
                    The ability to extend scanning capabilities by converting
                    rudimentary office scanners into advanced scanning devices.{" "}
                  </li>
                  <li>
                    The ability to import snapshots from web cameras and import
                    the images directly onto the system.
                  </li>
                  <li>
                    The ability to import PDFs directly from a document with the
                    facilities to edit, remove and insert news pages.{" "}
                  </li>
                  <li>
                    The ability to edit images with the integrated image editor
                    allows you to perform all major editing functions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-f7f7f7 py-5 place-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="text-black font-25 font-weight-bold pt-2 pb-3 mob-center">
                PDFPrinting.NET
              </h2>
              <p className="text-black default">
                Terminalworks&apos; PDFPrinting.NET offers an uncomplicated API
                to allow hassle-free .NET printing. It allows users to print,
                display or convert PDF documents along with the ability to
                reference the .NET assembly within the product and begin coding
                instantly. PDFPrinting.NET does not require third-party
                libraries, allows users to adjust printing settings and is
                compatible with all CLR languages to ensure flawless results.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <div className={`col-span-4`}>
              <h2>PDFPrinting.NET offers:</h2>
            </div>

            <div className="max-md:px-4">
              <ul className="list-disc">
                <li className="default text-black m-0">
                  Pre-installed Adobe Reader to allow printing of specific
                  documents to assure your rendering needs.
                </li>

                <li className="default text-black m-0">
                  Customizable settings for maximum control over characteristics
                  of the print.
                </li>

                <li className="default text-black m-0">
                  Document conversion from PDFs to image formats such as TIFF,
                  JPEG, PNG and more, allowing users to convert a single page or
                  multiple pages and, even multiple files.
                </li>

                <li className="default text-black m-0">
                  Silent printing lets users execute printing functions in the
                  background with minimal involvement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="white-bg py-5 place-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 pt-0 border-end">
              <h2 className="text-black font-25 font-weight-bold pt-2 pb-3 mob-center">
                CLPrint
              </h2>
              <p className="text-black default">
                CLPrint is software that enables users to give printing commands
                for PDF documents from a command line. CLPrint enables the
                printing of PDFs using command prompt and is an ideal choice for
                automated BATCH scripts. It also allows the printing of PDF
                documents using SQL stored procedures.
              </p>
            </div>

            <div className="pt-8">
              <h2>CLPrint offers:</h2>

              <div className="max-md:px-4">
                <ul className="list-disc">
                  <li>
                    Easy conversion of PDF files to any image format desired by
                    the user, with the ability to convert single or multiples
                    pages.{" "}
                  </li>
                  <li>
                    Standalone Binary program that requires minimal dependencies
                    or additional libraries and allows PDF rendering with ease.
                  </li>
                  <li>
                    Self-contained solutions with no requirement for Adobe
                    enable a variety of use cases and effortless deployment.{" "}
                  </li>
                  <li>
                    Scalability with the choice to use an independent single
                    computer license or the choice to scale up as per the
                    users&apos; requirements with the redistributable license.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 place-items-center">
        <div className="container">
          <div className="row">
            <div>
              <h2>TSWebCam</h2>
              <p>
                Redirect your local DirectShow cameras to a remote session with
                TSWebCam with the help of RDP or Citrix and a wide range of
                supported applications.
                <br />
                TSWebCam eliminates the need to install a driver with its
                plug-and-play feature allowing users to instantly stream remote
                sessions.
              </p>
            </div>
            <div className="pt-8">
              <div>
                <h2>TSWebCam offers:</h2>
              </div>
              <div className="max-md:px-4">
                <ul className="list-disc">
                  <li className="default text-black m-0">
                    DirectShow compatibility with support for a wide range of
                    applications and hardware, including a DirectX compatible
                    image source.
                  </li>

                  <li className="default text-black m-0">
                    RDP and Citrix support that requires no additional clients,
                    completely relying on the integrated Virtual Channel
                    technology to channel video streams over a network.
                  </li>

                  <li className="default text-black m-0">
                    Customization capabilities to allow users to edit resolution
                    and adjust compression settings to comply with the
                    users&apos; bandwidth.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white-bg py-5 place-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 pt-0 border-end">
              <h2>TwainScanning.Net</h2>
              <p className="text-black default">
                TwainScanning.Net is a comprehensive TWAINcompatible scanning
                library for .NET projects with the ability to scan a variety of
                formats including JPEG images and PDFs to any desired format
                directly. TwainScanning.Net enables users to produce scans in
                multiple formats with profound control over the TWAIN protocol
                to ensure maximum compatibility and best performance in a
                variety of use cases.
              </p>
            </div>

            <div className="pt-8">
              <h2>TwainScanning.Net offers:</h2>

              <div className="max-md:px-4">
                <ul className="list-disc">
                  <li>
                    Local UI to allow users to use a familiar platform to save
                    files with customizable file name and location.
                  </li>
                  <li>
                    Asynchronous scanning to enable background scanning to
                    prevent workflow interruption and allow silent scans.{" "}
                  </li>
                  <li>
                    Advanced information to keep users updated on the status of
                    their devices and details of the paper in the tray.{" "}
                  </li>
                  <li>
                    Multiple-source scans to allow users to execute scans
                    without scanner UI to enable cross-format scanning and
                    saving.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blue-bg why-sage place-items-center my-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-5/12">
              <Image
                alt="Unlimited Technical Support"
                className="object-contain"
                src="/assets/images/terminalworks/3.png"
                height={500}
                width={500}
              />
            </div>
            <div className="lg:w-7/12">
              <h2>Why choose Terminalworks?</h2>
              <p>
                Terminalworks serves over 30,000 users worldwide and is a market
                leader in remote desktop printing and scanning solutions owing
                to its comprehensive suite of software that enables businesses
                and users from all industries to streamline their printing and
                scanning processes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default terminalworks;
