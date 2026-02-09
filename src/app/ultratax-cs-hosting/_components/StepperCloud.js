import React from "react";
import Image from "next/image";
import Classes from "@/styles/pages/tax/Ultratax-cs-hosting.module.css";

const Stepper = (props) => {
  return (
    <div className={Classes["proven-process"]}>
      <div className={Classes["stepperDot"]}></div>
      <div className="container mx-auto">
        <div className={Classes.row}>
          <div className={`${Classes.column} ${Classes.leftColumn}`}>
            <div className={Classes["top-section"]}>
              {props.heading && <h2>{props.heading}</h2>}
              {props.subheading && <p>{props.subheading}</p>}
            </div>
            <div className={Classes["bottom-section"]}>
              <div className={Classes.scrollableRow}>
                {[1, 2, 3, 4].map((step, index) => (
                  <div className={Classes["step"]} key={step}>
                    <div className={Classes["stepperImage"]}>
                      <Image
                        src={`/assets/images/drake-hosting/dc${step}.png`}
                        width={150}
                        height={150}
                        alt={`icon${step}`}
                        className={Classes["image"]}
                        loading="lazy"
                      />
                      {index < 4 && (
                        <div className={Classes["stepper"]}>
                          <Image
                            loading="lazy"
                            src="/assets/images/qb-hosting/Arrow2.png"
                            alt="process"
                            width={15}
                            height={20}
                            className={Classes["arrow"]}
                          />
                        </div>
                      )}
                    </div>

                    <div className={`${Classes["card-outer"]}`}>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: props[`step${step}heading`],
                        }}
                      ></h3>
                      <div className={`${Classes["card"]}`}>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: props[`step${step}disc`],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;

