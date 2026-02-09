"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from "@/styles/component/cards/animation-card.module.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const cardsData = [
  {
    title: "Enhance Security",
    content: "The desktop centralization process as well as high-quality <a href='https://www.thesagenext.com/what-is-end-to-end-encryption'>data encryption</a> and updates taking place in the cloud are the two major factors restricting access to your data. Your files reside on protected servers rather than on the personal device, so the attack surface is smaller. Strong data protection protocols such as encryption and frequent updates together with adherence to the industry's laws guarantee compliance and data security.",
    icon: "/assets/images/virtual-desktop/cloudgif.gif",
  },
  {
    title: "Cost Efficiency",
    content: "When businesses use the capabilities offered by virtual desktops, they can bring down the costs concerning setting up new hardware, servicing existing systems, as well as the power consumed by traditional desktops and laptops. Thus, business organizations can make substantial savings. The flexibility offered by the pay-as-you-go model allows organizations to increase or decrease their virtual machines per size, depending on peak usage or the off-seasons, thus ensuring that they only pay for what they consume.",
    icon: "/assets/images/virtual-desktop/cost.gif",
  },
  {
    title: "Scalability and Flexibility",
    content: "Virtual Desktop Hosting raises the bar on the capability of creating a business IT environment that adjusts and adapts as and when required. From bringing in more employees to handling seasonal peaks in workloads, organizations can now expand their number of workstations in no time without necessarily incurring exorbitant costs and making heavy investments in physical machinery.",
    icon: "/assets/images/virtual-desktop/update.gif",
  },
  {
    title: "Remote Accessibility",
    content: "Employees can conveniently access their desktops from any device with a reliable Internet connection, thereby allowing them the opportunity to work remotely without any hindrances. This level of flexibility not only contributes to increased employee productivity but also guarantees that business operations are not interrupted even in the face of unplanned interruptions like a pandemic, a natural disaster, or a power outage.",
    icon: "/assets/images/virtual-desktop/blogger.gif",
  },
  {
    title: "Simplified IT Management",
    content: "In a world where everything is becoming more sophisticated and where organizations must remain ahead of the competition, desktop management is a powerful method capable of boosting the productivity and effectiveness of IT administrators. The key strength of using the centralized desktop management method is that IT staff is enabled to control the functioning of all desktops used in their organization.",
    icon: "/assets/images/virtual-desktop/management.gif",
  },
];
const AnimationCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      {
        isMobile ? <div className={styles.cardCrasoule}>
          {cardsData.map((card, index) => (
            <span className={styles.card} key={index}>
              <aside>
                <h2>{card.title}</h2>
                <img src={card.icon} height={43} width={43} loading="lazy" />
              </aside>
              <p dangerouslySetInnerHTML={{ __html: card.content }} />
            </span>
          ))}
        </div> :
          <section className={styles.animationSection}>
            <div className="md:container mx-auto" >
              <h2 className="text-center !font-bold !my-10"  >Key Benefits of Virtual Desktop Hosting</h2>
              <div className={`${styles["animationContainer"]} grid grid-cols-1 md:grid-cols-3 gap-4`}>
                <Card icon={"/assets/images/virtual-desktop/cloudgif.gif"} title={"Enhance Security"} content={"The desktop centralization process as well as high-quality <a href='https://www.thesagenext.com/what-is-end-to-end-encryption'>data encryption</a> and updates taking place in the cloud are the two major factors restricting access to your data. Your files reside on protected servers rather than on the personal device, so the attack surface is smaller. Strong data protection protocols such as encryption and frequent updates together with adherence to the industry's laws guarantee compliance and data security "} />
                <Card icon={"/assets/images/virtual-desktop/cost.gif"} title={"Cost Efficiency"} content={"When businesses use the capabilities offered by virtual desktops, they can bring down the costs concerning setting up new hardware, servicing existing systems, as well as the power consumed by traditional desktops and laptops thus business organizations can make substantial savings. The flexibility offered by the pay-as-you-go model allows organizations to increase or decrease their virtual machines per size, depending on peak usage or the off seasons, depending on their respective pace in the virtual world thus ensuring that they only pay for what they consume."} />
                <Card icon={"/assets/images/virtual-desktop/update.gif"} title={"Scalability and Flexibility"} content={"Virtual Desktop Hosting raises the bar on the capability of creating a business IT environment that adjusts and adapts as and when required. From bringing in more employees to handling the seasonal peaks in workloads in the best manner, Organizations can now expand their number of workstations in no time without necessarily incurring exorbitant costs and making heavy investments in the physical machinery. "} />
                <Card icon={"/assets/images/virtual-desktop/blogger.gif"} title={"Remote Accessibility"} content={"Employees can conveniently access their desktops from any device with a reliable Internet connection, thereby allowing them the opportunity to work remotely to a greater extent while working without any hindrances. This level of flexibility not only contributes to increased employee productivity but also guarantees that business operations are not interrupted in any way even in the face of unplanned interruptions or calamities like a pandemic, a natural disaster, or a power outage."} />
                <Card icon={"/assets/images/virtual-desktop/management.gif"} title={"Simplified IT Management"} content={"In a world where everything is becoming more sophisticated and where organizations must remain ahead of the competition, desktop management will always be a smarty-pants method capable of boosting the productivity and effectiveness of IT administrators. The key strength of using the centralized desktop management method is that IT staff is enabled to control the functioning of all the desktops used in their organization."} />
              </div>
            </div>
          </section>
      }
    </>
  );
};

export default AnimationCard;

const Card = React.forwardRef(({ icon, title, content }, ref) => (
  <div ref={ref} className={`${styles.animationCard}`}>
    <div className='flex gap-2 items-center'>
      <img src={icon} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
    </div>
    <p className={styles.content} dangerouslySetInnerHTML={{ __html: content ?? "No content set" }}></p>
  </div>
));