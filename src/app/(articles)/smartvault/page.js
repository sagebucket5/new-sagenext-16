import Image from "next/image";
import dynamic from "next/dynamic";
import Trusted from "@components/utils/TrustedPatner";
import Awards from "@components/utils/Awards";
const Author = dynamic(() => import("@components/article/Author"));
import ContentLayout from "@components/article/ContentLayout";
import Banner from "@/components/article/Banner";
import BannerCta from "@/components/utils/BannerCta";
import BlueCta from "@/components/buttons/BlueCta";
import { getMetaData } from "@/lib/metaData";
import FormModal from "@/components/FormModal";

export async function generateMetadata() {
    const meta = getMetaData("smartvault");

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
                    url: "/assets/images/longforms/SmartVault.png",
                    secureUrl: "/assets/images/longforms/SmartVault.png",
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
            images: ["/assets/images/longforms/SmartVault.png"],
        },
    };
}

export default function Smartvault() {

    return (
        <>
            <Banner
                title="SmartVault"
                description="SmartVault is a cloud-based document management system that helps businesses of all sizes securely store, share, and manage their documents."
                image="/assets/images/longforms/SmartVault.png"
                alt="SmartVault"
                loading="lazy"
            />
            <ContentLayout>
                <section id="item-1">
                    <p>
                        Whether you have a single shop, multiple sites, or perform
                        your business activities online, implementing a paperless
                        workflow has now become key to driving efficiency at work
                        and profitability in business.
                    </p>
                    <p>
                        To efficiently manage and streamline your workflow, your
                        business needs a truly efficient tool that can smoothly
                        transition your business operations to a paperless
                        environment where you can create, store, and share your
                        documents and files securely without facing any hassles.
                    </p>
                    <p>
                        Fortunately, there are tools in the market that can
                        streamline your workflow by making all such tasks much
                        easier for you. And the best thing is you don&apos;t need to be
                        tech savvy to use them. Not at all. Here, we will discuss
                        one of the most coveted tools in this category, i.e.
                        SmartVault. So, just keep reading till the end of this post.
                    </p>
                </section>
                <section>
                    <h2>
                        What is SmartVault?
                    </h2>
                    <Image
                        src="/assets/images/article/smart-vault/What_is_SmartVault.webp"
                        loading="lazy"
                        alt="SmartVault"
                        width={512}
                        height={447}
                    />
                    <p>
                        SmartVault is a cloud-based document management and storage
                        software offering easy, fast and efficient file sharing and
                        storage solutions. The tool has been particularly designed
                        to assist tax and accounting professionals, financial
                        institutions, retailers, manufacturing units and
                        construction businesses in storing documents online, sharing
                        files securely, collaborating, sending and receiving
                        eSignatures right away via a unified portal.
                    </p>
                    <p>
                        The tool is aimed at making professionals and SMBs more
                        comfortable and productive by automating their low-value and
                        repetitive tasks and getting their work finished faster. All
                        this, in turn, gives you the freedom to spend more time on
                        things that bring more value to your business and personal
                        life.
                    </p>
                    <p>
                        The software complies with various statutory requirements
                        and guidelines like SEC, GDPR, CCPA, GLBA, and FINRA that
                        are intended to fulfill legal obligations and prevent
                        violation of rules.
                    </p>
                </section>
                <BannerCta
                    ctaTitle="Talk to our cloud security experts Now"
                    cta={
                        <>
                            <BlueCta
                                showIcon2={true}
                                showIcon1={false}
                                href1="tel:+1-855-922-7243"
                                ctaBorder="1px solid #0151c1"
                                text1="Talk to Security Experts Now"
                            />
                        </>
                    }
                />
                <section id="item-2">
                    <h2>
                        Benefits of Using SmartVault
                    </h2>
                    <p>
                        The main benefit that SmartVault offers is saving time as
                        well as money by transitioning your business to a paperless
                        environment—a paperless office and standardized workflows.
                        It helps you in the following ways:
                    </p>
                    <h3>
                        Securely Store, Manage &amp; Share files
                    </h3>
                    <p>
                        It facilitates your document workflow by storing all your
                        documents in just one place and allowing you to securely
                        share them with the desired people when it is needed.
                    </p>
                    <h3>Automate Manual Paper-based Tasks</h3>
                    <p>
                        It helps you cut your time that you spend most on fetching,
                        filing or finding documents and spend more time doing what
                        is more important and valuable.
                    </p>
                    <h3>Eliminate Security Vulnerabilities</h3>
                    <p>
                        Consumer-grade cloud apps can put your business at risk any
                        time. SmartVault-offered bank-level AES-256 encryption,
                        authentication technologies and auditing parameters help you
                        stay safe, secure, and in compliance.
                    </p>
                    <h3>
                        Create Efficient, Standardized Workflows
                    </h3>
                    <p>
                        SmartVault&apos;s standardized templates and simplified workflows
                        broadly help you streamline your business processes and gain
                        work efficiencies that scale up your business.
                    </p>
                    <h3>Easy to Learn and Easy to Use</h3>
                    <p>
                        It&apos;s so easy to get started and fun to manage that all of
                        your employees, partners, and even your clients will love
                        it. The developer of the software guarantees you&apos;ll love it,
                        or you&apos;ll get your money refunded.
                    </p>
                </section>
                <section id="item-3">
                    <h2>
                        Industries Who Use SmartVault
                    </h2>
                    <p>
                        Professionals and businesses across industries like
                        Accounting, Community Banks, Financial Services, Real
                        Estate, Construction, Legal, Retail, Franchising, Education,
                        Credit Unions, Healthcare, Manufacturing, and anyone looking
                        for secure document management &amp; file sharing use the
                        services of SmartVault happily. And almost every one of them
                        agree that they save a lot of their most valuable asset,
                        i.e. time.
                    </p>
                </section>
                <section id="item-4">
                    <h2>
                        What Does SmartVault Do Specifically for Accounting
                        Professionals?
                    </h2>
                    <p>
                        SmartVault stands on the top rung of the performance and
                        popularity ladder even when it comes to cloud-based document
                        management, file sharing and client portal solutions for
                        accountants. The software specifically helps accounting
                        professionals become more productive. It streamlines the way
                        they collect, organize, and share documents. At the same
                        time, it keeps their data secure and in tax and accounting
                        compliance. With SmartVault, document management to
                        accountants turns out to be a breeze and that&apos;s why it has
                        been top-rated among accountants, too.
                    </p>
                </section>
                <section id="item-5">
                    <h2>
                        SmartVault Features and Usability
                    </h2>
                    <p>
                        SmartVault offers an online secure documents storage and
                        sharing solution which brings all the features and usability
                        to your accounting business that your business needs to
                        streamline and simplify your documents workflow as well as
                        maximize productivity, And, at the same time, they keep your
                        data safe, secure and compliant.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/Securely_exchange__sensitive_files.webp"
                            loading="lazy"
                            alt="SmartVault"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Securely exchange sensitive files
                    </h3>
                    <p>
                        Every bit of your data is protected by encryption. Only you,
                        your clients, or any authorized person will be able to
                        access your data through authenticated login.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/Ease_of_Use.webp"
                            loading="lazy"
                            alt="SmartVault"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Simple, easy-to-use Interface
                    </h3>
                    <p>
                        The SmartVault interface is so easy to handle. You can just
                        drag and drop the desired files to your client portal. Also,
                        you can view them in their browser without any need to
                        download them.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/One_step_Storing_and_Sharing.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        One-step Storing and Sharing
                    </h3>
                    <p>
                        SmartVault lets you set up automatic email alerts that
                        notify your clients whenever a new file is uploaded and
                        ready for them for viewing.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/Client_Portal_Branded_for_your_Firm.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Client Portal Branded for your Firm
                    </h3>
                    <p>
                        With this feature, you can personalize your client portal
                        with your custom business logo and color scheme and further
                        link the same to your website. This helps you create a
                        unique brand identity with your clients.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/Customized_User_Permissions.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Customized User Permissions
                    </h3>
                    <p>
                        SmartVault gives you full control over who can access files
                        and who can&apos;t. You can allow or restrict permissions for
                        creating, editing and deleting files.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/Audit_and_Version_Controls.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Audit and Version Controls
                    </h3>
                    <p>
                        The activity log records all activities with their
                        timestamps and their version history feature allows you to
                        retrieve your deleted or overwritten files anytime you need
                        them.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/eSignature.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        eSignature
                    </h3>
                    <p>
                        With the built-in eSignature support backed by Docusign, you
                        will be able to get all your required documents signed in
                        one single step.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/Mail_Merge.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Mail Merge &amp; eMail Templates
                    </h3>
                    <p>
                        You can distribute documents even in bulk to one or all of
                        your clients in one go.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/Mobile_Access.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Mobile Access
                    </h3>
                    <p>
                        You can access your files from a mobile device anytime,
                        anywhere.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/desktop_access.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Desktop Access
                    </h3>
                    <p>
                        With the lightning speed and robust performance of the
                        desktop app, you get lightning fast access to the documents
                        stored in the cloud.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/folder_template.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Folder Templates
                    </h3>
                    <p>
                        You can streamline all your processes with customizable
                        SmartVault folder templates.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/pdf_printer.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        PDF Printer
                    </h3>
                    <p>
                        Using the smartvault PDF printer, print documents from
                        windows file explorer or your desktop, print files to pdf
                        and automatically save them to smartvault from any
                        application, upload files to smartvault, autofile documents,
                        print tax returns to smartvault using the auto-filer tool,
                        etc.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/scaner.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Scanner Integration
                    </h3>
                    <p>
                        This feature allows you to digitize all your documents
                        swiftly with one-touch scanner integration.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/full_text_search.webp"
                            loading="lazy"
                            alt="Drake Tax Software"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Full Text Search
                    </h3>
                    <p>
                        You can find the files you need whenever you need them. This
                        feature helps you search any documents with file names,
                        tags, and even text within the files.
                    </p>
                </section>
                <section id="item-6">
                    <h2>
                        Is SmartVault Safe and Secure?
                    </h2>
                    <Image
                        src="/assets/images/article/smart-vault/Is_SmartVault_Really_Safe_and_Secure.webp"
                        loading="lazy"
                        alt="Is_SmartVault_Really_Safe_and_Secure"
                        width={512}
                        height={447}
                    />
                    <p>
                        The short and straightforward answer is YES. The security of
                        customer data was the first and foremost thing that topped
                        the priority list while the software was developed.
                        Moreover, the developer of SmartVault also continually
                        examines the level of security and tries to improve their
                        security technologies and procedures according to the demand
                        of the time.
                    </p>
                    <p>
                        With SmartVault, all of your data is safe and secure whether
                        in transit, at rest or backed up. All interactions (data in
                        transit) with SmartVault are done through an encrypted
                        channel. The developer employs SSL to prevent your
                        interactions, passwords, and other data from any security
                        threats.
                    </p>
                    <p>
                        All your documents and information stored or backed up in
                        the database are encrypted using AES-256 technology which is
                        virtually unbreakable using brute-force methods. Hackers
                        would be finding themselves foolish even if they try to
                        attempt any attack. You might or might not be aware that
                        while it would be possible to crack a 56-bit DES in less
                        than a day, it would take billions of years to break AES
                        using currently available computer technologies. This is why
                        AES is often regarded as the gold standard symmetric-key
                        encryption technology.
                    </p>
                </section>
                <BannerCta
                    ctaTitle="Need help with Cloud SmartVault?"
                    cta={
                        <FormModal text="Book Consultation" />
                    }
                />
                <section id="item-7">
                    <h2>
                        SmartVault Integrations
                    </h2>
                    <p>
                        You need a seamless integration among the apps you use to
                        establish a streamlined workflow for all your business
                        operations. SmartVault provides you the most powerful way of
                        simplifying and speeding up your workflow by perfectly
                        integrating with a host of apps below (given with the
                        categories they belong to):
                    </p>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Category</th>
                                    <th>Add-Ons</th>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            textAlign: "left",
                                            verticalAlign: "middle",
                                            paddingLeft: 10,
                                        }}
                                    >
                                        Tax &amp; Accounting:
                                    </td>
                                    <td>
                                        QuickBooks, Drake Software, Lacerte, ProSeries,
                                        TaxCalc, Wolter Kluwer, Ultra Tax, FreshBooks, Xero.
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            textAlign: "left",
                                            verticalAlign: "middle",
                                            paddingLeft: 10,
                                        }}
                                    >
                                        eSignature:
                                    </td>
                                    <td>DocuSign</td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            textAlign: "left",
                                            verticalAlign: "middle",
                                            paddingLeft: 10,
                                        }}
                                    >
                                        Email:
                                    </td>
                                    <td>MS Outlook</td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            textAlign: "left",
                                            verticalAlign: "middle",
                                            paddingLeft: 10,
                                        }}
                                    >
                                        Inventory Management:
                                    </td>
                                    <td>Acctivate</td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            textAlign: "left",
                                            verticalAlign: "middle",
                                            paddingLeft: 10,
                                        }}
                                    >
                                        Document Fetching:
                                    </td>
                                    <td>Ledgersync, Hubdoc, and FileThis Pro.</td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            textAlign: "left",
                                            verticalAlign: "middle",
                                            paddingLeft: 10,
                                        }}
                                    >
                                        Document Scanning:
                                    </td>
                                    <td>Canon imageFORMULA, ScanSnap Scanners.</td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            textAlign: "left",
                                            verticalAlign: "middle",
                                            paddingLeft: 10,
                                        }}
                                    >
                                        Time &amp; Expense:
                                    </td>
                                    <td>Nexonia, Tallie, SpringAhead.</td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            textAlign: "left",
                                            verticalAlign: "middle",
                                            paddingLeft: 10,
                                        }}
                                    >
                                        CRM:
                                    </td>
                                    <td>Method CRM, Results CRM.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section id="item-8">
                    <h2>
                        What&apos;s New in SmartVault in 2022?
                    </h2>
                    <p>
                        With the latest addition of some features in 2022,
                        QuickBooks Desktop users, both 32-bit and 64-bit editions,
                        can now concurrently attach documents and files to both
                        toolbars.
                    </p>
                    <p>
                        Furthermore, users can add an engagement now just by going
                        to the Engagements tab found on the client details page.
                    </p>
                    <h3>What Was Updated?</h3>
                    <h4>Update 1.</h4>
                    <p>
                        The SmartVault Sign-in page has got responsive on mobile
                        screens now. It has made it easier to view and log in.
                    </p>
                    <h4>Update 2.</h4>
                    <p>
                        UK accounts will get a default Type Qualifier when they
                        create an Entity type account.
                    </p>
                    <h4>Update 3.</h4>
                    <p>
                        The updated SmartVault API will now allow users to upload a
                        document with a tag and then route it to the tagged folder
                        in a proper manner.
                    </p>
                    <h4>Update 4.</h4>
                    <p>
                        When users update a template, any individual user
                        permissions that are added through the Access and
                        Notifications settings page will automatically be saved on
                        the folders the template is applied to.
                    </p>
                    <h4>Update 5.</h4>
                    <p>
                        The name of the &apos;Add Tax Engagement&apos; window has changed to
                        &apos;Add Engagement&apos; and the default year (current year) in case
                        the &apos;Tax Engagement&apos; is selected.
                    </p>
                    <h4>Update 6.</h4>
                    <p>
                        On the client details page, if a user misses to enter
                        required data, the refreshed modal will remind the user of
                        what is required to successfully save the client information
                        by highlighting the mandatory fields with the missing data.
                        Just see the image below:
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/save-client_img.webp"
                        loading="lazy"
                        alt="Is_SmartVault_Really_Safe_and_Secure"
                        width={512}
                        height={447}

                    />
                    <h4>Update 7.</h4>
                    <p>
                        There is a new option that provides users the ability to get
                        a link on the Request Docs window. That link can be used in
                        an email to a client to request any piece of information.
                        You can see the same in the image below:
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/request_docs_img.webp"
                        loading="lazy"
                        alt="request_docs_img"
                        width={512}
                        height={108}

                    />
                    <h4>Update 8.</h4>
                    <p>
                        With the new updates, on the More Actions window, a blurb
                        message will display to warn and remind users that selecting
                        the radio button option for ’Send a Request Doc’ will
                        automatically present by default along with the radio
                        buttons ’Invite the Client’ and ’Add Engagement.’ Please
                        look at the image below:
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/more_action_img.webp"
                        loading="lazy"
                        alt="more_action"
                        width={512}
                        height={344}

                    />
                    <h4>Update 9.</h4>
                    <p>
                        There is a new option &apos;Install Desktop App&apos; tile added on
                        home page like in the image below:
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/home_img.webp"
                        loading="lazy"
                        alt="more_action"
                        width={512}
                        height={344}

                    />
                    <h4>Update 10.</h4>
                    <p>
                        While trying to install the desktop app now, a message will
                        pop up with some additional information. Clicking the &apos;Learn
                        More&apos; link inside the pop up window will head the user to
                        the support article which includes instructions to install
                        the desktop app
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/learn_more_img.webp"
                        loading="lazy"
                        alt="more_action"
                        width={512}
                        height={331}

                    />
                </section>
                <BannerCta
                    ctaTitle="Book a Free Consultation with Our Experts"
                    cta={
                        <FormModal text="Book Consultation" />
                    }
                />
                <section id="item-9">
                    <h2>
                        How to Login to SmartVault?
                    </h2>
                    <p>
                        The SmartVault portal requires users to sign in before they
                        can work with the documents stored there. This applies to
                        any one you invite to share or view documents.
                    </p>
                    <p>
                        You can sign in to the portal by following these simple
                        steps:
                    </p>
                    <ul>
                        <li>
                            Go to
                            <a
                                href="https://my.smartvault.com/secure/SignIn.aspx?ReturnUrl=%2fusers%2fsecure%2fHome.aspx"
                                rel="nofollow"
                                target="_blank"
                            >
                                https://my.smartvault.com.
                            </a>
                            <div className="block-quote-note">
                                <p>
                                    (<strong>NOTE:</strong>
                                    <br />
                                    If you&apos;ve forgotten your password, see this article to
                                    reset your password.)
                                </p>
                            </div>
                        </li>
                        <li>
                            Enter your Email Address and Password in the window
                            presented.
                            <div className="block-quote-note">
                                <p>
                                    (<strong>NOTE:</strong>
                                    <br /> If you want SmartVault to remember your user
                                    name and password, enable the Stay signed in checkbox)
                                </p>
                            </div>
                        </li>
                        <li>Click Sign In. And it&apos;s all done.</li>
                    </ul>
                </section>
                <section id="item-10">
                    <h2>
                        How to Reset Your SmartVault Password?
                    </h2>
                    <Image
                        src="/assets/images/article/smart-vault/How_to_Reset_Your_SmartVault_Passwor.webp"
                        loading="lazy"
                        alt="How_to_Reset_Your_SmartVault_Passwor"
                        width={512}
                        height={447}
                    />
                    <p>
                        Before You Begin Resetting Your SmartVault Password
                    </p>
                    <p>
                        Please note that the admin or any other authorized person
                        can initiate a request for resetting the SmartVault account
                        password on behalf of another user, guest or client.
                        However, the email containing the password reset link will
                        go straight to the person&apos;s inbox whose email address is
                        saved on the Account Access page.
                    </p>
                    <p>
                        Similarly, if the user uses the SmartVault Drive, the user
                        will be required to re-map their SmartVault Drive after
                        changing the password.
                    </p>
                    <p>
                        Please also note that SmartVault keeps your account and
                        password fully secured. Even SmartVault employees can no way
                        see your password. So, leave any worry of the security of
                        your SmartVault account and password.
                    </p>
                    <h3>Steps for Resetting Your Password</h3>
                    <p>
                        <strong>Step 1. </strong>Go to the Account Access page.
                    </p>
                    <p>
                        <strong>Step 2. </strong> Enter your email address or the
                        email address of the person you are resetting the password
                        for, and click Continue. Once you submit your request, you
                        (or the designated person) receive a SmartVault password
                        reset email directly to your email inbox.
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/account_access.webp"
                        loading="lazy"
                        alt="account_access"
                        width={433}
                        height={285}
                    />
                    <p>
                        <strong>Step 3.</strong> Once you open the email containing
                        the password reset link, you need to click on the link to
                        reset your password (that will look like below):
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/step_3_img.webp"
                        loading="lazy"
                        alt="account_access"
                        width={512}
                        height={98}
                    />
                    <div className="block-quote-note">
                        <p>
                            <strong>NOTE</strong>
                            <br /> - The link expires 24 hrs after it&apos;s generated.
                        </p>
                    </div>
                    <p>
                        <strong>Step 4. </strong> In the Reset Password window,
                        enter your new password and then confirm it.
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/step_3_img.webp"
                        loading="lazy"
                        alt="account_access"
                        width={512}
                        height={230}
                    />
                    <div className="block-quote-note">
                        <p>
                            <strong>NOTE</strong>
                            <br /> - You cannot use colons or semicolons in the
                            password.
                        </p>
                    </div>
                    <p>
                        <strong>Step 5. </strong>Click Reset Password. And it&apos;s all
                        done.
                    </p>
                    <h3>
                        What to do if you did not receive a password reset email?
                    </h3>
                    <p>
                        Check for the following if you (or the designated user) have
                        not received the password reset link:
                    </p>
                    <ul>
                        <li>
                            Check your spam or junk folder. The email containing the
                            password reset link might be lying there.
                        </li>
                        <li>
                            Check the spelling of your email address, or try an
                            alternative email address if there is any chance of
                            forgetting the email address saved on the account.
                        </li>
                        <li>
                            Add notify@my.smartvault.com as a contact or whitelist the
                            email address in your email spam settings.
                        </li>
                    </ul>
                    <p>
                        If you are still unable to reset your password, contact
                        SmartVAult Customer Care. They will resolve the issue in a
                        matter of minutes.
                    </p>
                </section>
                <section id="item-11">
                    <h2>
                        How to Download and Install the SmartVault App?
                    </h2>
                    <Image
                        src="/assets/images/article/smart-vault/How_to_Download.webp"
                        loading="lazy"
                        alt="How_to_Download"
                        width={512}
                        height={447}
                    />
                    <p>
                        To download and install the SmartVault app, we understand
                        that it would be better to provide you with the direct links
                        from the SmartVault help page so that you can quickly get to
                        the instruction page that is particularly suitable for you.
                        And it is with just one click.
                    </p>
                    <p>
                        You may also want to know the system requirements for
                        installing the software. Keeping this in mind, we are
                        putting a help link for you. In case of need, you can refer
                        to the link given below.
                    </p>
                    <p>
                        SmartVault Desktop Software System Requirements:
                        https://help.smartvault.com/hc/en-us/articles/360051273233-SmartVault-Desktop-Software-System-Requirements#smartvault-desktop-software-system-requirements-0-0
                    </p>
                    <h3>
                        Installing the SmartVault Desktop Software:
                    </h3>
                    <p>
                        Downloading SmartVault desktop software for windows is an
                        absolute breeze. Just download the .exe file of the software
                        from the portal. Then install the SmartVault software on
                        your PC or laptop by using the SmartVault Install Wizard.
                    </p>
                    <p>
                        The SmartVault desktop software will automatically install
                        other required components: the SmartVault Portal, the
                        SmartVault Launchpad, the SmartVault Connected Desktop, and
                        the SmartVault Inbox.
                    </p>
                    <p>
                        Please remember that it is a must you first download the
                        installation file from the Setting Page or the Portal Home
                        Page. Please follow the instructions below:
                    </p>
                    <h4>
                        For downloading the installation file from the Home page
                    </h4>
                    <ul>
                        <li>Sign in to the SmartVault Portal.</li>
                        <li>Click the Install desktop app tile.</li>
                        <Image
                            src="/assets/images/article/smart-vault/downloading_home-page.webp"
                            loading="lazy"
                            alt="downloading"
                            width={512}
                            height={505}

                        />
                        <li>
                            The installation file will download and appear in the
                            Download bar of your browser. Also, a message will appear
                            with some additional information.
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/information_img.webp"
                            loading="lazy"
                            alt="information_img"
                            width={512}
                            height={340}

                        />
                        <li>Run the installation file</li>
                    </ul>
                    <h4>
                        For downloading the installation file from the Settings page
                    </h4>
                    <ul>
                        <li>Sign in to the SmartVault Portal.</li>
                        <li>
                            Click on your initials at the top of the screen, and click
                            Settings.
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/setting_img.webp"
                            loading="lazy"
                            alt="setting_img"
                            width={202}
                            height={190}

                        />
                        <li>
                            Click <strong>MS Windows</strong> under
                            <strong>SmartVault Apps for.</strong>
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/apps_marketing_img.webp"
                            loading="lazy"
                            alt="downloading"
                            width={503}
                            height={254}

                        />
                        <li>
                            Click
                            <strong>
                                Download SmartVault for Microsoft Windows.
                            </strong>
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/downloading_smartvault.webp"
                            loading="lazy"
                            alt="downloading_smartvault"
                            width={461}
                            height={160}

                        />
                        <li>Run the installer file.</li>
                    </ul>
                    <h5>
                        Steps to run the installation file
                    </h5>
                    <Image
                        src="/assets/images/article/smart-vault/install_desktop.webp"
                        loading="lazy"
                        alt="downloading_smartvault"
                        width={512}
                        height={505}

                    />
                    <Image
                        src="/assets/images/article/smart-vault/downloads_folder.webp"
                        loading="lazy"
                        alt="downloading_smartvault"
                        width={512}
                        height={274}

                    />
                    <ul>
                        <li>
                            Click <strong> Yes</strong> on the security warning.
                        </li>
                        <li>
                            Follow the prompts on the SmartVault Install Wizard.
                        </li>
                        <li>
                            Accept the Terms of the license agreement and then click
                            <strong>Next.</strong>
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/next_btn_img.webp"
                            loading="lazy"
                            alt="downloading_smartvault"
                            width={512}
                            height={397}

                        />
                        <li>
                            Choose the default product install path and then click
                            <strong> Next.</strong>
                        </li>
                        <div className="block-quote-note">
                            <p>
                                <strong>NOTE:</strong>
                                <br /> You should install this software in your C:\
                                drive.
                            </p>
                        </div>

                        <Image
                            src="/assets/images/article/smart-vault/product_install_path_img.webp"
                            loading="lazy"
                            alt="product install"
                            width={512}
                            height={398}

                        />
                        <li>
                            To create desktop shortcuts for the SmartVault Connected
                            Desktop, SmartVault Launchpad, SmartVault Portal, and the
                            SmartVault Inbox, enable the Create desktop shortcut
                            checkbox for each item you want to create a desktop
                            shortcut for and then click Next.
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/create_desktop.webp"
                            loading="lazy"
                            alt="product install"
                            width={512}
                            height={393}

                        />
                        <li>
                            Click <strong> Finish</strong> to complete the
                            installation.
                        </li>
                    </ul>

                    <h3>
                        How to install the SmartVault App for the iPad or iPhone:
                    </h3>
                    <p>
                        With your SmartVault apps for iPad and iPhone, you get a
                        powerful SmartVault command center directly on your device
                        that you can utilize to search, browse, view, and share your
                        stored documents.
                    </p>
                    <p>
                        It&apos;s also worth knowing that with the SmartVault app on your
                        iPad or iPhone, you can perform the following tasks in a
                        breeze:
                    </p>
                    <ul>
                        <li>Send or receive links to files.</li>
                        <li>Email files as attachments to anyone.</li>
                        <li>
                            Search for files just like you do in the SmartVault
                            Portal.
                        </li>
                        <li>
                            Effortlessly upload photos onto SmartVault. This comes
                            handy also for taking screenshots of receipts (or any
                            other images you want to upload onto SmartVault).
                        </li>
                        <li>
                            Work with other apps that support the “Open in…” feature
                            to share files between apps.
                        </li>
                        <li>
                            Take advantage of the enhanced PDF viewer in the
                            full-screen mode. This works amazingly for viewing PDF
                            files on your iPad. This is a great way to run slide shows
                            right from your iPad (just save presentations to PDF one
                            slide per page for this purpose).
                        </li>
                    </ul>
                    <h4>Installing the SmartVault App</h4>
                    <ul>
                        <li>
                            First open the App Store on your device—iPad or iPhone.
                        </li>
                        <li>
                            In the Search field, enter smartvault, and select
                            smartvault for iphone and ipad in the search results list.
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/iphone_ipad.webp"
                            loading="lazy"
                            alt="iphone_ipad"
                            width={296}
                            height={512}

                        />
                        <li>Select SmartVault for iPhone and iPad.</li>
                        <Image
                            src="/assets/images/article/smart-vault/samrt_vault_iphone.webp"
                            loading="lazy"
                            alt="iphone_ipad"
                            width={413}
                            height={386}

                        />
                        <li>
                            Install the app. You may need to enter your Apple ID and
                            password.
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/app_details_img.webp"
                            loading="lazy"
                            alt="iphone_ipad"
                            width={286}
                            height={512}

                        />
                        <li>Open the SmartVault app.</li>
                        <li>
                            Tap Sign In to give the app permission to use your
                            SmartVault account.
                        </li>
                        <li>
                            Enter your email address as your SmartVault user ID and
                            password that you want to set, and then tap Sign In.
                        </li>
                        <li>
                            Tap Allow granting the SmartVault app access to your
                            SmartVault account.
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/allow_denay_img.webp"
                            loading="lazy"
                            alt="allow_denay"
                            width={417}
                            height={271}

                        />
                        <li>
                            You may need to connect your account to the app. If the
                            window below appears, copy the PIN displayed in the User
                            PIN field.
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/user_pin.webp"
                            loading="lazy"
                            alt="user_pin"
                            width={512}
                            height={312}

                        />
                        <li>
                            Paste the User PIN into the field at the top of the
                            window, and then tap Go.
                        </li>
                        <Image
                            src="/assets/images/article/smart-vault/pin_submit_img.webp"
                            loading="lazy"
                            alt="user_pin"
                            width={512}
                            height={292}

                        />
                        <div className="block-quote-note">
                            <p>
                                <strong>NOTE:</strong>
                                <br /> For security reasons, We as well as SmartVault
                                strongly recommend that you set a SmartVault passcode
                                lock. This ensures that any unauthorized users are not
                                able to access your documents in SmartVault in the case
                                of losing your iPad or iPhone.
                            </p>
                        </div>
                        <li>Tap Set SmartVault Passcode.</li>
                        <Image
                            src="/assets/images/article/smart-vault/passcode_img.webp"
                            loading="lazy"
                            alt="passcode"
                            width={401}
                            height={466}

                        />
                        <li>Enter your passcode, and then re-enter it.</li>
                        <Image
                            src="/assets/images/article/smart-vault/set_passcode_img.webp"
                            loading="lazy"
                            alt="set_passcode"
                            width={360}
                            height={512}

                        />
                    </ul>

                    <p>
                        Now everything is done and your iPad or iPhone is configured
                        for using SmartVault!
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/configure_phone.webp"
                        loading="lazy"
                        alt="configure_phone"
                        width={411}
                        height={319}

                    />
                </section>
                <BannerCta
                    ctaTitle="Book a Free Consultation with Our Experts"
                    cta={
                        <FormModal text="Book Consultation" />
                    }
                />
                <section id="item-12">
                    <h2>
                        How to Use SmartVault with Google Android Device?
                    </h2>
                    <p>
                        The graph in the image below shows what type of users can
                        use Android apps:
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/user_img.webp"
                        loading="lazy"
                        alt="user_img"
                        width={350}
                        height={244}

                    />
                    <p>
                        Please keep in mind that Only users like Administrators,
                        Employees, Seasonal users, and Client can use Google Android
                        apps. Moreover, Guest licenses cannot use the feature of
                        WebDav.
                    </p>
                    <p>
                        Using SmartVault with a WebDAV Application on a Google
                        Android Device
                    </p>
                    <ul>
                        <li>
                            Go to Google Play Store at https://play.google.com, and
                            then in the Search field, type WebDAV and search for an
                            Android app that supports WebDAV.
                        </li>
                        <li>
                            Check the list of available Android apps that support
                            WebDAV, and then install the one that best fulfills your
                            needs.
                        </li>
                        <li>
                            After you have installed an Android WebDAV app, use the
                            following settings to connect to your SmartVault account:
                        </li>
                        <p>
                            Go to SmartVault URL or Server https://docs.smartvault.com
                            and enter your SmartVault email address and password.
                        </p>
                        <div className="block-quote-note">
                            <p>
                                (<strong>NOTE:</strong>
                                <br /> Please keep in mind that SmartVault uses secure
                                <strong>HTTPS://</strong>)
                            </p>
                        </div>
                        <li>
                            Once you connect to your SmartVault account, you can then
                            securely browse your accounts, folders, vaults, and
                            documents.
                        </li>
                    </ul>
                </section>
                <section id="item-13">
                    <h2>
                        SmartVault Versions and Pricing Options
                    </h2>
                    <p>
                        For your better understanding about how much SmartVault
                        costs, we will try to present the pricing and user benefits
                        in a tabular form so that you can get a side-by-side
                        comparison of things in the clearest way possible.
                    </p>
                    <div className="table-responsive">
                        <table className="tcolomn">
                            <tbody>
                                <tr>
                                    <th>Version</th>
                                    <th>Standard</th>
                                    <th>Business Pro</th>
                                    <th>Accounting Pro</th>
                                    <th>Enterprise</th>
                                </tr>
                                <tr>
                                    <td>Type of Users</td>
                                    <td>
                                        For teams who want to store and share documents
                                        securely on the cloud.
                                    </td>
                                    <td>
                                        For businesses that need advanced security as well
                                        as heavy document workflow.
                                    </td>
                                    <td>
                                        For accounting firms that need a secure client
                                        portal along with advanced workflow and
                                        integrations.
                                    </td>
                                    <td>
                                        For large companies that want customized product
                                        features, onboarding, customer support, and scalable
                                        pricing.
                                    </td>
                                </tr>

                                <tr>
                                    <td>Minimum User</td>
                                    <td>Minimum 5 Users</td>
                                    <td>Minimum 2 Users</td>
                                    <td>Minimum 2 Users</td>
                                    <td>Minimum 10 Users</td>
                                </tr>
                                <tr>
                                    <td>Monthly Price</td>
                                    <td>$28/per user/month billed monthly</td>
                                    <td>$56/per user/month billed monthly</td>
                                    <td>$56/per user/month billed monthly</td>
                                    <td>
                                        You need to call SmartVault support 866-404-1337 for
                                        a custom quote.
                                    </td>
                                </tr>

                                <tr>
                                    <td>Benefit&apos;s</td>
                                    <td align="left">
                                        <ul>
                                            <li>Unlimited Storage.</li>
                                            <li>Unlimited Collaborations.</li>
                                            <li>Secure Client Portal.</li>
                                            <li>Custom Branding.</li>
                                            <li>Digital Signature.</li>
                                            <li>Mapped Drive.</li>
                                            <li>Connected Desktop.</li>
                                            <li>Advanced Security and Compliance.</li>
                                        </ul>
                                    </td>
                                    <td align="left">
                                        <ul>
                                            <li>Everything in Standard, plus:</li>
                                            <li>Document Request List</li>
                                            <li>Customized Folder Templates.</li>
                                            <li>Assign Employee to Clients</li>
                                            <li>Archive Clients</li>
                                            <li>Email Templates</li>
                                        </ul>
                                    </td>
                                    <td align="left">
                                        <ul>
                                            <li>
                                                Everything in Standard and Business Pro, plus:
                                            </li>
                                            <li>Tax Season Licenses</li>
                                            <li>Advanced Security and Compliance.</li>
                                        </ul>
                                    </td>
                                    <td align="left">
                                        <ul>
                                            <li>
                                                Includes everything in Business Pro or
                                                Accounting Pro depending on your industry
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section id="item-14">
                    <h2>
                        SmartVault Alternatives
                    </h2>
                    <p>
                        There are a number of alternatives for the SmartVault
                        software, you can say, SmartVault competitors. We have
                        reviewed and analyzed many of them. We will introduce you to
                        the top 5 of them here.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/LogicalDOC.webp"
                            loading="lazy"
                            alt="LogicalDOC"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        LogicalDOC
                    </h3>
                    <p>
                        LogicalDOC is one of the popular document management systems
                        (DMS) that help organizations manage their documents. It&apos;s
                        focussed on automating business processes and speeding up
                        content retrieval. The leading DMS allows you to create,
                        collaborate, and manage documents as well as store valuable
                        organizational data in a centralized document repository.
                    </p>
                    <h4>
                        <strong>Pricing Details:</strong>
                    </h4>
                    <p>

                        Pricing depends on the number of users and license type.
                    </p>
                    <p>
                        <strong>Free Version:</strong> Free Version available.
                    </p>
                    <p>
                        <strong>Free Trial:</strong> Free Trial available.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/hubdoc.webp"
                            loading="lazy"
                            alt="Hubdoc"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Hubdoc
                    </h3>
                    <p>
                        Hubdoc is also a document management system that is capable
                        of importing your financial receipts or documents,
                        converting them into data, and storing them in one place
                        that you can use at any time. Hubdoc captures your documents
                        easily.
                    </p>
                    <p>
                        Through their mobile application, you can take photos, scan
                        receipts or other financial documents, or use email. Hubdoc
                        then does the data entry part by reading key information
                        from receipts or documents and then turning that information
                        into usable data. Your accountant can access all the data
                        directly from Hubdoc.
                    </p>
                    <h4>
                        Pricing Details:
                    </h4>
                    <p>
                        <strong>Starting Price:</strong> $12 per month
                    </p>
                    <p>
                        <strong>Free Trial:</strong> Free Trial available.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/share-files.webp"
                            loading="lazy"
                            alt="share-files"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        ShareFile
                    </h3>
                    <p>
                        Developed by Citrix Systems, ShareFile is a data sync,
                        content collaboration and file sharing software program that
                        supports all document management tasks. It perfectly
                        integrates with many workflow tools, for example, MS
                        Outlook, etc. and offers a great user experience. The
                        developer of the software also provides on-premises as we as
                        cloud-based storage solutions, client portals and virtual
                        data rooms that fulfills the workflow requirements of small
                        and large businesses.
                    </p>
                    <h4>
                        Pricing Details:
                    </h4>
                    <p>
                        <strong>Starting Price:</strong> $50 per month
                    </p>
                    <p>
                        <strong>Free Trial:</strong> Free Trial available.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/zoho.webp"
                            loading="lazy"
                            alt="zoho"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        Zoho Docs
                    </h3>
                    <p>
                        Zoho Docs is an integrated online solution that provides
                        comprehensive online file storage and document management
                        capabilities. It has two distinct features—document editing
                        and collaboration as well as document storage and
                        management. The software allows you to access, manage and
                        share files, documents, images, and videos across multiple
                        internet powered devices anytime anywhere.
                    </p>
                    <p>
                        It also offers a bunch of other features, for example,
                        reviewing and tagging, check-in and check-out control, user
                        management, online chat and collaboration, data backup, and
                        seamless integrations with Google Apps as well as Zoho&apos;s
                        other solutions, for example, Zoho CRM, Zoho Recruit, Zoho
                        PRojects, and Zoho Mail.
                    </p>
                    <h4>
                        Pricing Details:
                    </h4>
                    <p>
                        <strong>Starting Price:</strong> $5.00/month/user
                    </p>
                    <p>
                        <strong>Free Version:</strong> Free Version available.
                    </p>
                    <p>
                        <strong>Free Trial:</strong> Free Trial available.
                    </p>
                    <h3 className="flex items-center">
                        <Image
                            src="/assets/images/article/smart-vault/FileHold.webp"
                            loading="lazy"
                            alt="FileHold"
                            width={75}
                            height={75} className="drake_icons"

                        />
                        FileHold
                    </h3>
                    <p>
                        FileHold is one of the best document management and document
                        workflow software solutions that assist large enterprises
                        with a smooth transition to a paperless environment. Having
                        a free fully documented API, it offers a range of great
                        features, such as document scanning, document linking,
                        searching, versioning, indexing, and many more. The software
                        is compatible with mobiles and also offers a perfect desktop
                        environment by supporting all types of browsers. It easily
                        integrates with MS Office, Teams, SharePoint, and Active
                        Directory.
                    </p>
                    <h4>
                        Pricing Details:
                    </h4>
                    <p>
                        <strong>Starting Price:</strong> $15.00 / user / month
                    </p>
                    <p>
                        It can be bought as a perpetual license or on a month to
                        month subscription (minimum of 5 users).
                    </p>
                    <p>
                        <strong>Free Trial:</strong> Free Trial available.
                    </p>
                </section>
                <section id="item-15">
                    <h2>
                        How to Contact SmartVault Customer Service?
                    </h2>
                    <p>
                        SmartVault offers great technical support to customers
                        through almost all conventional and modern support
                        channels—phone, email, chat, contact form, etc. You can
                        choose any channel that feels most comfortable to you.
                    </p>
                    <p>
                        1. For existing SmartVault customers:
                    </p>
                    <p>
                        US: 888 607 4275
                    </p>
                    <p>
                        UK: 0122 375 3906
                    </p>
                    <p>
                        2. For contacting the sales team:
                    </p>
                    <p>
                        US Toll Free - 866 404 1337
                    </p>
                    <p>
                        UK Toll Free - 01223 735 906
                    </p>
                    <p>
                        <strong>3.</strong> Alternatively, you can submit a request
                        through the contact form by clicking on the following link:
                        https://help.smartvault.com/hc/en-us/requests/new#_ga=2.113342215.1033382874.1650885619-281092305.1650885619
                        (You will get response from them in 1-2 business days)
                    </p>
                    <p>
                        <strong>4.</strong> Also, you can schedule a 15-min live
                        demo to know how martVault works for you through this link
                        https://www.smartvault.com/see-a-demo/ Clicking on the link
                        opens a window like the one given on the side
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/schudule_my_demo.webp"
                        loading="lazy"
                        alt="schudule_my_demo"
                        width={502}
                        height={512}

                    />
                    <p>
                        <strong>5.</strong> The direct link to jump to all the
                        support channels is: https://www.smartvault.com/contact/
                    </p>
                    <p>
                        We have cleared up so many things concerning SmartVault
                        software that you actually need to be familiar with; now you
                        know what SmartVault is, how it works, what its salient
                        features and usability, integrations, pricing, and
                        alternatives are, and many other things.
                    </p>
                    <p>
                        We believe you would now be feeling fully confident of
                        making an informed decision if you have been thinking about
                        opting in SmartVault. Even if you are an existing user of
                        SmartVault, you will now be an intelligent and informed user
                        of the tool.
                    </p>
                    <p>
                        However, if you still feel we have left something that you
                        wanted us to describe here, you can easily contact us any
                        time. Our experts will help you with the most suitable
                        solutions to any of your issues.
                    </p>
                </section>
                <BannerCta
                    ctaTitle="Book a Free Consultation with Our Experts"
                    cta={
                        <FormModal text="Book Consultation" />
                    }
                />
                <section id="item-16">
                    <h2>SmartVault FAQs</h2>
                    <h3>
                        1. How to add an employee to SmartVault?
                    </h3>
                    <p>
                        Kindly follow the steps given below to add an assigned
                        employee to SmartVault
                    </p>
                    <ul>
                        <li>Sign in to the SmartVault Portal.</li>
                        <li>Click the Manage Employees button.</li>
                        <li>Click the + Add Employee button....</li>
                        <div className="block-quote-note">
                            <p>
                                <strong>NOTE:</strong>
                                <br /> In case you don&apos;t have any active licenses in
                                your SmartVault account, the + Add Employee button will
                                appear deactivated.
                            </p>
                        </div>
                        <li>
                            Enter the employee&apos;s information and select Assigned
                            Employee....
                        </li>
                        <li>
                            Ensure the checkbox for Invite Employee is enabled if you
                            want to invite the employee and click Save. This action
                            creates the employee and sends an activation email to the
                            user.
                        </li>
                        <li>
                            The designated employee needs to activate their account to
                            start using SmartVault.
                        </li>
                    </ul>
                    <h3>
                        2. How to invite clients to your SmartVault account?
                    </h3>
                    <p>
                        If needed, you can provide your clients with access to your
                        SmartVault account so that they can download their tax
                        return documents or upload any documents if required.
                    </p>
                    <p>
                        Each of your clients will have an individual vault in
                        SmartVault. However, they will only be able to view and
                        access folders within their vault. But they cannot perform
                        any edits.
                    </p>
                    <p>
                        When deciding when to invite a client to SmartVault account,
                        just keep the following in mind:
                    </p>
                    <p>
                        You may want to invite all of your clients at once when you
                        set up your SmartVault account.
                    </p>
                    <p>
                        You can also invite your clients when you need to collect
                        some source documents (such as W-2s). This way your clients
                        can upload the requested documents directly to the Client
                        Source Documents folder.
                    </p>
                    <div className="block-quote-note">
                        <p>
                            <strong>NOTE:</strong>
                            <br /> You can remove a client&apos;s access to SmartVault at
                            any point in time you want to. For more information, see
                            other questions “How to remove a user&apos;s access to
                            SmartVault, specific folders/vaults?” and “How to remove a
                            user&apos;s access to groups?”.
                        </p>
                    </div>
                    <h3>
                        3. How to send invites to clients from the SmartVault
                        Portal?
                    </h3>
                    <p>
                        For inviting one or more clients to your account from the
                        Portal, follow the steps below:
                    </p>
                    <ul>
                        <li>Sign in to the SmartVault Portal.</li>
                        <li>Click Clients on the left-hand menu.</li>
                        <div className="block-quote-note">
                            <p>
                                <strong>NOTE:</strong>
                                <br />
                                If you have your View Preferences set to ’2020 New
                                View’, follow the Steps in Client Management.
                            </p>
                        </div>
                        <li>
                            Select the clients that you want to invite and click the
                            Invite Client icon.
                        </li>
                        <div className="block-quote-note">
                            <p>
                                <strong>NOTE:</strong>
                                <br /> If you want to invite more than 50 clients, you
                                will have to navigate to the next page of clients to
                                continue inviting additional clients.
                            </p>
                        </div>
                        <li>
                            You will be prompted to confirm that you want to invite
                            clients. Click OK.
                        </li>
                        <li>
                            Review the confirmation message, and then click Close.
                        </li>
                    </ul>
                    <h3>
                        4. How to send invites to clients from the Connected
                        Desktop?
                    </h3>
                    <ul>
                        <li>Open the Connected Desktop.</li>
                        <li>
                            Select and right-click on the client you wish to invite
                            and then select Open client in Portal. Your browser will
                            display the Client Info page in the Dashboard.
                        </li>
                        <li>
                            Click the Invite Client icon at the top left of that
                            screen. The status window will inform you if the
                            invitation was submitted.
                        </li>
                        <li>Click Close.</li>
                    </ul>
                    <h3>
                        5. How to resend an invite in SmartVault?
                    </h3>
                    <ul>
                        <li>Sign in to the SmartVault Portal.</li>
                        <li>Go to the Clients page…</li>
                        <div className="block-quote-note">
                            <p>
                                <strong>NOTE:</strong>
                                <br /> If you have your View Preferences set to ’2020
                                New View’, follow the Steps in Client Management.
                            </p>
                        </div>
                        <li>
                            From the Clients page, locate the client and click the i
                            icon.
                        </li>
                        <li>
                            Click the Invite client icon on the top left corner.
                        </li>
                        <li>
                            You then see a confirmation that will tell you if it has
                            been submitted or not.
                        </li>
                        <li>
                            Refresh the page now. You will see the client&apos;s status
                            that lets you know that they have not been invited,
                            invited, or activated with SmartVault.
                        </li>
                    </ul>
                    <h3>
                        6. How to remove a user&apos;s access from SmartVault, a specific
                        folder/vault, or a group?
                    </h3>
                    <p>
                        Whenever an administrator wants, they are able to remove a
                        user from their SmartVault account or remove a user&apos;s access
                        to a specific folder/vault or a specific group.
                    </p>
                    <h4>
                        Removing a User from Your SmartVault Account:
                    </h4>
                    <p>
                        When you wish, you can remove a user, guest or client from
                        your SmartVault account.
                    </p>
                    <ul>
                        <li>Sign in to the SmartVault Portal.</li>
                        <li>Click on your initials on the top right.</li>
                        <li>Click Settings.</li>
                        <li>Under Manage Groups, select Licenses</li>
                        <li>
                            Click Remove next to the user&apos;s email address and then OK.
                        </li>
                    </ul>
                    <h4>
                        Removing a User from a Specific Folder or Vault:
                    </h4>
                    <ul>
                        <li>Sign in to the SmartVault Portal.</li>
                        <li>Click Files and Folders.</li>
                        <li>
                            Go to the folder or the vault you want to remove the user
                            from and then click the Container properties icon.
                        </li>
                        <div className="block-quote-note">
                            <p>
                                <strong>NOTE:</strong>
                                <br /> If you have your View Preferences set to ’2020
                                New View’, visit the section Item Properties of
                                Navigating the New Files and Folders View to learn how
                                to access the client&apos;s vault properties.
                            </p>
                        </div>
                        <li>
                            Click the Access and Notifications tab, and then click
                            Edit Access Settings.
                        </li>
                        <li>
                            Click the X icon under the Remove column to remove that
                            user&apos;s access to the folder or vault, and click Save
                            Settings.
                        </li>
                        <div className="block-quote-note">
                            <p>
                                <strong>NOTE:</strong>
                                <br /> If the color of the X icon is gray, it means that
                                the permission for that particular user was granted from
                                the Folder Template level. In this situation, the only
                                way to remove the permission for that user is removing
                                them from the group from the vault level.
                            </p>
                        </div>
                    </ul>
                    <h4>Removing a User From a Group:</h4>
                    <ul>
                        <p>
                            Group permissions are set at the vault level. Therefore,
                            to remove a user from a group:
                        </p>
                        <li>Sign in to the SmartVault Portal</li>
                        <li>Click Files and Folders.</li>
                        <li>
                            Just go to the folder or vault you want to remove the user
                            from and then click the Container properties icon.
                        </li>
                        <li>Click Manage Group Members.</li>
                        <li>
                            Select the appropriate group tab and find the user to
                            remove.
                        </li>
                        <li>Click Remove and then click Save Changes. </li>
                    </ul>
                    <h3>
                        7. How to resend an activation link without access to the
                        dashboard?
                    </h3>
                    <p>
                        If you do not currently have access to the SmartVault
                        Dashboard, you can still get the invitation resent to you by
                        approaching the SmartVault Support Team.
                    </p>
                    <p>
                        Alternatively, you can also go to the SmartVault Portal and
                        put the email address of the person you want to invite.
                    </p>
                    <p>
                        Enter a random password and try to sign in no matter if they
                        have never created a password. The system will check and see
                        if the invitee has activated their account earlier. And if
                        not, the system will automatically resend them an invitation
                        to SmartVault.
                    </p>
                    <p>
                        We are including a screenshot below for you to understand
                        how it may look when you resend an invitation via that
                        method.
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/user_not-active.webp"
                        loading="lazy"
                        alt="user_not-active"
                        width={512}
                        height={134}

                    />
                    <h3>
                        8. How to view the Activity Log for a vault or folder?
                    </h3>
                    <p>
                        For the purposes of security and compliance, it&apos;s always
                        important for you to regularly audit who has accessed your
                        sensitive documents and files. At any point in time, you may
                        want to know when somebody downloaded, uploaded, deleted, or
                        changed any document&apos;s properties or who made changes to
                        access settings on a vault or folder.
                    </p>
                    <p>
                        The Activity Log just fulfills that purpose.
                    </p>
                    <p>
                        Know who can view the Activity Log
                    </p>
                    <p>
                        The Activity Log is offered with all SmartVault plans except
                        Basic 2016 and Team 2016. It comes with all SmartVault Tax
                        and Accounting plans as well as the Professional 2013 and
                        newly launched Pro plans.
                    </p>
                    <h4>Viewing the Activity Log</h4>
                    <ul>
                        <li>Sign in to the SmartVault Portal.</li>
                        <li>Select Files and Folders.</li>
                        <li>
                            Navigate to the account, vault, or folder for which you
                            want to view the Activity Log.
                        </li>
                        <li>
                            Click the Properties icon (gear icon) for the account,
                            vault, or folder and select the Activity Log tab.
                        </li>
                        <li>
                            Click the Edit filters icon and select the types of users
                            for which you want to view the activity log.
                        </li>
                        <ul>
                            <li>
                                Select All if you want to view activity for all users,
                                guests, and clients.
                            </li>
                            <li>
                                Select Users if you want to view activity for only
                                client users.
                            </li>
                            <li>
                                Select Guests if you want to view activity for only
                                guest users. In a Tax Plan, tax clients use a Guest
                                license.
                            </li>
                            <li>
                                Select Guests+Clients if you want to view the activity
                                log for only guests and clients.
                            </li>
                            <li>
                                Select Clients if you want to view activity for only
                                clients.
                            </li>
                        </ul>
                        <li>
                            In the Date Filter section, use the calendars to select
                            the Beginning date and Ending date. <br />
                            <div className="block-quote-note">
                                <p>
                                    <strong>NOTE:</strong>
                                    <br /> SmartVault recommends selecting no more than
                                    three months.
                                </p>
                            </div>
                        </li>
                        <li>
                            If you have selected a vault or folder and want to select
                            all subfolders&apos; activity, enable the Include subfolders&apos;
                            checkbox.
                        </li>
                        <li>
                            Once you click Apply. SmartVault will display the activity
                            log for all the selected items.
                        </li>
                        <li>
                            If you wish to export the activity log to a CSV file,
                            click the Export to CSV icon
                        </li>
                    </ul>
                    <h3>
                        9. What are Vaults, Containers and Folders in SmartVault?
                    </h3>
                    <p>
                        Vaults, also called Containers, and Folders help you
                        organize the documents you store in your SmartVault Portal.
                    </p>
                    <p>
                        Just like a locked online file cabinet, a Vault is a safe
                        and secure online container that you can utilize to securely
                        store your document online.
                    </p>
                    <p>
                        Vaults hold Folders inside them. Once you have created a
                        vault, you can also create folders as well as subfolders in
                        that vault. It helps you further subdivide and organize all
                        of your documents.
                    </p>
                    <h3>
                        10. How to configure a scansnap scanner with SmartVault?
                    </h3>
                    <p>
                        If you want, you can configure a Fujitsu ScanSnap scanner
                        with SmartVault, and you can use the same to scan documents
                        directly to the SmartVault Toolbar, the Connected Desktop,
                        or the SmartVault Inbox..
                    </p>
                    <p>
                        However, it&apos;s a prerequisite that you install the ScanSnap
                        software first. If you have not ScanSnap software installed
                        on your system, you will receive this error:
                    </p>
                    <Image
                        src="/assets/images/article/smart-vault/install_sucessfull.webp"
                        loading="lazy"
                        alt="install_sucessfull"
                        width={512}
                        height={318}

                    />
                    <p>
                        Also, make sure your SmartVault Desktop client is installed
                        and is in working condition.
                    </p>
                    <p>
                        For more information on how to work with a ScanSnap scanner,
                        you can open the related links mentioned below:
                    </p>
                    <ul>
                        <li>
                            How to get started guide contents for tax accountants?
                        </li>
                        <li>
                            How to scan documents using the smartvault quickbooks
                            toolbar and a fujitsu scansnap scanner?
                        </li>
                        <li>
                            How to scan documents using the smartvault inbox and a
                            fujitsu scansnap scanner?
                        </li>
                        <li>
                            How to scan documents using the smartvault connected
                            desktop and a fujitsu scansnap scanner?
                        </li>
                        <li>
                            How to understand and create full-text searchable
                            documents?
                        </li>
                        <li>
                            How to create multi-page PDFs or single page PDFs with a
                            scansnap scanner?
                        </li>
                    </ul>
                    <p>
                        Supported Scanners
                    </p>
                    <p>
                        SmartVault supports ScanSnap models S300, S1300, S1500, and
                        iX 500.
                    </p>
                    <p>
                        In case you are using an old model scanner, or if you
                        receive an error while trying to create the ScanSnap
                        profiles automatically, find out how to create the
                        SmartVault ScanSnap profiles manually.
                    </p>
                    <p>
                        Configuring a Fujitsu ScanSnap Scanner
                    </p>
                    <ul>
                        <li>
                            Open the SmartVault Launchpad and sign in when prompted.
                        </li>
                        <li>Now, click Fujitsu ScanSnap Setup in the Launchpad.</li>
                        <li>
                            When you get to the ScanSnap integration window, click
                            Create Profiles.
                        </li>
                        <li>Click Close. And then everything will be done.</li>
                    </ul>
                    <h3>11. How do I scan with SmartVault?</h3>
                    <p>
                        You can easily scan your documents using a Fujitsu ScanSnap
                        scanner with SmartVault connected Desktop with the touch of
                        a button. You need to follow these simple steps.
                    </p>
                    <ul>
                        <li>
                            Configure your ScanSnap scanner profiles for SmartVault if
                            it is not yet done.
                        </li>
                        <li>
                            In the system tray, right-click on your ScanSnap icon and
                            then select Scan Button Settings. <br />
                            <div className="block-quote-note">
                                <p>
                                    (Please <strong>NOTE</strong>
                                    <br /> Your scanner must have a connection to be used
                                    with the Connected Desktop. In case your scanner is
                                    not plugged in, the icon will appear with a red no
                                    symbol around it)
                                </p>
                            </div>
                        </li>
                        <li>
                            Under Profile, select SmartVault Toolbar, then click
                            Apply, and then OK.
                        </li>
                        <li>Open the Connected Desktop.</li>
                        <li>
                            Click a client and then right-click on a folder within the
                            client&apos;s vault. Click Scan.
                        </li>
                        <li>
                            When the Scan Document window opens, feed the desired
                            document into the scanner and press the Scan button on
                            your ScanSnap scanner.
                        </li>
                        <li>
                            Depending on which SmartVault tools are currently open, a
                            dialog window will appear asking for the destination of
                            your scan. Click Connected Desktop.
                        </li>
                        <li>
                            The scanned document appears in the Scan Document window.
                            Edit the name, description, or pages and click Save.
                        </li>
                    </ul>
                    <p>
                        In case you need to manually create SmartVault Profiles for
                        Fujitsu ScanSnap Scanners, click the link for instructions.
                    </p>
                    <h3>
                        12. How to delete a Client from SmartVault?
                    </h3>
                    <p>
                        Whenever you need to delete a client from your SmartVault
                        account, you can simply delete the client vault attached
                        with that particular client.
                    </p>
                    <p>
                        For your information: you can also recover a client&apos;s vault
                        from the recycle bin for up to 90 days after the deletion.
                        See Using the Recycle Bin for more information.
                    </p>
                    <p>
                        To delete a client&apos;s vault:
                    </p>
                    <ul>
                        <li>Sign in to the SmartVault Portal.</li>
                        <li>Click Files and Folders.</li>
                        <li>
                            From the left navigation, select the Container containing
                            the client you want to delete. (If you have your View
                            Preferences set to ’2020 New View’, visit the section
                            Delete under Actions on Vaults, Containers, and Folders of
                            Navigating the New Files and Folders View to learn how to
                            delete a client&apos;s vault)
                        </li>
                        <li>
                            Enable the checkbox next to the client you want to delete,
                            and click the Send selected items to trash icon.
                        </li>
                        <li>
                            A confirmation message appears confirming that all
                            documents stored in this vault will be deleted. Click OK.
                            And it&apos;s done.
                        </li>
                    </ul>
                </section>
            </ContentLayout>
            <Author />
            {/* <LongContentHelp /> */}
            <Trusted />
            <Awards />
        </>
    );
}