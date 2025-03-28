import React from 'react'
import Image from 'next/image'
import { LecturerType } from '../../data/lecturers'

type Props = {
    data: LecturerType
}
export default function LecturerCard({ data }: Props) {
    return (
        <div className="hover:underline cursor-pointer w-[197px]">
            <Image
                src={data.imageUrl}
                alt={data.name}
                width={192}
                height={127}
                className="w-[197px] h-[127px] object-cover rounded-lg"
            ></Image>
            <div className="mt-[25px]">
                <p className="opacity-80 font-semibold">{data.name}</p>
                <p className="opacity-70 mt-[23px] text-[11px] font-medium">
                    {data.role}
                </p>
                <p className="mt-[3px] opacity-70 max-w-full text-[11px] font-semibold text-wrap">
                    {data.company}
                </p>
            </div>
        </div>
    )
}
