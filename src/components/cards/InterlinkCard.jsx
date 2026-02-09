"use client"
import { useRef, useEffect, useState } from "react";
import Classes from "@styles/component/cards/interlinkCard.module.css";
import Link from "next/link";

function InterLinkCard() {
  const containerRef = useRef(null);
  const [autoAdvance, setAutoAdvance] = useState(true);

  const goNext = () => {
    const obj = containerRef.current.clientWidth;
    containerRef.current.scrollBy({
      left: obj,
    });
  };

  const goPrevious = () => {
    const obj = containerRef.current.clientWidth;
    containerRef.current.scrollBy({
      left: -obj,
    });
  };

  return (
    <div className={Classes["container"]}>
      <div className={Classes["slide"]}>
        <img
          src="/assets/images/qb-hosting/carousel1 (1).svg"
          alt="End-To-End Encryption"
          loading="lazy"
        />
        <p>
         <Link href="/what-is-end-to-end-encryption"> End-To-End Encryption</Link>
        </p>
      </div>
      <div className={Classes["slide"]}>
        <img
          src="/assets/images/qb-hosting/carousel2 (1).svg"
          alt="Multi-Factor Authentication"
          loading="lazy"
        />
        <p>Multi-Factor Authentication</p>
      </div>
      <div className={Classes["slide"]}>
        <img
          src="/assets/images/qb-hosting/carousel3 (1).svg"
          alt="Antivirus and Anti-malware"
          loading="lazy"
        />
        <p>Antivirus and Anti-malware </p>
      </div>
      <div className={Classes["slide"]}>
        <img
          src="/assets/images/qb-hosting/carousel4 (1).svg"
          alt="Network
          Firewalls"
          loading="lazy"
        />
        <p>
          Network <br /> Firewalls
        </p>
      </div>
      <div className={Classes["slide"]}>
        <img
          src="/assets/images/qb-hosting/carousel5 (1).svg"
          alt="24x7 Network Monitoring"
          loading="lazy"
        />
        <p>24x7 Network Monitoring</p>
      </div>
      <div className={Classes["slide"]}>
        <img
          src="/assets/images/qb-hosting/carousel7 (2).svg"
          alt="Automated Data Backup"
          loading="lazy"
        />
        <p>Automated Data Backup</p>
      </div>
      <div className={Classes["slide"]}>
        <img
          src="/assets/images/qb-hosting/carousel6 (2).svg"
          alt="Regular Security Updates"
          loading="lazy"
        />
        <p>Regular Security Updates</p>
      </div>
      {/* Your container content here */}
      <button onClick={goNext} className={Classes["next"]}>
        <img src="/assets/images/qb-hosting/nextIcon.svg" alt="Icon"  loading="lazy" />
      </button>
      <button onClick={goPrevious} className={Classes["prev"]}>
        <img src="/assets/images/qb-hosting/prevIcon.svg" alt="Icon"  loading="lazy" />
      </button>
    </div>
  );
}

export default InterLinkCard;
