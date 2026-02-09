'use client'

import { FaArrowUp } from "react-icons/fa6";

export default function BottomBar() {
    return (
        <div
            className="bg-white border border-neutral-400 size-10 rounded-full fixed bottom-28 right-2 flex items-center justify-center"
            onClick={() => scrollTo({ top: 0, behavior: "smooth", })}
        >
            <FaArrowUp className="text-neutral-400" size={20} />
        </div>
    )
}