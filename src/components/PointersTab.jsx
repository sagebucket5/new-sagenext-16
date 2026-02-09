"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/pages/company/servicelevelagreement.module.css";
import { gsap } from "gsap";
const tabOptions = [
    { key: "first", label: "Scope of service" },
    { key: "second", label: "Maintenance" },
    { key: "third", label: "Service Availability" },
    { key: "fourth", label: "Billing & Payment" },
    { key: "fifth", label: "Customer Responsibilities" },
    { key: "sixth", label: "Termination of service" },
];

const tabContent = {
    first: (
        <ol className={`list-decimal marker:text-[#2d4370] marker:font-bold pl-[20px] p-0`}>
            <li className="mb-2">
                The company provides tax and accounting application
                hosting services to the customers in exchange for the
                pre-defined subscription fee (the “Hosting Fee”).
                Customers can order the required hosting services via
                the company&#8217;s website or by directly contacting
                the Sales team.
            </li>
            <li className="mb-2">
                Once the 7-day trial period is over, the customer
                needs to make initial payment and after the payment is
                processed, the account will be activated.
            </li>
            <li className="mb-2">
                Once the account is activated, the company will ensure
                the services are accessible to the customer at all
                times, except routine and emergency maintenance
                downtimes.
            </li>
            <li className="mb-2">
                The company will provide agreed upon server resources,
                data storage and bandwidth limits to the customers for
                using the services.
            </li>
            <li className="mb-2">
                The company will monitor and maintain regular data
                backup and store the backed-up data in a secured
                facility.
            </li>
            <li className="mb-2">
                The company will provide unlimited technical support
                to the customers related to the subscribed hosting
                services.
            </li>
        </ol>
    ),
    second: (
        <ol className={`list-decimal marker:text-[#2d4370] marker:font-bold pl-[20px] p-0`}>
            <li className="mb-2">
                The company will manage and perform scheduled
                maintenance works and/or repairs to ensure smooth
                operations. The server maintenance and repairs will
                routinely be performed between 12 am to 6 am to ensure
                minimal disruption of the services during peak hours.
            </li>
            <li className="mb-2">
                In case, any additional maintenance or repair is
                needed outside of the time mentioned above, then the
                company at its best will try to inform the customers
                in advance via official email or call.
            </li>
        </ol>
    ),
    third: (
        <ol className={`list-decimal marker:text-[#2d4370] marker:font-bold pl-[20px] p-0`}>
            <li className="mb-2">
                The term &#8216;Service Availability&#8217; or
                &#8216;Monthly Uptime Percentage&#8217; means the
                percentage of a particular month (based on 24-hour
                days for the number of days in the subject month) that
                the virtual servers are available for access to the
                customers, given that the account is active, in good
                standing and enabled.
            </li>
            <li className="mb-2">
                The company shall work to provide Service Availability
                of at least 99.99% to the customers around the world
                during any monthly billing cycle.
            </li>
            <li className="mb-2">
                During the event of Service Unavailability, without
                you being at fault, the company will use all the
                available resources to resolve the issue at the
                earliest.
            </li>
            <li className="mb-2">
                Service Unavailability caused due to factors outside
                the company&#8217;s reasonable control (Force Majeure)
                will not be calculated in Monthly Uptime Percentage.
            </li>
            <li className="mb-2">
                Both scheduled and emergency maintenance/repairs of
                the servers will not be calculated in Monthly Uptime
                Percentage.
            </li>
            <li className="mb-2">
                Any partial or full reimbursement of the Subscription
                Fee for any kind of interruption in the service only
                after it is deemed reasonably appropriate by us.
            </li>
        </ol>
    ),
    fourth: (
        <ol className={`list-decimal marker:text-[#2d4370] marker:font-bold pl-[20px] p-0`}>
            <li className="mb-2">
                Services are billed on a monthly, quarterly, half
                yearly or yearly pre-paid basis, as per the request of
                the customers.
            </li>
            <li className="mb-2">
                There is a 5% discount for half-yearly and 10%
                discount yearly prepayment.
            </li>
        </ol>
    ),
    fifth: (
        <ol className={`list-decimal marker:text-[#2d4370] marker:font-bold pl-[20px] p-0`}>
            <li className="mb-2">
                <b>Payment:</b> Customer shall pay the amount in
                advance of the commencement of the service period.
                Failing to make the payment will lead to account
                suspension and termination of Sagenext&#8217;s service
                obligations.
            </li>
            <li className="mb-2">
                <b>Communication:</b> Customer shall reasonably
                respond to requests for information by the company
                during the provision of the agreed upon services.
            </li>
        </ol>
    ),
    sixth: (
        <>
            <ol className={`list-decimal marker:text-[#2d4370] marker:font-bold pl-[20px] p-0`}>
                <li className="mb-2">
                    Customer may terminate the service for any reason.
                    However, the company must be notified by the customer
                    30 days prior via email about the service termination.
                </li>
                <li className="mb-2">
                    Upon receiving and approval of the termination of
                    service, the company and customer shall discuss and
                    agree on what to do with the files and data (property
                    of the customer) stored on Sagenext&#8217;s servers.
                </li>
                <li className="mb-2">
                    The company may suspend the account in the event of
                    non-payment of the Hosting Fee by the customer. In
                    such case, the company will send a notice to the
                    customer via email informing them that service will be
                    terminated and the data stored in the server(s) will
                    be permanently purged in 30 days if they fail to remit
                    the owed sum.
                </li>
            </ol>
            <p className="text-black">
                This Service Level Agreement is a legally binding
                document that says we will provide certain services, on
                a specific schedule, without any failure. If we do not
                follow the Service Level Agreement, you can take action
                against us, including reporting us to the Better
                Business Bureau.
            </p>
            <p className="text-black">
                {" "}
                <b>
                    However, at Sagenext Infotech, we take pride in our
                    commitment and we ensure that it won&#8217;t happen:
                </b>{" "}
            </p>
            <ol className={`list-decimal marker:text-[#2d4370] marker:font-bold pl-[20px] p-0`}>
                <li className="mb-2">
                    Our reputation depends on us fulfilling the
                    SLA&#8217;s terms.
                </li>
                <li className="mb-2">
                    We know the ramifications if our bookkeepers/CPAs miss
                    deadlines or fail to fulfill the SLA guidelines and
                    regulations.
                </li>
                <li className="mb-2">
                    If we fail to provide the services we promise, we
                    would not be in business anymore.
                </li>
            </ol>
        </>
    ),
};

