import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Images = [
    'https://web.anabukih.ac.jp/wp-content/uploads/2025/02/bc21f6c38558176c4da162ea539a5aa4-1-300x212.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/12ed603dd16483aaf6b200e47e03ad86-300x212.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2023/12/4a1e38e8f626c2aee2c08eceec9d4e38-300x200.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2025/02/5c11ff8ca4dd77a6576a1a870940deee-1-212x300.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2025/02/379e80e1ce708f01a703671ee2790ef4-300x212.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/11/c8569feaa176176313a6f899765c9cc3-212x300.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/doseijin-300x161.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/75eed80afce24abc4495b5e266845486-300x193.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/agari-300x270.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/ac990d41f23b901214ad14a4a62d72f7-300x197.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/705fefbdcbf024d3f3c9172053bc4766-300x286.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/6495ed191c25006e15a479a7243be7d7-300x228.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/11/kakkoii02-300x276.png',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/P38nakae-212x300.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/f3dba87df57432d010dcfec9fb43ac16-1-300x197.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/210bbf77bc205d3a8c7207a72ff80c24-300x212.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/c86a1d6cb732363768d66e9413cdad49-300x169.jpg',
    'https://web.anabukih.ac.jp/wp-content/uploads/2024/06/754bd3e9d24319888f560f4f3b8cbcb8-212x300.jpg',
]

type Props = {}
export default function StudentWorks({}: Props) {
    return (
        <div className="container">
            <h1 className="text-center text-[32px] font-sans font-semibold">
                学生作品
            </h1>
            <div className="group mt-[35px] grid lg:grid-cols-[1fr_240px] w-full h-full">
                <div className="w-full h-full grid grid-cols-6 gap-[25px]">
                    {Images.map((image, index) => (
                        <Link key={index} href={'/#'} className="block">
                            <Image
                                src={image}
                                alt="Image"
                                width={114}
                                height={114}
                                className="aspect-square object-cover size-[114px] rounded-lg hover:opacity-70 cursor-pointer"
                            />
                        </Link>
                    ))}
                </div>
                <Link
                    href="/works/"
                    className="hidden lg:flex w-full h-full items-center justify-center"
                >
                    <button className="group-hover:underline">
                        <p>一覧へ</p>
                        <p>学科選択</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}
