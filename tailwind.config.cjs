module.exports = {
    content: ["./*.{html,js,ts}"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
