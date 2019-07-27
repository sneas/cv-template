const markdown = require('markdown').markdown;

module.exports = function (text) {
  return markdown.toHTML(text);
};
