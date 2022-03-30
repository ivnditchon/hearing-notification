module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'xs': '375px',
            // => @media (min-width: 400px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                'sans': 'Inter',
            },
            colors: {
                'softGreen': '#57A33E',
                'darkGreen': '#117856',
                'softGray': '#A5A5A5',
                'lightGray': '#e8e8e8',
                'darkGray': '#2E2E2E',
            }
        },
    },
    plugins: [],
}