# The Curriculum Vitae Project

You are an amazing developer. Keep your CV on GitHub. Host it on GitHub pages. Have both HTML and PDF versions automatically generated and consistent. This is what good developers do.

Demo: [http://sneas.github.io/cv-project](http://sneas.github.io/cv-project).

Real world example: [http://sneas.github.io/cv](http://sneas.github.io/cv).

## Motivation

GitHub Pages is probably the best place developer could store it's CV. Giving a potential employer a link to your CV stored on GitHub shows your strong desire for automation and definitely stands you out.

The idea behind **The Curriculum Vitae Project** is to provide anyone a quick solution for managing CV (both HTML and PDF versions) with GitHub.

## Installation

### One step way (if you don't mind forking)

1. Fork this repo

### Multi step way (for those who who doesn't want to fork)

1. Create and clone a new repo
1. `npm install -g git-cp`
1. `cd` into the repo's folder
1. `git-cp git@github.com:sneas/cv-project.git` 

## Usage

1. Install project dependencies with `npm install`
1. Start local development server with `npm start`.
1. Update contents of `src` folder to fit your needs. This item is explained [below](#update-contents).
1. Commit your changes.
1. Publish your updated CV on GitHub pages with `npm run gh`.
1. Open `http://your-username.github.io/your-cv-repo`
1. Have a cookie 🍪

### Update contents

The project uses [HandlebarsJS](https://github.com/wycats/handlebars.js/) as a template engine.

The main HTML template could be found in [src/templates/index.html](src/templates/index.html). Metadata for the template could be found in [src/metadata/metadata.js](src/metadata/metadata.js).

Don't forget to update [src/assets/favicon.ico](src/assets/favicon.ico). You can generate a new favicon out of your photo with [icoconvert.com](http://icoconvert.com/).
