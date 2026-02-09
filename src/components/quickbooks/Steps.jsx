import Image from "next/image";
import Link from "next/link";
import React from "react";

const Steps = () => {
  return (
    <>
      <section className="w-full my-16 bg-[#F4F9FF]">
        <div className="container mx-auto py-10">
          <div className="w-fit place-self-center bg-[#71AAFF2E] rounded-full py-3 px-6">
            <span className="font-semibold text-[13px] text-[#051E41]">
              STEPS
            </span>
          </div>

          <div className="text-center pt-5">
            <span className="text-[32px] text-[#0C336B] leading-[133%]">
              <b>Quickbooks</b> <span>Accountant Hosting</span> <b>on Cloud</b>
              <br />
              <b>in 3 Easy Steps</b>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row max-lg:gap-6 items-center justify-center lg:justify-between mt-8 lg:mt-16">
            {/* card-1 */}
            <div className="bg-white p-6 border border-[#00106D1F] rounded-[22px] w-full max-w-[400px] lg:h-[400px] space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="flex flex-col items-center text-white! leading-[133%] bg-[#005DAA] py-3 px-4 rounded-[14px]">
                    <span className="font-black text-[28px]">01</span>
                    <span className="opacity-70 text-xs">STEP</span>
                  </h3>

                  <h3 className="font-bold! text-lg! text-black!">
                    Choose a Trusted QuickBooks Hosting Provider
                  </h3>
                </div>

                <div>
                  <span className="text-[15px] leading-[154%]">
                    Select an authorized and reliable QuickBooks Hosting
                    provider
                  </span>
                </div>
              </div>

              <hr className="w-full text-black/20" />

              <div>
                <ul className="space-y-[18px] text-[15px] font-medium">
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/data-center.svg"
                      alt="Tier-III or Tier-IV U.S./Canada data centers"
                      height={25}
                      width={25}
                    />
                    <Link href="https://www.thesagenext.com/data-centers">
                      Tier-III or Tier-IV U.S./Canada data centers
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/uptime.svg"
                      alt="99.999% uptime guarantee"
                      height={25}
                      width={25}
                    />
                    <span className="text-[#767575]">
                      99.999% uptime guarantee
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/encryption.svg"
                      alt="End-to-end encryption"
                      height={25}
                      width={25}
                    />
                    <Link href="https://www.thesagenext.com/what-is-end-to-end-encryption">
                      End-to-end encryption
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/support.svg"
                      alt="24/7 expert technical support"
                      height={25}
                      width={25}
                    />
                    <span className="text-[#767575]">
                      24/7 expert technical support
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* card-2 */}
            <div className="bg-white p-6 border border-[#00106D1F] rounded-[22px] w-full max-w-[400px] lg:h-[400px] space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="flex flex-col items-center text-white! leading-[133%] bg-[#006FAA] py-3 px-4 rounded-[14px]">
                    <span className="font-black text-[28px]">02</span>
                    <span className="opacity-70 text-xs">STEP</span>
                  </h3>

                  <h3 className="font-bold! text-lg! text-black!">
                    Upload Your QuickBooks Accountant Files
                  </h3>
                </div>

                <div>
                  <span className="text-[15px] leading-[154%]">
                    Migrate your existing{" "}
                    <b>QuickBooks Accountant company files</b> to secure cloud
                    servers.
                  </span>
                </div>
              </div>

              <hr className="w-full text-black/20" />

              <div>
                <ul className="space-y-[18px] text-[15px] font-medium">
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/data-center.svg"
                      alt="Tier-III or Tier-IV U.S./Canada data centers"
                      height={25}
                      width={25}
                    />
                    <span className="text-[#767575]">
                      No data loss during migration
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/uptime.svg"
                      alt="99.999% uptime guarantee"
                      height={25}
                      width={25}
                    />
                    <span className="text-[#767575]">Zero downtime</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/encryption.svg"
                      alt="End-to-end encryption"
                      height={25}
                      width={25}
                    />
                    <span className="text-[#767575]">
                      Free setup and backup configuration
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/support.svg"
                      alt="24/7 expert technical support"
                      height={25}
                      width={25}
                    />
                    <span className="text-[#767575]">
                      Support for add-ons like payroll and tax software
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* card-3 */}
            <div className="bg-white p-6 border border-[#00106D1F] rounded-[22px] w-full max-w-[400px] lg:h-[400px] space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="flex flex-col items-center text-white! leading-[133%] bg-[#6F54B9] py-3 px-4 rounded-[14px]">
                    <span className="font-black text-[28px]">03</span>
                    <span className="opacity-70 text-xs">STEP</span>
                  </h3>

                  <h3 className="font-bold! text-lg! text-black! lg:whitespace-nowrap">
                    Access QuickBooks
                    <br />
                    Accountant Anytime, Anywhere
                  </h3>
                </div>

                <div>
                  <span className="text-[15px] leading-[154%]">
                    Once hosted, you can log in securely to your{" "}
                    <b>QuickBooks Accountant Desktop.</b>
                  </span>
                </div>
              </div>

              <hr className="w-full text-black/20" />

              <div>
                <ul className="space-y-[18px] text-[14px] font-medium">
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/data-center.svg"
                      alt="Tier-III or Tier-IV U.S./Canada data centers"
                      height={25}
                      width={25}
                    />
                    <span className="text-[#767575]">
                      Collaborate with clients and staff in real time
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/uptime.svg"
                      alt="99.999% uptime guarantee"
                      height={25}
                      width={25}
                    />
                    <span className="text-[#767575]">
                      Work from anywhere with full desktop features
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/encryption.svg"
                      alt="End-to-end encryption"
                      height={25}
                      width={25}
                    />
                    <span className="text-[#767575]">
                      Enjoy faster performance and automatic backups
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/images/qb-acc-hosting/support.svg"
                      alt="24/7 expert technical support"
                      height={25}
                      width={25}
                    />
                    <span className="text-[#767575]">
                      Reduce IT costs and maintenance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;