import { FiCheck } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const QBdiff = () => {
  return (
    <section className="relative my-20 container mx-auto">
      <div className="flex flex-col gap-6 items-center text-center">
        <div>
          <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
            DIFFERENCES
          </span>
        </div>

        <div className="flex flex-col items-center gap-5 max-lg:px-5">
          <h2
            className={`text-[32px] leading-[133%] tracking-normal max-w-[722px]`}
          >
            QuickBooks Online vs. Hosted QuickBooks Desktop: Which is Right for
            You?
          </h2>

          <span className="text-xl text-[#4d4d4d] font-semibold">
            This is a critical decision point for many businesses. Let's break
            it down honestly.
          </span>

          <span className="text-[17px] text-[#6D6D6D] max-w-6xl">
            QuickBooks Online (QBO) is a good, simplified solution. It's
            browser-based, requires no installation, and is built for
            straightforward accounting needs. However, it often lacks the
            advanced features, custom reporting, and industry-specific tools of
            its desktop counterparts.
            <br />
            <br />
            Hosted QuickBooks Desktop takes the full-powered, feature-rich
            software you already know and love, whether it's Pro, Premier, or
            Enterprise, and makes it accessible from the cloud. You get the best
            of both worlds: the unparalleled functionality of the desktop
            version with the accessibility and collaboration of the cloud.
          </span>
        </div>
      </div>

      <div className="mt-16 lg:place-items-center overflow-x-scroll">
        <table className="border-separate border-spacing-0 border border-[#BFBFBF] rounded-xl table-fixed! overflow-hidden max-w-6xl">
          <thead>
            <tr className="*:py-5 *:first:w-1/6 *:w-1/4 *:not-last:border-r *:border-r-[#CFCFCF] bg-[#2157E0] *:[&>h3]:text-white! *:[&>h3]:mb-0! *:text-start! *:lg:pl-12 *:pl-5">
              <th>
                <h3 className="max-lg:text-lg! text-xl!">Feature</h3>
              </th>
              <th>
                <h3 className="max-lg:text-lg! text-xl!">QuickBooks Online</h3>
              </th>
              <th>
                <h3 className="max-lg:text-lg! text-xl!">
                  Hosted QuickBooks Desktop
                </h3>
              </th>
            </tr>
          </thead>

          <tbody className="*:*:first:font-bold *:*:first:text-black *:*:text-[#626262] *:*:lg:pl-12">
            <tr className="*:px-5 *:py-5 *:not-first:min-w-[300px] *:first:w-1/6 *:w-1/4 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
              <td>Access</td>
              <td>
                <span className="flex items-center justify-between">
                  Anywhere via browser/app
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </span>
              </td>
              <td>
                <span className="flex items-center justify-between">
                  On-premise, installed locally
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </span>
              </td>
            </tr>

            <tr className="*:px-5 *:py-5 *:first:w-1/6 *:w-1/4 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF] bg-[#F8FAFF]">
              <td>Functionality</td>
              <td>
                <span className="flex items-center justify-between">
                  Streamlined, core features
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </span>
              </td>
              <td>
                <span className="flex items-center justify-between">
                  Full, advanced feature set
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </span>
              </td>
            </tr>

            <tr className="*:px-5 *:py-5 *:first:w-1/6 *:w-1/4 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
              <td>Industry Versatility</td>
              <td>
                <span className="flex items-center justify-between">
                  Limited
                  <IoMdClose
                    size={22}
                    className="text-[#F59E0C] min-w-fit"
                  />
                </span>
              </td>
              <td>
                <span className="flex items-center justify-between">
                  High (via Premier Industry Editions)
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </span>
              </td>
            </tr>

            <tr className="*:px-5 *:py-5 *:first:w-1/6 *:w-1/4 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF] bg-[#F8FAFF]">
              <td>Customization</td>
              <td>
                <span className="flex items-center justify-between">
                  Limited reports & forms
                  <IoMdClose
                    size={22}
                    className="text-[#F59E0C] min-w-fit"
                  />
                </span>
              </td>
              <td>
                <span className="flex items-center justify-between">
                  Deeply customizable reports & forms
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </span>
              </td>
            </tr>

            <tr className="*:px-5 *:py-5 *:first:w-1/6 *:w-1/4 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF]">
              <td>Data Control</td>
              <td>
                <span className="flex items-center justify-between">
                  Intuit's servers
                  <IoMdClose
                    size={22}
                    className="text-[#F59E0C] min-w-fit"
                  />
                </span>
              </td>
              <td>
                <span className="flex items-center justify-between">
                  Your chosen hosting provider's servers
                  <FiCheck
                    size={22}
                    className="text-[#17A34A]  min-w-fit"
                  />
                </span>
              </td>
            </tr>

            <tr className="*:px-5 *:py-5 *:first:w-1/6 *:w-1/4 *:not-last:border-r-[0.5px] *:border-r-[#CFCFCF] bg-[#F8FAFF]">
              <td>Ideal For</td>
              <td>
                <span className="flex items-center justify-between lg:gap-10">
                  Micro-businesses, solopreneurs, simple books
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </span>
              </td>
              <td>
                <span className="flex items-center justify-between lg:gap-10">
                  Growing SMBs, accounting firms, niche industries, advanced
                  users
                  <FiCheck
                    size={22}
                    className="text-[#17A34A] min-w-fit"
                  />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default QBdiff;
