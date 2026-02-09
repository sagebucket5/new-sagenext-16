"use client"
import React from 'react'

const Review = () => {
    return (
        <section className='pb-12.5'>
            <style jsx>
                {`
            .review {
                border-radius: 5px;
                margin: 0;
            }
            .review .rateText {
                font-weight: bold;
                font-size: 64px;
                color:#307CE7;
            }
            .review .rateContent {
                font-weight: bold;
                font-size: 36px;
                color:#727272;
            }
                .review-img {display: flex; justify-content: center; align-items: center; gap: 45px; margin-top: 70px; flex-wrap: wrap;}
                .review-img img{width: 215px; height: auto; object-fit: cover;}
                @media screen and (max-width: 768px) {
                    .review-img img{width: 300px;}
                }
            
        `}
            </style>

            <div className="review text-center">
                <span className='rateText me-1'>4.9</span> <span className='rateContent'>out of 5</span>
                <div className="mt-2">
                    <p style={{ color: "#050F36", fontSize: "28px" ,textAlign:"center"}}><span className='font-black'>500+</span> Reviews - Excellent!</p>
                    <div className='review-img'>
                        <img src="/assets/images/about-us/fo.webp" alt="finances" className="img-fluid" />
                        <img src="/assets/images/about-us/sr.webp" alt="Review" className="img-fluid" />
                        <img src="/assets/images/about-us/sf.webp" alt="Review" className="img-fluid" />
                        <img src="/assets/images/about-us/g2.webp" alt="Review" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review