const jekyllEnv = process.env.JEKYLL_ENV || "development";

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./_includes/tailwind.config.js"),
    require("autoprefixer"),
    ...(jekyllEnv != "development"
      ? [
          require("@fullhuman/postcss-purgecss")({
            content: ["!(_site)/**/*.(html|js)", "*.html"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
          require("cssnano")({ preset: "default" }),
        ]
      : [])
  ]
};

