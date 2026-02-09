import ToolTip from "./ToolTip";

const OfferBanner = (props) => {
  return (
    <div id="OfferBanner" className={`relative mt-[45px] min-h-[36vh] bg-[linear-gradient(90deg,_#023576_30%,_#549ba7_120%)] place-items-center place-content-center ${props.className}`}>
      <div className={`mx-auto text-center py-12 flex flex-col items-center gap-7`} >
        <div className={`absolute h-full w-full ${props.opacity ? "bg-black/30" : ""}  top-0 left-0`} />

        {props.title && ( <ToolTip text={props.title} bg="#FFFFFF2E" color="white" /> )}

        <div className="z-10">
          <span className="text-white! leading-normal! text-[32px]!">
            <b>{props.strong1}</b>
            <span className={props.normalText1ClassName}>
              {props.normalText1}
            </span>
            <b>{props.extraHeading}</b>
            <br />
            <span>{props.normalText2}</span> <strong>{props.strong2}</strong>
          </span>

          {props.subtext && <p className={`text-white ${props.subtextClass}`}>{props.subtext}</p>}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-4 font-semibold z-1">
          {props.cta ? props.cta : ""}
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
