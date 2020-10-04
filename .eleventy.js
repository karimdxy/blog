module.exports = function (config) {
  let markdownIt = require("markdown-it");
  let markdownItFooter = require("markdown-it-footnote");
  let markdownLib = markdownIt().use(markdownItFooter);

  config.addPassthroughCopy("./src/css/styles.css");
  config.addPassthroughCopy("./src/images");

  config.addFilter("prettyDate", function (value) {
    const data = new Date(value);
    return data.toLocaleDateString();
  });

  config.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/blog/*.md");
  });

  config.setLibrary("md", markdownLib);
  config.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
