const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
    // Custom filter to rewrite links
    eleventyConfig.addFilter("rewriteLinks", function(content) {
        return content.replace(/\.\.\/?([\w\d-]+)\.md/g, "../$1/");
    });

    // Markdown config
    eleventyConfig.setLibrary("md", markdownIt());

    return {
        dir: {
            input: "documentation",
            output: "dist/docs"
        }
    };
};