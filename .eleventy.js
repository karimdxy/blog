const markdownIt = require("markdown-it");
const markdownItFooter = require("markdown-it-footnote");
const markdownItSup = require("@gerhobbelt/markdown-it-sup");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {
  const markdownLib = markdownIt().use(markdownItFooter).use(markdownItSup);

  config.addPassthroughCopy("./src/favicon.ico");
  config.addPassthroughCopy("./src/css/styles.css");
  config.addPassthroughCopy("./src/css/prism.css");
  config.addPassthroughCopy("./src/images");

  config.addFilter("prettyDate", function (value) {
    const data = new Date(value);
    return data.toLocaleDateString(undefined, {});
  });

  config.addCollection("posts", collectionApi =>
    collectionApi.getFilteredByGlob("./src/blog/*.md")
  );

  config.addPlugin(syntaxHighlight);
  config.setLibrary("md", markdownLib);
  config.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
