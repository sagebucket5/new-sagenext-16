import React from "react";
import Image from "next/image";
import Classes from "@/styles/component/heros/oldHero.module.css";
import { IoCardOutline } from "react-icons/io5";
const OldHero = (props) => {

  return (
    <div className={Classes["custom_banner"]}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-baseline">
          <div className=" lg:h-auto h-full flex items-center lg:justify-normal justify-center">
            <div className={Classes["banner_content"]}>
              {props.subtitle && (
                <div className={Classes["subheading"]}>
                  <span>{props.subtitle}</span>
                </div>
              )}
              <h1 dangerouslySetInnerHTML={{ __html: props.heading }}></h1>
              {props.discOne && (
                <span
                  className={Classes["banner_disc"]}
                  dangerouslySetInnerHTML={{ __html: props.discOne }}
                />
              )}
              {props.listDisc && (
                <ul className={Classes["speciality"]}>
                  {props.listDisc.map((item, index) => {
                    return (
                      <li key={index}>
                        <Image width={23} height={23} src={item.src} alt={item.alt || 'Service Banner'} priority='true' />
                        <span>{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
              {props.disc && (<span className={`${Classes["banner_disc"]} ${props.marginBottom ? `mb-3` : ""}`} dangerouslySetInnerHTML={{ __html: props.disc }} />)}
              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row items-center justify-start container gap-2 my-4 font-semibold">
                {props.cta ? props.cta : ""}
              </div>
              {props.required && (<ul className={Classes["pros"]}><IoCardOutline size={21} color="#fff" /><li>No CC Required</li></ul>)}
            </div>
          </div>
            <div className="">
              <div className="">
                <div className="relative w-11/12 h-11/12">
                  <Image src={props.bgImage} alt={props.alt || "Tax Software Hosting"} priority={'true'} width={props.width || 400} height={props.height || 400} className={`${props.width && "mx-auto"}`} />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OldHero;
