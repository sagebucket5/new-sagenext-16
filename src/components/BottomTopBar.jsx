import Link from "next/link";
import { FaUser } from "react-icons/fa6";

export default function BottomTopBar() {
  return (
    <div className="sticky bottom-0 z-[9999] hidden md:block h-[37px] bg-[#135499]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-12 items-center">
          <Link href="tel:+1-855-922-7243" className="col-span-4 flex items-center justify-center gap-1.5 py-1 !text-white font-medium">
            <FaUser size={15} className="!text-white" /> Toll Free Number (1-855-922-7243)
          </Link>
          <Link href="/trial" className="col-span-8 md:col-span-6 text-center !text-white font-medium">
            Enjoy <strong className="text-[#ffd447]">Free Hosting For 3 Months*</strong>, Offer Valid On Annual Subscription Only.
          </Link>
        </div>
      </div>
    </div>
  );
}