export default function StepByStep({ StepsData = [] }) {
    return (
        <div className="container pb-4 mx-auto px-2 md:px-0 ">
            <div className="grid grid-cols-1 lg:w-[91%] w-full ml-auto">
            {StepsData.map((step, index) => (
                <div key={index} className="grid lg:grid-cols-[80px_1fr] grid-cols-1 gap-5 p-[2rem_1rem] md:p-[2rem]">
                    <div className="flex flex-wrap justify-center lg:self-end self-center flex-col items-center gap-3">
                        <p className="!text-[3.5rem] !font-bold !text-white flex items-center justify-center w-[80px] h-[80px] bg-[#5D90D9] rounded-full shadow-[0_0_0_12px_rgba(170,204,255,1)]">
                            {step.stepNumber}
                        </p>
                        <p className="!text-[17.16px] font-medium !text-[#5F5F5F] ">
                            Step {step.stepNumber}
                        </p>
                    </div>
                    <div className="bg-white rounded-[14px] lg:mx-[25px] p-[29px] border-b-4 border-[#FDC736] flex flex-col">
                        <h4 className="pb-1.5 !text-[20px] !font-semibold">{step.heading}</h4>
                        <p className="!font-normal !text-[#292929] !leading-6 !text-[16px]">{step.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
