import React from "react";
import styles from "@/styles/pages/tax/Ultratax-cs-hosting.module.css";
import Image from "next/image";

const ChooseCloud = ({ heading, desc, data = [], data1 = [], size }) => {
  return (
    <section id="Why Us">
      <div className="container mx-auto">
        <div className={styles.ChooseCloud}>
          <h2>{heading || "Why Choose Sagenext for Hosting UltraTax Software on Cloud"}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: desc ||
                `Every business is unique in the way they function and their
                cloud-related objectives may not be the same. By choosing Sagenext
                for UltraTax CS tax hosting on the Cloud, you gain a reliable
                partner with the expertise, security, performance, and support to
                empower your tax practice for success. While cloud-based UltraTax CS
                offers numerous advantages, choosing the right hosting provider is
                crucial. Here’s why Sagenext stands out:`
            }}
          ></p>

        </div>

        <div className={styles.ChooseCloudCard} style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
          {data.map((item, index) => (
            <div key={index}>
              <div className={styles.chooseCard}>
                <Image
                  height={300}
                  width={300} src={item.img} alt={item.alt} />
                <h3 dangerouslySetInnerHTML={{ __html: item.heading }}></h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ChooseCloudCardTwo}>
          {
            data1.map((item, index) => (
              <div key={index}>
                <div className={styles.chooseCardTwo}>
                  <Image
                    height={300}
                    width={300} src={item.img} alt={item.alt} loading="lazy" />
                  <h3>{item.heading}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};
export default ChooseCloud;
