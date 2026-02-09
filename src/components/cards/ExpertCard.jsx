"use client"
import React from 'react'
const ExpertCard = (props) => {
    return (
        <><style jsx>{`
        .toolsContainer {
            display: grid;
            max-width: 1150px;
            margin: 0 auto;
            justify-content: space-between;
            grid-template-columns: repeat(2, 1fr);
            gap:  40px 30px;
            }
        .card {overflow: hidden;display: flex;border: 1px solid #C2C2C2;border-radius: 15px;}
        .card:first-child ,
        .card:last-child {border-left: 8px solid #F4AC04;}
        .card:nth-child(2) ,
        .card:nth-child(3) {border-left: 8px solid #051B3A;}
        .title {color: #051B3A;font-size: 18px;font-weight: 600;}

        .desc {
            font-size: 14px;
            line-height: 26px;
            color: #464646;
            text-align: justify;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;
        }

        .child1 {
            flex: 1 0 calc(100%-165px);
            padding: 20px;
            z-index:10;
            width:80%;
        }

        .child2 {
            flex: 1 0 165px;
            width: 165px;
            height: 165px;
            display: flex;
            justify-content: center;
            align-items: center;
            position:absolute;
            right:-18px;
            bottom:10%;
            z-index:1;
        }
        .card:nth-child(3)::before ,
        .card:nth-child(2)::before {
            content: '';
            height: 318px;
            width: 318px;
            border-radius: 50%;
            position: absolute;
            top: -5%;
            right: -20%;
            bottom: 0;
            background: #F9F3FF;
            z-index: 0;
            transition: opacity 0.3s ease-in-out;
        }
        .child2 img {
            height: auto;
            width: 100%;
            object-fit: contain;
        }

        @media screen and (max-width: 960px) {
        .child2 {
            width: 190px;
            height: 190px;
        }
            .child1 {
            width: 65% ;
            }
        }
        @media screen and (max-width: 790px) {
            .toolsContainer {
                grid-template-columns: repeat(1, 1fr);
            }

            .card {
                flex-direction: row;
                text-align: center;
            }
        }

        @media screen and (max-width: 480px) {
            .card .child1 {
            flex: 1 0 60%;
                width: 60%;
                padding: 10px 0px 0px 10px;
            }
            .card .child2 {
                width: 40%;
                flex: 1 0 40%;
                position: relative;
                height: auto;
                bottom: 3%;
                right: 0;
                z-index: 1;
        }                
        }
    `}</style>
            <div className="toolsContainer mt-5">
                {props.arr.map((item, index) => (
                    <div className="card relative" key={index}>
                        <div className="child1">
                            <h3 className="title">{item.title}</h3>
                            <p className="desc">{item.description}</p>
                        </div>
                        <div className="child2">
                            <img src={item.image} alt={item.title} loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ExpertCard