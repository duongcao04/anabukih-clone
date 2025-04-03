import Image from 'next/image'
import React from 'react'

type Props = {}
export default function OpenCampus({}: Props) {
    return (
        <div className="max-w-screen h-[450px] lg:h-[698px] relative">
            <Image
                src="https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/opencampus/mv.jpg"
                alt="Background Image"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
            ></Image>
            <div className="absolute w-full h-full top-0 right-0 text-white">
                <div className="container flex flex-col items-end">
                    <h1 className="text-right mt-[82px] text-[50px] lg:text-[75px] leading-[60px] font-[500] lg:font-[700] tracking-wide font-sans">
                        OPEN <br className="block lg:hidden" />
                        CAMPUS
                    </h1>
                    <p className="mt-[10px] lg:mt-[15px] text-lg lg:text-2xl font-bold">
                        オープンキャンパス 2024
                    </p>
                    <p className="mt-[20px] lg:mt-[80px] max-w-[345px] text-right leading-tight text-wrap mb-[48px] text-xl lg:text-5xl font-bold font-sans">
                        やりたいことを <br />
                        みつけよう！
                    </p>
                </div>
            </div>
        </div>
    )
}
