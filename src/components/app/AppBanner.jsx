import React from "react";
import Classes from "@styles/pages/app-dir.module.css";
const AppBanner = (props) => {
    return (
        <div className={Classes.custom_banner}>
            <div className="container mx-auto">
                <div className={`flex items-center justify-center ${Classes["banner-height"]}`}>
                    <div className="w-full">
                        <div className={Classes["banner-content"]}>
                            <h1 dangerouslySetInnerHTML={{ __html: props.heading }}></h1>
                            {props.disc && (<span className={`${Classes["banner-disc"]}`} dangerouslySetInnerHTML={{ __html: props.disc }} />)}
                            {props.cta}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className={Classes["right-section-banner"]}>
                            <div className={Classes["banner-image"]}>
                                <img src={props.bgImage} alt={props.alt || "QuickBooks Hosting"} priority='true' width={props.size || 384} height={props.size || 308} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppBanner;