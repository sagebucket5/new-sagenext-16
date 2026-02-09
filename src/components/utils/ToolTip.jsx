'use client'
import Link from "next/link";

const ToolTip = (props) => {
    const {
        text,
        dot,
        href,
    } = props;

    const buttonClasses = [
        "relative",
        "inline-flex",
        "justify-center",
        "items-center",
        "rounded-full",
        "mb-2",
        "py-2",
        "px-6",
        "uppercase",
        "font-semibold",
        "leading-[140%]",
        "tracking-normal",
        "outline-none",
        "overflow-hidden",
    ].join(" ");

    const dotClasses = "w-2.5 h-2.5 rounded-full inline-block bg-gradient-radial from-green-600/80 to-white relative z-10";

    const content = (
        <>
            {dot ? <span className={dotClasses} /> : null}
            <span className="relative" dangerouslySetInnerHTML={{ __html: text }} />
        </>
    );

    return href ? (
        <Link href={href} aria-label={text} style={{
            fontSize:props.size||"11px",
            border:props.border||"none",
            background:props.bg||"#fff",
            boxShadow:props.boxShadow||"",
            color:props.color||"#061C52"}} className={buttonClasses}>
            {content}
        </Link>
    ) : (
        <div aria-label={text} style={{
            fontSize:props.size||"11px",
            border:props.border||"none",
            background:props.bg||"#fff",
            boxShadow:props.boxShadow||"",
            color:props.color||"#061C52"}} className={`items-center block ${buttonClasses}`}>
            {content}
        </div>
    );
};

export default ToolTip;