"use client";
import React, { useState } from 'react'
import styles from "@styles/pages/offer.module.css";

const ThreeMonthOffer = () => {
    const [openTogel, setOpenTogel] = useState(false);
    return (
        <section className="">
            <div className="container mx-auto">
                <div className={styles.thirdSection}>
                    <div className={styles.textSection}>
                        <span className='text-[#31509f] font-semibold rounded-full bg-[#71aaff2e] p-[13px_20px] text-[13px] h-10' >EXCITING OFFER</span>
                        <h2 className={styles.thirdSectionTitle} style={{paddingTop: "20px"}}>
                            3 Months FREE Hosting Offer
                        </h2>
                        <p className={styles.subtitle} style={{ maxWidth: `${!openTogel ? "560px" : "100%"}` }}>
                            Unlock 15 Months of Premium Hosting by Paying for Just
                            <span style={{ display: openTogel ? "inline" : "none" }}>12!</span>
                            <span
                                className={`${styles["toggleText"]} ${openTogel ? styles["hide"] : styles.show}`}
                                onClick={() => setOpenTogel(true)}
                            >
                                {" "}
                                for.. <span className={styles.link}>Terms & Conditions</span>
                            </span>
                            <span
                                className={`${styles.detailsText} ${openTogel ? styles.show : styles.hide}`}
                                onClick={() => setOpenTogel(false)}
                            >
                                When you sign up with Sagenext, pay for 12 months of cloud
                                hosting upfront and enjoy an extra 3 months FREE — that&apos;s 15
                                months of uninterrupted, secure hosting at unbeatable value.
                                <br />
                                <br />
                                We proudly serve clients across the USA, Canada, UK, Dubai,
                                and 20+ countries worldwide, delivering top-tier cloud hosting
                                at the most affordable rates — starting at just $33/month for
                                shared hosting and $59/month for dedicated hosting.
                            </span>
                        </p>
                        <hr style={{ maxWidth: "600px", margin: "0 0 25px 0",color:"#D5D5D5"}} />
                        <ul className={styles.checklist}>
                            <li>
                                5-Minute Human Response Guarantee
                            </li>
                            <li>
                                24/7 Technical Support
                            </li>
                            <li>
                                Daily Backups
                            </li>
                            <li>
                                Enterprise-Grade Security & Data Safety
                            </li>
                        </ul>
                    </div>

                    {/* Right Section: Image with Overlay */}
                    <div className={styles.imageSection}>
                        <img
                            src="/assets/images/offer/3img.png" // Replace with your image path
                            alt="3 Months FREE Hosting Offer"
                            loading="lazy"
                            width={564}
                            height={569}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThreeMonthOffer
