"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const CtaButton = ({
    text = "Get A Free Consultation",
    href = "#",
    alt = "CTA Button",
    customClass = "",
    bgColor = "#0151C1",
    textColor = "#fff",
    hoverBgColor = "#fff",
    hoverColor = "#0151C1",
    hoverBorder = "#0151C1",
}) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            style={{
                width: "296px",
                height: "53px",
                position: "relative",
            }}
        >
            <Link
                href={href}
                aria-label={alt}
                className={`${customClass} flex items-center justify-center gap-1 transition-all duration-200`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    backgroundColor: hover ? hoverBgColor : bgColor,
                    color: hover ? hoverColor : textColor,
                    border: hover ? `2px solid ${hoverBorder}` : `2px solid ${bgColor}`,
                    borderRadius: "36px",
                    padding: "12px",
                    fontSize: "18px",
                    fontWeight: "600",
                }}
            >
                <span>{text}</span>
                <FiArrowUpRight size={18} strokeWidth="2.6" />
            </Link>
        </div>
    );
};
export default CtaButton;