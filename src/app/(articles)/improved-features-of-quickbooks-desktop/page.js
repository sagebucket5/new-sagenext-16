import dynamic from "next/dynamic";
import Trusted from "@components/utils/TrustedPatner";
import Awards from "@components/utils/Awards";
const Author = dynamic(() => import("@components/article/Author"));
import ContentLayout from "@components/article/ContentLayout";
import Banner from "@components/article/Banner";
import BannerCta from "@components/utils/BannerCta";
import BlueCta from "@components/buttons/BlueCta";
import { getMetaData } from "@/lib/metaData";
import Image from "next/image";

export async function generateMetadata() {
    const meta = getMetaData("improved-features-of-quickbooks-desktop");

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
                    url: "/assets/images/contact-us/contact-us-banner.webp",
                    secureUrl: "/assets/images/contact-us/contact-us-banner.webp",
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
            images: ["/assets/images/contact-us/contact-us-banner.webp"],
        },
    };
}

export default function ImprovedFeaturesOfQuickbooksDesktop() {

    return (
        <>
            <Banner
                title="QuickBooks Desktop 2025 New Features"
                description="Everything you need to know about QuickBooks Desktop 2023 New Features and Pricing."
                image="/assets/images/longforms/QuickBooks Enterprise.png"
            />

            <ContentLayout>
                <section>
                    <p>
                        <strong>
                            It’s time for the launch of the all-new QuickBooks Desktop 2023
                            version.
                        </strong>
                        On September 6, 2022, Ted Callahan, the head of Intuit’s QuickBooks
                        Accountant, announced that ProAdvisors and the Accounting community
                        will be able to use the new products. And the general Quickbooks
                        desktop 2023 <strong> release date</strong> is September 20th, 2022.
                        <br /> <br />
                        So, while the scheduled release is not set, we would love to
                        introduce you to the new and improved features you will get in this
                        year’s product.
                        <br /> <br />
                        In the QuickBooks 2023 version, users will get four new unique
                        features in QuickBooks Enterprise, QuickBooks Desktop Plus (Pro &
                        Premier), and Accountant.
                    </p>
                </section>
                <section id="list-1">
                    <h2>The Enhanced Features of QuickBooks Desktop 2023 are:</h2>
                    <table className="table">
                        <thead className="table-light1">
                            <tr>
                                <th>Feature Type</th>
                                <th>Latest Features in QuickBooks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Enhanced Features</td>
                                <td className="border">
                                    <ol className="mb-0">
                                        <li>Track Vehicle Mileage feature</li>
                                        <li>Cash Flow Hub</li>
                                        <li>Reports Optimization</li>
                                        <li>Improved Banking Connectivity</li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td>On the Basis of Subscription Level</td>
                                <td className="border">
                                    <ol className="mb-0">
                                        <li>Item Categories feature</li>
                                        <li>
                                            Expiration Dates feature for Advanced Inventory Serial/Lot
                                            Tracking users
                                        </li>
                                        <li>Intercompany Transactions feature</li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td>Payment features</td>
                                <td className="border">
                                    <ol className="mb-0">
                                        <li>
                                            Upgradation to <b>Payment Links</b> and
                                        </li>
                                        <li>
                                            A new <b>Node Card Reader</b>
                                        </li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td>Payroll features</td>
                                <td className="border">
                                    <ol className="mb-0">
                                        <li>
                                            <b>Equifax employment/income verification</b>
                                        </li>
                                        <li>
                                            <b>HCM with Guideline 401(k)</b>
                                        </li>
                                    </ol>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Since we have had in-depth knowledge about QuickBooks Desktop 2023,
                        this article will be designed to help you learn more about the new
                        products. <br /> <br />
                        Now, let’s read together about the
                        <strong> QuickBooks Desktop 2023 </strong> Version.
                    </p>
                </section>
                <section id="list-2">
                    <h2>
                        QuickBooks 2023 New Features for Enterprise, Plus, and Accountant
                    </h2>
                    <p>
                        <strong> Available for:</strong> The below-mentioned features are
                        available for all the US-based and Canada for Enterprise (v 23), and
                        Accountant, 2023 QuickBooks Desktop Pro and Premier Plus, users as
                        of the initial (R1) product release.
                    </p>
                    <div>
                        <div>
                            <h3>
                                <Image height={200} width={200}
                                    src="/assets/images/article/Bill.com/Improved-Banking-Connectivity.webp"
                                    alt="Improved Banking Connectivity"
                                />
                                Improved Banking Connectivity
                            </h3>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <strong> Features:</strong> The all-new QuickBooks Desktop 2023
                            offers improved banking connectivity using a better platform to
                            solve your security and connectivity concerns.
                        </li>
                        <li>
                            Thousands of businesses using QuickBooks Desktop have downloaded
                            their bank and credit card transactions using the traditional
                            methods of bank connectivity via bank servers desktop offered.
                        </li>
                        <li>
                            These existing methods are vulnerable to security concerns and
                            connection stability issues, which is why many banks have been
                            moving toward API-based connectivity—the method used by QuickBooks
                            Online.
                        </li>
                    </ul>
                    <p>
                        With the Improved Banking Connectivity, online banking has been
                        optimized in the <strong> following three ways:</strong>
                    </p>
                    <ol type="1">
                        <li>
                            It’s now possible to connect to many different banks that
                            previously did not offer direct connectivity but only made the
                            bank downloads available.
                        </li>
                        <li>
                            The stability, interruptions, and experience of less downtime of
                            banking connections will all improve.
                        </li>
                        <li>
                            QuickBooks Desktop will automatically retrieve the bank (or credit
                            card) information and also automated download of banking data at
                            user-specified intervals can be configured’.
                        </li>
                    </ol>
                    <p>
                        Banking menu -&gt; Bank Feeds -&gt;
                        <strong>
                            ’Improved Banking Connectivity can be configured from here’.
                        </strong>
                        It also is available by selecting Bank Feeds from the shortcut
                        sidebar on the Home Screen.
                    </p>
                    <Image height={300} width={300} src="/assets/images/article/Bill.com/Bank-Feeds.webp" alt="Bank-Feeds" />
                    <h4>How does it work?</h4>
                    <ul>
                        <li>Find your Bank</li>
                        <li>Connect/Authenticate with your Bank</li>
                        <li>Link your bank account(s)</li>
                        <li>Download & review your bank transactions</li>
                    </ul>
                    <p>
                        <strong> Available for:</strong> This improved Bank Connectivity is
                        available to all 2023 Desktop Plus, Enterprise, and Accountant users
                        within the US as of the initial 2023 product (R1) release.
                    </p>

                    <a
                        href="https://www.thesagenext.com/blog/troubleshooting-quickbooks-bank-reconciliation-problems"
                        target="_blank"
                    >
                        <div className="AlsoRead">
                            <div>
                                <div>
                                    <Image height={300} width={300}
                                        src="https://snb.thesagenext.com/blog/wp-content/uploads/2022/11/QuickBooks-Bank-Reconciliation-1.webp"
                                        loading="lazy"
                                        alt="QuickBooks-Bank-Reconciliation-1"
                                    />
                                </div>
                                <div>
                                    <h4>
                                        How To Solve Common QuickBooks Bank Reconciliation
                                        Problems
                                    </h4>
                                    <p>
                                        QuickBooks Online and Desktop are great for integrating
                                        with third-party banking applications and services. If you
                                        have...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>


                    <div>
                        <div>
                            <h3>
                                <Image height={300} width={300}
                                    src="/assets/images/article/Bill.com/Cash-Flow-Hub.webp"
                                    alt="Cash Flow Hub"
                                />
                                Cash Flow Hub
                            </h3>
                        </div>
                    </div>

                    <p>
                        <strong> Features:</strong> Cash Flow Hub allows you to explore,
                        track and manage your cash flow in the easiest way. It is your
                        one-stop destination, which provides visibility into all the
                        accounts that you want to monitor to track your cash position,
                        including bank accounts, loans, and credit cards. From here, you can
                        also manage your money-in and money-out transactions.
                    </p>
                    <Image height={300} width={300} src="/assets/images/article/Bill.com/Cash-Flow-Hub1.webp" alt="cash-flow-hub" />
                    <p>
                        The Trends section of Cash Flow Hub graphically showcases how your
                        balances are varying over time so you can identify key cash flow
                        indicators that may affect your future cash position. This helps you
                        plan for the future by understanding upcoming transactions that
                        impact your cash flow.
                    </p>

                    <h4>What User can Manage via Cash Flow Hub?</h4>
                    <ul>
                        <li>Add accounts to the list of monitored accounts </li>
                        <li>Check account balances</li>
                        <li>Examine the cash balance trends</li>
                        <li>Track cash performance over a specified time period</li>
                        <li>Manage overdue bills and payments</li>
                        <li>Check any and all reports related to cash flow information</li>
                    </ul>
                    <Image height={300} width={300}
                        src="/assets/images/article/Bill.com/Cash-Flow-Hub-14.webp"
                        alt="What User can Manage via Cash Flow Hub?"
                    />
                    <p>
                        <strong> Available for:</strong> As of the first 2023 product (R1)
                        release, Cash Flow Hub is accessible to all 2023 Desktop Plus,
                        Enterprise, and Accountant users in the US. Either the Company menu
                        or the Reports menu can be used to access it.
                    </p>
                    <div>
                        <div>
                            {" "}
                            <h3>
                                <Image height={300} width={300}
                                    src="/assets/images/article/Bill.com/Track-Vehicle.webp"
                                    alt="Track Vehicle Mileage"
                                />
                                Track Vehicle Mileage
                            </h3>
                        </div>
                    </div>

                    <p>
                        We know what you are thinking, ’The Vehicle mileage is not a new
                        feature to QuickBooks.’ And that’s true. Although tracking mileage
                        is not new, the process of tracking the mileage for the QuickBooks
                        Desktop 2023 version is very different.
                    </p>
                    <p>
                        <strong> Features:</strong> QuickBooks Desktop 2023 provides an
                        enhanced way for tracking and managing vehicle mileage. With this
                        new feature, users can:
                    </p>
                    <ul>
                        <li>Add vehicles</li>
                        <li>Manage mileage rates</li>
                        <li>Manually add a trip</li>
                        <li>Get trips reviewed and approved </li>
                        <li>Track miles with the mobile app for iOS</li>
                    </ul>
                    <div>
                        <div>
                            <p>
                                <strong>Tip</strong>
                            </p>
                            <Image height={300} width={300} src="/assets/images/article/Bill.com/tips.png" alt="bulb" />
                        </div>
                        <div>
                            <p>
                                <b>Do you know - </b> There’s a new (iOS) mobile app that
                                functions with QuickBooks to track vehicle mileage and
                                integrates it into your QuickBooks Company file. Currently, the
                                new app is available only on the Apple Store.
                            </p>
                        </div>
                    </div>
                    <Image height={300} width={300}
                        src="/assets/images/article/Bill.com/Mileage-tracker-mobile-1.webp"
                        alt="QuickBooks Desktop Mobile App"
                    />
                    <p>
                        You no longer need to worry about manually noting the odometer
                        readings of your business trips. The miles will be calculated for
                        you after when you will utilize the ’start’ and ’end’ locations for
                        your trip.
                    </p>
                    <p>
                        You also won’t need to worry about tracking the current IRS mileage
                        rate since QuickBooks will automatically fetch that rate for you and
                        use it to calculate each trip’s mileage expense.
                    </p>
                    <Image height={300} width={300}
                        src="/assets/images/article/Bill.com/Track-Vehicles-Mileage.webp"
                        alt="Track Vehicles Mileage"
                    />
                    <p>
                        Additionally, when trips are sent to the user’s QuickBooks Desktop
                        from the QuickBooks Mobile app (or Desktop), they are then available
                        for approval by the employee’s manager (or supervisor). Once
                        approved, it will be simple for you to bill your clients.
                    </p>
                    <p>
                        <strong> Available for:</strong> Track Vehicle Mileage is accessible
                        to all 2023 Desktop Plus, Enterprise, and Accountant users within
                        the US as of the initial QuickBooks 2023 product (R1) release. It is
                        accessible through the Company menu.
                    </p>
                    <div>
                        <div>
                            <h3>
                                <Image height={300} width={300}
                                    src="/assets/images/article/Bill.com/Report-Optimization.webp"
                                    alt="Report Optimization"
                                />
                                Report Optimization{" "}
                            </h3>
                        </div>
                    </div>

                    <p>
                        <strong> Feature:</strong> For the QuickBooks Desktop 2023 version
                        the enhancements done on the back-end will definitely make report
                        compilation very fast for larger company file sizes (&gt;300 MB).
                    </p>
                    <p>
                        Report compiling time has frequently been an issue for users with
                        large company files that are much more complex reports within
                        QuickBooks. A depiction of such types of reports is the A/R Aging
                        Reports.
                    </p>
                    <p>
                        <strong> Available for:</strong> As of the first 2023 product (R1)
                        release, Report Optimization is available to all 2023 Desktop Plus,
                        Enterprise, and Accountant users in the US and Canada.
                    </p>
                </section>
                <section id="list-3">
                    <h2>
                        QuickBooks 2023 Latest Features Especially for the Enterprise and
                        Accountant Users
                    </h2>
                    <p>
                        <strong>Available for: </strong> QuickBooks Enterprise (v 23)
                        subscribers depending upon their subscription level and all the
                        QuickBooks Enterprise Accountant users. (These features are
                        available to users only within the US as of the initial 2023 product
                        year release.)
                    </p>
                    <p>
                        <strong>Features: </strong> In the QuickBooks Enterprise 2023 users
                        can manage their inventory more efficiently with user-defined
                        Inventory Item Categories.
                    </p>
                    <p>
                        QuickBooks Desktop only had a few options for defining the inventory
                        items:
                    </p>
                    <ul>
                        <li>Item Name/Number</li>
                        <li>Purchase Description</li>
                        <li>Sales Description</li>
                        <li>Manufacturer’s Part Number</li>
                    </ul>
                    <p>
                        The only way a user could establish a hierarchy of their inventory
                        items was to define the item as a sub-item of another item.
                    </p>

                    <div>
                        <div>
                            <p>
                                <strong>Tip</strong>
                            </p>
                            <Image height={300} width={300} src="/assets/images/article/Bill.com/tips.png" alt="Tips" />
                        </div>
                        <div>
                            <p>
                                The previous edition of QuickBooks did not provide any practical
                                way to track or report on items using this type of
                                naming/numbering convention. But with QuickBooks 2023, users can
                                establish a hierarchical system for their Inventory items by
                                creating up to four (4) levels of subcategories.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="list-4">
                    <h2>How to Use the New Inventory Item Categories?</h2>

                    <ul>
                        <li>
                            At first, Company File Administrators should Turn On this feature
                            in the <b>Items & Inventory Company Preferences.</b>
                        </li>
                        <Image height={300} width={300} src="/assets/images/article/Bill.com/ItemCat-1.webp" alt="ItemCat" />
                        <li>
                            Users can now easily create and assign categories to their
                            Inventory Items.
                            <div>
                                <div>
                                    <p>
                                        <strong>Tip</strong>
                                    </p>
                                    <Image height={300} width={300} src="/assets/images/article/Bill.com/tips.png" alt="Tips" />
                                </div>
                                <div>
                                    <p>
                                        <b>Add/Edit Item option</b> of the Item list provides access
                                        to <b>Item Categories</b>. Additionally, the Item list is
                                        accessible from the either <b>Lists</b> or
                                        <b>Inventory menus</b> or the <b>Items and Services icon</b>
                                        below the Company section of the Home Page.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            Third, users can run several item-related Inventory reports,
                            including the new <b>Category field</b> in those reports. Users
                            can also view, filter, or sort report items by <b>category</b>.
                        </li>
                    </ul>
                    <Image height={300} width={300} src="/assets/images/article/Bill.com/ItemCat-3.webp" alt="ItemCat" />
                    <p>
                        This new feature allows users to define items almost any way they
                        want to represent them and helps limit abuses of the item/sub-item
                        naming convention which occasionally make reports meaningless. For
                        example, when they post transactions to the parent item instead of
                        the sub-items.
                    </p>
                    <p>
                        <strong> Available for:</strong> As of the initial (v23) product
                        (R1) release, Inventory Categories are available to all QuickBooks
                        Enterprise (v 23) subscribers in the US and Canada, including
                        Enterprise Accountant subscribers.
                    </p>
                </section>

                <section id="list-5">
                    <h2>Keeping Track of Intercompany Transactions</h2>
                    <p>
                        <strong> Highlights:</strong> Accountants and Bookkeepers have been
                        struggling to guarantee that transactions were correctly and
                        accurately recorded or not. Because businesses with multiple related
                        companies had to manually create the same transaction in multiple
                        QuickBooks company files to accurately record intercompany financial
                        activities in turn resulting in duplication of work leading to
                        frequent errors that originated from wrong information entry.
                    </p>
                    <p>
                        <strong> Available for:</strong> As of the initial product (R1)
                        release, US-based Diamond, Enterprise Platinum subscribers, and
                        Enterprise Accountant users can now connect to the different
                        QuickBooks Company files, post intercompany transactions
                        (bills/checks) with the related companies, and monitor the required
                        business-to-business transactions.
                    </p>
                    <div>
                        <div>
                            <h3>
                                <Image height={300} width={300}
                                    src="/assets/images/article/Bill.com/Intercompany.webp"
                                    alt="Using Intercompany Transactions"
                                />
                                Using Intercompany Transactions
                            </h3>
                        </div>
                    </div>

                    <ul>
                        <li>
                            First, create an Intercompany connection between two different,
                            but interlinked QuickBooks Company files. For e.g., this can be a
                            subsidiary as well as a Parent or Holding company.
                        </li>
                        <li>
                            Secondly, you should sign in to your Intuit account for both
                            company files before starting to build the connection within your
                            QuickBooks Desktop.
                        </li>
                        <li>
                            Now, you will build a connection from the Parent Company using the
                            <b>Intercompany Transactions</b> option under the Company Menu
                            <b>or</b> the <b>Intercompany Transactions</b> icon inside the
                            Company section of the Home Page of QuickBooks Enterprise.
                        </li>
                        <Image height={300} width={300} src="/assets/images/article/Bill.com/Interco-1.webp" alt="Interco-1" />
                        <li>
                            Now, further, you will have to Add or Select ’Due to’ and ’Due
                            from’ accounts for initiating the Company file.
                        </li>
                        <li>
                            Then you send a request to the targeted Company to become part of
                            this connection.
                        </li>
                        <li>
                            The targeted Company will accept or reject the Parent Company’s
                            awaiting intercompany connection (request).
                        </li>
                        <li>
                            To draft an Intercompany Vendor Bill or Check from the parent
                            company to the related company, write the bill transaction
                            normally after clicking the <b>’Intercompany Transaction’</b>
                            button on the right side of the Main menu at the top.
                        </li>
                        <Image height={300} width={300} src="/assets/images/article/Bill.com/Interco-2.webp" alt="interco-2" /> <br />
                        <br />
                        <Image height={300} width={300} src="/assets/images/article/Bill.com/Interco-3.webp" alt="Interco-3" />
                        <li>
                            Once it is saved, the transaction is posted in the ’Sent for
                            Approval’ area of the Parent Company’s Dashboard and the Pending
                            section in both the related (receiving) company’s dashboards.
                        </li>
                        <li>
                            The Pending section of the
                            <b>Intercompany transaction dashboard</b> contains the transaction
                            that the related (second) Company receives.
                        </li>
                        <li>
                            The Parent company’s proposed transaction may be accepted or
                            rejected by the Related Company. A journal entry with the Due To
                            and Expense Account is posted once the transaction is approved.
                        </li>
                        <li>
                            The related companies ’Approved’ or ’Rejected’ section of the
                            Dashboard consists of all the transactions. If approved, the entry
                            in the Dashboard’s Approved section allows you to view the
                            corresponding journal entry.
                        </li>
                        <li>
                            With this, the Parent Company’s Intercompany transactions
                            Dashboard displays the pending transaction has now moved to the
                            Approved tab with a status of Approved. The transaction moves to
                            the rejected section if it is rejected.
                            <br />
                        </li>
                    </ul>
                    <p>
                        This brilliant new Enterprise feature has long been required. When
                        companies share a lot of business expenses, it can save a lot of
                        time for those businesses that have multiple related companies.
                    </p>
                </section>
                <section id="list-6">
                    <h2>Expiration Dates</h2>
                    <p>
                        <strong> Available for:</strong> Enterprise Platinum and Diamond
                        subscribers, along with Enterprise Accountant users in the US and
                        Canada, will be able to manage their inventory more efficiently with
                        expiration dates, as of the initial product (R1) release.
                    </p>
                    <p>
                        <strong> Highlights:</strong> Until now, businesses have either
                        attempted to use QuickBooks custom fields or used third-party
                        solutions to track inventory expiration dates. While custom date
                        fields inside QuickBooks Enterprise could be configured to record
                        dates, the existing reports were not made to track custom date
                        fields sequentially, making them incapable of tracking expiration.
                    </p>
                    <p>
                        These issues are fixed by the new QuickBooks Desktop 2022 Expiration
                        Date feature since users can not only add expiration dates to the
                        lot or serialized products and view those dates in sales
                        transactions but can also generate reporting based on expiration
                        dates.
                    </p>
                    <div>
                        <div>
                            <h3>
                                <Image height={300} width={300}
                                    src="/assets/images/article/Bill.com/Expiration-Dates.webp"
                                    alt="Using Expiration Dates"
                                />
                                Using Expiration Dates
                            </h3>
                        </div>
                    </div>

                    <ul>
                        <li>
                            Initially, the Company file Admin must turn this feature on from
                            the
                            <strong>
                                Items & Inventory Company &gt;&gt; Advanced Inventory Settings
                                &gt;&gt; Serial/Lot No. & Expiration &gt;&gt; Expiration Date.
                            </strong>
                        </li>
                        <li>
                            Secondly, add expiration dates to the inventory items and serial
                            or lot numbers during the receiving/purchase.
                        </li>
                        <li>
                            Third, view the expiration date on sales items with the serial or
                            lot numbers.
                        </li>
                        <li>
                            At last, run a serial/lot numbers report and get the expiration
                            date of your product.
                        </li>
                    </ul>
                    <Image height={300} width={300}
                        src="/assets/images/article/Bill.com/Lot-Expiration.webp"
                        alt="Lot-Expiration"
                    />
                    <br />
                    <br />
                    <Image height={300} width={300} src="/assets/images/article/Bill.com/LotExpireBill.webp" alt="LotExpireBill" />
                    <p>
                        Most QuickBooks Enterprise users will be delighted with this
                        long-needed product improvement.
                    </p>
                </section>
                <BannerCta ctaTitle="Want to Securely Host QuickBooks Enterprise on Cloud?" bgColor="url(/assets/images/longforms/ctabg.png)"
                    cta={
                        <>
                            <BlueCta
                                bgColor="#0151C1"
                                textColor="#fff"
                                href1="/trial"
                                text1="Get Free Trial Now"
                            />
                            <BlueCta
                                text1="Explore Plan & Pricing"
                                href1="/pricing"
                                bgColor="#fff"
                                textColor="#000"
                                svgColor="#000"
                            />
                        </>}
                />
                {/* CTA Button end*/}
                <section id="list-7">
                    <h2>QuickBooks Desktop 2023 Payroll-related Features</h2>
                    <p>
                        <strong> Available for:</strong> QuickBooks Desktop Payroll
                        subscription that is in addition to any standard QuickBooks
                        subscription until it’s part of a combination package. Depending on
                        the payroll-related feature, the type of payroll subscription may
                        vary.
                    </p>
                    <h3>Income Verification/Equifax Employment</h3>
                    <p>
                        <strong>Highlights:</strong> For active Desktop Payroll subscribers,
                        Equifax and QuickBooks Desktop 2023 have partnered to automate the
                        verification of employment and income information requests.
                    </p>
                    <p>
                        This means that employees will typically get assessed for a loan, or
                        credit, a lot quicker than before.
                    </p>
                    <Image height={300} width={300}
                        src="/assets/images/article/Bill.com/VerficationOptOut.webp"
                        alt="VerficationOptOut"
                    />
                    <p>
                        The QuickBooks Desktop preferences now have a
                        <b>Benefits and HR tab.</b> There is a section titled Income &
                        Employment Verification of the Company Preferences (QuickBooks
                        &gt;&gt; Edit &gt;&gt; Preferences &gt;&gt; Benefits & HR &gt;&gt;
                        Company Preferences &gt;&gt; Income & Employment Verification).
                    </p>
                    <p>
                        Let’s say a company with an active payroll subscription decides not
                        to engage in this new program offering. In that case, unchecking the
                        box in this preference will let the Company file Admin to ’Opt Out’
                        of this new feature.
                    </p>
                    <BannerCta ctaTitle="Manage Your Organization’s Payroll with Efficiency" bgColor="url(/assets/images/longforms/ctabg.png)"
                        cta={
                            <>
                                <BlueCta
                                    bgColor="#0151C1"
                                    textColor="#fff"
                                    href1="/buy-now"
                                    text1="Buy QuickBooks Payroll"
                                />
                            </>}
                    />
                    <h3>HCM with Guidelines 401(k) </h3>
                    <p>
                        <b>Features: </b> Employees benefit greatly from retirement plans.
                        In case users have a subscription to QuickBooks Desktop Assisted
                        Payroll, QuickBooks has partnered with <b>Guideline</b> to offer
                        users of QuickBooks Desktop affordable, fully integrated 401(k)
                        plans.
                    </p>
                    <Image height={300} width={300}
                        src="/assets/images/article/Bill.com/401k-1.webp"
                        alt="HCM with Guidelines 401(k)"
                    />
                    <p>
                        Within QuickBooks Desktop, users can set up a plan that works for
                        their company and employees. There are no additional steps for them
                        to undertake once they are set up and run the assisted payroll with
                        their new contributions because the info and contributions are sent
                        automatically to
                        <b>Guideline </b> then.
                    </p>
                    <ul>
                        <li>
                            Through QuickBooks Desktop Assisted Payroll now it’s simple and
                            economical to provide your employees with a 401(k) plan in your
                            company with the new offering.
                        </li>
                        <li>
                            From a selection of plan options, you can now pick the one that
                            best meets the requirements of your company and your employees.
                        </li>
                        <li>
                            Setting up the contributions and deductions for the 401(k) plan is
                            simple with QuickBooks Desktop Assisted Payroll.
                        </li>
                        <li>
                            The plan is administered by <b>Guideline</b>, who also takes care
                            of your reporting, compliance, and retirement plan maintenance.
                        </li>
                    </ul>
                </section>
                <section id="list-8">
                    <h2>QuickBooks Desktop 2023 Payment-related Features</h2>
                    <p>
                        <strong> Available for: </strong>QuickBooks Payments accounts, which
                        are subject to eligibility criteria, credit, and application
                        approval.
                    </p>
                    <div>
                        <div>
                            <h3>
                                <Image height={300} width={300}
                                    src="/assets/images/article/Bill.com/Enhanced-Payment-Links.webp"
                                    alt="Enhanced Payment Links"
                                />
                                Enhanced Payment Links
                            </h3>
                        </div>
                    </div>

                    <p>
                        <strong> Highlights:</strong> In 2022 Payment Links for QuickBooks
                        Desktop was made available by Intuit as a way to send a payment
                        request to a customer and accept money without creating an invoice.
                        Additionally, for 2023 QuickBooks Desktop, an active QuickBooks
                        Payments account, has had improvements to this feature that makes it
                        even simpler and quicker for users to accept the payments.
                    </p>
                    <Image height={300} width={300} src="/assets/images/article/Bill.com/Payment-Links.webp" alt="Payment-Links" />
                    {/* comments added */}
                    <ul>
                        <li>
                            Since now you can directly link payments and deposits to your
                            customers, QuickBooks Desktop users can create and send a payment
                            link (trackable within QuickBooks) and accept payments or deposits
                            without the need for a form, invoice, or other transactional
                            forms.
                        </li>
                        <li>
                            With the improved Dashboard, you can also monitor all Payment
                            Links and their payment updates, as well as follow up on any
                            already-existing links by reminding recipients of any unpaid
                            Payment Links that are pending.
                        </li>
                    </ul>

                    <p>
                        <strong>Available for:</strong> All users of QuickBooks Desktop
                        2022, Pro/Premier Plus, QuickBooks Enterprise (v 23), and QuickBooks
                        Accountant versions in the US will have access to this improved
                        functionality. However, a QuickBooks Payments account is necessary
                        to Send Payment Links.
                    </p>


                    <a
                        href="https://www.thesagenext.com/blog/manage-bills-in-quickbooks-online"
                        target="_blank"
                    >
                        <div className="AlsoRead">
                            <div>
                                <div>
                                    <Image height={300} width={300}
                                        src="https://snb.thesagenext.com/blog/wp-content/uploads/2017/12/Managing-Bills-In-QuickBooks-Online.png"
                                        loading="lazy"
                                        alt="Managing-Bills-In-QuickBooks-Online"
                                    />
                                </div>
                                <div>
                                    <h4>
                                        Complete Guide To Managing Bills In QuickBooks Online
                                    </h4>
                                    <p>
                                        To use QuickBooks effectively, you must set up several
                                        records of the cash amount utilized.You can make several
                                        cost accounts...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <div>
                        <div>
                            <h3>
                                <Image height={300} width={300}
                                    src="/assets/images/article/Bill.com/New-Node.webp"
                                    alt="New Node Card Reader"
                                />
                                New Node Card Reader
                            </h3>
                        </div>
                    </div>

                    <p>
                        <strong> Highlights:</strong> QuickBooks Desktop now supports a new
                        card reader. Yes, a new reader has now been introduced that enables
                        you to accept contactless cards, Apple Pay, Google Pay, and a
                        variety of other forms of payment from your clients.
                    </p>
                    <Image height={300} width={300}
                        src="/assets/images/article/Bill.com/Node-Card-Reader.webp"
                        alt="Node-Card-Reader"
                    />
                    <p>
                        Additionally, since QuickBooks Payments is integrated with
                        QuickBooks Desktop, when you start using the new QuickBooks Node
                        Card Reader, the payments you receive are automatically recorded and
                        matched, ensuring that your books remain organized without any
                        additional work on your part.
                    </p>
                    <p>
                        An active QuickBooks Payments account is necessary to use the new
                        Node Card Reader for QuickBooks Desktop.
                    </p>
                </section>
                <section id="list-9">
                    <h2> Quickbooks Desktop 2023 Price Increases</h2>
                    <p>
                        <strong> Highlights:</strong> The upcoming release of QuickBooks
                        Desktop (and related) products in 2023 will bring price changes and
                        other product changes, according to the announcement from Intuit.
                        All QuickBooks Desktop Products will now be sold at full MSRP
                        without any discounts in any channel.
                    </p>
                    <p>
                        <strong>
                            The costs for QuickBooks 2023 Desktop are as follows:
                        </strong>
                    </p>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Plans</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>QuickBooks 2022 Desktop Pro Plus</td>
                                <td className="border">
                                    <b>$549</b>
                                </td>
                            </tr>
                            <tr>
                                <td>QuickBooks 2022 Desktop Mac Plus</td>
                                <td className="border">
                                    <b>$549</b>
                                </td>
                            </tr>
                            <tr>
                                <td>QuickBooks 2022 Desktop Premier Plus</td>
                                <td className="border">
                                    <b>$799</b>
                                </td>
                            </tr>
                            <tr>
                                <td>QuickBooks Desktop Enterprise 23.0 </td>
                                <td className="border">
                                    <b>Prices Remain the Same for the 2022 version </b>
                                </td>
                            </tr>
                            <tr>
                                <td className="border">
                                    QuickBooks 2022 ProAdvisor - Premier Bundle
                                </td>
                                <td className="border">
                                    <b>$799</b>
                                </td>
                            </tr>
                            <tr>
                                <td className="border">
                                    QuickBooks 2022 ProAdvisor - Enterprise Bundle
                                </td>
                                <td className="border">
                                    <b>$1299</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* CTA button start frm here */}
                {/* <section> */}
                <div><BannerCta ctaTitle="Planning to Purchase Genuine QuickBooks License?" bgColor="url(/assets/images/longforms/ctabg.png)"
                    cta={
                        <>
                            <BlueCta
                                href1="/buy-now"
                                text1="Buy Now"
                                bgColor="#0151C1"
                                textColor="#fff"
                            />
                        </>}
                />

                    <p>An Intuit Authorized QB License Provider</p>
                </div>
                {/* </section> */}
                {/* CTA button end here */}
                <section id="list-10">
                    <h2>To Sum It Up!</h2>
                    <p>
                        The above write-up covers everything you need to know about the new
                        QuickBooks Desktop 2022 product. In case you have any other
                        questions in mind related to QuickBooks, then feel free to consult
                        with our sales team by calling on <strong> +1.855.922.7243 </strong>
                        (Toll-Free).
                    </p>
                </section>
                <section id="list-11">
                    <h2>FAQs</h2>
                    <h3>Will QuickBooks Desktop be Discontinued in 2023?</h3>
                    <p>
                        Yes, QuickBooks Desktop is to Discontinue from February 1, 2023,
                        <strong> but only in the UK</strong>. Beyond this point, QuickBooks
                        Online will still be accessible there.
                    </p>
                    <h3>Can I still use QuickBooks Desktop?</h3>
                    <p>
                        Yes, why not! QuickBooks Desktop is only to discontinue in the UK
                        and that too from February 1, 2023. Other than the UK, QuickBooks
                        Desktop 2023 will be available for general release on September 20,
                        2022.
                    </p>
                    <h3>What are the ProAdvisor® Bundle License Changes?</h3>
                    <p>
                        The ProAdvisor bundle license changes include the modification of
                        the 2023 QuickBooks Desktop Accountant and Enterprise Accountant
                        licenses to comply with the terms of our annual ProAdvisor bundle
                        subscriptions. The 2023 ProAdvisor bundles will provide support
                        until May 31, 2024, or till the most recent version is available
                        during the term of your active subscription, in accordance with the
                        policy ’Discontinuation and End of Software Support.’
                    </p>
                </section>
            </ContentLayout>
            <Author />
            <Trusted />
            <Awards />
        </>
    );
}