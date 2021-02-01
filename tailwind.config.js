module.exports = {
    purge: ['./pages/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Raleway', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
