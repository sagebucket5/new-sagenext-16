import Image from "next/image";

const DynamicStepper = ({ heading, subheading, steps = [], variant = "default", customTrackStyle, customSubheading, }) => {
    const circleBorderByIndex = (i) => {
        const map = ["border-[#cce0ff]", "border-[#80aaff]", "border-[#3b7dff]", "border-[#0046c7]"];
        return map[i] || "border-[#cce0ff]";
    };

    return (
        <section id="Steps" className="my-16 bg-[#f3f8ff] py-12 overflow-hidden" >
            <div>
                <div className="container mx-auto text-center">
                    {(heading || subheading) && (
                        <>
                            {heading && (
                                <>
                                    <span className=" inline-block bg-[#71aaff2e] text-[#31509f] font-semibold text-[13px] px-6 py-[10px] rounded-[30px] mb-3"> STEPS </span>
                                    <h2 className="text-[30px] font-bold mb-6 text-[#013d8e]"> {heading}</h2>
                                </>
                            )}

                            {subheading && (
                                <p style={customSubheading}
                                    className=" text-[18px] font-medium leading-[1.6] max-w-[700px] mx-auto mb-10 text-center -mt-3">
                                    {subheading}
                                </p>
                            )}
                        </>
                    )}
                </div>

                <div className=" container mx-auto relative flex justify-center items-start flex-nowrap gap-8 place-items-center max-lg:flex-wrap max-md:gap-16" >
                    <div className=" hidden lg:block absolute top-1/3 w-screen h-1 z-[1] opacity-80 [background-image:repeating-linear-gradient(to_right,transparent_0,transparent_14px,white_14px,white_20px),linear-gradient(to_right,#cee2ff_0%,#0151c1_100%)]" style={customTrackStyle} />

                    {steps.map((step, index) => (
                        <div key={index} className=" relative flex flex-col items-center text-center flex-1 min-w-[220px] gap-[10px] max-md:flex-[1_1_45%] max-md:min-w-[200px] max-md:max-w-[300px]">
                            <span className="font-medium mb-2">
                                Step {index + 1}
                            </span>

                            {variant === "default" ? (
                                <div className={` relative z-[2] flex items-center justify-center bg-white rounded-full w-[140px] h-[140px] border-[8px] border-transparent transition-transform duration-300 ${circleBorderByIndex(index)} max-md:w-[90px] max-md:h-[90px]`}>
                                    <Image src={step.icon} width={60} height={60} alt={step.heading} />
                                </div>
                            ) : (
                                <div className=" relative z-[5] flex items-center justify-center w-[200px] h-[200px] mb-6 max-md:w-[100px] max-md:h-[100px] max-md:mb-4">
                                    <Image src={step.icon} width={150} height={150} alt={step.heading} className="w-full h-full object-contain" />
                                </div>
                            )}

                            {/* Arrows between steps */}
                            {index < steps.length - 1 &&
                                (variant === "default" ? (
                                    <div className="hidden lg:block absolute top-1/3 -right-10 -translate-y-2 z-[3]">
                                        <Image src="/assets/images/qb-hosting/Arrow1.png" alt="arrow" width={14} height={14}/>
                                    </div>
                                ) : (
                                    <div className="hidden md:block absolute top-[145px] -right-[30px] z-[3] w-[18px] h-[18px]">
                                        <Image src="/assets/images/qb-hosting/Arrow2.png" alt="arrow" width={15} height={15} />
                                    </div>
                                ))}

                            <div className="max-w-[260px] mt-2 max-md:mt-4">
                                <h3 className="!text-[20px] font-semibold !text-[#464646] mb-2 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: `${step.heading}` }} />
                                <p className=" !text-[15px] font-medium text-[#464646] !leading-[22px] [&_a]:text-blue-700" dangerouslySetInnerHTML={{ __html: `${step.desc}` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DynamicStepper;
