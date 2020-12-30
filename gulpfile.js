// 'use strict';
const ghPages = require('gh-pages');
const path = require('path');
const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const rollup = require('gulp-better-rollup');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const postcss = require(`gulp-postcss`);
const autoprefixer = require(`autoprefixer`);
const sccclean = require(`gulp-clean-css`);
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './build'), cb);
}

function browsersync() {
  browserSync.init({
    server: { baseDir: 'build/' },
    notify: false,
    online: true
  })
}

function js() {
  return src([
    'src/js/script.js'])
    .pipe(plumber())
    // .pipe(sourcemap.init())
    .pipe(rollup({}, 'iife'))
    .pipe(dest("build/js"))
    // .pipe(sourcemap.write(''))
    .pipe(rename('script.min.js'))
    .pipe(uglify())
    .pipe(dest('build/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src([
      `src/css/style.css`
    ])
    .pipe(plumber())
    .pipe(sccclean())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(rename(`style.min.css`))
    .pipe(dest(`build/css`))
    .pipe(browserSync.stream());
}

function images() {
	return src('src/img/*.{jpg,png,gif,svg,webp}')
	.pipe(imagemin())
  .pipe(dest('build/img/'))
}

function html() {
	return src('src/*.{html,ico}')
  .pipe(dest('build/'))
}

function font() {
	return src('src/font/**/*.{woff,woff2}')
  .pipe(dest('build/font/'))
}


function cleanimg() {
	return del('build/img', { force: true })
}

function startwatch() {
  watch('src/**/*.js', js);
  watch('src/**/*.css', styles);
  watch('src/font/**/*.{woff,woff2}', font);
  watch('src/**/*.html', html);
  watch('src/img/**/*', images);
}

function cleandist() {
	return del('build/**/*', { force: true })
}

exports.deploy = deploy;
exports.browserSync = browserSync;
exports.js = js;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;
exports.html = html;
exports.font = font;
exports.build = series(cleandist, styles, js, images, html, font);

exports.start = parallel(styles, js, images, html, font, browsersync, startwatch);