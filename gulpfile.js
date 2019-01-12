const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const gulpCSSMin = require('gulp-clean-css');
const gulpConcat = require('gulp-concat');
const gulpLess = require('gulp-less');
const gulpSourceMap = require('gulp-sourcemaps');
const gulpTypeScript = require('gulp-typescript');
const gulpUglify = require('gulp-uglify-es');

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const buffer = require('vinyl-buffer');

/** Source path. */
const PATH = {
  client: {
    path: 'client/',
    dist: 'client/dist/',
    src: 'client/src/'
  },
  server: {
    path: 'server/',
    dist: 'server/dist/',
    src: 'server/src/'
  },
  docker: {
    path: 'docker/'
  },
  dist: 'dist/'
};

async function updateScript() {
  return new Promise((res, rej) => {
    browserify({
      basedir: PATH.client.path,
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
      .on('end', res)
      .pipe(gulp.dest(PATH.client.dist));
  });
}

async function updateStatic() {
  gulp.src(PATH.client.src + 'assets/**/*')
    .pipe(gulp.dest(PATH.client.dist + 'assets'));
  gulp.src(PATH.client.src + '**/*.html')
    .pipe(gulp.dest(PATH.client.dist));
}

async function updateStyle() {
  return new Promise((res, rej) => {
    gulp.src(PATH.client.src + 'style/**/*.less')
      .pipe(gulpSourceMap.init())
      .pipe(gulpLess())
      .pipe(gulpConcat('index.css'))
      .pipe(gulpCSSMin())
      .pipe(gulpSourceMap.write('./'))
      .on('end', res)
      .pipe(gulp.dest(PATH.client.dist));
  });
}

async function updateServer() {
  return new Promise((res, rej) => {
    gulp.src(PATH.server.src + '**/*.ts')
      .pipe(gulpTypeScript.createProject(PATH.server.path + 'tsconfig.json')())
      .on('end', res)
      .pipe(gulp.dest(PATH.server.dist));
  });
}

async function cleanDist() {
  return new Promise((res, rej) => {
    gulp.src(
      [
        PATH.client.dist,
        PATH.server.dist,
        PATH.dist
      ],
      { allowEmpty: true }
    )
      .on('end', res)
      .pipe(gulpClean());
  });
}

async function cleanMap() {
  return new Promise((res, rej) => {
    gulp.src(PATH.client.dist + '**/*.map', { allowEmpty: true })
      .on('end', res)
      .pipe(gulpClean());
  });
}

// Watch with source map
gulp.task('watch', async () => {
  await updateScript();
  await updateStatic();
  await updateStyle();
  await updateServer();
  gulp.watch(PATH.client.src + 'script/**/*.ts', updateScript);
  gulp.watch([PATH.client.src + 'assets/**/*', PATH.client.src + '**/*.html'], updateStatic);
  gulp.watch(PATH.client.src + 'style/**/*.less', updateStyle);
  gulp.watch(PATH.server.src, updateServer);
});

// Build app without source map, but not pack
gulp.task('build', async () => {
  await cleanDist();
  await updateScript();
  await updateStatic();
  await updateStyle();
  await updateServer();
  await cleanMap();
});

// Build and pack app to /dist folder
gulp.task('pack', async () => {
  gulp.src(PATH.docker.path + '**/*')
    .pipe(gulp.dest(PATH.dist));
  gulp.src(PATH.client.dist + '**/*')
    .pipe(gulp.dest(PATH.dist + 'client'));
  gulp.src([PATH.server.dist + '**/*.js', PATH.server.path + '*.json'])
    .pipe(gulp.dest(PATH.dist + 'server'));
});

gulp.task('default', gulp.parallel('build'));
