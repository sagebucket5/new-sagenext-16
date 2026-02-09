import BlueCta from "@components/buttons/BlueCta";

const HowCostlyCloud = (props) => {
    return (
        <section className="w-full">
            <div className="container mx-auto">
                <div
                    className="rounded-[10px] bg-no-repeat bg-cover"
                    style={{ backgroundImage: "url('/assets/images/drake-hosting/bg-banners.webp')" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        {/* Left Content */}
                        <div className="p-6 md:p-8 lg:p-10 text-white">
                            <h2 className="text-[30px] font-bold tracking-wide mb-4">
                                {props.irsHeading || "How Costly is Cloud Hosting for Drake Tax Software?"}
                            </h2>
                            <p className="text-[#e9e9e9] text-[16px] leading-[25px] mb-4">
                                {props.irsData || `Cloud hosting for Drake Tax Software is a budget-friendly
            option for small and mid-sized businesses since the pricing
            is defined by a pay-per-use policy. You only pay for the
            resource that you use and the cloud-hosted setup can easily
            be customized to suit all levels of your requirements.`}
                            </p>
                            <span className="block font-medium text-[16px] mb-4">
                                {props.irsSubHeading || "Talk to Us for Custom Cloud Solutions"}
                            </span>
                            <div className="pb-5 mt-3 text-left">
                                <BlueCta
                                    text1="Get Custom Cloud Solutions"
                                    href1="/schedule-meeting"
                                    bgColor="#6ab745"
                                    color="#fff"
                                />
                            </div>
                        </div>

                        {/* Right Image */}
                        <div
                            className="h-[100%] min-h-[250px] md:min-h-[300px] bg-no-repeat bg-contain md:bg-[right] bg-center"
                            style={{
                                backgroundImage: "url('/assets/images/drake-hosting/HowCostly-Banner.webp')"
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HowCostlyCloud;