const PointersTab = () => {
    const [activeTab, setActiveTab] = useState("first");

    // For select dropdown on mobile
    const handleSelectChange = (e) => {
        const idx = e.target.value;
        setActiveTab(tabOptions[idx - 1].key);
    };

    // For sidebar tab click
    const handleTabClick = (key) => {
        setActiveTab(key);
    };

    return (
        <div className={`container mx-auto`}>
            <div className="grid grid-cols-12">
                <div className="col-span-12 pb-12.5 lg:hidden block">
                    <select
                        id={`${styles["size_select"]}`}
                        value={tabOptions.findIndex(opt => opt.key === activeTab) + 1}
                        onChange={handleSelectChange}
                    >
                        {tabOptions.map((opt, idx) => (
                            <option key={opt.key} value={idx + 1}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-span-3">
                    <div className={`${styles["services"]} hidden lg:block`}>
                        <ul className=" flex flex-col">
                            {tabOptions.map((opt) => (
                                <li className="nav-item" key={opt.key}>
                                    <button
                                        type="button"
                                        className={`text-white outline-0  ${activeTab === opt.key ? styles.active : ""} p-[0.5rem_1rem]`}
                                        onClick={() => handleTabClick(opt.key)}
                                    >
                                        {opt.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-9 col-span-12 bg-white lg:px-12.5">
                    <div className={`${styles["service-detail"]} px-12.5 pt-8 `}>
                        {tabContent[activeTab]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PointersTab;
