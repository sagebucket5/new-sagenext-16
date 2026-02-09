'use client'
import React, { useState, useEffect } from "react";
import Classes from "@styles/component/pricing/pricingtwo.module.css";
import BlueCta from "@/components/buttons/BlueCta";
import { ActionPop } from "@components/utils/ActionPop";

const PricingTwo = (props) => {
  const { shouldDisplayPrice } = props;
  const [sharedActive, setSharedActive] = useState(true);
  const [dedicatedActive, setDedicatedActive] = useState(false);
  const [planType, setPlanType] = useState("Monthly");

  useEffect(() => {
    if (sharedActive) {
      setPlanType("Monthly");
    }
  }, [sharedActive]);

  useEffect(() => {
    if (dedicatedActive) {
      setPlanType("Monthly");
    }
  }, [dedicatedActive]);

  const handlePlanSwitch = () => {
    setPlanType(planType === "Monthly" ? "Annual" : "Monthly");
  };

  return (
    <>
      <div className={`${Classes["container-fluid"]} ${Classes["pricingTable"]}`}>
        <div className="container">
          <div className="col-xl-12 mx-auto">
            <div className="row">
              <div className={`${Classes["ButtonMainCont"]} col-12 mb-5`}>
                <div className={`${Classes["ViewPlanMain"]}`}>
                  <div className={Classes["ViewPlan"]}>
                    <div className={Classes["toggle-btn"]}>
                      <span style={{ margin: "0.8em" }}>Monthly</span>
                      <label className={Classes["switch"]}>
                        <input
                          type="checkbox"
                          id="checbox"
                          onClick={handlePlanSwitch}
                        />
                        <span
                          className={`${Classes["slider"]}  ${Classes["round"]}`}
                        ></span>
                      </label>
                      <span style={{ margin: "0.8em" }}>Annual</span>
                      <span className={Classes.MoreSave}>
                        ( Save{" "}
                        <strong style={{ fontWeight: "800" }}>10%</strong> More
                        )
                      </span>
                      <span className={Classes.MoreSaveMob}>
                        ( Save{" "}
                        <strong style={{ fontWeight: "800" }}>10%</strong> More
                        )
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`row ${Classes["monthlyPriceList"]} ${sharedActive ? `${Classes.SharedActive}` : "d-none"
                } mt-5`}
            >
              <div className="col-md-4">
                <div className={Classes["StarterPlan1"]}>
                  <div className={Classes["StarterPlan2"]}>
                    <p>{props.customText1 || "Starter"}</p>
                  </div>
                  <div className={Classes["price"]}>
                    {planType === "Monthly" && (
                      <p>
                        <b>
                          {planType === "Monthly"
                            ? `$${props.month11}`
                            : `$${props.month12}`}
                        </b>
                        <span
                          className={`price-text ${planType === "Monthly"
                            ? `${Classes.lineThrough}`
                            : `${Classes.lineThrough}`
                            }`}
                        >
                          {planType === "Monthly" ? `$${props.month12}` : ""}
                        </span>
                        <span> / {planType.toLowerCase()}</span>
                      </p>
                    )}
                    {planType === "Annual" && (
                      <p>
                        <b>
                          {planType === "Annual"
                            ? `$${props.Annual11}`
                            : `$${props.Annual12}`}
                        </b>
                        <span
                          className={`price-text ${planType === "Annual"
                            ? `${Classes.lineThrough}`
                            : `${Classes.lineThrough}`
                            }`}
                        >
                          {planType === "Annual" ? `$${props.Annual12}` : ""}
                        </span>
                        <span> / {planType.toLowerCase()}</span>
                      </p>
                    )}
                  </div>
                  <div className="btn mt-3 mb-3">
                    <BlueCTA text="Get Free Trial Now" href="/trial" bgColor="#0151C1"
                      textColor="#fff" />
                  </div>
                  <div className={Classes["Information"]}>
                    <span>What you'll get</span>
                    <p>{props.p1 || "1 User"}</p>
                    <p>{props.p2 || "$30 on Additional User"}</p>
                    {props.p41 && <p>{props.p41 || ""} </p>}
                    {props.processor1 && <p>{props.processor1 || ""} </p>}
                    <p>{props.p3 || "5GB Storage"} </p>
                    {props.p51 && <p>{props.p51 || ""} </p>}
                  </div>
                </div>
              </div>
              <div className={`${Classes["InterMediateDiv"]} col-md-4`}>
                <div className={`${Classes["Intermediate1"]}`}>
                  <div className={`${Classes["ribbon"]}`}>
                    <img
                      src="/assets/images/qb-hosting/ribben.png"
                      alt="ribben"
                      width={115}
                      height={112}
                      loading="lazy"
                    />
                  </div>
                  <div className={Classes["Intermediate2"]}>
                    <p>{props.customText2 || "Intermediate"}</p>
                  </div>
                  <div className={Classes["price"]}>
                    {planType === "Monthly" && (
                      <p>
                        <b>
                          {planType === "Monthly"
                            ? `$${props.Month21}`
                            : `$${props.Month22}`}
                        </b>
                        <span
                          className={`price-text ${planType === "Monthly"
                            ? `${Classes.lineThrough}`
                            : `${Classes.lineThrough}`
                            }`}
                        >
                          {planType === "Monthly" ? `$${props.Month22}` : ""}
                        </span>
                        <span> / {planType.toLowerCase()}</span>
                      </p>
                    )}
                    {planType === "Annual" && (
                      <p>
                        <b>
                          {planType === "Annual"
                            ? `$${props.Annual21}`
                            : `$${props.Annual22}`}
                        </b>
                        <span
                          className={`price-text ${planType === "Annual"
                            ? `${Classes.lineThrough}`
                            : `${Classes.lineThrough}`
                            }`}
                        >
                          {planType === "Annual" ? `$${props.Annual22}` : ""}
                        </span>
                        <span> / {planType.toLowerCase()}</span>
                      </p>
                    )}
                  </div>
                  <div className="btn">
                    <BlueCTA
                      text1="Get Free Trial Now"
                      href1="/trial"
                      bgColor="#0151C1"
                      textColor="#fff"
                    />
                  </div>
                  <div className={Classes["Information"]}>
                    <span>What you'll get</span>
                    <p>{props.p4 || "1 User"}</p>
                    <p>{props.p5 || "$40 on Additional User"} </p>
                    {props.p72 && <p>{props.p72 || ""} </p>}
                    {props.processor2 && <p>{props.processor2 || ""} </p>}
                    <p>{props.p6 || "5GB Storage"} </p>
                    {props.p82 && <p>{props.p82 || ""} </p>}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={Classes["Advance1"]}>
                  <div className={Classes["Advance2"]}>
                    <p>{props.customText3 || "Advance"}</p>
                  </div>
                  <div className={Classes["price"]}>
                    <p>
                      {shouldDisplayPrice && (
                        <b>
                          {planType === "Monthly"
                            ? `$${props.monthlyPrice}`
                            : `$${props.annualPrice}`}
                        </b>
                      )}
                      {shouldDisplayPrice && (
                        <span
                          className={`price-text ${planType === "Monthly"
                            ? `${Classes.lineThrough}`
                            : ""
                            }`}
                          style={{
                            textDecoration: "line-through",
                          }}
                        >
                          {`$${props.annualPrice}`}
                        </span>
                      )}
                      {shouldDisplayPrice && (
                        <span> / {planType.toLowerCase()}</span>
                      )}
                    </p>
                    <span className={Classes["custom-text"]}>
                      Custom Pricing
                    </span>
                  </div>
                  <div className="btn mt-5 mb-3">
                    <FormModal
                      text="Request A Free Quote"
                      bgColor="transparent"
                      color="#0151C1"
                      ctaBorder="1.8px solid #0151C1"
                      hoverBgColor="#E3F9FF08"
                    />
                  </div>
                  <div className={Classes["Information"]}>
                    <span>What you'll get</span>
                    <p>{props.p7 || "1 User"}</p>
                    <p>{props.p8 || "$43 on Additional User"}</p>
                    <p>{props.p9 || "10GB Storage"} </p>
                    <p>{props.p10 || "2GB RAM"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTwo;