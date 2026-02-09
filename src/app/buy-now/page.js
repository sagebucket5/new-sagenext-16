import Link from "next/link";
import Image from "next/image";
import { getMetaData } from "@lib/metaData";
import SkillSection from "@/components/utils/SkillSection";
import "@styles/buy-now.css";
import BuyNowForm from "@/components/heros/BuyNowForm";

export async function generateMetadata() {
  const meta = getMetaData("buy-now");
  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
    robots: meta.robots,
  };
}

function Buynow() {
  return (
    <>
      <BuyNowForm />
      <section className="purchase_bq licenses-buy-upgrade relative py-14 ">
        <div className="container mx-auto">
          <h2 className="text-center !mb-8">
            Purchase Your Favorite QB License - All at One Place
          </h2>

          <div className="grid grid-cols-12 mx-auto items-center">
            <div className="lg:col-span-4 col-span-12 hover:shadow-[0_0_10px_rgba(_0,_0,_0,_0.5)] px-3 transition-all duration-300 ease-in-out rounded-md text-center py-5">
              <div>
                <Image
                  src="/assets/images/buy-now/quickBooks-enterprise.webp"
                  alt="QuickBooks Enterprise"
                  className="w-1/2 mx-auto object-contain"
                  loading="lazy"
                  width={126}
                  height={176}
                />
              </div>
              <div>
                <h4 className="pt-6 pb-2 text-[20px] !font-medium">
                  QuickBooks Enterprise
                </h4>
                <Link
                  href="/buy-now#banner_form"
                  className="btn button btn-get-pricing position-relative mb-1 tryForFreeBtn px-5"
                  id="tryForFreeBtn"
                >
                  Buy Now
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 hover:shadow-[0_0_10px_rgba(_0,_0,_0,_0.5)] px-3 transition-all duration-300 ease-in-out rounded-md text-center py-5">
              <div>
                <Image
                  src="/assets/images/buy-now/PLUS.webp"
                  alt="QuickBooks Online"
                  className="w-1/2 mx-auto object-contain"
                  loading="lazy"
                  width={126}
                  height={176}
                />
              </div>
              <div>
                <h4 className="pt-6 pb-2 text-[20px] !font-medium">
                  QuickBooks Online
                </h4>
                <Link
                  href="https://quickbooks.intuit.com/partners/irp/qbo/?cid=irp-33151"
                  className="btn button btn-get-pricing position-relative mb-1 tryForFreeBtn  px-5"
                  id="tryForFreeBtn"
                >
                  Buy Now
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12  px-3 transition-all duration-300 ease-in-out rounded-md hover:shadow-[0_0_10px_rgba(_0,_0,_0,_0.5)] text-center py-5">
              <div>
                <Image
                  src="/assets/images/buy-now/p6.webp"
                  alt="QuickBooks License"
                  className="w-1/2 mx-auto object-contain"
                  loading="lazy"
                  width={126}
                  height={176}
                />
              </div>
              <div>
                <h4 className="pt-6 pb-2 text-[20px] !font-medium">
                  QuickBooks Online <span>&#43;</span> Payroll
                </h4>
                <Link
                  href="https://quickbooks.intuit.com/partners/irp/buyqbopayroll/?cid=irp-33151"

                  className="btn button btn-get-pricing position-relative mb-1 tryForFreeBtn  px-5"
                  id="tryForFreeBtn"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SkillSection />
      <section className="sagenext_store_section relative">
        <div className="container mx-auto">
          <div className="flex flex-col pb-8 lg:w-10/12 mx-auto text-center">
            <h2 className=" pb-2">
              What does Sagenext Have in Store for You?
            </h2>
            <p>
              Experience premium cloud solutions with superior security and
              reliability at anytime, anywhere. Our state-of-the-art{" "}
              <Link href="/">cloud hosting services</Link> help ease all your
              processes. Manage your operations using our cutting-edge
              technology and add value to your practices.
            </p>
          </div>

          <div className="grid grid-cols-12 lg:max-w-10/12 mx-auto mt-3">
            <div className="lg:col-span-6 col-span-12 px-3 mb-4">
              <div className="store_list-box flex">
                <div className="inline-block store_list_img">
                  <Image
                    src="/assets/images/buy-now/shield.webp"
                    alt="Unmatched"
                    className="img-fluid"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                </div>
                <span className="stores-list_heading">
                  Unmatched reliability <br /> and data security.
                </span>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 px-3 mb-4">
              <div className="store_list-box flex">
                <div className="
                 store_list_img">
                  <Image
                    src="/assets/images/buy-now/updated.webp"
                    alt="Persistant"
                    className="img-fluid"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                </div>
                <span className="stores-list_heading">
                  Persistent Technological <br /> upgrades and updates.
                </span>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 px-3 mb-4">
              <div className="store_list-box flex">
                <div className=" store_list_img">
                  <Image
                    src="/assets/images/buy-now/customizable_platform.webp"
                    alt="Customizable"
                    className="img-fluid"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="stores-list_heading ">
                  Customizable software module <br /> for business escalations.
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 px-3 mb-4">
              <div className="store_list-box flex">
                <div className=" store_list_img">
                  <Image
                    src="/assets/images/buy-now/24-hours-support.webp"
                    alt="Round The CLock Technical support"
                    className="img-fluid"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="stores-list_heading ">
                  Round-the-clock technical support <br /> for comprehensive
                  technical help.
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 px-3 mb-4">
              <div className="store_list-box flex">
                <div className=" store_list_img">
                  <Image
                    src="/assets/images/buy-now/capacity.webp"
                    alt="Multi User"
                    className="img-fluid"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="stores-list_heading ">
                  Multi-user interface with <br /> unlimited customer support.
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 px-3">
              <div className="store_list-box flex">
                <div className="store_list_img">
                  <Image
                    src="/assets/images/buy-now/accounting.webp"
                    alt="Clients"
                    className="img-fluid"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="stores-list_heading ">
                  Accounting Reports with Cash <br /> Flow Management.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eef4ed] py-14 relative">
        <div className="container mx-auto text-center">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="font-30 pb-2  site-heading-color">
                Welcome to the new Age of Accounting!
              </h2>
              <small className="pt-2">
                Don&apos;t let traditional accounting practices sedate your
                accounting progress.
              </small>
              <p className="mt-2 font-14">
                <Link href="/quickbooks-hosting">Switch to QuickBooks</Link> and
                achieve expected level of tax and accounting efficiency, no
                matter where you are in the world
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Buynow;
