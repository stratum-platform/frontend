/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif']
        },
        extend: {
            colors: {
                'deep-blue': '#2C5AA0',
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(135deg, #2C5AA0 0%, #1E3D72 100%)',
                'gradient-menu': 'linear-gradient(180deg, #2C3E50 0%, #1A2530 100%)',
                'gradient-button': 'linear-gradient(90deg, #3498DB 0%, #1ABC9C 100%)',
            }
        },
    },
    plugins: [],
}