import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const NAV_ITEMS = [
    { href: '/course/', label: '学科紹介' },
    { href: '/admission/', label: '入学案内' },
    { href: '/employment/', label: '就職' },
    { href: '/people/', label: 'アナブキピーポー' },
    { href: '/topics/', label: 'お知らせ' },
    { href: '/opencampus/', label: 'オープンキャンパス' },
    { href: '/works/', label: '作品' },
    { href: '/channel/', label: 'チャンネル' },
    { href: '/about/', label: '学校について' },
]

type Props = {}
export default function Navbar({}: Props) {
    return (
        <nav className="max-w-screen h-[70px] shadow-custom">
            <div className="w-fit h-full mx-auto px-[20px] py-[5px] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-start gap-6 text-sm">
                    <Link
                        href={'/'}
                        className="border-b-[3px] border-[#ffa621] inline-flex items-center justify-center h-full px-[11px] hover:bg-[#f3f3f3] transtion duration-200"
                    >
                        <Image
                            src="https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_gnav_home.png?v=202306071024"
                            alt="Home Icon"
                            width={10}
                            height={12}
                        ></Image>
                    </Link>
                    {NAV_ITEMS.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="inline-flex items-center justify-center h-full px-[11px] hover:bg-[#f3f3f3] transtion duration-200"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export const MobileNavbar = () => {
    return (
        <nav className="container h-[70px] bg-[#e9e1d9] max-w-screen overflow-hidden pb-[120px] rounded-b-[50px]">
            <div className="w-fit h-full mx-auto px-[20px] py-[5px] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-start gap-6 text-sm">
                    <Link
                        href={'/'}
                        className="border-b-[3px] border-[#ffa621] inline-flex items-center justify-center h-full px-[11px] hover:bg-[#f3f3f3] transtion duration-200"
                    >
                        <Image
                            src="https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_gnav_home.png?v=202306071024"
                            alt="Home Icon"
                            width={10}
                            height={12}
                            className="w-[10px] h-[12px]"
                        ></Image>
                    </Link>
                    {NAV_ITEMS.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="inline-flex items-center justify-center h-full px-[11px] hover:bg-[#f3f3f3] transtion duration-200 text-nowrap"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
