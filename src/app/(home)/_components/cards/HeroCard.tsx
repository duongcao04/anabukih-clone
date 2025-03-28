import React from 'react'
import { HeroItem } from '../../consts/hero-carousel-list'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa6'

type Props = { data: HeroItem }

export default function HeroCard({ data }: Props) {
    return (
        <div className="max-w-[240px] group cursor-pointer select-none shadow-md rounded-3xl">
            <Image
                src={data.imageUrl}
                alt={data.itemTitle}
                width={240}
                height={143}
                className="w-[240px] h-[143px] rounded-t-3xl"
            ></Image>
            <div
                className="p-[20px] rounded-b-3xl w-full h-[170px] flex flex-col justify-between"
                style={{ backgroundColor: data.bottomItemColor }}
            >
                <p className="text-[15px] font-bold text-white text-wrap text-left">
                    {data.itemTitle}
                </p>
                <button className="rounded-full w-[200px] h-[28px] bg-white group-hover:bg-black flex items-center justify-between py-2.5 pl-[18px] pr-[34px]">
                    <p
                        className="text-[8px] text-left font-medium"
                        style={{ color: data.bottomItemColor }}
                    >
                        {data.buttonTitle}
                    </p>
                    <FaChevronRight
                        size={5}
                        className="text-black group-hover:text-white"
                    />
                </button>
            </div>
        </div>
    )
}
