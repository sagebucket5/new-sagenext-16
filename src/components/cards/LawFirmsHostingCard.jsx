"use client"
import React from "react";
const LawFirmsHostingCard = (props) => {
    return (
        <div className="law-card-wrapper mt-4">
            {props.arr?.map((feature, index) => (
                <div key={index} className="law-card">
                    <img src={feature.icon} alt={feature.title} className="card-img-top" style={{ width: "35px", height: "35px", objectFit: "contain" }} loading="lazy" />
                    <h3 className="card-title text-dark">{feature.title}</h3>
                    <p className="card-text text-muted">{feature.description}</p>
                </div>
            ))}
            <style jsx>{`
        .law-card-wrapper {gap: 40px;display: flex;flex-wrap: wrap;background: white;max-width: 1000px;}
        .law-card {border: 1px solid #E5E5E5;position: relative;overflow: hidden;flex: 1 0 calc(50% - 50px);display: flex;gap: 8px;flex-direction: column;padding: 23px 13px 20px 28px;background: transparent;border-radius: 12px;}
        .law-card h3 {font-weight: 600;font-size: 20px;line-height: 154%;letter-spacing: 1%;color: #082A56;margin-bottom: 7px;}
        .law-card p {color:#5D5B5B;font-weight: 400;line-height: 159%;letter-spacing: 1%;}
        .law-card img {width: 35px;height: 35px;object-fit: contain;}
        .law-card::after {content: "";position: absolute;    width: 535px; height: 570px;background-color: #background: rgba(230, 255, 245, 0.7); border-radius: 50%;z-index: 0;}
        .law-card::after {content: "";position: absolute;  width: 535px;  height: 570px; background-color: rgba(59, 130, 246, 0.05);border-radius: 50%;z-index: 0;}
        .law-card-wrapper .law-card:nth-child(1) ,
        .law-card-wrapper .law-card:nth-child(4) {border-bottom: 6px solid #051F45;}
        .law-card-wrapper .law-card:nth-child(1)::after {right: -50%;top: -2%;}
        .law-card-wrapper .law-card:nth-child(2)::after {left: -50%;top: -2%;}
        .law-card-wrapper .law-card:nth-child(3)::after {right: -50%;top: -85%;}
        .law-card-wrapper .law-card:nth-child(4)::after {left: -50%;top: -88%;}
        @media (max-width: 768px) {
          .law-card-wrapper {gap: 20px;}
          .law-card {flex: 1 0 calc(100% - 20px);}
        }
      `}</style>
        </div>
    );
};

export default LawFirmsHostingCard;
