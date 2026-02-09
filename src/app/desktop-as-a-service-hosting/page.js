import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/pages/others/desktop-as-a-service.module.css"
import { IoMdCheckmarkCircleOutline, IoMdCheckmark, IoMdClose } from "react-icons/io";
const FAQ = dynamic(() => import("@/components/utils/FAQ"));
const Awards = dynamic(() => import("@/components/utils/Awards"));
const DedicatedHostPlan = dynamic(() => import("@components/pricing/DedicatedHosting"));
const Trusted = dynamic(() => import("@components/utils/TrustedPatner"));
import { getMetaData } from "@lib/metaData";
import FormModal from "@/components/FormModal";
import ToolTip from "@/components/utils/ToolTip";
import BlueCta from "@/components/buttons/BlueCta";
import TaxHero from "@/components/heros/TaxHero";
import SkillSection from "@/components/utils/SkillSection";

const benefits = [
    {
        icon: "/assets/images/DaaS/beni1.webp",
        title: "Pocket-Friendly Infrastructure Solution",
        desc: "Unlike physical desktop infrastructure, which adds up the overall cost of maintenance and running, Desktop as a Service (DaaS) is hosted on the cloud, reducing huge overall costs. DaaS is a cost-efficient and effective business infrastructure solution.",
    },
    {
        icon: "/assets/images/DaaS/beni2.webp",
        title: "Anywhere, Anytime Access",
        desc: "With an active internet connection, you and your team members can remotely connect from anywhere in the world, anytime. The cloud-based application offers enhanced flexibility and customization options. ",
    },
    {
        icon: "/assets/images/DaaS/beni3.webp",
        title: "Better Management Options",
        desc: "Your cloud-hosted Desktop as a service can be better managed remotely. While you and your team are scaling your business, we manage the server system, security, data storage, updates, and upgrades.",
    },
    {
        icon: "/assets/images/DaaS/beni4.webp",
        title: "Secure & Reliable Solution",
        desc: "Safeguarding your sensitive data is our priority. We have dedicated centralized data centers to ensure your information is safe and secure. We offer 256-bit encryption, and our data centers are SSAE-18 compliant. Moreover, admins can authorize, de-authorize, and implement multi-factor authentication (MFA) if needed. This is the best option for onboarding and offboarding employees in your company.",
    },
    {
        icon: "/assets/images/DaaS/beni5.webp",
        title: "Flexible, Powerful & Customizable User Experience",
        desc: "The best part of DaaS is that you can securely access your application and files from anywhere, anytime. Whether in the office, at home, on vacation, or on a stay-cation, you have your working image in front of you. You can access the cloud application on your PCs, laptops, tablets, and mobile phones. Desktop-as-a-service hosting can also be done on any device based on business needs. We are a trusted DaaS provider in the USA and Canada. ",
    },
    {
        icon: "/assets/images/DaaS/beni6.webp",
        title: "Business Scalable Solution",
        desc: "Desktop as a Service Infrastructure hosted on the cloud offers enhanced flexibility and productivity as per business requirements. As a DaaS provider, we ensure the infrastructure adapts to the environment as your business scales.",
    },
];

export async function generateMetadata() {
    const meta = getMetaData("desktop-as-a-service-hosting");

    return {
        metadataBase: new URL("https://www.thesagenext.com"),
        title: meta.title,
        description: meta.description,
        alternates: { canonical: meta.canonical, },
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
                    url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2FDaaS%2Fbaner.png&w=1080&q=75",
                    secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2FDaaS%2Fbaner.png&w=1080&q=75",
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
            images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2FDaaS%2Fbaner.png&w=1080&q=75"],
        },
    };
}

