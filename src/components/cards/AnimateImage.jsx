"use client"
import gsap from 'gsap';
import styles from "@/styles/pages/company/datasecurity.module.css";
import React from 'react'
const AnimateImage = () => {
    const handelClick = (value) => {
    if (value === 1) {
      gsap.to("#first", { yPercent: 3, ease: "power3.inOut", duration: 1 });
      gsap.fromTo(
        "#animateImage2",
        { yPercent: -100 },
        { yPercent: 0, duration: 1, ease: "power3.inOut" }
      );
      gsap.fromTo(
        "#animateImage1",
        { yPercent: -100 },
        { yPercent: 0, duration: 1, ease: "power3.inOut" }
      );
      gsap.to("#clrs2", { color: "#ccc", borderColor: "#ccc" });
      gsap.to("#clrs1", { color: "#000000c0", borderColor: "#0A3D84" });
    } else {
      const breakpoints = [
        { width: 1200, value: 211 },
        { width: 1030, value: 251 },
        { width: 770, value: 210 },
        { width: 460, value: 211 },
      ];
      const yPercentValue =
        breakpoints.find((bp) => window.innerWidth > bp.width)?.value || 340;
      // console.log(yPercentValue)
      gsap.to("#first", {
        yPercent: yPercentValue,
        ease: "elastic.out(1, 1)",
        duration: 1,
      });
      gsap.fromTo(
        "#animateImage1",
        { yPercent: 0 },
        { yPercent: -100, duration: 1, ease: "power3.inOut" }
      );
      gsap.to("#clrs1", { color: "#ccc", borderColor: "#ccc" });
      gsap.to("#clrs2", { color: "#000000c0", borderColor: "#0A3D84" });
      gsap.fromTo(
        "#animateImage2",
        { yPercent: 0 },
        { yPercent: -100, duration: 1, ease: "power3.inOut" }
      );
    }
  };
  return (
    <section className={` py-12.5`}>
        <div className="container mx-auto">
          <h2 className="text-center">Daily Data Backup</h2>
          <p
            style={{ maxWidth: "961px" }}
            className={` text-center mx-auto ${styles.desc}`}
          >
            Sagenext cloud services include fully managed and automated,
            off-site backup protection for all of your critical data. Protecting
            your data from a disaster is critical for companies who rely on
            electronic data as their medium of communications and operations.
          </p>
          <div className={styles.backup}>
            <div className={styles.content}>
              <div className={styles.borderAnimation} id="first" />
              <p
                onClick={() => handelClick(1)}
                className={`${styles.clrs1} ${styles.desc}`}
                id="clrs1"
              >
                We have a dedicated team who specialize in data backup and
                disaster recovery procedures to ensure your business continuity
                in the event of a disaster. Our daily off-site backups ensure
                that the data is protected and you never have to worry about
                losing your data.
              </p>
              <p
                onClick={() => handelClick(2)}
                className={`${styles.desc}`}
                id="clrs2"
              >
                Backups are useful primarily for two purposes. The first is to
                restore a state following a disaster (called disaster recovery).
                The second is to restore small numbers of files after they have
                been accidentally deleted or corrupted.
              </p>
            </div>
            <div className={styles.imgAnimation}>
              <img
                id="animateImage1"
                src={"/assets/images/data-security/backup1.webp"}
                alt="backup and disaster recovery"
                loading="lazy"
              />
              <img
                id="animateImage2"
                src={"/assets/images/data-security/backup4.png"}
                alt="backup and disaster recovery"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default AnimateImage
