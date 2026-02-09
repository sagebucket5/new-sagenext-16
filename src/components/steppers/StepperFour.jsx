import React from "react";
import Classes from "@/styles/component/stepper/stepper-4.module.css";

const StepperFour = (props) => {
  return (
    <div className={Classes.proven_process}>
      <div className="container mx-auto">

        <div className={Classes.top_section}>
          {props.heading && <h2>{props.heading}</h2>}
          {props.subheading && <p>{props.subheading}</p>}
        </div>
        <div className={`relative ${Classes.bottom_section}`}>
          <div className={Classes.stepperDot}></div>
          <div className={Classes.scrollableRow}>
            {[1, 2, 3, 4].map((step, index) => (
              <div className={Classes["step"]} key={step}>
                <p className={Classes["StepHead"]}>
                  {props[`step${step}textheading`]}
                </p>
                <div className={Classes["stepperImage"]}>
                  <img
                    src={`/assets/images/common/stepper/dc${step}.png`}
                    width={150}
                    height={150}
                    alt={`icon${step}`}
                    className={Classes["image"]}
                    loading="lazy"
                  />
                  {index < 4 && (
                    <div className={Classes["stepper"]}>
                      <img
                        loading="lazy"
                        src="/assets/images/common/stepper/Arrow2.png"
                        alt="process"
                        width={15}
                        height={20}
                        className={Classes["arrow"]}
                      />
                    </div>
                  )}
                </div>

                <div className={Classes.card_outer}>
                  <h3 dangerouslySetInnerHTML={{ __html: props[`step${step}heading`] }}></h3>
                  <div className={`${Classes["card"]} `}>
                    <p dangerouslySetInnerHTML={{ __html: props[`step${step}disc`] }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperFour;