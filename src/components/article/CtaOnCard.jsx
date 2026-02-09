import Image from "next/image";
import Link from "next/link";

export default function CtaOnCard(props) {
    return (
        <div className="bg-blue-100 p-4 md:p-8 rounded-lg shadow-md">
            <Link href={props.ctaLink || '#'} className="grid grid-cols-3 items-center">
                <div className="col-span-2 text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 px-2">
                        {props.title}
                    </h2>
                    <p className="text-gray-400 !text-[16px] px-2">
                        {props.description}
                    </p>
                </div>
                <div className="col-span-1 text-center">
                    <Image
                        src={props.imageSrc || "/assets/images/longforms/QuickBooks%20Pro.png"}
                        height={300}
                        width={240}
                        alt={props.title || "QuickBooks Pro"}
                        className={`${props.imgType || 'object-cover'} object-center h-[240px] rounded-lg mx-auto`}
                    />
                </div>
            </Link>
        </div>
    )
}