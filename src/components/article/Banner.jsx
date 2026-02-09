'use client'

import React from 'react'
import { FiChevronRight, FiCalendar, FiClock } from "react-icons/fi";
import TopBar from "./TopBar";
const Banner = (props) => {
    return (
        <div className="longform_Banner">
            {/* <TopBar /> */}
            <div className="container mx-auto">
                <div className="banner-box">
                    <div className="banner-content">
                        <div className='breedcurrent flex items-center'>Article <FiChevronRight size={22} color='#BCBCBC' /> <span className='flex items-center'> Explanation </span></div>
                        <h1 className='!font-black'>{props.title ?? "QuickBooks for Mac"}</h1>
                        <p className='banner-description'>{props.description ?? `A guide to breaking down intricate subjects into digestible and understandable content for a wider audience.`}</p>
                        <div className='timeline'>
                            <span className='date'>
                                <FiCalendar color='#373636' size={20} />
                                May 25, 2023
                            </span>
                            <span className='time'>
                                <FiClock color='rgba(55, 54, 54, 0.761)' size={20} />
                                13 Min read
                            </span>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img src={props.image ?? "/assets/images/longforms/QuickBooks for Mac.png"} loading='eager' width={659} height={349} alt={props.alt ?? props.title} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner
