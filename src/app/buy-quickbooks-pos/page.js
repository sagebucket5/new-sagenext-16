import styles from "@styles/pages/buy-qb/buy-qb-pos.module.css";
import Link from "next/link";
import React from "react";
import { getMetaData } from "@/lib/metaData";
import Image from "next/image";
import QbHero from "@/components/heros/QbHero";

export async function generateMetadata() {
  const meta = getMetaData("buy-quickbooks-pos");

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
          url: "/assets/images/buy-qb-pos/banner.webp",
          secureUrl: "/assets/images/buy-qb-pos/banner.webp",
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
      images: ["/assets/images/buy-qb-pos/banner.webp"],
    },
  };
}

function buyquickbookspos() {
  return (
    <>
      <QbHero
        title="Buy QuickBooks POS"
        BannerImage="/assets/images/buy-qb-pos/banner.webp"
        description=""
      />

      <section className="container mx-auto py-5">
        <p className="text-black default">
          QuickBooks for Mac is an advQuickBooks POS is a modern retail
          solution that can help businesses manage their online and
          in-store point of sale requirements through a unified platform
          that enables eCommerce to be integrated, payments received
          through contactless mode, management of inventory and more.
          <br />
          <br />
          POS from QuickBooks is a high-performance tool helping retail
          businesses unlock their potential and through a state of the art
          payments receivable, recording and reporting system.anced
          accounting software tailored especially for the Mac operating
          system allowing users to leverage the superior techno-logy of
          the most popular accounting software in the world. QuickBooks
          for Mac combines the power of QuickBooks desktop with the fluent
          architect-ture of the Mac OS for the best user experience and
          performance.
        </p>
      </section>

      <h2 className="text-center">
        What’s new in QuickBooks for Mac
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 container mx-auto pb-5">
        <div>
          <ol className={`${styles["qbmac-number-list"]} list`}>
            <li>
              QuickBooks POS offers a wide range of choices and options to
              users in the platform they want to opt for their operations,
              methods of payment they want to accept and even convenience of
              setup through a flip stand.
            </li>
            <li>
              With so many options available in the market, QuickBooks POS
              offers businesses the ability to extend acceptance of
              different types of payment methods to retain every customer no
              matter their mode of spending. QuickBooks POS allows users to
              accept contactless payments, gift card redemptions and mobile
              payments through a single platform.
            </li>
            <li>
              The growing eCommerce sector is attracting the majority of the
              population to migrate to online shopping. To enable businesses
              to promote and manage their online business in conjunction
              with their in-store sales QuickBooks POS enables seamless
              integration of all channels of business, be it online or in
              brick and mortar stores, over the same system.
            </li>
            <li>
              QuickBooks POS offers cutting edge hardware to ensure maximum
              performance while requiring the least amount of physical space
              through its new and improved physical infrastructure with a
              wide range of colours and designs to choose from.
            </li>
          </ol>
        </div>
        <div>
          <Image
            src="/assets/images/buy-qb-pos/POS.webp"
            alt="QuickBooks for Mac"
            loading="lazy"
            width={546}
            height={531}
          />
        </div>
        <div>

        </div>
      </section>
      <section className="container mx-auto pt-3 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
          <aside className="border border-gray-300 rounded shadow-md p-2">
            <Image
              src="/assets/images/buy-qb-pos/Payment-Options.webp"
              alt="Features"
              loading="lazy"
              width={127}
              height={153}
            />
            <h3>Features</h3>
            <p>
              QuickBooks POS offers a host of industryleading features
              empowering businesses to compete in technology and
              data-driven business environments.
            </p>
          </aside>

          <aside className="border border-gray-300 rounded shadow-md p-2">
            <Image
              src="/assets/images/buy-qb-pos/Payment-Options.webp"
              alt="Payment Options"
              loading="lazy"
              width={127}
              height={153}
            />
            <h3>Payment Options</h3>
            <p>
              QuickBooks POS allows retail businesses to accept payments
              through a wide range of options enabling customers to choose
              whichever payment mode they prefer, in turn resulting in
              higher conversion rates. All payments received through
              QuickBooks POS
            </p>
          </aside>

          <aside className="border border-gray-300 rounded shadow-md p-2">
            <Image
              src="/assets/images/buy-qb-pos/Invetory-Management.webp"
              alt="Inventory management"
              loading="lazy"
              width={127}
              height={153}
            />
            <h3>Inventory management</h3>
            <p>
              QuickBooks POS is a unique point of sale system that enables
              retail businesses to keep track of their inventory through
              the same system as one that is equipped with receiving
              payments and generating invoices. Now businesses can access
              their inventory
            </p>
          </aside>

          <aside className="border border-gray-300 rounded shadow-md p-2">
            <Image
              src="/assets/images/buy-qb-pos/Personalised-Sales.webp"
              alt="Personalised Sales"
              loading="lazy"
              width={127}
              height={153}
            />
            <h3>Personalised Sales</h3>
            <p>
              QuickBooks POS lets businesses make every sale cultivate a
              personal relationship with customers through its ability to
              help generate customized offers, rewards and promotions
              tailored to specific needs of customers and help retailers
              create personalized loyalty programs for top customers
              building convenience
            </p>
          </aside>

          <aside className="border border-gray-300 rounded shadow-md p-2">
            <Image
              src="/assets/images/buy-qb-pos/eCommerce-Integration.webp"
              alt="E-Commerce Integration"
              loading="lazy"
              width={127}
              height={153}
            />
            <h3>E-Commerce Integration</h3>
            <p>
              Through a seamlessly integrated platform, QuickBooks POS
              gives retailers the flexibility to manage all their business
              channels through a unified platform in a single system,
              including their online and in-store streams. This essential
              feature eliminates duplication of
            </p>
          </aside>

          <aside className="border border-gray-300 rounded shadow-md p-2">
            <Image
              src="/assets/images/buy-qb-pos/QuickBooks-Synchronization.webp"
              alt="QuickBooks Synchronization"
              loading="lazy"
              width={127}
              height={153}
            />
            <h3>QuickBooks Synchronization</h3>
            <p>
              QuickBooks understands new age business needs so it can help
              customers get the most out of their product and QuickBooks
              does just that with its feature to sync QuickBooks POS with
              QuickBooks Pro, Premier and Enterprise. It enables users to
              transfer data on-demand,
            </p>
          </aside>

        </div>
      </section>

      <section>
        <h2 className="text-center"> What is new with QuickBooks POS</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          <aside className="shadow-md p-3 rounded">
            <h3 className="text-black font-20 font-weight-700 fst-italic pb-3">
              <b className="site-heading-color">01</b> New Payment Modes
            </h3>
            <p className="default text-black m-0">
              Cash payments have significantly declined in the past decade and
              with the onset of the digital age, lucrative methods of payment
              have shaped the spending experience of modern consumers. To keep
              up with the future, QuickBooks POS now offers new payment
              options that allow businesses to accept payments through mobile
              devices and contactless methods.
            </p>
            <br />
            <b className="text-black">Contactless options include :</b>
            <p className="default text-black mt-2">
              Apple Pay, Samsung Pay, Google Pay, contactless and EMV
              supported credit and debit cards. Payments received through
              these can automatically be compiled in QuickBooks without the
              hassle of manual integration helping improve accuracy. All of
              this, with highly competitive rates without contract obligations
              and no setup/termination fees.
            </p>
          </aside>
          <aside className="shadow-md p-3 rounded">
            <h3 className="text-black font-20 font-weight-700 fst-italic pb-3">
              <b className="site-heading-color">02</b> Better e-commerce
            </h3>
            <p className="default text-black m-0">
              eCommerce is one of the fastest-growing sectors and it is
              imperative that businesses include themselves in a future-ready
              marketplace. QuickBooks POS is an advanced solution that allows
              businesses to manage eCommerce as well as in-store sales in
              real-time, across multiple channels preventing duplication in
              inventory management, enabling automated updates of listings and
              prices of stock and improving the efficiencies of fulfilment
              management through a onestop solution for labelling, packing and
              listing. Access all of this through an easy-to-use simplified
              point of sale system.
            </p>
          </aside>
          <aside className="shadow-md p-3 rounded">
            <h3 className="text-black font-20 font-weight-700 fst-italic pb-3">
              <b className="site-heading-color">03</b> Paperless capabilities
            </h3>
            <p className="default text-black m-0">
              A sustainable future requires sustainable solutions, and
              QuickBooks’ environmentally conscious approach ensures that
              consumers and retailers are equipped with the greenest options.
              With QuickBooks POS, receipts can now be delivered over e-mail
              to custom-ers through the system. Digital receipts prevent fraud
              and ensure that data accuracy is maintained ultimately
              facilitating easier returns and replacements.
            </p>
          </aside>
          <aside className="shadow-md p-3 rounded">
            <h3 className="text-black font-20 font-weight-700 fst-italic pb-3">
              <b className="site-heading-color">04</b> Superior hardware
            </h3>
            <p className="default text-black m-0">
              QuickBooks POS now comes with new and advanced hardware capable
              of higher performance with a small footprint packing more power
              in less space.
            </p>
            <ul className="list">
              <li>
                With its new PIN Pad, businesses can now accept all popular
                forms of payment.
              </li>
              <li>
                The new barcode scanner is now wireless to give users the
                flexibility to take the device anywhere
              </li>
              <li>
                The new flip stand is compatible with a variety of tablets to
                ensure maximum convenience.
              </li>
              <li>
                A new and improved 13x13 cash drawer is a high-security
                solution for keeping cash secure with a neatly finished tuck.
              </li>
              <li>
                The new mPOP is a cash drawer and receipt printing solution
                integrated into the system to reduce occupied space.
              </li>
            </ul>
            <p className="default text-black mt-2">
              In addition, the system is highly compatible across multiple
              devices and platforms.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

export default buyquickbookspos;
