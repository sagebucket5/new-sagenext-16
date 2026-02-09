import styles from "@styles/pages/ticket-submission.module.css";

import TicketForm from "./TicketForm";
import { getMetaData } from "@/lib/metaData";

export async function generateMetadata() {
  const meta = getMetaData("ticket-submission");

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

export default function TicketSubmission() {
  return (
    <>
      <section className="container mx-auto mt-24 mb-16">
        <div className="grid lg:grid-cols-3">
          <div className="col-span-1">
            <h2>Ticket Submission</h2>
            <p>
              SageNext Infotech is committed
              <br />
              to provide 24×7 technical
              <br />
              support via email/chat/phone
              <br />
              and remote support assistance.
              <br />
            </p>
          </div>

          <TicketForm />
        </div>
      </section>
    </>
  );
}
