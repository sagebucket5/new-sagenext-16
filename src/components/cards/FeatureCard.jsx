import styles from "@styles/component/cards/FeatureCards.module.css";

const features = [
  {
    title: "Consultation",description:"Contact our team to explore the advantages of our solutions by discussing your business requirements. <a href='/contact-us'>Get in Touch</a>",imgSrc: "/assets/images/virtual-desktop/01/consultation.webp",},
  {
    title: "Ongoing Support",description:"We perform ongoing checks as well as technical assistance to guarantee that your applications perform as they should and that difficulties are remedied at once.",imgSrc: "/assets/images/virtual-desktop/01/support.webp",},
  {
    title: "Customized Plan",description:"We will create a plan that meets your specifications and budget.",imgSrc: "/assets/images/virtual-desktop/01/customized.webp",},
  {
    title: "Implementation",description:"Our professionals will manage the installation and transition phases, allowing for a seamless move to your new virtual desktop environment.",imgSrc: "/assets/images/virtual-desktop/01/implementation.webp",},
];

export default function FeatureCards() {
  return (
    <div className={'container mx-auto pt-10'}>
      <div className={styles.featureContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.cards}>
            <div className={styles.content}>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description} dangerouslySetInnerHTML={{__html:feature.description}}></p>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className={styles.images}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div></div>
  );
}