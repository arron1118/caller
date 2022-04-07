const colors =require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './storage/framework/views/*.php',
    ],
    theme: {
        colors: {
            brand: '#409EFF',
            ...colors
        },
        extend: {},
    },
    plugins: [],
}
