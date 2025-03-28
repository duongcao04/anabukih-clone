import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}
export default function LargestBanner({}: Props) {
    return (
        <div className="relative hover:opacity-80 cursor-pointer">
            <div className="absolute top-[-38px] left-0">
                <Tag />
            </div>
            <div className="pl-[50px] grid grid-cols-[1fr_697px] items-center gap-[67px]">
                <Link href="https://web.anabukih.ac.jp/dep12/120327/">
                    <p className="text-3xl max-w-fit font-black text-[#009d78]">
                        ついにオープン！新駅ビル・ミナモア（minamoa）
                        当校の学...
                    </p>
                </Link>
                <div className="w-[697px] h-[272px]">
                    <Image
                        src="https://web.anabukih.ac.jp/wp-content/uploads/2025/03/b23ec422ae2a9e38541eebe6703d3556-1200x628.webp)"
                        alt="banner img"
                        width={697}
                        height={272}
                        className="w-full h-full rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

function Tag() {
    return (
        <div className="w-[482px] h-[77px] bg-[#009d78] rounded-full flex items-center justify-center gap-[20px]">
            <div className="text-[15px] font-extrabold text-[#009d78] py-[10px] px-[13px] rounded-t-full rounded-bl-full bg-white w-fit">
                <p>読みもの</p>
            </div>
            <p className="text-white text-3xl font-black tracking-wider">
                ANABUKI JOURNAL
            </p>
        </div>
    )
}
