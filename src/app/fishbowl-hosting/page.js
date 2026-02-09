import styles from "@/styles/pages/others/fishbowl.module.css";
import dynamic from "next/dynamic";
import { getMetaData } from "@lib/metaData";
import FormModal from "@/components/FormModal";
import Link from "next/link";
import Image from "next/image";
import BlueCta from "@/components/buttons/BlueCta";
import ToolTip from "@/components/utils/ToolTip";
import TaxHero from "@/components/heros/TaxHero";
import SkillSection from "@/components/utils/SkillSection";
const ExpertCard = dynamic(() => import("@/components/cards/ExpertCard"));
const FAQ = dynamic(() => import("@/components/utils/FAQ"));
const Awards = dynamic(() => import("@/components/utils/Awards"));
const Trusted = dynamic(() => import("@/components/utils/TrustedPatner"));

export async function generateMetadata() {
    const meta = getMetaData("fishbowl-hosting");

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
                    url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Ffishbowl%2Fbanner.webp&w=1080&q=75",
                    secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Ffishbowl%2Fbanner.webp&w=1080&q=75",
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
            images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Ffishbowl%2Fbanner.webp&w=1080&q=75"],
        },
    };
}

function FishbowlHosting() {
    return (
        <>
            <TaxHero
                title="Fishbowl Hosting on Cloud" alt="Fishbowl Hosting"
                description="Affordable Fishbowl Hosting – <strong>24/7 Access & <br class='xl:block hidden' /> Expert Support</strong>"
                cta={
                    <>
                        <BlueCta href1="/trial" bgColor="#0151C1"
                            textColor="#fff" />
                        <FormModal
                            text="Request A Free Quote"
                            bgColor="transparent"
                            textColor="#fff"
                            ctaBorder="1.2px solid #fff" />
                    </>
                } BannerImage="/assets/images/fishbowl/banner.webp"
            />
            <SkillSection />
            <section className={`py-10 ${styles.fishbowlHosting}`}>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-evenly lg:gap-4 gap-3">
                        <h2 className="!font-normal text-center mb-0 pb-3">Experience Sagenext&apos;s Premium <br className="md:block hidden" /> <strong>Fishbowl Hosting Services at Your Fingertips</strong></h2>
                        <div className="lg:w-7/12 w-12/12">
                            <p className={styles.desc} style={{ maxWidth: "650px" }}>Sagenext is one of the best Fishbowl hosting service providers in the United States. With Fishbowl software, you get a comprehensive inventory management solution designed for small and medium-sized businesses. At Sagenext, we host your Fishbowl application on our highly secure cloud server, allowing you to access the application remotely from anywhere and at any time. Our hosting solutions offer endless benefits, like cost-effectiveness, scalability, robust data security, and a 24/7 technical support system. We endeavor to provide an end-to-end hosting solution for your <Link href="https://www.thesagenext.com/app-directory/fishbowl-inventory"> Fishbowl inventory software.</Link></p>
                        </div>
                        <div className="lg:w-4/12 w-12/12">
                            <Image src="/assets/images/fishbowl/premium.webp" alt="Fishbowl Hosting Solutions" className="img-fluid ms-5 block" width={284} height={338} loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={`py-10 ${styles.fishbowlHosting}`}>
                <div className="containe mx-autor">
                    <h2 className="text-center">Sagenext&apos;s Fishbowl Hosting <br className="md:block hidden" />Key Features</h2>
                    <div className={styles.row2}>
                        {[{ title: "Inventory Tracking & Management", img: "/assets/images/fishbowl/image.webp", desc: "With Fishbowl software hosted on your systems, you can keep track of your inventory levels, manage re-orders, tackle overstock situations, and help your clients monitor stock levels. Moreover, you can streamline the entire order, purchase, sales, and stock requirements with inventory management solutions." }, {
                            title: "Smooth QuickBooks Integration", img: "/assets/images/fishbowl/smooth.webp", desc: "At Sagenext, we effortlessly ensure seamless integration of Fishbowl software with <a href='https://www.thesagenext.com/what-is-quickbooks-software'> QuickBooks.</a> No manual data entry and cumbersome data transfer. With QuickBooks integration, Fishbowl inventory software becomes powerful with financial accounting features. "
                        }, {
                            title: "Robust Data Security Measures & Compliance", img: "/assets/images/small-business/01/data.webp", desc: "Our cloud-based Fishbowl hosting services come with enhanced security measures. Your sensitive data is 256-bit <a href='https://www.thesagenext.com/what-is-end-to-end-encryption'> end-to-end encrypted</a>, ensuring your crucial information is secure during transmission. We comply with data security rules and regulations. We are SAAE-18 compliant. "
                        }, {
                            title: "Scalability & Third-Party Apps Support", img: "/assets/images/fishbowl/support.webp", desc: "We understand business scalability and operational efficiency. As a Fishbowl hosting provider, you get endless support and integration with third-party applications like Shopify, WooCommerce, Xero, and other major business productivity apps. "
                        }, {
                            title: "Robust Maintenance & Support System", img: "/assets/images/fishbowl/system.webp", desc: "We offer round-the-clock server maintenance and a support system. From app updates, backup, and data security, to technical support, our IT experts are on their toes to make your business operations a cakewalk."
                        }, {
                            title: "Highest 99.999% Uptime Server", img: "/assets/images/small-business/01/more.webp", desc: "At Sagenext, we strive to ensure unhindered hosting services for your Fishbowl application. We offer a 99.999% uptime server and the lowest downtime server. You can work 24x7 without any server breakdown."
                        }].map((items, index) => (<div className={styles.items} key={index}>
                            <div className={styles.icon}><Image src={items.img} alt={"Ease of Use"} loading='lazy' height={150} width={150} /> <br /><span className={styles.itemsHeading}>{items.title}</span>
                            </div><p className={styles.desc} dangerouslySetInnerHTML={{ __html: items.desc }}></p><span className={styles.borders1}></span><span className={styles.borders2}></span>
                        </div>))}
                    </div>
                </div>
            </section>
            {/* incomplete cta */}
            <section className={styles.ctaBG}>
                <div className="pt-10">
                    <div className="container mx-auto">
                        <p className="text-center md:px-0 px-3 mb-5 !text-[30px] !leading-10 font-normal text-[#013d8e]">Boost Efficiency—Try Our <br className="md:block hidden" /> <strong>Fishbowl Hosting Solutions Now!</strong> </p>
                        <div className="flex md:flex-row flex-col items-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
                            <BlueCta href1="/trial" text1="Get A Free Trial Now" bgColor="#0151C1" ctaBorder="1px solid #0151C1"
                                textColor="#fff" />
                            <FormModal text="Request A Free Quote" alt1="Requeset A Free Quote" bgColor="transparent" ctaBorder="2px solid #013d8e" color="#013d8e" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-center px-2">What Can You Expect From Us</h2>
                    <ExpertCard arr={[
                        { title: "Efficiently Manage Inventory", description: "Our Fishbowl hosting allows you to effectively streamline your inventories and manage your stock levels, track sales, and avoid stockout scenarios. You get enhanced productivity and efficiency with Fishbowl hosting ensuring your business success. Your business becomes scalable when your inventories are efficiently managed with maximum flexibility.", image: "/assets/images/fishbowl/inventory.webp" },
                        { title: "Customizable Hosting Solutions", description: "Sagenext offers customizable Fishbowl hosting plans as per your business needs and requirements. With customizable hosting solutions, you can take your business to new growth levels and drive productivity with ease. Whether you need monthly plans or half-yearly, Sagenext can provide you with the right hosting solutions. ", image: "/assets/images/fishbowl/host.webp", },
                        { title: "Productively Stay Connected Anytime", description: "You can effectively manage your Fishbowl software with remote access. Be it your home, office, or staycation, remote hosting allows you to stay connected with your teammates and clients seamlessly. With remote inventory management options, your business is always at the forefront.", image: "/assets/images/fishbowl/any.webp", },
                        { title: "Enhanced Technical Support & Collaboration", description: "Our Fishbowl hosting services are designed to offer you round-the-clock technical assistance. So that you can have uninterrupted collaboration across teams and devices. With unbreakable server support and seamless connection with dedicated data centers ensure your inventories are managed and tracked smoothly.", image: "/assets/images/fishbowl/tech.webp", },
                    ]} />
                </div>
            </section>
            <section className="py-10 mb-8">
                <div className="container mx-auto">
                    <span className="flex flex-wrap justify-center"><ToolTip text="7-day Free Trial." dot={true} href="/trial" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" /></span>
                    <h2 className="text-center mx-auto max-w-[380px]"> Fishbowl Hosting Benefits with Sagenext</h2>
                    <div className={styles.benefits}>
                        {[{
                            title: "No IT infrastructure is needed.",
                            img: "/assets/images/fishbowl/infra.webp",
                            desc: "Cloud-host your Fishbowl inventory software."
                        }, {
                            title: "remotely from any location at any time.", img: "/assets/images/fishbowl/remote.webp", desc: "Access the Fishbowl ERP software"
                        }, {
                            title: "24x7x365 technical support system", img: "/assets/images/fishbowl/24.webp", desc: "to keep your operations running smoothly. "
                        }, {
                            title: "99.999% server uptime.", img: "/assets/images/fishbowl/server.webp", desc: "No server breakdown guarantee. "
                        }, {
                            title: "256-bit data encryption (end-to-end) and multi-layer data protection", img: "/assets/images/fishbowl/bit.webp", desc: "for your sensitive information."
                        }, {
                            title: "SSAE-18 compliant", desc: "offering reliable services.", img: "/assets/images/fishbowl/ssae.webp"
                        }, {
                            title: "45-day data backup", img: "/assets/images/fishbowl/data.webp", desc: "safety measures. No need to worry about your data errors and mishaps."
                        }, {
                            title: "Affordable hosting plans", img: "/assets/images/fishbowl/cost.webp", desc: "Our Fishbowl hosting costs are affordable and trustworthy."
                        }].map((items, index) => (
                            <div className={styles.benefitsItem} key={index}>
                                <Image src={items.img} alt={"Ease of Use"} loading='lazy' height={200} width={200} />
                                <div className='flex flex-col justify-center gap-1'>
                                    <h3 >{items.title}</h3>
                                    <p className="m-0" style={{ fontSize: "13px", color: "#626367", lineHeight: "140%" }} >{items.desc}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <section className="bg-[#F3F8FF]">
                <div className="py-10">
                    <div className="container mx-auto">
                        <p className="text-center md:p-0 px-3 leading-16 mb-5 !text-[30px] font-bold" style={{ color: "#013d8e" }}>Save Time, Reduce IT Hassles- Host <br className="d-md-block d-none" /> Fishbowl with Us Today! </p>
                        <div className="flex md:flex-row flex-col items-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
                            <BlueCta href1="/schedule-meeting" bgColor="#0151C1"
                                textColor="#fff" text1="Schedule A Meeting" ctaBorder="1px solid #0151C1" />
                            <FormModal text="Request A Free Quote" alt1="Requeset A Free Quote" showIcon={(true)} bgColor="transparent" ctaBorder="1px solid #013d8e" color="#013d8e" addClass="firstDiff" />
                        </div>
                    </div>
                </div>
            </section>
            <Awards />
            <Trusted />
            <FAQ faqTitle="Fishbowl Hosting Solutions FAQs" />
        </>
    );
}
export default FishbowlHosting;