const DesktopasaService = () => {

    return (
        <>
            <TaxHero
                title="Desktop as a Service (DaaS) Hosting Solution"
                description="Access Your Secure & Reliable Cloud DaaS<br/> Infrastructure <span> Solution from Anywhere, Anytime</span>"
                BannerImage="/assets/images/DaaS/baner.png"
                alt="Desktop as a Service"
                cta={
                    <>
                        <BlueCta text1="Get a Free 7-Day Trial" href1="/trial" bgColor="#0151C1"
                            textColor="#fff" />
                        <FormModal
                            text="Request a Free Demo"
                            bgColor="transparent"
                            textColor="#fff"
                            ctaBorder="2px solid #fff" />
                    </>
                }
            />
            <SkillSection />
            <section className="py-10">
                <div className="container mx-auto">
                    <div className="grid">
                        <p className="text-center" ><ToolTip text="About DaaS" size="10px" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" /></p>
                        <h2 className="text-center !mb-10">Desktop as a Service (DaaS)</h2>
                        <div className={styles.aboutDaas}>
                            <div className={styles.imageBox}>
                                <Image width={399} height={136} src="/assets/images/DaaS/service.webp" alt="Desktop as a Service" className="block ml-auto  img-fluid" />
                            </div>
                            <div className={styles.textBox}>
                                <p className="text-muted text-large">DaaS is a cost-effective solution for providing desktop virtualization on any device. The cloud-hosted DaaS infrastructure allows your team to access and work on the virtual desktop environment from anywhere, anytime. A desktop-as-a-service provider like Sagenext offers seamless and effective hosting solutions to ensure your workflow isn&apos;t hampered. Many Desktop as a Service providers exist in the USA and Canada, but choosing the right one will matter for smooth operations and customized business solutions.</p>
                                <p className="text-muted text-large">You must have seen traditional PC setups take a lot of time and IT efforts like managing, updating, and patching, while DaaS frees your IT staff and allows them to focus on other crucial projects. Moreover, it is easy for cloud service providers in the USA to manage backups as the DaaS informational data is stored in dedicated and centralized data centers. With this, the business organization doesn&apos;t have to worry about the application and the data. It can be accessed anytime, anywhere by any client or team member. The cloud environment is the best desktop-as-a-service solution across the United States.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="container mx-auto">
                    <div className={`bg-[url('/')] md:bg-[url('/assets/images/small-business/01/cta-image.webp')] bg-cover bg-no-repeat min-h-[321px] bg-center flex items-center justify-center ${styles.ctaSection1}`} style={{ marginBottom: "30px" }}>
                        <div className=" grid items-center justify-center">
                            <p style={{ maxWidth: "800px" }} className={`text-center ${styles.ctaHeading}`}>Boost Your Team’s  Productivity with Our DaaS Hosting – Sign Up Now!</p>
                            <div className="flex md:flex-row flex-col items-center gap-2 pt-3 mx-auto">
                                <BlueCta text1="Talk to Our Experts" ctaBorder="1px solid #0151C1" bgColor="#0151C1"
                                    textColor="#fff" href1="tel:1-855-922-7243" />
                                <BlueCta text1="Get Your Free Trial" ctaBorder="1px solid #0151C1" href1="/trial" bgColor="#fff" textColor="#0151C1" svgColor="#0151C1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container mx-auto">
                    <span className="text-center mx-auto block"><ToolTip size="10px" text="Did You Know?" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" /></span>
                    <h2 className={styles.title} style={{ paddingBottom: "10px" }}>Types of Desktop as a Service (DaaS)</h2>
                    <p className={styles.subtitle} style={{ paddingBottom: "20px" }}>DaaS infrastructure mainly has two types, depending on the business requirements.</p>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <span className="flex items-center" style={{ gap: "20px", padding: "0 30px 15px" }}>
                                <Image width={169} height={136} src="/assets/images/DaaS/persistent.webp" loading="lazy" alt="Persistent DaaS" className="img-fluid" />
                                <h3 className={styles.cardTitle}>Persistent DaaS</h3>
                            </span>
                            <p className={styles.description} style={{ padding: "0 34px" }}>
                                In persistent type desktop as a service, you get the maximum flexibility and compatibility.
                                The virtualized desktop will remain the same whenever you log in. It is easier for DaaS providers
                                like Sagenext to deploy the software service, but it is expensive and requires higher storage facilities.
                            </p>
                            <div className={styles.subDesc}>
                                <strong>Best Suited For:</strong>
                                <ul className={styles.list}>
                                    <li><IoMdCheckmarkCircleOutline color="#005DAA" size={14.6} />IT professionals</li>
                                    <li><IoMdCheckmarkCircleOutline color="#005DAA" size={14.6} />Software engineers</li>
                                    <li><IoMdCheckmarkCircleOutline color="#005DAA" size={17} />Power users with specific software needs</li>
                                    <li><IoMdCheckmarkCircleOutline color="#005DAA" size={14.6} />Developers</li>
                                </ul>
                            </div>
                            <div className={styles.boxs}>
                                <div className={styles.advantages}>
                                    <strong className="ps-2">Advantage</strong>
                                    <ul>
                                        <li><IoMdCheckmark color="#00BA00" size={12} /> Maximum flexibility</li>
                                        <li><IoMdCheckmark color="#00BA00" size={12} />High compatibility with software</li>
                                        <li><IoMdCheckmark color="#00BA00" size={12} />Consistent user experience</li>
                                    </ul>
                                </div>
                                <div className={styles.challenges}>
                                    <strong className="ps-2">Challenges</strong>
                                    <ul>
                                        <li><IoMdClose color="#EF7272" size={12} />Higher cost</li>
                                        <li><IoMdClose color="#EF7272" size={12} />Complex maintenance</li>
                                        <li><IoMdClose color="#EF7272" size={12} />Challenging updates management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <span className="flex items-center" style={{ gap: "20px", padding: "0 30px 15px" }}>
                                <Image width={169} height={136} src="/assets/images/DaaS/none.webp" alt="Non-Persistent DaaS" className="img-fluid" />
                                <h3 className={styles.cardTitle}>Non-Persistent DaaS</h3>
                            </span>
                            <p className={styles.description} style={{ padding: "0 30px" }}>
                                In a non-persistent virtualized desktop as a service solution, the central operating system is layered
                                into a cloud-based one. You return to your on-premise operating system (OS) whenever you log out of the device.
                                Once the person shuts down the device, any changes and personalization will return to their default state.
                            </p>
                            <div className={styles.subDesc}>
                                <strong >Best Suited For:</strong>
                                <ul className={styles.list}>
                                    <li><IoMdCheckmarkCircleOutline color="#005DAA" size={14.5} />Temporary workers</li>
                                    <li><IoMdCheckmarkCircleOutline color="#005DAA" size={14.5} />Call centers</li>
                                    <li><IoMdCheckmarkCircleOutline color="#005DAA" size={14.5} />Task-based employees</li>
                                    <li><IoMdCheckmarkCircleOutline color="#005DAA" size={14.5} />Educational institutions</li>
                                </ul>
                            </div>
                            <div className={styles.boxs} >
                                <div className={styles.advantages}>
                                    <strong className="ps-2">Advantage</strong>
                                    <ul>
                                        <li><IoMdCheckmark color="#00BA00" size={12} />Cost-effective</li>
                                        <li><IoMdCheckmark color="#00BA00" size={12} />Easy resource sharing</li>
                                        <li><IoMdCheckmark color="#00BA00" size={12} />Simplified management</li>
                                    </ul>
                                </div>
                                <div className={styles.challenges}>
                                    <strong className="ps-2">Challenges</strong>
                                    <ul>
                                        <li><IoMdClose color="#EF7272" size={12} />Limited personalization</li>
                                        <li><IoMdClose color="#EF7272" size={12} />Not ideal for long-term projects</li>
                                        <li><IoMdClose color="#EF7272" size={12} />Requires consistent internet access</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.cta2}>
                <div className="container mx-auto pt-4 my-7.5">
                    <div className={`pt-4 ${styles.catSection}`}>
                        <div className={styles.ctaBox}>
                            <ToolTip size="10px" text="Offers" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" />
                            <p className={styles.ctaHeading}>Why Wait–When You Can Have the Best DaaS Solution!</p>
                            <span className="flex gap-2 max-md:flex-wrap items-center pt-4">
                                <FormModal text="Request a Free DEMO" ctaBorder=" " />
                                <BlueCta text1="Get Started Now"
                                    ctaBorder="1px solid #0151C1"
                                    href1="/trial" bgColor="#fff"
                                    textColor="#0151C1" />
                            </span>
                        </div>
                        <div>
                            <Image width={1000} height={1000} src="/assets/images/DaaS/cta2.webp" alt="CTA image" className={`${styles.ctaImage2} w-[169px] h-[136px]`} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.benefitsSection}>
                <div className="container mx-auto">
                    <label className="text-center mx-auto block"><ToolTip size="10px" text="Features" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" /></label>
                    <h2 className="text-center mb-1 leading-9">
                        DaaS  <span className="font-normal">Benefits & Features</span><br />for Businesses
                    </h2>
                    <p className={`pb-2 ${styles.subheading}`}>
                        Ditch Your Physical Desktop Infrastructure For Cloud-Hosted Desktop As A Service Infrastructure
                    </p>
                    <div className={styles.grid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.gridCard}>
                                <div className={styles.icon}>
                                    <Image src={benefit.icon} alt={benefit.title || "empty"} width={48} height={48} />
                                </div>
                                <h3 className={styles.title}>{benefit.title}</h3>
                                <p className={styles.desc}>{benefit.desc}</p>
                                <span className={styles.borderLine1} />
                                <span className={styles.borderLine2} />
                                <span className={styles.borderLine3} />
                                <span className={styles.borderLine4} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12">
                <span className="text-center block"><ToolTip size="10px" text="Pricing" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" /></span>
                <DedicatedHostPlan DedicatedTitle={`<span>Desktop as a </span>Service Hosting<br/>  Pricing Plans`} subtilte={true} />
                <Link href="/pricing" className={styles.exploreLine}>Explore More for Pricing</Link>
            </section>
            <section className="mb-12">
                <div className="container mx-auto pt-12">
                    <div style={{ height: "auto" }} className={styles.catSection}>
                        <div className="grid items-center justify-center">
                            <p style={{ maxWidth: "800px" }} className={`text-center ${styles.ctaHeading3}`}>Enjoy 3 Months of Free Hosting-  Subscribe Annually to Sagenext DaaS!</p>
                            <div className="flex md:flex-row flex-col items-center gap-2 pt-3 mx-auto">
                                <BlueCta text1="Talk to Our Experts" ctaBorder="1px solid #0151C1" bgColor="#0151C1"
                                    textColor="#fff" href1="tel:1-855-922-7243" />
                                <BlueCta text1="Get Your Free Trial" href1="/trial" ctaBorder="1px solid #0151C1" bgColor="#fff" textColor="#0151C1" svgColor="#0151C1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container mx-auto">
                    <span className="flex justify-center" ><ToolTip size="10px" text="Top Features" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" /></span>
                    <h2 className="text-center !mb-12 pb-3" >Why <span className="font-normal">Choose Sagenext</span> <br className="d-md-block d-none" /> as Your DaaS Hosting Provider?</h2>
                    <div className={styles.benefits}>
                        {[{
                            title: "24x7x365 days of technical support ", img: "/assets/images/fishbowl/24.webp", desc: "to keep your business running. "
                        }, {
                            title: "SSAE-18 compliant", desc: "with dedicated centralized data centres.", img: "/assets/images/fishbowl/ssae.webp"
                        }, {
                            title: "256-bit AES security measures.", img: "/assets/images/DaaS/256.webp", desc: "Your data safety becomes our responsibility."
                        }, {
                            title: "We offer customizable and personalized", img: "/assets/images/DaaS/weOn.webp", desc: "solutions to suit your business needs."
                        }, {
                            title: "You get 30 days of a dedicated rolling backup option", img: "/assets/images/fishbowl/data.webp", desc: "Data Safety With 30-Day Backup"
                        },
                        { title: "Pocket-friendly Desktop As A Service (daas) Pricing Plans.", img: "/assets/images/fishbowl/cost.webp", desc: "That Fit Every Business&apos;s Needs." }].map((items, index) => (
                            <div className={styles.benefitsItem} key={index}>
                                <Image width={169} height={136} src={items.img} alt={"Ease of Use"} loading="lazy" />
                                <div className="flex flex-col justify-center gap-1"><h3 className="!leading-5" >{items.title}</h3><p className="m-0 !text-[#626367] !text-[13px] leading-9" >{items.desc}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-[#094678] mt-12">
                <div className="container mx-auto">
                    <div className={styles.catSection}>
                        <div className={styles.ctaBox}>
                            <span className="pt-12 block">
                                <ToolTip size="10px" text="Offers" bg="rgba(255,255,255,0.18)" color="#ffffff" />
                            </span>
                            <p className={styles.ctaHeading3} style={{ color: "#FFFFFF" }}>Go Cloud. Get Your <span style={{ color: "#FFD981" }}> Desktop as a Service (DaaS) </span> Today!</p>
                            <span className="flex md:flex-row flex-col items-center gap-2 mt-3">
                                <BlueCta text1="Talk to Our Experts" href1="tel:1-855-922-7243" bgColor="#0151C1"
                                    textColor="#fff" />
                                <BlueCta text1="Get Your Free Trial" href1="/trial" bgColor="#fff" textColor="#0151C1" svgColor="#0151C1" />
                            </span>
                        </div>
                        <div>
                            <Image width={1000} height={1000} src="/assets/images/DaaS/cta3.webp" alt="CTA image" className={`${styles.ctaImage3} w-[169px] h-[136px]`} />
                        </div>
                    </div>
                </div>
            </section>
            <Awards />
            <Trusted />
            <FAQ faqTitle="Desktop as a Service Hosting FAQs" />
        </>
    )
}

export default DesktopasaService