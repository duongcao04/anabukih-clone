import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

const events = [
    {
        id: 117219,
        month: '3',
        day: '20',
        weekday: '木',
        category: 'オープンキャンパス＋新パンフ配布',
        linkText: '予約する',
        link: '/form/open/?id=117219',
    },
    {
        id: 114888,
        month: '4',
        day: '12',
        weekday: '土',
        category: '新年度初！オープンキャンパス',
        linkText: '予約する',
        link: '/form/open/?id=114888',
    },
    {
        id: 120228,
        month: '4',
        day: '19',
        weekday: '土',
        category: '全学科',
        linkText: '予約する',
        link: '/form/open/?id=120228',
    },
]
const topics = [
    {
        title: '次回オーキャン（4/12）について',
        url: 'https://web.anabukih.ac.jp/dep08/105207/',
        image: 'https://web.anabukih.ac.jp/wp-content/uploads/2025/03/main-1000x563.jpg',
        date: '2025年03月20日',
    },
    {
        title: 'オンライン入試説明会のご案内',
        url: 'https://web.anabukih.ac.jp/dep08/118355/',
        image: 'https://web.anabukih.ac.jp/wp-content/uploads/2020/04/information-1000x400.png',
        date: '2024年09月30日',
    },
    {
        title: '第一回目の入試説明会を開催しました',
        url: 'https://web.anabukih.ac.jp/dep08/117595/',
        image: 'https://web.anabukih.ac.jp/wp-content/uploads/2024/08/IMG_5071-1000x668.jpg',
        date: '2024年08月19日',
    },
]
type Props = {}
export default function Appointment({}: Props) {
    return (
        <div className="bg-[#e0e9dd] pt-[40px] pb-[96px]">
            <div className="container">
                <p className="text-[32px] font-bold text-[#80aa7b]">
                    予定カレンダー
                </p>
                <div className="pt-[58px] flex items-center justify-start gap-[20px]">
                    <div className="px-[20px] pt-[10px] bg-white rounded-lg w-[190px] h-[170px]">
                        <p className="text-center leading-[35px] text-[22px] font-bold text-[#80aa7b]">
                            オンライン
                        </p>
                        <button className="w-[148px] h-[34px] flex items-center justify-center my-[5px] bg-[#80aa7b] rounded-full font-bold text-xs text-white">
                            <p>オープンキャンパス</p>
                        </button>
                        <div className="mt-2 pb-4 flex items-center justify-between">
                            <div>
                                <Link
                                    href={'#'}
                                    className="text-[21px] font-bold text-[#80aa7b]"
                                >
                                    視聴希望
                                </Link>
                                <p className="font-bold text-[#30C21F] text-xs">
                                    随時視聴可
                                </p>
                            </div>
                            <FaChevronRight className="text-[#80aa7b]" />
                        </div>
                    </div>
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="text-white rounded-lg text-center w-[175px] h-[170px]"
                        >
                            <div className="bg-[#80aa7b] rounded-t-lg h-[calc(100%-55px)]">
                                <div className="px-[25px] pt-[25px] flex items-end gap-[6px]">
                                    <div className="text-xl font-bold flex items-start gap-5">
                                        <p>{event.month}</p>
                                        <div className="h-[40px] w-[1px] bg-white rotate-[45deg]"></div>
                                        <p className="text-[32px]">
                                            {event.day}
                                        </p>
                                    </div>
                                    <button className="px-[12px] py-[5px] rounded-full font-bold text-xs border">
                                        <p className="text-sm">
                                            {event.weekday}
                                        </p>
                                    </button>
                                </div>
                                <div className="pt-[4px] pb-[16px] pl-[25px]">
                                    <p className="text-sm text-left text-wrap line-clamp-2">
                                        {event.category}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-b-lg pt-[5px] pb-[15px] text-[#80aa7b] flex items-center justify-between pl-[27px] pr-[15px]">
                                <Link
                                    href={event.link}
                                    className="block hover:underline text-[21px] font-bold"
                                >
                                    {event.linkText}
                                </Link>
                                <FaChevronRight />
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-[45px] text-center text-[21px] font-bold text-[#80aa7b]">
                    オープンキャンパスに関するお知らせ
                </p>
                <div className="mt-[25px] grid grid-cols-2 divide-x divide-y bg-white rounded-lg">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="px-[25px] py-[20px] flex items-center gap-[20px] justify-start hover:opacity-70 cursor-pointer"
                        >
                            <Image
                                src={topic.image}
                                alt={topic.title}
                                width={83}
                                height={83}
                                className="w-[83px] h-[83px] rounded-lg object-cover"
                            />
                            <div className="flex flex-col h-full justify-between font-sans">
                                <p className="text-sm font-bold text-gray-900">
                                    {topic.title}
                                </p>
                                <p className="text-sm text-gray-500 font-medium">
                                    {topic.date}
                                </p>
                            </div>
                        </div>
                    ))}
                    <button className="group px-[25px] py-[20px] flex items-center justify-between gap-[20px] hover:opacity-70">
                        <p className="group-hover:underline text-sm font-bold text-gray-900">
                            オープンキャンパスの予定や流れ
                        </p>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}
