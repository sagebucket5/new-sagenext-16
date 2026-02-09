import Image from "next/image";
import Link from "next/link";
import { IoArrowForward, IoCallOutline } from "react-icons/io5";

const slug = () => {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 px-4">
                <div className="bg-white rounded-3xl shadow-2xl p-10 md:max-w-9/12 w-full text-center mt-20">
                    <Image
                        src="https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/logo/logo.png"
                        alt="Thank You"
                        height={156}
                        width={200}
                        className="mx-auto mb-6 w-full object-contain !h-14"
                    />
                    <h1 className=" font-bold !text-blue-900 mb-4">
                        Thank you for getting in touch!
                    </h1>
                    <p className="text-gray-600 mb-8 w-full md:w-9/12 mx-auto">
                        We appreciate your precious time. Our representative will get back in touch with you soon! For an immediate response, please use the contact number listed below. Have a great day!
                    </p>
                    <div className="bg-blue-50 rounded-xl p-6 mb-6">
                        <h2 className="text-xl font-semibold text-blue-800 mb-2">Support / Sales</h2>
                        <div className="flex justify-center items-center gap-4 font-medium mt-3 mb-3 md:mt-8 md:mb-3">
                            <Link href="tel:+1-855-922-7243" className="flex items-center gap-2 text-blue-600 hover:bg-blue-600 hover:!text-white transition border rounded-xl px-8 py-3">
                                <IoCallOutline size={20} />
                                1-855-922-7243
                            </Link>
                            <Link href="mailto:sales@thesagenext.com" className="flex items-center gap-2 bg-blue-600 !text-white hover:!text-blue-600 hover:bg-white border rounded-xl px-8 py-3 transition">
                                sales[at]thesagenext.com
                                <IoArrowForward size={22} />
                            </Link>
                        </div>
                    </div>
                    <Link href="/" className="inline-block mt-4 px-6 py-2 bg-blue-600 !text-white rounded-full shadow hover:bg-blue-700 transition font-semibold">
                        Back to Home
                    </Link>
                </div>
            </section>
        </>
    );
};

export default slug;