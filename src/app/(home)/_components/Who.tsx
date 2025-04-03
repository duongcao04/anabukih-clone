import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Topics = [
    {
        title: '次回オーキャン（4/12）について',
        category: 'ジャーナル',
        date: '2025/03/20',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2025/03/main-1000x563.jpg',
        profileUrl: 'https://web.anabukih.ac.jp/dep08/105207/',
    },
    {
        title: '新年度資料発送について',
        category: 'インフォ',
        date: '2025/03/24',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2020/04/information-1000x400.png',
        profileUrl: 'https://web.anabukih.ac.jp/dep08/120386/',
    },
    {
        title: 'ついにオープン！新駅ビル・ミナモア（minamoa） 当校の学生や講師も関わっています。',
        category: 'ジャーナル',
        date: '2025/03/24',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2025/03/b23ec422ae2a9e38541eebe6703d3556-1000x523.webp',
        profileUrl: 'https://web.anabukih.ac.jp/dep12/120327/',
    },
    {
        title: '令和6年度　卒業証書授与式が行われました。',
        category: 'ジャーナル',
        date: '2025/03/07',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2025/03/IMG_6487-1000x668.jpg',
        profileUrl: 'https://web.anabukih.ac.jp/dep12/120222/',
    },
    {
        title: '【メディア掲載】動画制作/映像制作のマッチングプラットフォーム「VideoWorks」にてネット動画クリエイター学科が紹介されました',
        category: 'ジャーナル',
        date: '2025/03/02',
        imageUrl:
            'https://web.anabukih.ac.jp/wp-content/uploads/2024/08/NVCmain-1-1000x667.jpg',
        profileUrl: 'https://web.anabukih.ac.jp/dep08/120212/',
    },
]
export const Categories = [
    { name: 'すべて', url: '/topics/' },
    { name: 'ジャーナル', url: 'https://web.anabukih.ac.jp/category/dep12/' },
    { name: 'インフォ', url: 'https://web.anabukih.ac.jp/category/dep08/' },
    {
        name: 'オープンキャンパス',
        url: 'https://web.anabukih.ac.jp/category/dep10/',
    },
    { name: '就職', url: 'https://web.anabukih.ac.jp/category/dep09/' },
    { name: '建築', url: 'https://web.anabukih.ac.jp/category/dep04/' },
    {
        name: 'インテリアデザイン',
        url: 'https://web.anabukih.ac.jp/category/dep03/',
    },
    {
        name: '商品企画デザイン',
        url: 'https://web.anabukih.ac.jp/category/dep02/',
    },
    {
        name: 'グラフィックデザイン',
        url: 'https://web.anabukih.ac.jp/category/dep01/',
    },
    {
        name: 'マンガ・アニメーション',
        url: 'https://web.anabukih.ac.jp/category/dep06/',
    },
    { name: 'CG・ゲーム', url: 'https://web.anabukih.ac.jp/category/dep05/' },
    {
        name: 'ネット動画クリエイター',
        url: 'https://web.anabukih.ac.jp/category/dep11/',
    },
    { name: '国際アニメ', url: 'https://web.anabukih.ac.jp/category/dep07/' },
]
type Props = {}
export default function Who({}: Props) {
    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <h1 className="text-[32px] font-sans font-semibold">
                    お知らせ
                </h1>
                <div className="w-full lg:w-fit border rounded-lg py-[10px] pl-[30px]">
                    <div className="gap-[35px] flex items-center justify-start max-w-[498px] overflow-hidden">
                        {Categories.map((category, index) => (
                            <div
                                key={index}
                                className="hover:underline text-xs lg:text-base"
                            >
                                <Link
                                    href={category.url}
                                    className="text-nowrap"
                                >
                                    {category.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-[35px] grid grid-cols-1 lg:grid-cols-2 gap-x-[24px] gap-y-[22px]">
                {Topics.map((topic, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between gap-[60px] border rounded-xl pt-[17px] pl-[23px] pr-[16px] pb-[19px] hover:underline cursor-pointer"
                    >
                        <div className="flex flex-col h-full justify-between">
                            <p className="text-sm font-semibold">
                                {topic.title}
                            </p>
                            <div className="flex flex-col items-start">
                                <p className="text-sm opacity-70 font-medium">
                                    {topic.category}
                                </p>
                                <p className="text-sm opacity-70 font-medium">
                                    {topic.date}
                                </p>
                            </div>
                        </div>
                        <Image
                            src={topic.imageUrl}
                            alt={topic.title}
                            width={90}
                            height={90}
                            className="size-[90px] aspect-square object-cover rounded-lg"
                        ></Image>
                    </div>
                ))}
                <button className="flex items-center justify-center border rounded-xl hover:underline">
                    <p className="text-sm font-medium">すべてみる</p>
                </button>
            </div>
        </div>
    )
}
