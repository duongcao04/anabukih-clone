import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CONTACT_INFO = [
    { label: 'MAIL', value: 'a-style@anabuki.ac.jp' },
    { label: '代表電話番号', value: '082-263-7177' },
    { label: '〒732-0826', value: '広島県広島市南区松川町2-24' },
]
const SOCIAL_LINKS = [
    {
        href: 'https://www.instagram.com/anabuki.design/',
        imgSrc: 'https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_ig.png?v=202306071024',
        alt: 'Instagram',
        width: 36,
        height: 36,
    },
    {
        href: 'https://twitter.com/anabuki_design',
        imgSrc: 'https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_tw.png?v=202306071024',
        alt: 'Twitter',
        width: 36,
        height: 36,
    },
    {
        href: 'https://www.facebook.com/anabuki.design',
        imgSrc: 'https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_fb.png?v=202306071024',
        alt: 'Facebook',
        width: 36,
        height: 36,
    },
    {
        href: 'https://page.line.me/anabuki.design',
        imgSrc: 'https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_line.png?v=202306071024',
        alt: 'LINE',
        width: 86,
        height: 36,
    },
]

const menuGroups = [
    {
        items: [
            { href: '/', label: 'ホーム' },
            { href: '/course/', label: '学科紹介' },
            { href: '/admission/', label: '入学案内' },
            { href: '/works/', label: '作品' },
            { href: '/people/', label: 'アナブキピーポー', duplicateCol: true },
            { href: '/topics/', label: 'お知らせ' },
            { href: '/channel/', label: 'チャンネル' },
            { href: '/employment/', label: '就職' },
            { href: '/about/', label: '学校について' },
        ],
    },
    {
        items: [
            {
                href: '/open-campus/',
                label: 'オープンキャンパス',
                duplicateCol: true,
            },
            { href: '/request/', label: '資料請求' },
            { href: '/access/', label: 'アクセス' },
            { href: '/contact/', label: 'お問い合わせ' },
            { href: '/faq/', label: 'よくあるご質問' },
            {
                href: '/privacy-policy/',
                label: 'プライバシーポリシー',
                duplicateCol: true,
            },
            { href: '/disclosure/', label: '情報公開' },
            { href: '/sitemap/', label: 'サイトマップ' },
        ],
    },
    {
        items: [
            {
                href: '/meeting/',
                label: '穴吹学園保護者会',
                duplicateCol: true,
            },
        ],
    },
    {
        items: [
            { href: '/students/', label: '在校生の方' },
            { href: '/graduates/', label: '卒業生の方' },
            { href: '/companies/', label: '企業の方', duplicateCol: true },
        ],
    },
]

type Props = {}
export default function Footer({}: Props) {
    return (
        <footer className="container grid grid-cols-[314px_1fr] gap-[140px] py-[30px]">
            <div>
                <Link href={'/'} className="inline-block">
                    <Image
                        src="https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/pic_logo.png?v=202306071024"
                        alt="Logo"
                        width={314}
                        height={70}
                    ></Image>
                </Link>
                <p className="mt-[50px] mb-[20px]">
                    デザイナーがデザイナーを育てる環境
                </p>
                <ul className="mb-[35px] space-y-2.5">
                    {CONTACT_INFO.map((item, index) => (
                        <li
                            key={index}
                            className="grid grid-cols-[100px_1fr] text-xs"
                        >
                            <p className="font-semibold">{item.label}</p>
                            <p>{item.value}</p>
                        </li>
                    ))}
                </ul>
                <div className="space-y-[15px]">
                    <Image
                        src="https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_footertel.png?v=202306071024"
                        alt="contact phone"
                        width={245}
                        height={31}
                    />
                    <SocialLinks />
                </div>
            </div>
            <div className="ml-[24px] grid grid-cols-2 gap-x-[24px]">
                {menuGroups.map((group, index) => (
                    <ul
                        key={index}
                        className="border bg-white rounded-lg grid grid-cols-2 h-fit"
                    >
                        {group.items.map((item, idx) => (
                            <li
                                key={idx}
                                className={`${
                                    item.duplicateCol && 'col-span-2'
                                } border-b border-r last:border-none py-2.5 px-[15px]`}
                            >
                                <a
                                    href={item.href}
                                    className="text-gray-700 hover:underline transition duration-200"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </footer>
    )
}

const SocialLinks = () => {
    return (
        <ul className="flex space-x-4">
            {SOCIAL_LINKS.map((link, index) => (
                <li key={index}>
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={link.imgSrc}
                            width={link.width}
                            height={link.height}
                            alt={link.alt}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}
