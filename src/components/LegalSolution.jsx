import React from 'react'

const getImageMargin = (index) => {
    if (index === 1) return '-mt-[30px]'
    if (index === 3) return 'mt-[14px]'
    if (index === 4) return '-mt-[20px]'
    return ''
}

const LegalSolution = (props) => {
    return (
        <section className="md:pt-[90px] pb-10 bg-[url('/assets/images/law-firms/01/bgs.webp')] bg-no-repeat bg-[length:100%_100%] pt-5 sm:bg-contain">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <h2
                        className="text-center pb-4 mb-1 p-md-0 px-3"
                        dangerouslySetInnerHTML={{ __html: props.title }}
                    />
                    <p className="text-center mb-4 text-[#626367] text-[17px] leading-[150%] max-w-[1230px] px-[15px] mx-auto">
                        {props.desc1}
                    </p>
                    <p className="text-center !text-[#626367] text-[17px] leading-[150%] max-w-[1230px] px-[15px] mx-auto">
                        {props.desc2}
                    </p>
                    <div
                        className="flex flex-wrap items-stretch gap-x-[40px] justify-center gap-y-[49px] md:max-w-[960px] mt-[50px] mx-auto max-w-[320px]"
                    >
                        {props.arr.map((item, index) => (
                            <div
                                className="relative flex-1 min-w-[263px] max-w-[263px] h-[280px] overflow-hidden text-center border border-[#E5E5E5] border-t-[6px] border-t-[#122A6B] rounded-[8px] pt-[17px] px-[14px]"
                                key={index}
                            >
                                <h3 className="!text-[18px] font-bold !text-[#051B3A]">{item.title}</h3>
                                <p className="text-[14px] text-[#626367] leading-[26px]">{item.description}</p>
                                <img
                                    className={`mx-auto ${getImageMargin(index)}`}
                                    src={item.imgSrc}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LegalSolution