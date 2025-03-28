'use client'

import React, { useEffect, useRef } from 'react'
import LecturerCard from './cards/LecturerCard'
import useEmblaCarousel from 'embla-carousel-react'
import { LecturerType } from '../data/lecturers'

type Props = {
    data: LecturerType[]
}
export default function LecturerCarousel({ data }: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const prevButtonRef = useRef<HTMLButtonElement | null>(null)
    const nextButtonRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', () => {
                if (prevButtonRef.current)
                    prevButtonRef.current.disabled = !emblaApi.canScrollPrev()
                if (nextButtonRef.current)
                    nextButtonRef.current.disabled = !emblaApi.canScrollNext()
            })
        }
    }, [emblaApi])

    return (
        <div className="relative w-full max-w-screen pl-auto">
            <div ref={emblaRef}>
                <div className="flex gap-5">
                    {data.map((lecturer, index) => (
                        <div key={index} className="flex-shrink-0 p-2">
                            <LecturerCard data={lecturer} />
                        </div>
                    ))}
                    <button className="flex-shrink-0 p-2 w-[197px] h-[268px] border rounded-xl hover:underline flex items-center justify-center">
                        <p>すべてみる</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
