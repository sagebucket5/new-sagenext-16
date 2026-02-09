"use client"
import React, { useState, useEffect } from "react";
import styles from "@styles/pages/home.module.css";
import BlueCta from "../buttons/BlueCta";
import FormModal from "../FormModal";
import NextImage from "next/image";

import { IoCardOutline } from "react-icons/io5";
const BannerCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, slides]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    const activeSlide = slides[index];
  };

  return (
    <>
      <div className={styles.carousel}>
        <div className="container mx-auto">
          <div className={styles.carousels}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ""
                  } `}
              >
                <div className={styles.content}>
                  <div className={styles.text}>
                    <h1 dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                    <span
                      dangerouslySetInnerHTML={{ __html: slide.terms }}
                      className={styles.spanText}
                    ></span>
                    <p
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    ></p>
                  </div>
                  <div className={styles.image}>
                    <div className={styles.AbsDiv}>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className={styles.banners}
                        style={{ zIndex: 2 }}
                      />
                      <img
                        src="/assets/images/home/icon1.svg"
                        alt={slide.title}
                        className={`${styles.vertMove} ${styles.animation} ${styles.AbsOne} `}
                      />
                      <img
                        src="/assets/images/home/icon2.svg"
                        alt={slide.title}
                        className={`${styles.vertMove} ${styles.leftToRight} ${styles.AbsTwo}`}
                      />
                      <img
                        src="/assets/images/home/icon3.svg"
                        alt={slide.title}
                        className={`${styles.vertMove} ${styles.animation} ${styles.AbsThree}`}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles["CTA-hosting"]}>
                  <div className="flex gap-3 flex-col md:flex-row font-semibold items-center">
                    <BlueCta
                      href1="/trial"
                      text1="Get A Free Trial Now"
                      bgColor="#0151C1"
                      textColor="#fff"
                      isBanner={true}
                    />
                    <FormModal
                    isBanner={true}
                      text="Request A Free Quote"
                      bgColor="transparent"
                      color="#fff"
                    />
                  </div>

                  <div className="">
                    <div className="hidden lg:block">
                      <p className={styles.trustedBy} style={{ color: "#fff", fontWeight: 500, marginTop: "8px" }}>
                      Trusted by
                    </p>
                    <div className={styles.partnerLogos} style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                      <NextImage src="/assets/images/offer/logo-of-hero-sec/g1.png" alt="Serchen" width={114} height={35} />
                      <NextImage src="/assets/images/offer/logo-of-hero-sec/g2.png" alt="Finances Online" width={155} height={35} />
                      <NextImage src="/assets/images/offer/logo-of-hero-sec/g3.png" alt="Source Forge" width={148} height={35} />
                      <NextImage src="/assets/images/offer/logo-of-hero-sec/g4.png" alt="G2" width={78} height={35} />
                      <NextImage src="/assets/images/offer/logo-of-hero-sec/g5.png" alt="Capterra" width={45} height={35} />
                    </div>
                    </div>
                    
                    <span className="text-sm font-light hidden py-2 sm:flex gap-2" style={{ color: "#fff", alignItems: "center" }}>
                      <IoCardOutline size={21} color="#fff" /> No CC Required
                    </span>
                  </div>



                </div>
              </div>
            ))}

            <div className="block lg:hidden pb-2">
                      <p className={styles.trustedBy} style={{ color: "#fff", fontWeight: 600,fontSize: "14px", marginBottom: "8px" }}>
                      Trusted by
                    </p>
                    <div className={styles.partnerLogos} style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                      <NextImage src="/assets/images/offer/logo-of-hero-sec/g1.png" alt="Serchen" width={114} height={35} />
                      <NextImage src="/assets/images/offer/logo-of-hero-sec/g2.png" alt="Finances Online" width={155} height={35} />
                      <NextImage src="/assets/images/offer/logo-of-hero-sec/g3.png" alt="Source Forge" width={148} height={35} />
                      <NextImage src="/assets/images/offer/logo-of-hero-sec/g4.png" alt="G2" width={78} height={35} />
                      <NextImage src="/assets/images/offer/logo-of-hero-sec/g5.png" alt="Capterra" width={45} height={35} />
                    </div>
                    </div>

            

            <div className={styles.navigationDots}>
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""
                    }`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCarousel;
