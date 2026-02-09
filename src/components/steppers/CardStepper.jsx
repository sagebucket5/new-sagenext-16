import React from "react";
import Classes from "@styles/component/stepper/cardStepper.module.css";
const Stepper = (props) => {

  return (
    <div className={Classes["proven-process"]}>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-xl-11 col-lg-12 col-10 mx-auto">
            <div className={Classes["top-section"]}>
              {props.heading && <h2>{props.heading}</h2>}
              {props.subheading && <p>{props.subheading}</p>}
            </div>
            <div className={Classes["bottom-section"]}>
              <div className="flex flex-wrap justify-center">
                <div className="lg:w-3/12 mb-5">
                  <div className={`${Classes["card-outer"]} ${Classes["one"]}`}>
                    <h3>{props.step1heading}</h3>
                    <div className={`${Classes["card"]}`}>
                      {/* <p>{props.step1disc}</p> */}
                      <p dangerouslySetInnerHTML={{__html:props.step1disc}}/>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/12 mb-10 md:mb-5">
                  <div className={Classes["stepper"]}>
                    <img loading="lazy"
                      src="/assets/images/qb-hosting/stepper.svg"
                      alt="process"
                      width={36}
                      height={19}
                    />
                  </div>
                </div>
                <div className="lg:w-3/12 mb-5">
                  <div className={`${Classes["card-outer"]} ${Classes["two"]}`}>
                    <h3>{props.step2heading}</h3>
                    <div className={`${Classes["card"]}`}>
                      {/* <p>{props.step2disc}</p> */}
                      <p dangerouslySetInnerHTML={{__html:props.step2disc}}/>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/12 mb-10 md:mb-5">
                  <div className={Classes["stepper"]}>
                    <img loading="lazy"
                      src="/assets/images/qb-hosting/stepper.svg"
                      alt="process"
                      width={36}
                      height={19}
                    />
                  </div>
                </div>
                <div className="lg:w-3/12 mb-5">
                  <div
                    className={`${Classes["card-outer"]} ${Classes["three"]}`}
                  >
                    <h3>{props.step3heading}</h3>
                    <div className={`${Classes["card"]}`}>
                      <p dangerouslySetInnerHTML={{__html:props.step3disc}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
