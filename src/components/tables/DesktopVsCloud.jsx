import styles from "@styles/component/tables/desktopcloud.module.css";
import { FaDesktop } from "react-icons/fa";

const DesktopVsCloud = () => {
  return (
    <div className="pb-12">
      <h2 className="text-[1.5rem] md:text-[.6rem] text-center font-bold p-2.5">Desktop v/s. Cloud-Based <span className="text-[#ff9900]">Tax Software</span></h2>

      <div className={styles.scrollContainer}>
        {/* Header Row */}
        <p className={`${styles.cell} ${styles.featureColumn}`}>Features</p>
        <p className={`${styles.cell} ${styles.desktopColumn}`}><FaDesktop stroke="1" size={24}/> Desktop-Based</p>
        <p className={`${styles.cell} ${styles.cloudColumn}`}><img src="/assets/images/tax-hosting/cloud-based.webp" alt="Cloud based" width={27} height={26} loading="lazy"/> Cloud-Based <span>Recommended</span></p>

        {/* Data Rows */}
        <p className={styles.cell}>Deployment</p>
        <p className={`${styles.cell} ${styles.negative}`}>Local installation required</p>
        <p className={`${styles.cell} ${styles.positive}`}>Access from anywhere, anytime</p>

        <p className={styles.cell}>Infrastructure</p>
        <p className={`${styles.cell} ${styles.negative}`}>Local system dependent</p>
        <p className={`${styles.cell} ${styles.positive}`}>Secure remote servers</p>

        <p className={styles.cell}>IT Management</p>
        <p className={`${styles.cell} ${styles.negative}`}>In-house management</p>
        <p className={`${styles.cell} ${styles.positive}`}>Fully managed by experts (e.g., Sagenext)</p>

        <p className={styles.cell}>Scalability</p>
        <p className={`${styles.cell} ${styles.negative}`}>Limited by hardware</p>
        <p className={`${styles.cell} ${styles.positive}`}>Instantly scalable</p>

        <p className={styles.cell}>IT Support</p>
        <p className={`${styles.cell} ${styles.negative}`}>In-house, limited hours</p>
        <p className={`${styles.cell} ${styles.positive}`}>24/7 support, including holidays</p>

        <p className={styles.cell}>Cost Structure</p>
        <p className={`${styles.cell} ${styles.negative}`}>One-time purchase or annual fee</p>
        <p className={`${styles.cell} ${styles.positive}`}>Flexible subscription, predictable costs</p>
      </div>
    </div>
  );
};

export default DesktopVsCloud;