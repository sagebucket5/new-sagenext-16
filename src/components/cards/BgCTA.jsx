import React from 'react'
import styles from "@styles/component/comman/enterpriseBenefits.module.css";
import BlueCta from '@components/buttons/BlueCta';
import ToolTip from '@components/utils/ToolTip';
import FormModal from '../FormModal';
const BgCTA = (props) => {
    
    return (
        <section className={styles.bgCTA} style={{ background: props.bgImage ? `url(${props.bgImage})` : "" }}>
            <div className="container mx-auto">
                <div className="w-11/12 text-center mx-auto">
                    <ToolTip color={props.ctaColor} bg={props.ctaBg} size='11px' text={props.ctaText} border={props.border} />
                    <span className={styles.titleCta} dangerouslySetInnerHTML={{ __html: props.title }} />
                    {
                        props.desc ? <p>{props.desc}</p> : ""
                    }
                    <div className={styles.ctaBoxs}>
                        {props.cta ?? <div className='flex items-center flex-col md:flex-row justify-center gap-2.5'>
                            <BlueCta
                                href1="/trial"
                                text1="Get A Free Trial Now"
                                ctaBorder="1px solid #0151C1"
                                bgColor="#0151C1"
                                textColor="#fff"
                            />
                            <FormModal
                                text="Request A Free Quote"
                                BgColor="transparent"
                                color="#fff"
                                ctaBorder="1px solid #0151C1"
                            />
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BgCTA