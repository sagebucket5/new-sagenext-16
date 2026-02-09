"use client"

import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const InlineWidget = dynamic(
    () => import("react-calendly").then((mod) => mod.InlineWidget),
    { ssr: false }
);

const CalendlyEmbed = () => {
    const router = useRouter();

    const handleEventScheduled = () => {
        router.push("/calendly/thank-you");
    };

    return (
        <div className="h-[700px] mt-12">
            <Suspense fallback={
                <p className="text-center">Loading Calendly...</p>
            }>
                <InlineWidget
                    url="https://calendly.com/sales-1725/15min"
                    onEventScheduled={handleEventScheduled}
                />
            </Suspense>
        </div>
    );
};

export default CalendlyEmbed;