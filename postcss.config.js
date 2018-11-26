module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./_includes/tailwind.js"),
    require("autoprefixer")
  ]
};
