import { IoCloseOutline } from "react-icons/io5";

export default function AppCard({
  app,
  onRemoveApp,
}) {
  return (
    <div
      key={app.name}
      className="flex flex-col md:flex-row items-start md:items-center justify-between h-fit !px-4 py-3 border !border-[#f9fafba0] even:bg-blue-50 odd:bg-white gap-2 md:gap-0"
    > 
      <div className="flex items-center justify-between gap-2 md:w-1/2">
        <h4 className="!text-[14px] md:!text-[17px] leading-[154%] font-normal !tracking-[1%] !text-[#000] whitespace-nowrap !mb-0">
          {app.name}
        </h4>

        <span className="bg-neutral-200 text-[#0C0C48] py-0.5 px-3 font-semibold text-[10px] tracking-[1%] leading-[164%] rounded-full capitalize border border-white">
          {app.type}
        </span>
      </div>

      <div className="flex items-center !justify-between md:justify-end gap-1 md:gap-4 md:w-1/2 w-full">
        <p className="!text-[15px] !tracking-[1%] !font-medium whitespace-nowrap">
          ${app.totalPrice}/mo
        </p>
        <button
          onClick={() => onRemoveApp(app.name)}
          className="cursor-pointer rounded-full bg-[#ffffff] text-[#DC2626] h-8 w-8 inline-flex justify-center items-center shadow-md"
        >
          <IoCloseOutline size={22} />
        </button>
      </div>
    </div>
  );
}
