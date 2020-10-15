const markdownIt = require("markdown-it");
const markdownItFooter = require("markdown-it-footnote");
const markdownItSup = require("@gerhobbelt/markdown-it-sup");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginSEO = require("eleventy-plugin-seo");

module.exports = function (config) {
  // Global settings
  config.setDataDeepMerge(true);

  // Files needed as-is
  config.addPassthroughCopy("./src/favicon.ico");
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./src/css/prism.css");
  config.addPassthroughCopy("./src/css/styles.css");

  // Filters
  config.addFilter("prettyDate", function (value) {
    const data = new Date(value);
    return data.toLocaleDateString(undefined, {});
  });

  // Fetch all posts located in /blog dir and sort them by most recent
  config.addCollection("posts", collectionApi =>
    collectionApi
      .getFilteredByGlob("./src/blog/*.md")
      .sort((p1, p2) => p2.date - p1.date)
  );

  // Plugins
  config.addPlugin(syntaxHighlight);
  config.addPlugin(pluginSEO, require("./src/_data/seo.json"));

  // Library
  const markdownLib = markdownIt().use(markdownItFooter).use(markdownItSup);
  config.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
