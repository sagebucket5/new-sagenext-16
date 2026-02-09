"use client"
import {useEffect,useState} from 'react'
import styles from "@styles/pages/others/manage-it.module.css"
import BlueCta from '../buttons/BlueCta';

const data = [
  {
    title: "Hardware",
    img: "/assets/images/common/hardwares.svg",
    text: "Ensure optimal performance and reliability of your IT infrastructure with top-quality hardware solutions.",
    alt: "hardware icon",
  },
  {
    title: "Data Storage",
    img: "/assets/images/common/storages.svg",
    text: "Securely store and manage your valuable data with scalable and efficient storage solutions tailored to your needs.",
    alt: "data storage icon",
  },
  {
    title: "Data Backup",
    img: "/assets/images/common/backups.svg",
    text: "Protect your critical data from loss or corruption with automated and reliable backup solutions.",
    alt: "data backup icon",
  },
  {
    title: "Maintenance",
    img: "/assets/images/common/maintenances.svg",
    text: "Keep your IT systems running smoothly with regular maintenance and proactive monitoring to prevent downtime.",
    alt: "maintenance icon",
  },
  {
    title: "Software",
    img: "/assets/images/common/softwares.svg",
    text: "Access the latest software applications and updates to enhance productivity and efficiency in your operations.",
    alt: "software icon",
  },
  {
    title: "Data Security",
    img: "/assets/images/common/securities.svg",
    text: `Safeguard your sensitive information against cyber threats and unauthorized access with robust <a href="/data-security">data security</a> measures.`,
    alt: "data security icon",
  },
  {
    title: "Compilence",
    img: "/assets/images/common/compilences.svg",
    text: "Stay compliant with industry regulations and standards to mitigate risks and ensure business continuity.",
    alt: "compilence icon",
  },
  {
    title: "Support",
    img: "/assets/images/common/support.svg",
    text: "Sagenext managed IT support services and their Microsoft Certified expert technical team address any IT issues and minimize disruptions to your business operations.",
    alt: "support icon",
  },
];

const column1Data = data.slice(0, 4);
const column2Data = data.slice(4);
const StickyCards = () => {
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [isSticky]);
  return (
    <section>
                <div className={`${styles.stickies} ${isSticky ? styles.sticky : ""}`}>
                    <div className={`${styles.it} `}>
                    </div>
                </div>

                <div className={`${styles.noSticky} ${isSticky ? styles.StickyContent : styles.NoContents} container mx-auto`}>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
                        <div className={`${styles.infra}`}>
                            <h2>We Take Care of Your Entire IT Infrastructure</h2>
                            <div className={`${styles.buttons}`}>
                                <p>Let's handle your entire IT infrastructure while you focus on what truly matters.</p>
                                <div className={styles.CTAS}>
                                    <BlueCta href1="/schedule-meeting" text1="Schedule A Meeting" alt1="right angle Icon"  />
                                </div>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>

                </div>
                <div className={`${styles.ScrollCont} container  mx-auto`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="">
                        </div>
                        <div className={`${styles.Full} `}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12.5">
                                <div >
                                    {column1Data.map((item, index) => (
                                        <div key={index} className={`${styles.selects} ${index === 0 || index === 2 ? styles.borderBottom : ""}`}>
                                            <h3 className="flex justify-start items-center">
                                                <img
                                                    src={item.img}
                                                    alt={item.alt}
                                                    className="w-12.5 h-9 mr-2"
                                                />
                                                {item.title}
                                            </h3>
                                            <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                        </div>
                                    ))}
                                </div>
                                <div >
                                    {column2Data.map((item, index) => (
                                        <div key={index} className={`${styles.selects} ${index === 0 ? styles.selectTwo : ""} `}>
                                            <h3 className="flex justify-start items-center">
                                                <img
                                                    src={item.img}
                                                    loading='lazy'
                                                    alt={item.alt}
                                                    className="w-12.5 h-9 mr-2"
                                                />
                                                {item.title}
                                            </h3>
                                            <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
    </section>
  )
}

export default StickyCards
