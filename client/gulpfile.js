const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const gulpCSSMin = require('gulp-clean-css');
const gulpConcat = require('gulp-concat');
const gulpLess = require('gulp-less');
const gulpSourceMap = require('gulp-sourcemaps');
const gulpUglify = require('gulp-uglify-es');

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const buffer = require('vinyl-buffer');

/** Source path. */
const PATH = {
  client: {
    dist: 'dist'
  }
};

async function updateScript() {
  return new Promise((res, rej) => {
    browserify({
      basedir: '.',
      debug: true,
      entries: ['src/script/index.ts']
    })
      .plugin(tsify)
      .bundle()
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(gulpSourceMap.init({ loadMaps: true }))
      .pipe(gulpUglify.default(
        {
          mangle: {
            eval: true,
            keep_fnames: false,
            toplevel: true
          },
          compress: true
        }
      ))
      .pipe(gulpSourceMap.write('./'))
      .pipe(gulp.dest(PATH.client.dist))
      .on('end', res)
  });
}

async function updateStatic() {
  gulp.src('src/assets/**/*')
    .pipe(gulp.dest(`${PATH.client.dist}/assets`));
  gulp.src('src/**/*.html')
    .pipe(gulp.dest(PATH.client.dist));
}

async function updateStyle() {
  return new Promise((res, rej) => {
    gulp.src('src/style/**/*.less')
      .pipe(gulpSourceMap.init())
      .pipe(gulpLess())
      .pipe(gulpConcat('index.css'))
      .pipe(gulpCSSMin())
      .pipe(gulpSourceMap.write('./'))
      .pipe(gulp.dest(PATH.client.dist))
      .on('end', res);
  });
}

async function cleanDist() {
  return new Promise((res, rej) => {
    gulp.src(PATH.client.dist, { allowEmpty: true })
      .on('end', res)
      .pipe(gulpClean());
  });
}

async function cleanMap() {
  return new Promise((res, rej) => {
    gulp.src(`${PATH.client.dist}/**/*.map`, { allowEmpty: true })
      .on('end', res)
      .pipe(gulpClean());
  });
}

// Watch with source map
gulp.task('watch', async () => {
  await updateScript();
  await updateStatic();
  await updateStyle();
  gulp.watch('src/script/**/*.ts', updateScript);
  gulp.watch(['src/assets/**/*', 'src/**/*.html'], updateStatic);
  gulp.watch('src/style/**/*.less', updateStyle);
});

// Build client without source map
gulp.task('build', async () => {
  await cleanDist();
  await updateScript();
  await updateStatic();
  await updateStyle();
  await cleanMap();
});

gulp.task('default', gulp.parallel('build'));
