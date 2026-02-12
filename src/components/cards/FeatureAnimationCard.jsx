"use client"
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@styles/component/cards/feature-animation.module.css";

const FeatureAnimationCard = ({arr}) => {
    const descRefs = useRef([]);
    const heightManege = useRef([])
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            descRefs.current.forEach((el, i) => {
                gsap.to(el, {
                    height: (i == 0) || (i == 3) ? "auto" : "120px",
                    maxHeight: (i == 0) || (i == 3) ? "fit-content" : "120px",
                });
            });
        }, 200);

        return () => clearTimeout(timeout);
    });

    const handleHover = (index) => {
        descRefs.current.forEach((el, i) => {
            if (index <= 2) {
                gsap.to(el, {
                    height: i === index ? "auto" : i === 3 ? "auto" : "120px",
                    duration: 1,
                }, "samesame");
                gsap.set(el, {
                    duration: 1, maxHeight: i === index ? "100%" : i === 3 ? "100%" : "120px",

                })
            }
            else {
                gsap.to(el, {
                    height: i === index ? "auto" : i === 0 ? "auto" : "120px",
                    duration: 1,
                }, "samesame");
                gsap.set(el, {
                    duration: 1, maxHeight: i === index ? "100%" : i === 0 ? "100%" : "120px",
                })
            }
        });
    };

    const handleMouseLeave = () => {
        descRefs.current.forEach((el, i) => {
            if (el) {
                if ([0, 3].includes(i)) {
                    gsap.to(el, { maxHeight: "100%" }, "same");
                } else {
                    gsap.to(el, { maxHeight: "120px" }, "same");
                }
            }
        });
    };

    return (
        <div className={styles["toolsContainers"]}>
            {[0, 1].map((col) => (
                <div className={styles['column']} key={col}>
                    {arr.slice(col * 3, col * 3 + 3).map((item, index) => (
                        <div
                            className={styles["tool"]}
                            style={{ transition: "height 0.8s ease-in-out" }}
                            ref={(el) => (descRefs.current[col * 3 + index] = el)}
                            key={col * 3 + index}
                            onMouseEnter={() => handleHover(col * 3 + index)}
                            onMouseLeave={() => { handleMouseLeave() }}
                        >
                            <div className={styles.top}>
                                <Image src={item.icon} alt={item.title} width={80} height={75} loading="lazy" />
                                <h3 className={styles.title}>{item.title}</h3>
                            </div>
                            <p className={styles.desc} style={{ transition: "height 0.8s ease-in-out" }} ref={(el) => (heightManege.current[col * 3 + index] = el)}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FeatureAnimationCard
