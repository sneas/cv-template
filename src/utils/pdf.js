const fs = require('fs');
const pdf = require('html-pdf');

module.exports = function buildPdf(input, output) {
  const html = fs.readFileSync(input, 'utf8');
  const options = {
    format: 'A4',
    orientation: 'portrait',
    border: '2.54cm',
  };

  return new Promise((resolve, reject) => {
    pdf.create(html, options).toFile(output, function (err) {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve();
    });
  })
}
