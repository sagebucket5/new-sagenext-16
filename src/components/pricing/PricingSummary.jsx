"use client";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import FormModal from "../FormModal";

export default function PricingSummary({
  monthlyTotal,
  annualTotal,
  discountedHalfYearly,
  discountedAnnual,
  halfYearlyTotal,
}) {

  return (
    <div className="!px-5 pt-3 bg-blue-50 md:absolute bottom-0 w-full">
      <table className="table-auto w-full">
        <tbody className="grid grid-cols-3 *:py-2">
          {/* Monthly Cost */}
          <tr className="col-span-full grid md:grid-cols-3 w-full">
            <td className="text-left font-bold leading-[154%] tracking-[1%] col-span-1">
              Monthly Cost :
            </td>
            <td className="md:text-right font-bold text-[16px] leading-[154%] tracking-[1%] md:col-span-2">
              ${monthlyTotal}
            </td>
          </tr>

          {/* Half Yearly Cost */}
          <tr className="col-span-full grid md:grid-cols-3 w-full">
            <td className="text-left col-span-1 font-bold leading-[154%] tracking-[1%]">
              Half Yearly Cost :
            </td>
            <td className="md:col-span-2 text-right font-semibold text-[16px] leading-[154%] tracking-[1%] space-x-2 flex items-center md:justify-end">
              <span className="bg-[#334064] text-white py-[3px] px-3 font-bold text-[10px] tracking-[1%] leading-[164%] rounded-full">
                5% Off
              </span>
              <span className="line-through text-neutral-500 font-medium text-[14px]">
                ${halfYearlyTotal}
              </span>
              <span className="font-bold">${discountedHalfYearly}</span>
            </td>
          </tr>

          {/* annual Cost */}
          <tr className="col-span-full grid grid-cols-1 md:grid-cols-3 w-full">
            <td className="text-left col-span-1 font-bold leading-[154%] tracking-[1%]">
              Annual Cost :
            </td>
            <td className="md:col-span-2 text-right font-semibold text-[16px] leading-[154%] tracking-[1%] space-x-2 flex items-center md:justify-end">
              <span className="bg-[#334064] text-white py-[3px] px-3 font-bold text-[10px] tracking-[1%] leading-[164%] rounded-full">
                10% Off
              </span>
              <span className="line-through text-neutral-500 font-medium text-[14px]">
                ${annualTotal}
              </span>
              <span className="font-bold">${discountedAnnual}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="w-full bg-black h-[0.5px] my-5" />

      <div className="flex flex-col md:flex-row gap-0 sm:gap-3 py-3 leading-[154%] tracking-[1%]">
        <aside className="md:col-span-2">
          {/* <PricingModal
                        selectedApps={appSummry}
                        onUpdateUserCount={onUpdateUserCount}
                    /> */}
          <FormModal bgColor="#0C0C48" />
        </aside>
        <aside className="pt-1 sm:pt-0">
          <Link
            href={"tel:1-855-922-7243"}
            className="border border-[#A4A2A2] h-[50px] w-full rounded-[28px] flex items-center justify-center gap-2 px-5"
          >
            <IoCallOutline size={22} className="text-[#979191]" />
            <span className="text-[#8B8B8B] font-bold text-[16px]">
              Contact Sales
            </span>
          </Link>
        </aside>
      </div>
    </div>
  );
}
