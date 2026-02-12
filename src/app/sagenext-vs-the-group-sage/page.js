
import { getMetaData } from "@lib/metaData";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("sagenext-vs-the-group-sage");

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


function sagenextvsthegroupsage() {
  return (
    <>
      <section className="bg-[#efefef] px-5 pt-14">
        <div className={`lg:py-12 py-5`}>
          <h1
            className={`text-center !text-[#2d4370] !leading-[70px] !text-[40px]`}
          >
            Sagenext Vs The Group Sage
          </h1>
        </div>
      </section>
      <section className={` container mx-auto pt-4 pb-4`}>
        <div className="grid grid-cols-12 items-center justify-center text-center">
          <div className="lg:col-span-6 col-12 col-md-12 border-r border-gray-200 p-4">
            <Image
              width={350}
              height={150}
              src="/assets/images/sagenext-vs-sage/srg.png"
              transformation={[{ width: 100, }]}
              alt="Sagenext"
            />
            <h2 className="pt-3 pb-3">About The Sage Group PLC</h2>
            <p className="text-justify">
              Globally renowned as Sage, The Sage Group PLC is a British
              multinational company that is entirely dedicated to designing,
              development, and distribution of world-class business management
              software solutions for small and mid-sized businesses.
              Headquartered in Newcastle upon Tyne, the UK, Sage offers an array
              of highly advanced, efficient and easy-to-use enterprise software
              and related services to streamline various business operations.
              From accounting, payroll, and payments to enterprise resource
              planning and customer relationship management, Sage offers all
              kinds of tools and solutions to help modern businesses function at
              their fullest potential.
            </p>
          </div>
          <hr width="80%" className="hr2 lg:hidden block" />
          <div className="lg:col-span-6 col-span-12 p-4">
            <Image
              src="/logo/logo.png"
              width={208}
              height={100}
              className="mx-auto"
              alt="Sagenext"
            />
            <h2 className="pt-4 pb-3">About The Sagenext Infotech, LLC</h2>
            <p className="text-justify">
              Based in Augusta, Georgia, Sagenext Infotech is an independent IT
              hosting company that specializes in hosting major accounting and
              tax software solutions. Sagenext Infotech&apos;s core competency
              lies in cloud hosting and it offers highly efficient and
              cost-effective cloud-based solutions to help CPAs, bookkeepers,
              accounting professionals, and small businesses make full use of
              their accounting and tax software. Since The Sagenext Infotech is
              an independent company, we don&apos;t have any association or
              tie-ups with any software companies including The Sage Group plc.
              In other words, we don&apos;t sell or lease any accounting or tax
              software on the server. If you wish to use our cloud hosting
              services, then you need to provide us the ownership/license of the
              software.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default sagenextvsthegroupsage;
