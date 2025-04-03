'use client'

import React, { useState } from 'react'
import Logo from '../Logo'
import { RiMenu3Fill, RiCloseLargeLine } from 'react-icons/ri'

export const Navigates = [
    { path: '#', label: '資料請求' },
    { path: '#', label: 'よくある質問' },
    { path: '#', label: 'お問い合わせ' },
]
type Props = {}
export default function Header({}: Props) {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className="max-w-screen h-[63px] pt-[15px] px-[20px] bg-white lg:bg-heroBg text-heroText">
            <div className="lg:mx-[413px] flex items-center justify-between">
                <div className="flex justify-start items-center gap-[30px]">
                    <Logo />
                    <p className="hidden lg:block text-xs font-medium">
                        デザイナーがデザイナーを育てる環境
                    </p>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setOpen(!isOpen)}>
                        {isOpen ? (
                            <RiCloseLargeLine size={30} color="#ffa621" />
                        ) : (
                            <RiMenu3Fill size={30} color="#ffa621" />
                        )}
                    </button>
                </div>
                <div className="hidden lg:block">
                    <Navbar />
                </div>
            </div>
        </header>
    )
}
export const Navbar = () => {
    return (
        <nav className="flex items-center justify-end">
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
        </nav>
    )
}
