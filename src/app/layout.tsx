import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from './components/layouts/header'
import Footer from './components/layouts/Footer'
import FixedContact, {
    MobileFixedContact,
} from './components/layouts/FixedContact'
import Ads from './components/layouts/Ads'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})
const gothic = localFont({
    src: './fonts/ZenKakuGothic.ttf',
    variable: '--font-gothic',
    weight: '100 200 300 400 500 600 700 800 900',
})

export const metadata: Metadata = {
    title: '穴吹デザイン専門学校　デザイナーがデザイナーを育てる環境',
    description:
        '広島で30年以上の歴史をもつデザインの専門学校。グラフィック、イラスト、写真、マンガ、アニメ、ゲーム、映像、企画、プロダクト、家具、アクセサリ、インテリア、建築など総合的に学べるデザイン学校です。デザイン業界で多くの卒業生が活躍しています。学科紹介、学生作品、公式ブログ、入学案内、オープンキャンパス情報などを掲載。',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${gothic.variable} antialiased`}
            >
                <div id="page">
                    <Header />
                    <main>{children}</main>
                    <div className="fixed bottom-[50px] lg:bottom-[25px] right-0 z-[5]">
                        <Ads />
                    </div>
                    <div className="fixed bottom-0 w-full rounded-t-3xl lg:rounded-none bg-white z-10">
                        <div className="hidden lg:block">
                            <FixedContact />
                        </div>
                        <div className="block lg:hidden">
                            <MobileFixedContact />
                        </div>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
