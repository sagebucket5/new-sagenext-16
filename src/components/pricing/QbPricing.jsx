import React, { useState, useEffect } from "react";
import Classes from "@styles/component/pricing/qbpricing.module.css";

const QbPricing = (props) => {
    const { shouldDisplayPrice } = props;
    const [sharedActive, setSharedActive] = useState(true);
    const [dedicatedActive, setDedicatedActive] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [planType, setPlanType] = useState("Monthly");

    useEffect(() => {
        if (sharedActive || dedicatedActive) {
            setPlanType("Monthly");
        }
    }, [sharedActive, dedicatedActive]);

    useEffect(() => {
        setIsChecked(planType === "Annual");
    }, [planType]);

    const handleSharedClick = () => {
        setSharedActive(true);
        setDedicatedActive(false);
    };

    const handleDedicatedClick = () => {
        setSharedActive(false);
        setDedicatedActive(true);
    };
    const handlePlanSwitch = () => {
        setPlanType(planType === "Monthly" ? "Annual" : "Monthly");
    };

    return (
        <>
            <div className={`${Classes["container"]} ${Classes["pricingTable"]}`} >
                <div className="container mx-auto">
                    <div className="container mx-auto">
                        {/* <div className=""> */}
                        <div className={`${Classes["ButtonMainCont"]} w-full`}>
                            <div className="grid grid-cols-2">
                                <div className="flex items-center justify-between lg:w-full md:w-1/2" >
                                    <div className={Classes["ButtonContain"]}>
                                        <div className="">
                                            <p id="monthly" className={sharedActive ? `${Classes.active}` : ""} onClick={handleSharedClick}>
                                                SHARED
                                            </p>
                                        </div>
                                        <div>
                                            <p id="yearly" className={!sharedActive ? `${Classes.active}` : ""} onClick={handleDedicatedClick}>
                                                DEDICATED
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className={`${Classes["ViewPlanMain"]} lg:w-full md:w-1/2`}>
                                    <div className={Classes["toggle-btn"]}>
                                        <span style={{ margin: "0.8em" }}>Monthly</span>
                                        <label className={Classes["switch"]}>
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                checked={isChecked}
                                                onChange={handlePlanSwitch}
                                            />
                                            <span
                                                className={`${Classes["slider"]}  ${Classes["round"]}`}
                                            ></span>
                                        </label>
                                        <span style={{ margin: "0.8em" }}>Annually</span>
                                        <span className={Classes.MoreSave}>
                                            ( Save{" "}
                                            <strong style={{ fontWeight: "800" }}>10%</strong> More
                                            )
                                        </span>
                                    </div>
                                </div>
                                <span className={Classes.MoreSaveMob}>
                                    ( Save <strong style={{ fontWeight: "800" }}>10%</strong>{" "}
                                    More )
                                </span>
                            </div>
                        </div>
                        {/* </div> */}
                        <div className={`grid grid-cols-3 gap-2 lg:mt-12 md:mt-8 ${Classes["monthlyPriceList"]} ${sharedActive ? `${Classes.SharedActive}` : "none"}`}>
                            <div className="w-full">
                                <div className={Classes["StarterPlan1"]}>
                                    <div className={Classes["StarterPlan2"]}>
                                        <p>{props.customText1 || "Starter"}</p>
                                    </div>
                                    <div className={Classes["price"]}>
                                        <p>
                                            <b>
                                                {planType === "Monthly"
                                                    ? `$${props.text1}`
                                                    : `$${props.text2}`}
                                            </b>
                                            <span
                                                className={`price-text ${planType === "Monthly"
                                                    ? `${Classes.lineThrough}`
                                                    : `${Classes.lineThrough}`
                                                    }`}
                                            >
                                                {planType === "Monthly"
                                                    ? `$${props.linthroughmonthly}`
                                                    : "$396"}
                                            </span>
                                            {planType == "Monthly" ? (
                                                <span>/ {planType.toLowerCase()}</span>
                                            ) : (
                                                <span>/ {planType.toLowerCase()}</span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="my-1">
                                        {/* <BlueCta href="/trial" /> */}
                                    </div>
                                    <div className={Classes["Information"]}>
                                        <span>What you'll get</span>
                                        {props.p11 && <p>{props.p11}</p>}

                                        <p>{props.p12 || "$30 on Additional User"}</p>
                                        <p>{props.p13 || "5GB Storage"} </p>
                                        {props.p14 && <p>{props.p14}</p>}
                                        <p>{props.p15 || "For One Application"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Classes["InterMediateDiv"]}`}>
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
                                        <p>
                                            <b>
                                                {planType === "Monthly"
                                                    ? `$${props.text3}`
                                                    : `$${props.text4}`}
                                            </b>
                                            <span
                                                className={`price-text ${planType === "Monthly"
                                                    ? `${Classes.lineThrough}`
                                                    : `${Classes.lineThrough}`
                                                    }`}
                                            >
                                                {planType === "Monthly"
                                                    ? `$${props.linthroughmonthlyTwo}`
                                                    : "$516"}
                                            </span>
                                            {planType == "Monthly" ? (
                                                <span>/ {planType.toLowerCase()}</span>
                                            ) : (
                                                <span>/ {planType.toLowerCase()}</span>
                                            )}
                                        </p>


                                    </div>
                                    <div className="btn mt-2 mb-2">
                                        {/* <BlueCta href="/trial" /> */}
                                    </div>
                                    <div className={Classes["Information"]}>
                                        <span>What you'll get</span>
                                        {props.p6 && <p>{props.p6}</p>}
                                        <p>{props.p7 || "$40 on Additional User"} </p>
                                        <p>{props.p8 || "10GB Storage"} </p>
                                        {props.p9 && <p>{props.p9}</p>}
                                        <p>{props.p10 || "For One Application"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
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
                                                        : `${Classes.lineThrough}`
                                                        }`}
                                                    style={{
                                                        textDecoration: "line-through",
                                                    }}
                                                >
                                                    {planType === "Monthly"
                                                        ? `$${props.linthroughmonthlyThree}`
                                                        : "$588"}
                                                </span>
                                            )}
                                            {shouldDisplayPrice && (
                                                <>
                                                    {planType == "Monthly" ? (
                                                        <span>/ {planType.toLowerCase()}</span>
                                                    ) : (
                                                        <span>/ {planType.toLowerCase()}</span>
                                                    )}
                                                </>
                                            )}
                                        </p>
                                        <span className="custom-ptext">
                                            {props.ptext ? `${props.ptext}` : ""}
                                        </span>
                                    </div>
                                    <div className="mt-4 mb-4">
                                        {/* <BlueCta href="/trial" /> */}
                                    </div>
                                    <div className={Classes["Information"]}>
                                        <span>What you'll get</span>
                                        {props.p1 && <p>{props.p1}</p>}
                                        <p>{props.p2 || "$43 on Additional User"}</p>
                                        <p>{props.p3 || "10GB Storage"} </p>
                                        {props.p4 && <p>{props.p4}</p>}
                                        <p>For One Application</p>
                                        <p>{props.p5 || "Outlook + 5GB Storage"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`grid grid-cols-3 gap-2 ${Classes["monthlyPriceList"]} ${dedicatedActive ? `${Classes.DedicatedActive}` : "none"} mt-3`}>
                            <div className="w-full">
                                <div className={Classes["StarterPlan1"]}>
                                    <div className={Classes["StarterPlan2"]}>
                                        <p>1 Users</p>
                                    </div>
                                    <div className={Classes["price"]}>
                                        <p>
                                            <b>${planType === "Monthly" ? "59" : "637"}</b>
                                            <span className={`price-text ${planType === "Monthly" ? `${Classes.lineThrough}` : `${Classes.lineThrough}`}`}>
                                                {planType === "Monthly" ? "$64" : "$708"}
                                            </span>
                                            {planType == "Monthly" ? (
                                                <span>/ {planType.toLowerCase()}</span>
                                            ) : (
                                                <span>/ {planType.toLowerCase()}</span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="mt-2 mb-2">
                                        {/* <BlueCta href="/trial" /> */}
                                    </div>
                                    <div className={Classes["Information"]}>
                                        <span>What you'll get</span>
                                        <p>$30 on Additional User </p>
                                        <p>6GB Storage </p>
                                        <p>4GB RAM</p>
                                        <p>For One Application</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Classes["InterMediateDiv"]} col-md-4`}>
                                <div className={`${Classes["Intermediate1"]}`}>
                                    <div className={`${Classes["ribbon"]}`}>
                                        <img
                                            src="/assets/images/qb-hosting/ribben.png"
                                            alt="ribben"
                                        />
                                    </div>
                                    <div className={Classes["Intermediate2"]}>
                                        <p>2 Users</p>
                                    </div>
                                    <div className={Classes["price"]}>
                                        <p>
                                            <b>${planType === "Monthly" ? "80" : "864"}</b>
                                            <span
                                                className={`price-text ${planType === "Monthly"
                                                    ? `${Classes.lineThrough}`
                                                    : `${Classes.lineThrough}`
                                                    }`}
                                            >
                                                {planType === "Monthly" ? "$85" : "$960"}
                                            </span>
                                            {planType == "Monthly" ? (
                                                <span>/ {planType.toLowerCase()}</span>
                                            ) : (
                                                <span>/ {planType.toLowerCase()}</span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="mt-2 mb-2">
                                        {/* <BlueCta href="/trial" /> */}
                                    </div>
                                    <div className={Classes["Information"]}>
                                        <span>What you'll get</span>
                                        <p>$30 on Additional User </p>
                                        <p>12GB Storage </p>
                                        <p>6GB RAM</p>
                                        <p>For Three Applications</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12">
                                <div className={Classes["Advance1"]}>
                                    <div className={Classes["Advance2"]}>
                                        <p>5 Users</p>
                                    </div>
                                    <div className={Classes["price"]}>
                                        <p>
                                            <b>${planType === "Monthly" ? "180" : "1944"}</b>
                                            <span
                                                className={`price-text ${planType === "Monthly"
                                                    ? `${Classes.lineThrough}`
                                                    : `${Classes.lineThrough}`
                                                    }`}
                                            >
                                                {planType === "Monthly" ? "$185" : "$2160"}
                                            </span>
                                            {planType == "Monthly" ? (
                                                <span>/ {planType.toLowerCase()}</span>
                                            ) : (
                                                <span>/ {planType.toLowerCase()}</span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="mt-2 mb-4">
                                        {/* <BlueCta href="/trial" /> */}
                                    </div>
                                    <div className={Classes["Information"]}>
                                        <span>What you'll get</span>
                                        <p>$28 on Additional User </p>
                                        <p>30GB Storage </p>
                                        <p>10GB RAM</p>
                                        <p>For Five Applications</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Customizemodal show={showModal} onHide={() => setShowModal(false)} /> */}
        </>
    );
};

export default QbPricing;