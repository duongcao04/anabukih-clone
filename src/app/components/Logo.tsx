import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return (
        <Link href={'/'} className="inline-block">
            <Image
                src={
                    'https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/pic_logo.png?v=202306071024'
                }
                alt="Company Logo"
                width={219}
                height={49}
                className="lg:w-[219px] lg:h-[49px] w-[149px] h-[33px]"
            />
        </Link>
    )
}
