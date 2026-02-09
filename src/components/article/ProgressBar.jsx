'use client'

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ProgressBar() {
    const progressRef = useRef(null);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollPercent(scrolled);

            if (progressRef.current) {
                gsap.to(progressRef.current, {
                    width: `${scrolled}%`,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (<div ref={progressRef} style={{ position: 'fixed', top: 0, left: 0, height: '6px', backgroundColor: " #0070f3", zIndex: 9999, width: 0 }} />);
}
