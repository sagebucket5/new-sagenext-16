"use client"

import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const Author = () => {
    return (
        <div className="container mx-auto">
            <aside data-spy="scroll" data-target="#list-example" data-offset="10" className="!bg-[#f0f8ff] m-[2rem_0rem_3rem_0rem] !rounded-[10px]" >
                <div className="container mx-auto" id="author-toby-nwazor">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 md:col-span-2 vertical-align-middle mb-3">
                            <div className='flex items-center justify-center'>
                                <Image src="/assets/images/article/Bill.com/Toby Nwazor.webp" alt="writer_image" className='rounded-[50px] mt-[20px]' width={100} height={80} loading='lazy' />
                            </div>
                            <div className="text-left md:text-center mt-2 flex justify-center">
                                <a href="https://www.facebook.com/nwazortoby" target="_blank">
                                    <FaFacebook size={20} className='text-[#3b5998]' />
                                </a>
                                <a href="https://www.linkedin.com/in/tobynwazor/" target="_blank">
                                    <FaLinkedin size={20} className='text-[#0A66C2]' />
                                </a>{" "}
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-10">
                            <h4 className="mt-2">Toby Nwazor</h4>
                            <p>
                                Toby Nwazor has 20 Years of Experience in B2B SaaS and
                                reviewed accounting software at Sagenext since 2021 and has
                                developed an extensive knowledge of accounting software and
                                how unique business needs determine the best accounting
                                software.
                            </p>
                             <Link href="/blog/author/toby-nwazor" target="_blank">
                                <p>See all articles written by Toby Nwazor</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Author