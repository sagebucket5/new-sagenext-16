import React from 'react'
import styles from "@styles/component/comman/enterpriseBenefits.module.css";
import CtaButton from '../buttons/CtaButton';

const BannerCTA = (props) => {
    return (
        <section
            className={styles.bgCTA}
            style={{
                backgroundImage: "url('/assets/images/app-directory/cta_bg.png')",
                backgroundSize: 'fit',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#000041',
                borderRadius: '0.85rem',
            }}
        >
            <div className="container">
                <div className="w-11/12 text-center mx-auto py-3 flex flex-col gap-8">
                    <span
                        className={`text-[32px] mt-2 font-semibold text-white font-sans`}
                        {...(typeof props.title === 'string' && props.title.includes('<')
                            ? { dangerouslySetInnerHTML: { __html: props.title } }
                            : { children: props.title })}
                    ></span>
                    {props.desc ? <p>{props.desc}</p> : ""}
                    <div className={styles.ctaBoxs}>
                        {props.cta ?? (
                            <div className='flex items-center flex-col md:flex-row justify-center gap-10'>
                                <CtaButton
                                    hoverBorder="#000041"
                                    customClass="h-[50px]"
                                />
                                <CtaButton
                                    text="Check Plan &amp; Pricing"
                                    href="/pricing"
                                    customClass="w-[276px] h-[50px]"
                                    hoverBorder="#000041"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerCTA
