import React from 'react'
import LargestBanner from './banner/LargestBanner'
import Image from 'next/image'

export const JournalBottom = [
    {
        title: '次回オーキャン（4/12）について',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2025/03/main-1000x563.jpg',
        profileUrl: 'https://web.anabukih.ac.jp/dep08/105207/',
    },
    {
        title: '令和6年度　卒業証書授与式が行われました。',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2025/03/IMG_6487-1000x668.jpg',
        profileUrl: 'https://web.anabukih.ac.jp/dep12/120222/',
    },
    {
        title: '【メディア掲載】動画制作/映像制作のマッチングプラットフォーム「VideoWorks」にてネット動画クリエイター学科が紹介されました',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2024/08/NVCmain-1-1000x667.jpg',
        profileUrl: 'https://web.anabukih.ac.jp/dep08/120212/',
    },
    {
        title: '「卒業・修了制作展2025」が開催されました',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2025/02/DSC_0283-1000x666.jpg',
        profileUrl: 'https://web.anabukih.ac.jp/dep12/120172/',
    },
    {
        title: '【2025入試情報】第7回入試について',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2021/05/information.png',
        profileUrl: 'https://web.anabukih.ac.jp/dep08/118570/',
    },
    {
        title: 'グラフィックデザイン学科　卒業・修了制作コンテスト',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2025/02/140d20947c72b10563d49d0301f0c51c-1000x665.png',
        profileUrl: 'https://web.anabukih.ac.jp/dep01/120092/',
    },
]

type Props = {}
export default function Banner({}: Props) {
    const JournalBottomRowTwo = JournalBottom.slice(0, 3)
    const JournalBottomRowLeft = JournalBottom.slice(3, 6)

    return (
        <div className="container">
            <LargestBanner />
            <div className="mt-[60px]">
                <div className="grid grid-cols-3 gap-[48px]">
                    {JournalBottomRowTwo.map((item, index) => (
                        <div
                            key={index}
                            className="hover:opacity-80 cursor-pointer"
                        >
                            <Image
                                src={item.imageUrl}
                                alt="item"
                                width={300}
                                height={167}
                                className="w-[300px] h-[167px] object-cover rounded-lg"
                            ></Image>
                            <p className="mt-[16px] text-[#009D78] font-bold text-lg">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-[55px] grid grid-cols-4 gap-[40px]">
                    {JournalBottomRowLeft.map((item, index) => (
                        <div
                            key={index}
                            className="hover:opacity-80 cursor-pointer"
                        >
                            <Image
                                src={item.imageUrl}
                                alt="item"
                                width={220}
                                height={123}
                                className="w-[220px] h-[123px] object-cover rounded-lg"
                            ></Image>
                            <p className="mt-[16px] text-[#009D78] font-bold text-lg">
                                {item.title}
                            </p>
                        </div>
                    ))}
                    <button className="w-full h-full rounded-lg bg-[#009D78] flex items-center justify-center hover:opacity-80">
                        <p className="font-bold text-lg text-white">すべて</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
