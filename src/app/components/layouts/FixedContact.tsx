import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
    { href: '/parents', label: '保護者の方' },
    { href: '/hdn/1069', label: '在校生の方' },
    { href: '/hdn/100798', label: '卒業生の方' },
    { href: '/employment/kigyou', label: '企業の方' },
    { href: '/about/access', label: 'アクセス' },
]

const socialLinks = [
    {
        href: 'https://www.instagram.com/anabuki.design/',
        src: 'https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_ig.png?v=202306071024',
        alt: 'Instagram',
        width: 27,
        height: 27,
    },
    {
        href: 'https://twitter.com/anabuki_design',
        src: 'https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_tw.png?v=202306071024',
        alt: 'Twitter',
        width: 27,
        height: 27,
    },
    {
        href: 'https://www.facebook.com/anabuki.design',
        src: 'https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_fb.png?v=202306071024',
        alt: 'Facebook',
        width: 27,
        height: 27,
    },
    {
        href: 'https://page.line.me/anabuki.design',
        src: 'https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_line.png?v=202306071024',
        alt: 'LINE',
        width: 64,
        height: 27,
    },
]

type Props = {}
export default function FixedContact({}: Props) {
    return (
        <div className="container flex items-center justify-between py-5">
            <div className="flex items-center justify-start gap-[30px]">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-[#363636] hover:underline"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0">
                {socialLinks.map((social) => (
                    <Link key={social.href} href={social.href} target="_blank">
                        <Image
                            src={social.src}
                            width={social.width}
                            height={social.height}
                            alt={social.alt}
                        />
                    </Link>
                ))}
                <Image
                    src="https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_footertel.png?v=202306071024"
                    width={220}
                    height={82}
                    alt="Contact Number"
                />
            </div>
        </div>
    )
}

export const MobileFixedContact = () => {
    return (
        <div className="container py-[15px] rounded-t-xl flex items-center justify-between shadow-md">
            <Link target="_blank" href="https://page.line.me/anabuki.design">
                <Image
                    src="https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/icon_line.png?v=202306071024"
                    alt="line contact"
                    width={59}
                    height={25}
                />
            </Link>
            <Link href={'#'} className="text-xs">
                資料請求
            </Link>
            <Link
                href={'#'}
                className="inline-block bg-[#dbf5d9] text-[#59c1a0] px-[15px] py-[10px] rounded-full text-xs"
            >
                オープンキャンパス 次回 <span className="font-bold">4/12</span>
            </Link>
        </div>
    )
}
