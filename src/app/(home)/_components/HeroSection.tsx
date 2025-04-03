'use client'

import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { heroItems } from '../consts/hero-carousel-list'
import HeroCard from './cards/HeroCard'
import AutoScroll from 'embla-carousel-auto-scroll'

const HeroSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: true, speed: 2 }),
    ])
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
        <div className="pt-[52px] pb-[40px] lg:pt-[124px] lg:pb-[124px] bg-heroBg">
            <div className="relative w-full max-w-screen pl-auto">
                <div ref={emblaRef}>
                    <div className="flex gap-5">
                        {heroItems.map((heroItem, index) => {
                            const isOdd = index % 2 === 1 ? true : false
                            return (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 p-2 ${
                                        isOdd ? '-mt-[24px]' : ''
                                    }`}
                                >
                                    <HeroCard data={heroItem} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
