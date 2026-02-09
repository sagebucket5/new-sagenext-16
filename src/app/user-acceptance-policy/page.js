import { getMetaData } from "@/lib/metaData";

export async function generateMetadata() {
  const meta = getMetaData("user-acceptance-policy");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical, },
    robots: meta.robots,
  };
}

export default function UserAcceptancePolicy() {

  let data = [
    {
      heading: "SPAMMING",
      text: `Sending unsolicited bulk and/or commercial messages over the Internet (known as “Spamming”) is prohibited. It is not only harmful because of its negative impact on consumer attitudes toward Sagenext Infotech, but also because it can overload Sagenext Infotech&apos;s network and disrupt service to Sagenext Infotech customers.`,
    },
    {
      heading: "Other Illegal Activities",
      text: `Engaging in activities that are determined to be illegal, including advertising, transmitting, or otherwise making available ponzi schemes, pyramid schemes, fraudulently charging credit cards, and pirating software.`,
    },
    {
      heading: "Intellectual Property Violations",
      text: "Engaging in any activity that infringes or misappropriate the intellectual property rights of others, including copyrights, trademarks, service marks, trade secrets, software piracy, and patents held by individuals, corporations, or other entities.",
    },
    {
      heading: "Export Control Violations",
      text: "Exporting encryption software over the Internet or otherwise, to points outside the United States.",
    },
    {
      heading: "Facilitating a Violation of this AUP",
      text: "Advertising, transmitting, or otherwise making available any software, program, product, or service that is designed to violate this AUP, which includes the facilitation of the means to spam, initiation of pinging, flooding, mailbombing, denial of service attacks, and piracy of software.",
    },
    {
      heading: "Obscene Speech or Materials",
      text: "Using Sagenext Infotech&apos;s network to advertise, transmit, store, post, display, or otherwise make available child pornography or obscene speech or material.",
    },
  ];

  let column = data.map((coldata, i) => (
    <div
      key={i}
      className={`col-span-6 px-3 pb-3 mt-0  ${i % 2 == 0 ? "border-r border-[#dee2e6]" : ""}`}
    >
      <h3 className={`!text-[#2d4370] !text-[18px]`}>{coldata.heading}</h3>
      <p className={`text-justify font-15 text-black`}>{coldata.text}</p>
    </div>
  ));

  return (
    <>

      <section className="bg-[#efefef] px-5 pt-14">
        <div className={`lg:py-12 py-5`}>
          <h1 className={`text-center !text-[#2d4370] !leading-[70px] !text-[40px]`}>User Acceptance Policy</h1>
        </div>
      </section>

      <section>
        <div className="container mx-auto py-4">
          <p className="text-black">
            At Sagenext Infotech, we are committed to maintaining the integrity,
            security, and confidentiality of the critical information of our
            valued customers. Being a dedicated QuickBooks hosting provider, we
            follow the highest level of security measures to ascertain that all
            customers&apos; data is maintained in a secure environment and is
            accessible only to the authorized users. It should be noted that the
            information of the users maintained with Sagenext Infotech could be
            subject to interrupted access due to various failures related to
            software, hardware or Internet connectivity problems.
          </p>
          <p className="text-black py-4.5">
            Interrupted access could also be caused by malicious intent or acts
            of nature. Users agree to hold Sagenext Infotech harmless and
            indemnified against any and all liability for losses or damages
            suffered due to situations resulting from interrupted access to
            client data.
          </p>
          <p className="text-black">
            Sagenext Infotech respects to the fact that the Internet provides a
            forum for free and open discussion all over the web world and
            dissemination of information, however, when there are competing
            interests at issues, Sagenext Infotech reserves the right to take
            certain preventative or corrective actions. In order to protect
            these competing interests, Sagenext Infotech has developed an
            Acceptable Use Policy (“AUP”), which supplements and explains
            certain terms of each customer&apos;s respective service agreement
            and is intended as a guide to the customer&apos;s rights and
            obligations when utilizing Sagenext Infotech&apos;s services. This
            AUP will be revised from time to time. A customer&apos;s use of
            Sagenext Infotech&apos;s services after changes to the AUP are
            posted on Sagenext Infotech&apos;s web site, www.thesagenext.com,
            will constitute the customer&apos;s acceptance of any new or
            additional terms of the AUP that result from those changes.
          </p>
        </div>
      </section>
      <section className={`my-12`}>
        <div className={`bg-[#2d4370] h-[300px]`}></div>
        <div className={`container mx-auto`}>
          <div
            className={`-mt-[240px] px-5 bg-white py-12.5 rounded`}
          >
            <h2 className={`md-heading text-center`}>Terms and Conditions</h2>
            <ol className={`list-decimal marker:text-[#2d4370] marker:font-bold pl-[20px]`}>
              <li className="py-2">
                Sagenext Infotech agrees to supply its application hosting
                services to the customer. Customer agrees to pay Sagenext
                Infotech for use of the Services per Order placed.
              </li>
              <li className="py-2">
                Sagenext Infotech offers to customer remote access to Sagenext
                Infotech&#8217;s data center through inbound Internet
                connectivity, providing access to customer&#827;s data and
                various hosted software applications provided by Sagenext
                Infotech or under license purchased by the Customer.
              </li>
              <li className="py-2">
                Software and applications made available to the customer are
                detailed in the Order attached here to.
              </li>
              <li className="py-2">
                Sagenext Infotech is committed to maintaining the integrity,
                security and confidentiality of the critical information of our
                valued customers.
              </li>
              <li className="py-2">
                Credit card details provided by the users are listed in our
                database in an encrypted form and we go to extreme lengths to
                ensure that no one ever sees these details. To be precise, CC
                details are stored on a PCI Compliant, Level 1 DSS certified
                payment mechanism, and we practice equivalent data encryption
                methods that the leading banking and financial institutions use.
              </li>
              <li className="py-2">
                We have a very advanced automatic payment processing option in
                place which functions on the basis of the billing cycle of the
                user i.e. Monthly/Quarterly/Half-Yearly/Annually. However, we
                are also open to set up manual payment system for the customers
                on a mutual agreement. In such cases, users will be liable to
                make timely payments for the services used. Failing to make
                payments as per the billing cycle will lead to discontinuation
                of the services.
              </li>
              <li className="py-2">
                When customers disseminate information through the Internet,
                they also must keep in mind that Sagenext Infotech doesn&#827;t
                review, edit, censor or take responsibility for any information
                its customers may create. When users place information on the
                Internet, they have the same liability as other authors for
                copyright infringement, defamation, and other harmful speech.
              </li>
              <li className="py-2">
                Also, because the information they create is carried over
                Sagenext Infotech&#8217;s network and may reach a large number
                of people, including both customers and non-customers of
                Sagenext Infotech, customers&#827; postings to the Internet may
                affect other customers and may harm Sagenext Infotech&#827;s
                goodwill, business reputation, and operations. For these
                reasons, customers violate Sagenext Infotech policy and the
                service agreement when they, their customers, affiliates, or
                subsidiaries engage in the following prohibited activities:
              </li>
            </ol>
          </div>
          <div className={`mt-12.5`}>
            <div className="grid grid-cols-12">{column}</div>
          </div>
        </div>
      </section>
      <section className={`bg-[#f6f6f6] py-12.5`}>
        <div className="container mx-auto">
          <h3 className="!mt-4">Renewal Term and Termination Conditions</h3>
          <p className="text-black">
            The Effective Date of this agreement shall be the first day in which
            Customers “user profiles” are activated and made available for usage
            on the Sagenext Infotech Service and shall continue in full force
            and effect for an initial Term of one (1) month from the Effective
            Date. Customer may terminate service at any time by sending a
            written notice to accounting&#123;at&#125;thesagenext.com 15 days in
            advance.
          </p>
          <p className="text-black">
            For Custom/Private Cloud environments, this User Acceptance Policy
            agreement shall be automatically renewed for one (1) month, unless
            terminated by either party, by giving written notice to the other
            party prior to the expiration of the initial Term or any successive
            Term. Upon termination of Services by Customer or termination of
            service by Sagenext Infotech, all Customer data will be deleted from
            active file systems of the terminal servers of Sagenext Infotech and
            any archived data will be overwritten. At time of account
            termination by Sagenext Infotech, Customer may choose to have their
            data retained and backed-up by Sagenext Infotech terminal servers
            for a period of 7 days only. Time and materials money charges apply
            to any search from terminated Service accounts of the customers and
            any such request for data search or recovery will be accepted only
            from the previously authorized administrative contact for the
            Customer account.
          </p>

          <h3 className="!mt-4">No Warranties</h3>
          <p className="text-black">
            The Effective Date of this agreement shall be the first day in which
            Customers “user profiles” are activated and made available for usage
            on the Sagenext Infotech Service and shall continue in full force
            and effect for an initial Term of one (1) month from the Effective
            Date. Customer may terminate service at any time by sending a
            written notice to accounting&#123;at&#125;thesagenext.com 15 days in
            advance.
          </p>
          <p className="text-black">
            For Custom/Private Cloud environments, this User Acceptance Policy
            agreement shall be automatically renewed for one (1) month, unless
            terminated by either party, by giving written notice to the other
            party prior to the expiration of the initial Term or any successive
            Term. Upon termination of Services by Customer or termination of
            service by Sagenext Infotech, all Customer data will be deleted from
            active file systems of the terminal servers of Sagenext Infotech and
            any archived data will be overwritten. At time of account
            termination by Sagenext Infotech, Customer may choose to have their
            data retained and backed-up by Sagenext Infotech terminal servers
            for a period of 7 days only. Time and materials money charges apply
            to any search from terminated Service accounts of the customers and
            any such request for data search or recovery will be accepted only
            from the previously authorized administrative contact for the
            Customer account.
          </p>

          <h3 className="!mt-4">Limitation on Liability</h3>
          <p className="text-black">
            In no event will Sagenext Infotech will be liable for any damages
            including, without limitations, incidental or consequential damages
            and damages for lost data or profits, even if Sagenext Infotech has
            been advised of the possibility of such damages
          </p>
          <p className="text-black">
            Sagenext Infotech is also aware that many of its customers are,
            themselves, providers of Internet services, and that information
            reaching Sagenext Infotech&#8217;s facilities from those customers
            may have originated from a customer of the customer or from another
            third-party. Sagenext Infotech does not require its customers who
            offer Internet services to monitor or censor transmissions or web
            sites created by customers of its customers.
          </p>
          <p className="text-black">
            Sagnext Infotech has the right to directly take action against a
            customer of a customer. Also, Sagenext Infotech may take action
            against the Sagenext Infotech customer because of activities of a
            customer of the customer, even though the action may affect other
            customers of the customer.
          </p>
          <p className="text-black">
            Sagenext Infotech will not intentionally monitor private electronic
            mail messages sent or received by its customers unless required to
            do so by law, governmental authority, or when public safety is at
            stake. Sagenext Infotech may, however, monitor its service
            electronically to determine that its facilities are operating
            satisfactorily. Finally, Sagenext Infotech may disclose customer
            information or information transmitted over its network where
            necessary to protect Sagenext Infotech and others from harm, or
            where such disclosure is necessary to the proper operation of the
            system.
          </p>

          <h3 className="!mt-4">You Agree with User Acceptance Policy</h3>
          <p className="text-black">
            By submission of any application hosting services Order through this
            Website directly or indirectly to Sagenext Infotech, you agree that
            you are an authorized representative for your organization and wish
            to execute an Application Hosting Services Agreement with Sagenext
            Infotech according to the terms and conditions as stated above.
          </p>
        </div>
      </section>
    </>
  );
}
