module.exports = {
  content: ["./_site/**/*.html"],
  css: ["./_site/css/site.css"],
  extractors: [{
    extractor: class {
      static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
      }
    },
    extensions: ["html"]
  }]
};
