module.exports = function (config) {
  let markdownIt = require("markdown-it");
  let markdownItFooter = require("markdown-it-footnote");
  let markdownLib = markdownIt().use(markdownItFooter);
  config.addPassthroughCopy("./src/css/styles.css");
  config.addPassthroughCopy("./src/images");
  config.addFilter("prettyDate", function (value) {
    const d = new Date(value);
    return d.toLocaleDateString();
  });

  config.setLibrary("md", markdownLib);
  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
