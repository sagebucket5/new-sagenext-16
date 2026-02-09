'use client'

import { useState } from 'react';
import style from "@styles/pages/support.module.css"
import Link from 'next/link';

const cardsData = [
  {
    link: "https://www.thesagenext.com/ticket-submission",
    name: "Ticket Submission",
    image: "/assets/images/support/icons/static/ticket.webp",
    gif: "/assets/images/support/icons/submission.gif",
  },
  {
    link: "https://join.zoho.com/",
    name: "Join Remote Support",
    image: "/assets/images/support/icons/static/join_remote.webp",
    gif: "/assets/images/support/icons/join_remote.gif",
  },
  {
    link: "https://www.sendthisfile.com/f.jsp?id=36TjpH1pwEh3IhUZonN0dDXy",
    name: "Send File",
    image: "/assets/images/support/icons/static/send_file.webp",
    gif: "/assets/images/support/icons/send_file.gif",
  },
  {
    link: "https://sagenext.wetransfer.com/",
    name: "We Transfer",
    image: "/assets/images/support/icons/static/we_transfer.webp",
    gif: "/assets/images/support/icons/we_transfer.gif",
  },
  {
    link: "https://whatismyipaddress.com/",
    name: "What is My IP?",
    image: "/assets/images/support/icons/static/ip_finder.webp",
    gif: "/assets/images/support/icons/ip_finder.gif",
  },
  {
    link: "https://status.thesagenext.com/",
    name: "System Status",
    image: "/assets/images/support/icons/static/system.webp",
    gif: "/assets/images/support/icons/system.gif",
  },
];

export default function HeroCards() {
  const [hoveredCard, setHoveredCard] = useState(null); // Track which card is hovered

  const handleMouseEnter = (index) => { setHoveredCard(index); };
  const handleMouseLeave = () => { setHoveredCard(null); };

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 mt-5 text-center">
      {cardsData.map((card, index) => (
        <aside className="px-2 py-1" key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
          <Link href={card.link} className={`${style.whiteCards} h-full`}>
            <img src={hoveredCard === index ? card.gif : card.image} alt={card.name} width={60} height={60} />
            <span className={style.boxTitle}>{card.name}</span>
          </Link>
        </aside>
      ))}
    </div>
  );
}