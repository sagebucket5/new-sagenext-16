"use client"
import React, { useState, useEffect } from "react";
import styles from "@/styles/pages/others/quicken.module.css";
import Link from "next/link";
const StickyLayout = (props) => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const offset = 70;
            setIsSticky(window.scrollY > offset);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll);};
    }, []);
    return (
        <section className={props.className}>
        <div className="container mx-auto">
            <div className={styles["main-row"]}>
                <div className={`${styles["pinned-section"]} ${isSticky ?styles[ "position-sticky"] : ""}`}>
                    <div className={styles["pinned-content"]}>
                    <Link href="/"><p className={styles.ctBenifits}>Benefits with Sagenext</p> </Link>
                        <h2 className="!text-white leading-12 "style={{fontSize:"40px"}} >Quicken Hosting <span className="font-light">Advantages</span> with Sagenext</h2>
                        <img src="/assets/images/quicken/arrow.webp" alt="Arrow" width={142}height={50} className="mt-10"/>
                    </div>
                </div>
                <div className={styles["scrollable-section"]}>
                    {props?.arr.map((_, index) => (
                        <div key={index} className={styles["content-card"]}>
                            <h3 className=" leading-6"> {_.title}</h3>
                            <p style={{color:"#626262"}} dangerouslySetInnerHTML={{ __html: _.desc }}></p>
                            <span className={styles.borders1}/>
                            <span className={styles.borders2}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
    );
};

export default StickyLayout;