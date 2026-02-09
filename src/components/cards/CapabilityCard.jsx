'use client'

const CapabilityCard = ({ arr }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            {arr.map((item, index) => (
                <div key={index} className="relative flex border border-[#C2C2C2] rounded-xl overflow-hidden md:flex-row flex-col text-center md:text-left">
                    <div className="p-5 z-10 w-full">
                        <h3 className="text-[#464646] text-xl font-semibold">{item.title}</h3>
                        <p className="text-[#464646] !leading-[25px] text-justify overflow-hidden transition-all duration-500 ease-in-out w-1/2 md:w-full">
                            {item.description}
                        </p>
                    </div>
                    <div className="absolute right-0 bottom-0 w-[220px] h-[220px] flex justify-center items-center z-0 md:static md:w-[190px] md:h-[230px] sm:w-[150px] sm:h-[150px]">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center sm:object-[100%_60%]"
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
        </div>

    );
};

export default CapabilityCard;