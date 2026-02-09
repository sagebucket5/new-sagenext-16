'use client'
import React from "react";
import Classes from "@styles/component/utils/supportGrid.module.css";

const SupportGrid = (props) => {
    return (
        <>
            <div className={Classes["support"]}>
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className={`${Classes["supportText"]} w-full md:w-2/3`}>
                            <div className={Classes["supportTextDiv"]}>
                                <h2 dangerouslySetInnerHTML={{ __html: (props.heading || "24x7 Technical Support") }}></h2>
                                <span>{props.span || "To Keep Your System Up & Running"}</span>
                                <p> {props.paragraph ||
                                    "Sagenext provides unparalleled technical support round-the-clock to ensure your operations are up and running at all times. Our Microsoft-certified Engineers and skilled cloud technicians are available via call, email, and live chat to troubleshoot and provide you with timely resolutions."
                                } </p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className={Classes["assistance"]}>
                                <div className={Classes["assistanceText"]}>
                                    <h3 className="flex items-center">
                                        <img
                                            src="/assets/images/drake-hosting/assistance.svg"
                                            alt="assistance"
                                            width={30}
                                            height={30}
                                            className="me-3"
                                        />
                                        {props.h1 || "24x7 Assistance"}
                                    </h3>
                                </div>
                                <p>
                                    {props.p1 ||
                                        "Get required technical assistance 24 hours a day, 365 days a year, including holidays and weekends."}
                                </p>
                            </div>

                            <div className={Classes["turnaround"]}>
                                <div className={Classes["turnaroundText"]}>
                                    <h3 className="flex items-center">
                                        <img
                                            src="/assets/images/drake-hosting/turnaround.svg"
                                            alt="assistance"
                                            width={30}
                                            height={30}
                                            className="me-3"
                                        />
                                        {props.h2 || "Quick Turnaround Time"}
                                    </h3>
                                </div>
                                <p>
                                    {props.p2 ||
                                        "We strive to troubleshoot and fix technical issues at the  earliest to provide you uninterrupted service."}
                                </p>
                            </div>

                            <div className={Classes["platform"]}>
                                <div className={Classes["platformText"]}>
                                    <h3 className="flex items-center">
                                        <img
                                            src="/assets/images/drake-hosting/platform.svg"
                                            alt="assistance"
                                            width={30}
                                            height={30}
                                            className="me-3"
                                        />
                                        {props.h3 || "Multi-Platform Support"}
                                    </h3>
                                </div>
                                <p>
                                    {props.p3 || "Phone, email and live chat, our Support team is active and  available and you can reach out to us at any time."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupportGrid;