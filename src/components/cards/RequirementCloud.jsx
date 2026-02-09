"use client";
import React from 'react'
const RequirementCloud = (props) => {
    return (
        <div className="py-10  main-requirement-cloud">
            <div className='text-center px-3 pb-5 mb-3'>
                <p className={`text-center ${props.className}`}>{props.subText}</p>
                <h2>{props.title}</h2>
            </div>
            <div className="requirement-cloud">{[{ bg: "#b8b7ba5c" }, { bg: "#b8b7ba5c" }, ...props.arr1, { bg: "#d3cbe661" }, { bg: "#d3cbe661" }].map((_, index) => (
                <div className='box' key={index}>
                    {_?.img ? (<span className='imgSpan' style={{ background: _.bg }}><img src={_?.img} alt={`icon ${index}`} className="iconSize" /></span>) : (<p className="imgbox" style={{ background: _.bg }} />)}
                    {_?.title && <p className='text-center px-3' style={{ fontSize: "14px", lineHeight: "140%", color: "#626367" }} dangerouslySetInnerHTML={{ __html: _?.title ?? "" }} />}
                </div>
            ))}</div>
            <div className="requirement-cloud" style={{ marginTop: "35px" }}>{[{ bg: "#c7c7c74f" }, { bg: "#c7c7c76b" }, ...props.arr2, { bg: "#b8b7ba61" }, { bg: "#b8b7ba54" }].map((_, index) => (
                <div className='box' key={index}>
                    {_?.img ? (<span className='imgSpan' style={{ background: _.bg }}><img src={_?.img} alt={`icon ${index}`} className="iconSize" /></span>) : (<p className="imgbox" style={{ background: _.bg }} />)}
                    {_?.title && <p className='text-center px-3' style={{ fontSize: "14px", lineHeight: "140%", color: "#626367" }} dangerouslySetInnerHTML={{ __html: _?.title ?? "" }} />}
                </div>
            ))}</div>

            <style jsx>
                {`
                .main-requirement-cloud{max-width: 100%;overflow: hidden;}
                .requirement-cloud {display: flex;margin: 0 0 0 -4%;gap: 32px;width: 120%;height: 100%;}
                    .iconSize{width: 44px;height: 44px;margin: 0 auto;}
                    .box{min-width: 175px;width: 175px;height: 195px;box-shadow: 0px 4px 6.2px 0px hsla(0, 0%, 0%, 0.1);border-radius: 8px;border: 1px solid #E5E5E5;}
                    .imgSpan,
                    .imgbox{display: flex;justify-content: center;align-items: center;margin: 24px auto 29px;width: 83px;height: 68px;border-radius: 9px;border: 1px solid #E5E5E5;}
                    @media (min-width: 1440px) {
                    .requirement-cloud{align-items:center;margin:0;}
                    }
                    @media (max-width: 1034px) {
                        .requirement-cloud {overflow-x: scroll; padding-bottom: 10px;}
                    }
                    @media (max-width: 768px) {
                        .requirement-cloud .box:last-child,
                        .requirement-cloud .box:first-child{display: none;}
                        .requirement-cloud { margin: 0 14% 0 -14%;}
                    }
                `}
            </style>
        </div>
    )
}

export default RequirementCloud