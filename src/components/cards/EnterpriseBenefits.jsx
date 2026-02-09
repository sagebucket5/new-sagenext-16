'use client'
import {useEffect, useRef } from "react";
import styles from "@styles/component/comman/enterpriseBenefits.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ToolTip from "../utils/ToolTip";
gsap.registerPlugin(ScrollTrigger);

const benefits = [
    {
        icon: '/assets/images/qb-enterprise/benifites/s1.png',
        title: "On-Site/Offshore Collaboration",
        desc: "Whether you and your team members are at home, office, or on vacation, our QuickBooks Enterprise cloud hosting allows the entire team to collaborate and work seamlessly without any problems.",
        color: "#FFF6C5",
        border: "#9E8605"
    },
    {
        icon: '/assets/images/qb-enterprise/benifites/s2.png',
        title: "Seamless Client Workflow",
        desc: "QuickBooks Enterprise, hosted on your devices, allows your team and the client to work simultaneously on the same file and project. Your client also gets easy access to the application.",
        color: "#E6FBFF",
        border: "#B4B4B4"
    },
    {
        icon: '/assets/images/qb-enterprise/benifites/s3.png',
        title: "Enhanced Productivity",
        desc: "Having accounting software without an actionable solution is useless. Our QuickBooks Enterprise hosting solution ensures maximum accuracy, productivity, and efficiency.",
        color: "#C5FFD0",
        border: "#186C1E"
    },
    {
        icon: '/assets/images/qb-enterprise/benifites/s4.png',
        title: "Effortless Work-Life Balance",
        desc: "Workload demands and personal responsibilities can degrade your overall productivity at work. With QuickBooks Enterprise hosted on the cloud, you can reclaim your daily schedule and ensure a perfect work-life balance.",
        color: "#E8E6FF",
        border: "#B4B4B4"
    }
];

const EnterpriseBenefits = () => {
    const timelineRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const scrollerBarInner = section?.querySelector(`.${styles.ScrollerBarInner}`);
            const device = window.innerWidth<800?400:50
        if (section && scrollerBarInner) {
            gsap.fromTo(
            scrollerBarInner,
            { height: "20px" },
            {
                height: "98%",
                ease: "none",
                scrollTrigger: {
                trigger: section,
                start: "top 30%",
                end: "bottom "+device+"%",
                scrub: 1,
                },
            }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    
    return (
        <section ref={sectionRef} className="py-5">
            <div className="container">
                <div className="text-center">
                    <ToolTip text="BENEFITS" color='#31509F' bg="#71AAFF2E" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" />
                    <h2 className={styles.benefitsHeading}>Scale Your Business with <span style={{fontWeight:"300"}}>QuickBooks Enterprise Hosting</span> Benefits</h2>
                </div>
                <div className={styles.benefitsSection} ref={timelineRef}>
                  <div className={styles.ScrollerBar}>
                    <div className={styles.ScrollerBarInner}></div>
                  </div>
                    <div className={styles.leftCol}>
                        <p className="text-black !font-normal py-2">
                            <strong>With QuickBooks Enterprise hosting,</strong> collaborating with your team members and clients in one cloud-based platform can improve your accounting workflows and enhance your team's productivity, helping you meet your accounting practice's evolving demands. Give yourself and your team the power of QuickBooks Enterprise cloud hosting and scale your business to new heights.
                        </p>
                        <p className="text-black !font-normal py-2">
                            <strong>Your hosted QuickBooks Enterprise</strong> comes with enhanced end-to-end 256-bit security measures, protecting your sensitive data from online hackers during transmission. With SSAE-18-compliant centralized data centres, hosting QuickBooks Enterprise on your devices has a safe and secure business solution. QuickBooks Enterprise is hosted on your devices and allows your team and clients to connect seamlessly to the accounting software from anywhere, anytime, on any device without a hassle.
                        </p>
                        <p className="text-black !font-normal py-2">
                            <strong>Whether you want</strong> to streamline your accounting business workflows, get alerts on activities and tasks, seamlessly collaborate, and increase work productivity, our cloud-based QuickBooks Enterprise hosting is the perfect solution for all your business digital needs. We provide QuickBooks Enterprise on the cloud, making your business workload a cakewalk. With online hosting benefits, QuickBooks Enterprise allows you to track your bank transactions, send a direct payment link to customers, add third-party integrations like QuickBooks Payroll, manage your inventories, and smoothly fulfil your order status.
                        </p>
                    </div>    
                    <div className={styles.rightCol}>
                        <div className={styles.cardsCol}>
                            {benefits.map((b, i) => (
                                <div
                                    className={styles.benefitCard}
                                    key={b.title}
                                    style={{ background: b.color, border: `1px solid ${b.border}` }}>
                                    <img src={b.icon} loading="lazy" className={styles.icon} alt={b.title} />
                                    <div>
                                        <h3 className={styles.cardTitle}>{b.title}</h3>
                                        <p className={styles.cardDesc}>{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseBenefits;