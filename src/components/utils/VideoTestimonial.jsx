'use client'

import React, { useState } from 'react';
import styles from '@styles/component/utils/client-video.module.css';
import { MdOutlineVerified } from "react-icons/md";
import ToolTip from './ToolTip';
const clientsData = [
    {
        videoUrl: "https://www.youtube.com/embed/YB0G2bNeNRU?mute=1&autoplay=0&enablejsapi=1",
        clientname: "Pete Blayant",
        text: "Here&apos;s Pete, sharing ",
        imageSrc: "/assets/images/qb-hosting/testimonial.webp",
        heading: "Easy Data Migration & Lowest Pricing",
        hoverdVideo: "/assets/images/testimonial/gif3.gif"
    },
    {
        videoUrl: "https://www.youtube.com/embed/MBM0aZeb9cY?mute=1&autoplay=0&enablejsapi=1",
        clientname: "Bal Cheema",
        text: "With a career ",
        imageSrc: "/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbalcheema.webp&w=640&q=75",
        heading: "Streamlined Transitions, Continuous Support",
        hoverdVideo: "/assets/images/testimonial/gif1.gif"
    },
    {
        videoUrl: "https://www.youtube.com/embed/_05k4mzSATk?mute=1&autoplay=0&enablejsapi=1",
        clientname: "Roland Thomas",
        text: "Roland Thomas, ",
        imageSrc: "/assets/images/qb-hosting/Thomas1.webp",
        heading: "Reliable & Cost Effective QuickBooks",
        hoverdVideo: "/assets/images/testimonial/gif2.gif"
    },
];

export default function VideoTestimonial(props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handelClick = (e, index) => {
        e.preventDefault();
        setCurrentIndex(index);
        const videoCard = document.getElementById(`video-${index}`);
        if (videoCard && videoCard.scrollIntoView) {
            videoCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }
    return (
        <div className={styles.container}>
            <div className={'container mx-auto'}>
                <label className='text-center block'>
                    <ToolTip text="Testimonials" color='#fff' bg="#71AAFF36" size="11px" />
                </label>
                <h2 className={styles.heading} dangerouslySetInnerHTML={{ __html: props.title }}></h2>
                <div className={styles.hideCard}>
                    <div className={styles.scrollWrapper}>
                        {clientsData.map((item, index) => (
                            <VideoCard
                                key={index}
                                id={`video-${index}`}
                                videoUrl={item.videoUrl}
                                text={item.text}
                                imageSrc={item.imageSrc}
                                clientname={item.clientname}
                                heading={item.heading}
                                hoverdVideo={item.hoverdVideo}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.indicatorWrapper}>
                    {clientsData.map((_, index) => (
                        <div
                            key={index}
                            onClick={(e) => handelClick(e, index)}
                            className={
                                index === (currentIndex)
                                    ? styles.activeDot
                                    : styles.inactiveDot
                            }
                        />
                    ))}
                </div>
            </div>
            <div className={styles.descriptionContent} >
                <span className={styles.leftSide}></span>
                <p className={styles.sbtext}>Check out what our clients have to say about Sagenext </p><span className={styles.rightSide} />

            </div>
        </div>
    );
}

function VideoCard({ videoUrl, text, imageSrc, clientname, hoverdVideo, id }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const iframeRef = useRef(null);

    // Helper to update iframe src with mute/unmute
    const getIframeSrc = () => {
        let baseUrl = videoUrl.split('?')[0];
        let params = new URLSearchParams(videoUrl.split('?')[1] || '');
        params.set('autoplay', isHovered || isPlaying ? '1' : '0');
        params.set('mute', isPlaying ? '0' : '1');
        params.set('enablejsapi', '1');
        return `${baseUrl}?${params.toString()}`;
    };

    // Unmute on button click
    const handlePlayClick = () => {
        setIsPlaying(true);
        // Try to unmute via postMessage (for YouTube)
        if (iframeRef.current) {
            iframeRef.current.contentWindow.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: 'unMute',
                    args: [],
                }),
                '*'
            );
            iframeRef.current.contentWindow.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: 'playVideo',
                    args: [],
                }),
                '*'
            );
        }
    };

    return (
        <div
            className={`${styles.videoCard}`}
            id={id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                // setIsPlaying(false);
            }}
        >
            <div className={styles.iframeWrapper}>

                {!isHovered && !isPlaying && (
                    <img
                        src={imageSrc}
                        alt={clientname}
                        className={styles.poster}
                        onClick={() => setIsPlaying(true)}
                        onMouseEnter={() => setIsHovered(true)}
                    />
                )}
                {isHovered && !isPlaying && (
                    <img
                        src={hoverdVideo}
                        alt={clientname}
                        className={styles.poster}
                        onClick={() => setIsPlaying(true)}
                    />
                )}
                {(isHovered || isPlaying) && (
                    <iframe
                        ref={iframeRef}
                        className={styles.video}
                        src={getIframeSrc()}
                        title="Client Testimonial"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
            {/* Client details */}
            <div className={`${isPlaying ? "d-none" : ""} ${styles.clientDetails}`}   >
                {!isPlaying && (
                    <button className={styles.button} onClick={handlePlayClick}>
                        <img src="/assets/images/testimonial/playIcon.webp" alt="Play" />
                        <p className={styles.overlay}>Click to play!</p>
                    </button>
                )}
                <div className={styles.texts} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <h3>{clientname}</h3><MdOutlineVerified size={19} color="royalblue" />
                </div>
                <label>{text}</label>
            </div>
        </div>
    );
}
