import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Ads({}: Props) {
    return (
        <div>
            <Link href="/exhibition/exh2022/" target="_blank">
                <Image
                    src="https://web.anabukih.ac.jp/wp-content/themes/anabuki-theme/cmn/img/common/cp_banner.png?v=202306071024"
                    alt="ads"
                    width={170}
                    height={192}
                    className="rounded-tl-lg"
                />
            </Link>
        </div>
    )
}
