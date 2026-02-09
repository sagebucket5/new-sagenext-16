import { getMetaData } from "@lib/metaData";
import BlueCta from "@/components/buttons/BlueCta";
import QbHero from "@/components/heros/QbHero";
import SkillSection from "@/components/utils/SkillSection";
import Image from "next/image";


export async function generateMetadata() {
    const meta = getMetaData("buy-quickbooks-online");

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
                    url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fqb-license.webp&w=1200&q=75",
                    secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fqb-license.webp&w=1200&q=75",
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
            images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fqb-license.webp&w=1200&q=75"],
        },
    };
}

export default function buyQbOnline() {
    return (
        <>
            <QbHero
                title="Buy QuickBooks Online"
                description=""
                cta={
                    <>
                        <BlueCta
                            href1="/buy-now"
                            text1="Buy Now"
              bgColor="#0151C1"
              textColor="#fff"
                        />
                        <BlueCta
                            text1="Contact Sales"
                            showIcon1={false}
                            showIcon2
                            bgColor="transparent"
                            ctaBorder="1px solid #fff"
                            textColor="#fff"
                            href1="tel:+18559227243"
                        />
                    </>
                }
                required
                BannerImage="/assets/images/banner/buy-qb/buy-qb-online.webp"
                alt="Buy QuickBooks License"
            />
            <SkillSection />
            <div className="container mx-auto p-4 text-center !text-lg">
                <p>
                    QuickBooks Online is an advanced web-based accounting software that enables businesses to manage their accounting with high accuracy and efficiency, with perpetually keep their books updated to ensure maximum efficiency and accuracy in bookkeeping and accounting.
                    QuickBooks Online offers certified experts that can help businesses manage and administer the maintenance of the accounting books of a business, while also providing the service to manage the books of a business for them.
                </p>
            </div>
            <div className="container mx-auto bg-blue-100 p-6 rounded-md my-3.5">
                <h2 className="text-blue-900 pb-4 text-center">Who needs QuickBooks Online?</h2>
                <p className="p-4">QuickBooks Online is an ideal choice for small business owners that are looking for accounting and bookkeeping options to be operated with one user only and want the convenience of having to spend less with the added advantage of availing the services of an expert bookkeeper as and when needed.</p>
            </div>
            <div className="container mx-auto text-center my-1 md:my-5">
                <h2>What can you do with QuickBooks Online?</h2>
                <p>QuickBooks Online is capable of performing a number of tasks that can help small businesses manage their accounts and finances better.</p>
                <strong>With QuickBooks Online you can:</strong>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <aside className="rounded-md text-left shadow-md p-6 m-1 bg-blue-50">
                        <h4 className="!font-semibold !text-black">Track Income and Expenses</h4>
                        <p>Track your income to know how much money the business is making and how to manage that money. Tracking your billables and get comprehensive information on how and where your</p>
                    </aside>
                    <aside className="rounded-md text-left shadow-md p-6 m-1 bg-blue-50">
                        <h4 className="!font-semibold !text-black">Invoice and accept payments</h4>
                        <p>QuickBooks Online enables you to generate professional invoices and accept payment through all major payment modes within the invoice along with the ability to track the status of the invoices</p>
                    </aside>
                    <aside className="rounded-md text-left shadow-md p-6 m-1 bg-blue-50">
                        <h4 className="!font-semibold !text-black">Tax Deductions</h4>
                        <p>QuickBooks Online enables you to understand your income and expenses better in a manner that allows you to maximize your tax savings by automatically adjusting expenses towards</p>
                    </aside>
                    <aside className="rounded-md text-left shadow-md p-6 m-1 bg-blue-50">
                        <h4 className="!font-semibold !text-black">Reports</h4>
                        <p>QuickBooks Online helps businesses generate comprehensive reports that allow you to understand where the business stands with the present finances and help businesses owner manage their accounts better.</p>
                    </aside>
                    <aside className="rounded-md text-left shadow-md p-6 m-1 bg-blue-50">
                        <h4 className="!font-semibold !text-black">Receipts</h4>
                        <p>QuickBooks Online is capable of capturing receipts as and when received and helps organize them to match expenses and adjust tax categories.</p>
                    </aside>
                    <aside className="rounded-md text-left shadow-md p-6 m-1 bg-blue-50">
                        <h4 className="!font-semibold !text-black">Cash Flow</h4>
                        <p>Manage the cash flow of your business with QuickBooks Online with its ability to receive payments within the software and making direct deposits to improve the status of cash available to you.</p>
                    </aside>
                    <aside className="rounded-md text-left shadow-md p-6 m-1 bg-blue-50">
                        <h4 className="!font-semibold !text-black">Bills</h4>
                        <p>QuickBooks Online is capable of expert management of bills issued to your business with the ability to make payments against your bills online from within the software.</p>
                    </aside>
                    <aside className="rounded-md text-left shadow-md p-6 m-1 bg-blue-50">
                        <h4 className="!font-semibold !text-black">Billable Hours</h4>
                        <p>Now businesses can track billable hours of their clients and employees within the software to help manage invoices and expenses.</p>
                    </aside>
                    <aside className="rounded-md text-left shadow-md p-6 m-1 bg-blue-50">
                        <h4 className="!font-semibold !text-black">Inventory</h4>
                        <p>Manage inventory of your business and keep track of your stock with QuickBooks online in order to better manoeuvre your business strategies and get a better idea of what you need and what you don&apos;t.</p>
                    </aside>
                </div>
            </div>
            <div className="container mx-auto text-center">
                <h2>Features</h2>
                <p>QuickBooks Online is an intuitive accounting solution for small businesses and comes with a host of features that allow small business owners to improve their bookkeeping performance and accuracy.</p>
                <h3 className="!text-lg">QuickBooks Online offers:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 my-4">
                    <div>
                        <Image src={'/assets/images/buy-qb-payroll/features_online.webp'} height={600} width={600} alt="features" />
                    </div>
                    <div>
                        <aside className="flex md:flex-row flex-col items-center justify-center gap-3 mb-2">
                            <Image src={'/assets/images/buy-qb-online/img1.webp'} width={100} height={100} alt="qb-img" />
                            <span className="text-left">
                                <h4 className="!font-semibold !text-black mb-4">Inventory</h4>
                                <p>Business owners can take leverage the receipt capture feature of QuickBooks Online to click pictures of receipts from their phones and upload them to the software, attaching them to their expenses from within the platform.</p>
                            </span>
                        </aside>
                        <aside className="flex md:flex-row flex-col items-center justify-center gap-3 mb-2">
                            <Image src={'/assets/images/buy-qb-online/img2.webp'} width={100} height={100} alt="qb-img" />
                            <span className="text-left">
                                <h4 className="!font-semibold !text-black mb-4">Expert Support</h4>
                                <p>QuickBooks Online comes with expert support facilities with high-quality customer support that is always available to resolve the queries and issues of clients that use the software.</p>
                            </span>
                        </aside>
                        <aside className="flex md:flex-row flex-col items-center justify-center gap-3 mb-2">
                            <Image src={'/assets/images/buy-qb-online/img3.webp'} width={100} height={100} alt="qb-img" />
                            <span className="text-left">
                                <h4 className="!font-semibold !text-black mb-4">Cross-app integration</h4>
                                <p>QuickBooks Online can easily be integrated with applications that businesses commonly use to ensure the smooth running of operations across multiple platforms such as PayPal, Stripe and Shopify.</p>
                            </span>
                        </aside>
                        <aside className="flex md:flex-row flex-col items-center justify-center gap-3 mb-2">
                            <Image src={'/assets/images/buy-qb-online/img4.webp'} width={100} height={100} alt="qb-img" />
                            <span className="text-left">
                                <h4 className="!font-semibold !text-black mb-4">Bookkeeping Support</h4>
                                <p>QuickBooks Online can easily be integrated with applications that businesses commonly use to ensure the smooth running of operations across multiple platforms such as PayPal, Stripe and Shopify.</p>
                            </span>
                        </aside>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center mb-7">
                <h2>Why Choose QuickBooks Online</h2>
                <p className="text-left">QuickBooks Online is an advanced accounting solution that can help small businesses reach unprecedented levels of proficiency through accounting activities. The ability to manage accounts and keep track of transactions within the system makes QuickBooks capable of preparing holistic financial reports that can in turn ensure perfect results for your business.</p>
                <h4 className="!font-semibold text-left !text-lg pt-6 !text-black">Businesses must opt for QuickBooks Online if they are looking for:</h4>
                <ul className="text-left space-y-2 list-disc pl-3">
                    <li>Convenience in managing books and high-quality accounting service that manages your finances with utmost accuracy.</li>
                    <li>A feature-packed software that enables businesses to perform a host of functions but can be accessed from anywhere for an affordable subscription.</li>
                    <li>Convenience is managing income and expenses, with the availability of reports at the hands of business owners whenever they need to understand the performance of their operations.</li>
                    <li>The ability to make and receive payments from an accounting solution that is also capable of managing bills and receipts all within the same system.</li>
                    <li>High-quality service to ensure that your problems are always resolved without any delay.</li>
                    <li>Access to high reliability and market expertise in accounting and bookkeeping software from the leader in accounting software.</li>
                </ul>
            </div>
        </>
    )
}