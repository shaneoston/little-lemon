/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "index.html",
        "./src/**/*.{html,js,jsx}"
    ],
    theme: {
        container: {
            center: true
        },
        color: {
            'green': '#495e57',
            'gold': '#ee9972'
        },
        extend: {},
    },
    plugins: [],
}