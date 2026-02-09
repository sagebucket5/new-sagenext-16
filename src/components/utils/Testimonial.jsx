"use client";

import Image from "next/image";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const testimonials = [
	{
		img: "/assets/images/banner/balcheema.webp",
		videoLink: "https://www.youtube.com/embed/MBM0aZeb9cY",
		title: "Streamlined Transitions, Continuous Support",
		data: "With a career spanning three decades, Bal Cheema, a seasoned CPA, has given her stamp of approval to Sagenext for its effortless server migration process, exceptional round-the-clock support, and cost-effective pricing structure. For Cheema, Sagenext stands out as the premier QuickBooks hosting provider, thanks to its streamlined transition services, dependable support, and significant cost savings.",
		clientName: "Bal Cheema",
		position: "CPA",
	},
	{
		img: "/assets/images/banner/PeteBlayant.png",
		videoLink: "https://www.youtube.com/embed/YB0G2bNeNRU",
		title: "Easy Data Migration & Lowest Pricing",
		data: "Here’s Pete, sharing his experience with Sagenext. He and his wife, who run a small firm, decided to switch to Sagenext for Sage 50 Premium Accounting to ensure reliable backups and remote work capabilities. They are pleasantly surprised with the results, noting that they can access their systems remotely, and they receive excellent support from Sagenext. Pete highly recommends Sagenext for anyone needing multi-location access to their software.",
		clientName: "Pete Blayant",
		position: "CPA",
	},
	{
		img: "/assets/images/banner/RolandThomas.png",
		videoLink: "https://www.youtube.com/embed/_05k4mzSATk",
		title: "Reliable & Cost Effective QuickBooks",
		data: "Roland Thomas, owner of Bio Age, switched to Sagenext for reliable and cost-effective QuickBooks and Microsoft hosting services. Impressed by Sagenexts customer service and 24/7 support, including Skype access, and their adept handling of regular QuickBooks updates. He values their competent maintenance and assistance with QuickBooks upgrades for his U.S. and Canada operations notably eased the firms IT burdens.",
		clientName: "Roland Thomas",
		position: "CPA",
	},
];

export default function Testimonial() {
	const [playing, setPlaying] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};
	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};
	const { img, videoLink, title, data, clientName, position } =
		testimonials[currentIndex];

	return (
		<section className="container mx-auto relative">
			{playing && (
				<div className="absolute top-1/4 lg:top-1/2 left-1/2 -translate-1/2 border-8 border-white drop-shadow-2xl z-10">
					<div className="relative">
						<iframe
							className="h-[400px] w-[320px] lg:h-[450px] lg:w-[800px]"
							src={videoLink}
							title="Sagenext Cloud Hosting Review | Bal Cheema, CPA | Sagenext"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
						></iframe>

						<button
							className="absolute -top-5 -right-5 rounded-full p-2 bg-white border border-neutral-300"
							onClick={() => setPlaying(false)}
						>
							<IoClose size={20} />
						</button>
					</div>
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-3 mx-auto p-3 items-center relative">
				<div
					className="flex justify-center group"
					onClick={() => setPlaying(true)}
				>
					<Image
						alt={clientName}
						className="rounded-md static md:absolute top-20 left-40 w-2xs hover:shadow-xl transition-all aspect-square object-cover"
						src={img}
						width={300}
						height={400}
					/>

					<FaYoutube className="size-16 absolute left-60 lg:top-20 lg:left-[370px] text-red-500 max-md:animate-pulse group-hover:animate-pulse" />
				</div>

				<span className="absolute flex items-center justify-center gap-2 right-16 md:right-8 bottom-8">
					<button
						onClick={handlePrevious}
						className="border rounded-full flex items-center justify-center p-1"
					>
						<IoIosArrowBack size={20} color="black" />
					</button>
					<button
						onClick={handleNext}
						className="border rounded-full flex items-center justify-center p-1"
					>
						<IoIosArrowForward size={20} color="black" />
					</button>
				</span>

				<div className="border border-gray-200 p-4 md:p-12 md:py-20 col-span-2 grid pl-4 md:pl-20">
					<span className="font-semibold !text-[#7694bc] !text-lg py-1">
						Client Testimonial
					</span>
					<span className="!font-semibold !text-[20px] py-1 !text-[#464646]">
						{title}
					</span>
					<p className="text-[#464646] !font-[400] pt-3">{data}</p>
					<span className="!text-[20px] !font-[600] tracking-wider text-[#464646]">
						{clientName}
					</span>
					<p className="font-medium">{position}</p>
				</div>
			</div>
		</section>
	);
}
