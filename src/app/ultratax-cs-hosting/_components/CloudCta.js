"use client"
import React from "react";
import BlueCta from "@components/buttons/BlueCta";
import styles from "@/styles/pages/tax/Ultratax-cs-hosting.module.css";
import FormModal from "@/components/FormModal";

const Cloud = () => {
  return (
    <div className="container mx-auto">
      <p className={styles.ctaHeading}>
        Subscription Simplified:<br /> Talk to Us & Find the Right UltraTax CS Plan.
      </p>

      <div className="flex md:flex-row flex-col items-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
        <BlueCta
          href1="/trial"
          text1="Get A Free Trial Now"
          bgColor="#0151C1"
          textColor="#fff"
          ctaBorder="1px solid #0151C1"
        />

        <FormModal
          text="Request A Free Quote"
          bgColor="transparent"
          color="#434343"
          ctaBorder="2px solid #0151C1"
        />
      </div>
    </div>
  );
};
export default Cloud;
