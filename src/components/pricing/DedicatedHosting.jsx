'use client'

import { useState } from "react";
import Classes from "@styles/component/pricing/dedicatedHosting.module.css";


const hostingData = [
    {
        plan: "Starter",
        Price: "$59",
        usercount: 1,
        adduser: "$35",
        storage: "6 GB (6GB/user)",
        ram: "4GB",
        apps: 2,
    },
    {
        plan: "Bronze",
        Price: "$80",
        usercount: 2,
        adduser: "$35",
        storage: "12GB (6GB/user)",
        ram: "6GB",
        apps: 3,
    },
    {
        plan: "Silver",
        Price: "$180",
        usercount: 5,
        adduser: "$30",
        storage: "30GB  (6GB/user)",
        ram: "10GB",
        apps: 6,
    },
    {
        plan: "Gold",
        Price: "$260",
        usercount: 8,
        adduser: "$25",
        storage: "56GB (7GB/user)",
        ram: "12GB",
        apps: 9,
    },
    {
        plan: "Platinum",
        Price: "$345",
        usercount: 12,
        adduser: "$23",
        storage: "120GB (10GB/user)",
        ram: "16GB",
        apps: 13,
    },
    {
        plan: "Diamond",
        Price: "$390",
        usercount: 15,
        adduser: "$20",
        storage: "195GB (13GB/user)",
        ram: "18GB",
        apps: 16,
    },
];


export default function DedicatedHostPlan({ size, ...props }) {
    const [isAnnual, setIsAnnual] = useState(false);
    const handlePlanSwitch = () => {
        setIsAnnual(!isAnnual); // Toggle between monthly and annual
    };
    return (
        <>
            {props.DedicatedTitle && (
                <h2 className="text-center mb-1" dangerouslySetInnerHTML={{ __html: props.DedicatedTitle }}></h2>
            )}
            {!(props.subtilte) && (<p className="p text-center">Plans for Every Need</p>)}

            <div className="toggle-btn flex justify-center items-center my-3">
                <span className="text-[18px] font-medium align-middle m-[.8rem]">Monthly</span>
                <label className={Classes["switch"]}>
                    <input type="checkbox" id="checbox" onClick={handlePlanSwitch} />
                    <span className={`${Classes["slider"]}  ${Classes["round"]}`} ></span>
                </label>
                <span className="text-[18px] font-medium align-middle m-[.8rem]">Annual</span>
                <span className={Classes.MoreSave}>
                    ( Save{" "}
                    <strong className="font-extrabold">10%</strong> More
                    )
                </span>
            </div>
            <div className={`${Classes["dedicated-host-paln"]}`}>
                <div className="container mx-auto">
                    <div className="col-span-12 mx-auto">
                        <div className={`${Classes["dedicated-host-paln-contain"]}`}>
                            <div className={`${Classes["dedicated-host-paln-left"]}`}>
                                <span>Plans</span>
                                <span>Price</span>
                                <span>No. of Users</span>
                                <span>Additional User</span>
                                <span>Storage</span>
                                <span>RAM</span>
                                <span>Included Apps</span>
                            </div>

                            <div className={`${Classes["dedicated-host-paln-right"]}`}>
                                {hostingData.map((dcditem, index) => {
                                    const monthlyPrice = parseFloat(dcditem.Price.replace("$", ""));
                                    const annualPrice = (monthlyPrice * 12 * 0.9).toFixed(); // 10% discount on yearly price
                                    return (
                                        <div
                                            key={index}
                                            className={`${Classes.dedicatedHostPalnItem} ${Classes.activeHost}`}>
                                            <span className={`${Classes.activeBg}`}>{dcditem.plan}</span>
                                            <span>
                                                <div
                                                    className={`${Classes.activeText}`}>
                                                    {isAnnual ? `$${annualPrice}` : dcditem.Price}
                                                </div>
                                                <div>{isAnnual ? "/year" : "/month"}</div>
                                            </span>
                                            <span>{dcditem.usercount}</span>
                                            <span>{dcditem.adduser}</span>
                                            <span>{dcditem.storage}</span>
                                            <span>{dcditem.ram}</span>
                                            <span>{dcditem.apps}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}