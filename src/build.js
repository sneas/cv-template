const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const metadata = require('metalsmith-metadata');
const buildInfo = require('metalsmith-build-info');
const collections = require('metalsmith-collections');
const ignore = require('metalsmith-ignore');
const assets = require('metalsmith-assets');
const buildPdf = require('./utils/pdf');

Metalsmith(__dirname)
    .source('partials')
    .destination('../dest')
    .use(metadata({
      data: 'facts.yml'
    }))
    .use(buildInfo())
    .use(collections({
      plays: {
        pattern: 'plays/**/*',
        sortBy: 'published',
        reverse: 'true'
      },
      experience: {
        pattern: 'experience/**/*',
        sortBy: 'weight',
        reverse: true
      }
    }))
    .use(markdown())
    .use(layouts({
      engine: 'handlebars',
      directory: 'templates'
    }))
    .use(ignore([
      'tragedy/**/*',
      'projects/**/*'
    ]))
    .use(assets({
      "source": "assets"
    }))
    .build(function(err, files) {
      if (err) { throw err; }
      buildPdf(__dirname + '/../dest/index.html', __dirname + '/../dest/william-shakespeare.national-poet.pdf')
    });
