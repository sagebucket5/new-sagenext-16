/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // fontFamily: {
            //     sans: ['var(--font-graphik)', 'sans-serif'],
            // },
            backgroundImage: {
                'radial-blue': 'radial-gradient(circle, rgba(9,69,154,1) 0%, rgba(4,42,96,1) 100%)',
                'brand-gradient': 'linear-gradient(90deg, #023576 30%, #549ba7 120%)',
            },
        },
    },
    plugins: [],
}

export default tailwindConfig

