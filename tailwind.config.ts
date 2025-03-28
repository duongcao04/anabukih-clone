import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '4rem',
                lg: '6rem',
                xl: '0',
                '2xl': '0',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1110px',
                '2xl': '1110px',
            },
        },
        extend: {
            boxShadow: {
                custom: '0px 10px 40px 0px rgba(0, 0, 0, 0.1)',
            },
            colors: {
                heroBg: '#e9e1d9',
                heroText: '#74706c',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [],
}

export default config
