"use client"
import styles from '@styles/component/cards/maxCardFeature.module.css'
import Link from 'next/link';
import React, { useState } from 'react'
import { IoCheckmarkCircleSharp, IoArrowDown } from "react-icons/io5";

const plans = [
  {
    img: '/assets/images/buy-qb-enterprise/silver.webp',
    original: "$163", yearPriceOriginal: "$1703",
    name: "SILVER", price: "$131", yearPrice: "$1363", description: "Ideal for individuals who need quick access to basic features.", popular: false,
  },
  {
    img: '/assets/images/buy-qb-enterprise/gold.webp',
    original: "$223", yearPriceOriginal: "$2210",
    name: "GOLD", price: "$178", yearPrice: "$1768", description: "Ideal for individuals who need advanced features and tools for client work.", popular: true,
  },
  {
    img: '/assets/images/buy-qb-enterprise/platinum.webp',
    original: "$266", yearPriceOriginal: "$2717",
    name: "PLATINUM", price: "$213", yearPrice: "$2174", description: "For all individuals and starters who want to start with domaining.", popular: false,
  },
];

const BuyQbPricingCard = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <div className={styles.pricingContainer}>
      <h2 className={styles.heading}>
        <strong>QuickBooks Desktop</strong> Enterprise Plans
      </h2>
      <p className={styles.subheading}>Plans for Every Need</p>

      {/* Toggle Button */}
      <div className={styles.toggleContainer}>
        <span>Pay Monthly</span>
        <label className={styles.switch}>
          <input type="checkbox" onChange={() => setMonthly(!monthly)} />
          <span className={styles.slider}></span>
        </label>
        <span style={{ color: "#023684" }}>Pay Yearly</span>
      </div>

      {/* Pricing Cards */}
      <div className={styles.plansGrid}>
        {plans.map((plan, index) => (
          <div key={index} className={`${styles.planCard} ${plan.popular ? styles.popular : ""}`}>
            {plan.popular && <div className={styles.mostPopular}>MOST POPULAR <img src='/assets/images/buy-qb-enterprise/star.svg' className='inline-block' alt='star' width={15} height={15} /></div>}
            <label className={styles.planLabel}><h3 className={styles.planName}>{plan.name}</h3><img src={plan.img} alt={plan.img.split("/").pop().split(".")[0]} loading="lazy" /></label>

            <p className={styles.planDescription}>{plan.description}</p>
            <p className={styles.price}>
              <span className={styles.lineThrough}> <span className={styles.lineRotate} />{monthly ? plan.original : plan.yearPriceOriginal} <IoArrowDown className='inline-block' color='#000' size={18} /></span><br />
              {monthly ? plan.price : plan.yearPrice} <span className={styles.perMonth}>{monthly ? "/ Monthly*" : "/ Yearly*"}</span> <br />
              <span className={styles.subscription}> {monthly ? "Monthly Subscription*" : "Annual Subscription*"} </span>
            </p>
            <p className={styles.users}> <IoCheckmarkCircleSharp color='#023684' size={22} />No. of Users <strong style={{ fontSize: "20px", marginBottom: "6px" }}>1</strong></p>
            <Link href='/buy-now' className={styles.ctaButton}>Get Started Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyQbPricingCard;
