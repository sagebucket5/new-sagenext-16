import React from 'react'

const BenifitsCard = ({ cardData = [] }) => {
    return (
        <div className='flex items-stretch justify-center w-full flex-wrap gap-x-7.5 gap-y-17.5'>
            {
                cardData.map((card, idx) => (
                    <div className='max-w-[370px] gap-4.5 flex-[1_0_350px] rounded-[25px] shadow-[0px_8px_6.8px_rgba(_0,_0,_0,_.1)] hover:shadow-lg transition-shadow duration-300 border border-[#dfdfdf] p-2.5 flex flex-col overflow-hidden' key={idx}>
                        <div className='flex items-center gap-3 lg:justify-start justify-center flex-col lg:flex-row'>
                            <img
                                src={card.img}
                                alt={card.alt}
                                loading="lazy"
                                width={32}
                                height={32}
                                decoding="async"
                                className="object-contain"
                            />
                                <h3 className="!text-[#464646] !text-[20px] !font-semibold !m-0">{card.heading}</h3>
                        </div>
                           <p className=" !text-[#464646d2] !text-[16.5px] !leading-[136%] p-0 m-0">{card.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default BenifitsCard
