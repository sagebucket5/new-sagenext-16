const Stepper = (props) => {
  const renderStep = (stepNumber) => {
    const stepTextHeading = props[`step${stepNumber}textheading`];
    const stepHeading = props[`step${stepNumber}heading`];
    const stepDisc = props[`step${stepNumber}disc`];

    return (
      <div className="text-center col-span-8 md:col-span-2 relative z-10 px-2 md:mb-0">
        <div className="mb-4">
          <p className="text-[#292929] !text-[16px] !leading-[28px] font-medium">
            {stepTextHeading}
          </p>
          <img
            src={`/assets/images/qb-hosting/steps${stepNumber}.svg`}
            width={150}
            height={150}
            alt={`icon${stepNumber}`}
            className="mx-auto"
          />
        </div>
        <div>
          <h3 className="!text-[17px] font-bold text-black">{stepHeading}</h3>
          <div className="rounded-md py-1 px-4 w-full">
            <span dangerouslySetInnerHTML={{ __html: stepDisc || "" }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative bg-[#f3f8ff] overflow-hidden">
      {/* blue dot line */}
      <div className="hidden md:block absolute left-0 right-0 top-[46.6%] z-[1] h-1 bg-[length:10px_5px,100%_3px] bg-[linear-gradient(90deg,transparent,transparent_50%,white_50%,white_100%),linear-gradient(90deg,#cee2ff,#cee2ff,#86b8ff,#0151c1)]" />
      {/* stepper holder */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full xl:w-[91.666667%] lg:w-full md:w-10/12">
            <div className="text-center pt-12 md:w-[82vw] mx-auto">
              {props.heading && (
                <h2 className="text-2xl font-bold">{props.heading}</h2>
              )}
              {props.subheading && (
                <span className="text-lg font-medium block">
                  {props.subheading}
                </span>
              )}
            </div>

            <div className="relative z-[3] mt-10 md:mt-7">
              <div className="grid grid-cols-8 flex-wrap justify-center items-start">
                {renderStep(1)}
                <div className="mt-2 md:mt-[3.5rem] max-md:col-span-8">
                  <img
                    loading="lazy"
                    src="/assets/images/qb-hosting/Arrow1.png"
                    alt="Arrow Icon"
                    width={15}
                    height={20}
                    className="mx-auto rotate-90 md:rotate-0"
                  />
                </div>
                {renderStep(2)}
                <div className="mt-2 md:mt-[3.5rem] max-md:col-span-8">
                  <img
                    loading="lazy"
                    src="/assets/images/qb-hosting/Arrow2.png"
                    alt="process"
                    width={15}
                    height={20}
                    className="mx-auto rotate-90 md:rotate-0"
                  />
                </div>
                {renderStep(3)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
