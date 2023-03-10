/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [],
    theme: {
        extend: {},
        fontFamily: {
            'coda' : ['Coda']
        },
    },
    plugins: [],
}