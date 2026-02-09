"use client"
import { useRef, useState } from "react";
import Classes from "@styles/pages/company/about.module.css";
import BlueCta from "@/components/buttons/BlueCta";
const AboutUsBanner = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      <section className={Classes.banner}>
        <div className="container mx-auto">
          <div className={Classes["banner-content"]}>
            <h1 className={Classes["about-heading"]}>About Sagenext</h1>
            <p className={Classes["about-desc"]}>
              Delivering Reliable, Secure, and Scalable Cloud Hosting Solutions.
            </p>
            <div className={Classes["banner-cta"]}>
              <BlueCta
                text1="Plans & Pricing "
                href1="/pricing"
                bgColor="#0151C1"
                textColor="#fff"
              />
              <BlueCta
                text1="1-855-922-7243"
                bgColor="transparent"
                textColor="#fff"
                svgColor="#000"
                href1="tel:+1-855-922-7243"

              />
            </div>
          </div>
        </div>
      </section>
      <div className={Classes["about-video"]}>
        <div className={Classes.videoContainer}>
          <video
            ref={videoRef}
            className={Classes.video}
            poster={"/assets/images/about-us/thum1.png"}
            src="/assets/videos/sagenext-about-us.mp4"
            type="video/mp4"
            onClick={togglePlay}
          />
          <div className={Classes.controls}>
            {isPlaying ? (
              ""
            ) : (
              <>
                <button
                  className={Classes.controlButton}
                  onClick={togglePlay}
                ></button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsBanner
