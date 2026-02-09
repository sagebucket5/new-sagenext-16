import { IoMdStarHalf, IoMdStar } from "react-icons/io";
import styles from "@/styles/component/heros/QbHero.module.css";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";

export default function QbHero(props) {
  return (
    <div className={styles.offerWrapper}>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <div className={`${styles.ratingSection}`}>
            <span className={`${styles.ratingNumber}`} style={{ fontSize: '14px' }}>
              <strong>4.9</strong> Stars
            </span>
            <span className={styles.stars}> <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStarHalf />  </span>
            <span className={`${styles.reviewCount}`} style={{ fontSize: '12px' }}> 860+ Reviews </span>
          </div>
          {props.subtext && (
            <p className={styles.subtext} dangerouslySetInnerHTML={{ __html: props.subtext }} />
          )}

          <h1 className={styles.mainHeadline} dangerouslySetInnerHTML={{ __html: props.title }} />
          {props.description && (
            <p className={`${styles.description} ${props.descClassName}`} dangerouslySetInnerHTML={{ __html: props.description }} />
          )}
          {props.listDisc && (
            <ul className={styles.list}>
              {props.listDisc.map((item, key) => (
                <li key={key} className={`${styles.list_item}`}>
                  <Image src={item.src} alt={item.name} width={20} height={23} />  {item.name}
                </li>
              ))}
            </ul>
          )}
          {/* CTA Buttons */}
          <div className={`${styles.ctaBtns} grid grid-cols-1 md:grid-cols-2 items-center justify-start md:container gap-4 md:gap-2 my-6 -mx-1 font-semibold w-full md:w-11/12`}>
            {props.cta ? props.cta : ""}
          </div>

          {/* <p className={styles.trustedBy}>Trusted by</p>
          <div className={styles.partnerLogos}>
            <Link href="https://www.serchen.com/company/sagenext-infotech/reviews/" target="_blank">
              <Image src="/assets/images/offer/logo-of-hero-sec/g1.png" alt="Serchen" width={114} height={35} />
            </Link>
            <Image src="/assets/images/offer/logo-of-hero-sec/g2.png" alt="Finances Online" width={155} height={35}
            />
            <Image src="/assets/images/offer/logo-of-hero-sec/g3.png" alt="Source Forge" width={148} height={35}
            />
            <Image src="/assets/images/offer/logo-of-hero-sec/g4.png" alt="G2" width={78} height={35}
            />
            <Link
              href="https://share.google/WeAwW6BQBfISYMQVh"
              target="_blank"
            >
              <Image src="/assets/images/offer/logo-of-hero-sec/g5.png" alt="Capterra" width={45} height={35} className="object-contain"
              />
            </Link>
          </div> */}

          <span style={{ fontSize: '14px', }} className="text-sm font-light py-2 hidden md:flex gap-2">
            <IoCardOutline size={21} color="#fff" /> No CC Required
          </span>
        </div>
        {props.BannerImage && (
          <Image src={props.BannerImage} alt={props.title} className={`${styles.BannerImage}`} width={418} height={500} loading="eager" fetchPriority="high" />
        )}
      </div>
    </div>
  );
};
