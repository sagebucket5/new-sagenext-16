import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBarAd = (props) => {
  return (
    <Link href={props.href ?? "/trial"} target="_blank" rel="noreferrer">
      <Image
        height={300}
        width={300}
        className="w-100 rounded-lg"
        src={props.img ?? "/assets/images/ads-image/ads-6.png"}
        alt="cloud banner"
      />
    </Link>
  );
};

export default SideBarAd;
