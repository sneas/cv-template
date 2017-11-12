const handlebars = require('handlebars');
const fs = require('fs-extra');
const buildPdf = require('./utils/pdf');
const markdownHelper = require('./utils/helpers/markdown');
const templateData = require('./metadata/metadata');

const srcDir = __dirname;
const outputDir = __dirname + '/../dest';

// Clear dest dir
fs.emptyDirSync(outputDir);

// Copy assets
fs.copySync(srcDir + '/assets', outputDir);

// Build HTML
handlebars.registerHelper('markdown', markdownHelper);
const source = fs.readFileSync(srcDir + '/templates/index.html', 'utf-8');
const template = handlebars.compile(source);
const html = template(templateData);
fs.writeFileSync(outputDir + '/index.html', html);

// Build PDF
buildPdf(outputDir + '/index.html', outputDir + '/william-shakespeare.national-poet.pdf');

