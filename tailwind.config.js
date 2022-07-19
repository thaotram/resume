/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    content: ['./pages/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            xs: '420px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            colors: {
                'yellow-10': '#fef9ed',
                dark: '#0d1117',
                name: '#f0f6fc',
                header: '#c9d1d9',
                content: '#8b949e',
                line: '#21262d',
                orange: '#f4ab41',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: 0,
                    sm: '2rem',
                    lg: '4rem',
                    xl: '8rem',
                },
            },
            fontFamily: {
                sans: ['Raleway', 'sans-serif'],
            },
            spacing: {
                '1.5px': '1.5px',
                17: '4.25rem',
                '-title': '-0.4em',
                '-widest': '-0.1em',
            },
            letterSpacing: {
                title: '0.4em',
            },
            gridTemplateColumns: {
                content: '2.5rem 1fr',
            },
        },
    },
};
