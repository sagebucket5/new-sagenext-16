'use client'
import { useState, useEffect } from 'react';
import { MdNavigateBefore, MdCircle } from "react-icons/md";

const testimonialdata = [
    {
        title: "Kathryn Bruzas Hauer",
        subtitle: "Wilson David Corporaion",
        description: "<strong>I've used Sagenext for 3 years</strong> now, and words really can't describe how easy they make my life. I can do my clients' taxes anywhere, and all the data and documents are in one safe place. I've rarely ever had any problems, but in the rare instance I did, the Sagenext experts were right there to help. It's a must-renew on my list! Thank you.",
        thumnail: "/assets/images/testimonial/kath.png",
        icon: "/assets/images/testimonial/source.webp",
        clientCompany: "/assets/images/testimonial/client-company.webp",
    },
    {
        clientCompany: "",
        title: "Scott Facchetti",
        subtitle: "Facchetti & Facchetti, LTD",
        description: "I was looking for an alternative to QuickBooks online for my accounting clients that either wanted live access to their QB file or wanted to participate in the data entry. SageNext's platform is extremely easy to use but more importantly their customer support is to notch. Whether myself, my staff, or the client who had a question or an issue, SageNext's customer support staff was available 7 days a week, 24/7 and very helpful. I highly recommend this company.",
        thumnail: "/assets/images/testimonial/scott.png",
        icon: "/assets/images/testimonial/ser.webp",
    },

    {
        clientCompany: "",
        title: "Ben Pang",
        subtitle: "Flex Taxible",
        description: "I had a log in trouble with my program at my computer. Within a few minutes (less than 10), I got a fast response from their customer service line. Rick contacted me through email and we were able to fix the problem. He was very patient with me and walked me through everything! Overall, not only are you paying for a good product at a very fair market price, you are also getting really good customer service that speaks for itself. This is something that you do not get to hear often when you initially buy a product.",
        thumnail: "/assets/images/testimonial/ben.png",
        icon: "",
    },
    {
        title: "Dave Connelly",
        clientCompany: "",
        subtitle: "Group CCI LLC",
        description: "As an IT service provider, we're always looking for reliable partners. Our migrations to Sagenext have been seamless and support excellent. Our clients love completing their tasks from anywhere with better performance and reliabilty. Dave Connelly Group CCI LLC North Carolina",
        thumnail: "/assets/images/testimonial/dave.png",
        icon: "",
    },
];

const TextTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setInterval(() => {
            nextSlide();
        }, 7000);

        return () => clearInterval();
    }, [currentIndex]);

    const getSlidePosition = (index) => {
        if (index === currentIndex) return 'active';
        if (index === (currentIndex - 1 + testimonialdata.length) % testimonialdata.length) return 'prev';
        if (index === (currentIndex + 1) % testimonialdata.length) return 'next';
        return '';
    };

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % testimonialdata.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + testimonialdata.length) % testimonialdata.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className='main-wrapper pb-8'>
            <div className="container mx-auto text-center">
                <h2 className='testimonial-heading'>Client Testimonials</h2>
                <p className='subdesc'>Genuine & Verified Customer Reviews from Top Rated Platforms</p>
            </div>

            {/* Slider container */}
            <div className="slider-container">
                <div className="slider-track">
                    {testimonialdata.map((item, index) => (
                        <div
                            key={index}
                            className={`slide ${getSlidePosition(index)}`}
                        >
                            <img src={item.thumnail} alt="thumbnail" className='clientIamge' />
                            <div className="content">
                                <div className="title">
                                    <h3>{item.title}</h3>
                                    <h4>{item.subtitle}</h4>
                                </div>
                                <MdCircle style={{ color: '#BBD4F6', opacity: 0.3, position: "absolute", top: "20%", right: "-38%" }} size={238} />
                                <p className='client-desc' dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                {item.clientCompany && <img className="clientCompany" src={item.clientCompany} alt="Client Company" />}
                            </div>
                            <MdCircle style={{ color: '#BBD4F6', opacity: 0.3, position: "absolute", bottom: "-3%", left: "30%" }} size={31} />
                            {item.icon && <img className="companyicon" src={item.icon} alt="company icon" />}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <div className="buttons">
                <div className="previous" onClick={prevSlide}>
                    <MdNavigateBefore size={27} color='#000' className='prev' />
                </div>
                <div className="next" onClick={nextSlide}>
                    <MdNavigateBefore size={27} color='#000' className='nxt' style={{ rotate: "180deg" }} />
                </div>
            </div>

            <style jsx>{`
                /* Main container styles */
                .main-wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    min-height: 50vh;
                    position: relative;
                    max-width: 100%;
                    margin: 0 auto;
                    overflow: hidden;
                }

                /* Slider container styles */
                .slider-container {
                    position: relative;
                    width: 100%;
                    height: 450px;
                    margin: 0 auto;
                    max-width: 1400px;
                    overflow: hidden;
                }

                .slider-track {
                    position: relative;
                    height: 100%;
                    width: 100%;
                }

                /* Individual slide styles */
                .slide {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    width: 90%;
                    max-width: 1000px;
                    display: flex;
                    align-items: center;
                    border: 1px solid #D8D8F2;
                    background-color: #FAFAFE;
                    border-radius: 20px;
                    padding: 9px 0px 13px 10px;
                    gap: 23px;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.5s ease-in-out;
                    transform: translateX(-50%) scale(0.8);
                }

                /* Active slide styles */
                .slide.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(-50%) scale(1);
                    z-index: 2;
                }

                .slide.prev {
                    opacity: 0.5;
                    visibility: visible;
                    transform: translateX(calc(-100% - 100px)) scale(0.85);
                    z-index: 1;
                }

                .slide.next {
                    opacity: 0.5;
                    visibility: visible;
                    transform: translateX(calc(0% + 100px)) scale(0.85);
                    z-index: 1;
                }

                .slide.active .content {
                    opacity: 1;
                }

                .slide.prev .content,
                .slide.next .content {
                    opacity: 0.5;
                }

                /* Client image styles */
                .clientIamge {
                    flex: 0 0 250px;
                    border: 1px solid #DEDEDE;
                    border-radius: 18px;
                    max-height: 378px;
                    width: 250px;
                    max-width: 250px;
                    height: 378px;
                    object-fit: cover;
                }

                /* Content section styles */
                .content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    position: relative;
                    overflow: hidden;
                    padding-right: 10px;
                }

                /* Typography styles */
                .title h3 {
                    font-size: 24px;
                    color: #5E5E5E;
                    font-weight: 600;
                }

                .title h4 {
                    font-size: 16px;
                    color: #A1A1A1;
                    font-weight: 400;
                }

                .client-desc {
                    font-size: 16px;
                    color: #363636;
                    font-weight: 400;
                    line-height: 154%;
                    margin: 0;
                    padding: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 7;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Navigation button styles */
                .buttons {
                    width: 130px;
                    height: 50px;
                    gap: 26px;
                    display: flex;
                    align-self: center;
                    justify-content: center;
                    margin-top: 80px;
                }

                .previous,
                .next {
                    width: 50px;
                    height: 50px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 16px;
                    background-color: #C7DEFF;
                    transition: transform 0.3s ease;
                }

                .previous:hover,
                .next:hover {
                    transform: scale(1.1);
                }

                /* Company logo styles */
                .clientCompany {
                    align-self: flex-start;
                    width: 190px;
                    height: 50px;
                }

                .companyicon {
                    position: absolute;
                    top: 5px;
                    width: 113px;
                    height: 33px;
                    right: 15px;
                }

                /* Description text styles */
                .subdesc {
                    font-size: 18px;
                    color: #888888;
                    line-height: 154%;
                    letter-spacing: 0.01em;
                    margin: 10px auto 70px;
                    padding: 0px;
                }

                /* Mobile responsive styles */
                @media screen and (max-width: 868px) {
                    .slider-container {
                        height: 600px;
                    }
                    .slide {
                        flex-direction: column;
                        padding: 0;
                        width: 60%;
                        height: 100%;
                        overflow: hidden;
                    }
                    .slide.prev {
                        transform: translateX(calc(-100% - 50px)) scale(0.85);
                    }
                    .slide.next {
                        transform: translateX(calc(0% + 50px)) scale(0.85);
                    }
                    .clientIamge {
                        width: 100%;
                        max-width: none;
                        height: 100%;
                        max-height: 100%;   
                        flex: none;
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        object-fit: cover;
                    }
                    .content {
                        position:absolute;
                        background-color:white;
                        border-radius: 20px;
                        bottom:0;
                        width:98%;
                        margin:auto;
                        height:50%;
                        left:1%;  
                        align-self:flex-end;
                        padding: 20px;
                        gap: 15px;
                    }
                    .title h3 {
                        font-size: 19px;
                    }
                    .title h4 {
                        font-size: 12.64px;
                        margin: 0;
                    }
                    .client-desc {
                        font-size: 13px;
                        -webkit-line-clamp: 5;
                    }
                    .clientCompany {
                        display: none;
                    }
                }
                @media screen and (max-width: 480px) {
                .slider-container {
                        min-height: 500px;
                    }
                        .slide {
                            width: 90%;
                        }
                }
            `}</style>
        </div>
    );
};

export default TextTestimonial;