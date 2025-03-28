import React from 'react'
import Logo from '../Logo'

export const Navigates = [
    { path: '#', label: '資料請求' },
    { path: '#', label: 'よくある質問' },
    { path: '#', label: 'お問い合わせ' },
]
type Props = {}
export default function Header({}: Props) {
    return (
        <header className="max-w-screen h-[63px] pt-[15px] px-[20px] bg-heroBg text-heroText">
            <div className="mx-[413px] flex items-center justify-between">
                <div className="flex justify-start items-center gap-[30px]">
                    <Logo />
                    <p className="text-xs font-medium">
                        デザイナーがデザイナーを育てる環境
                    </p>
                </div>
                <div className="flex items-center justify-end">
                    {Navigates.map((item, index) => (
                        <button
                            key={index}
                            className="w-[125px] h-[40px] flex items-center justify-center hover:bg-[#fafafa] transitio duration-200"
                        >
                            <p className="text-xs">{item.label}</p>
                        </button>
                    ))}
                    <button className="font-sans tracking-wide w-[125px] h-[40px] flex items-center justify-center hover:bg-[#fafafa] transitio duration-200">
                        <p className="text-xs">Language</p>
                    </button>
                </div>
            </div>
        </header>
    )
}
