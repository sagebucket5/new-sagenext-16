'use client';

import React, { useEffect, useState, useRef } from "react";
import SiderBar from "./Sidebar";
import ProgressBar from "./ProgressBar";

const ContentLayout = ({ children }) => {
    const containerRef = useRef(null);
    const [toc, setToc] = useState([]);
    const [isSticky, setIsSticky] = useState(false);

    // Set sticky TOC on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Extract TOC and add <hr> between sections
    useEffect(() => {
        if (!containerRef.current) return;

        const h2Elements = Array.from(containerRef.current.querySelectorAll("h2"));
        setToc(h2Elements.map((h2) => h2.innerHTML));

        const sections = containerRef.current.querySelectorAll("section");
        sections.forEach((section, index) => {
            section.setAttribute("id", `item-${index + 1}`);
            if (index < sections.length - 1) {
                const hr = document.createElement("hr");
                hr.style.maxWidth = "94%";
                hr.style.margin = "23px auto";
                hr.style.border = "#B7AEAE 0.5px solid";
                section.after(hr);
            }
        });
    }, []);

    return (
        <>
            <ProgressBar />
            <div className="container mx-auto">
                <div
                    className="main_layout"
                    style={{ position: "relative", gap: "50px", paddingTop: "46px" }}
                >
                    <SiderBar tocItems={toc} isSticky={isSticky} />
                    <div className="main_content" ref={containerRef}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContentLayout;
