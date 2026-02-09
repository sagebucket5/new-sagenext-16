import React from 'react'
import BlueCta from '../buttons/BlueCta'
import FormModal from '../FormModal'
const MajorCard = (props) => {
    return (
        <section className="bg-[#f4f9ff]">
            <div className="container mx-auto pt-10">
                <div className="flex flex-col">
                    <h2 className="text-center mb-6 leading-[40px] text-[25px] md:text-[32px] sm:text-[25px] sm:leading-[35px]">{props.heading || "Major Reason to Choose Hosted Sage Application"}</h2>
                    {props.subHeading && <span className={`text-black text-[18px] font-medium leading-[30px] text-center ${props.subHeading ? "pb-[45px]" : "pb-3"} m-0`}>{props.subHeading}</span>}
                    {props.desc && <p className='mt-5 !mb-10 lg:max-w-10/12 mx-auto text-center'>{props.desc}</p>}
                </div>
                <div className="lg:max-w-11/12 mx-auto grid gap-[70px] row-gap-[39px] px-[30px] md:grid-cols-3 sm:grid-cols-2 sm:px-0 xs:grid-cols-1 xs:px-0 xs:mt-5">
                    {props.cardData?.map((ele, index) => (
                        <div className="grid items-center justify-center gap-y-[18px] xs:gap-y-[23px] xs:mt-[15px] " key={index} >
                            <div className="flex gap-[10px] items-center  md:gap-[15px]">
                                <img src={ele.img} alt={ele.heading} loading="lazy" className='w-8 h-8' width={32} height={32} />
                                <h3 className="!text-[#464646] !m-0 !text-[20px] !font-semibold">{ele.heading}</h3>
                            </div>
                            <div>
                                <p className="text-center mb-0 md:text-left !text-[#292929] leading-[28px]">{ele.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:container mx-auto pb-2">
                    <div className="flex flex-col justify-between items-center pt-2">
                        <span className="text-[#013d8e] text-center text-[25px] font-bold tracking-[1.4px] pb-[30px]">
                            Planning to Get Started with Hosted Sage {props.sageName || 50}
                        </span>
                        <div className="flex md:flex-row flex-col items-center gap-2">
                            <BlueCta
                                text1="Start 7-Day Free Trial Now"
                                href1="/trial"
                                bgColor="#013d8e"
                                textColor="#fff"
                                alt1="7 days Trial"
                                ctaBorder="1px solid #0151C1"
                            />
                            <FormModal
                                text="Request A Free Quote"
                                bgColor="transparent"
                                hoverBgColor="#60a4fc29"
                                color="#013d8e"
                                ctaBorder="2px solid #013d8e"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MajorCard
