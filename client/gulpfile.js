const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const gulpCss = require('gulp-clean-css');
const gulpConcat = require('gulp-concat');
const gulpUglify = require('gulp-uglify-es');
const child = require('pify')(require('child_process'));

/** Client. */
const client = {
  in: 'dist/**/*',
  out: '../dist/client/'
};

/** Server. */
const server = {
  in: '../server/dist/**/*',
  out: '../dist/server/'
};

/** Docker. */
const docker = {
  in: '../docker/**/*',
  out: '../dist/'
};

/** HTML assets. */
const assets = {
  in: 'src/assets/**/*',
  out: 'dist/assets/'
};

/** HTML document. */
const document = {
  in: 'src/**/*.html',
  out: 'dist/'
};

/** JavaScript. */
const script = {
  src: 'src/script/**/*.ts',
  in: 'src/script/lib/**/*.js',
  build: 'build/index.src.js',
  out: 'dist/'
};

/** CSS. */
const style = {
  in: 'src/style/**/*.css',
  out: 'dist/'
};

/** Generate resource files. */
gulp.task('assets', async () => {
  gulp.src(assets.in)
    .pipe(gulp.dest(assets.out));
});

/** Generate document. */
gulp.task('document', async () => {
  gulp.src(document.in)
    .pipe(gulp.dest(document.out));
});

/** Compress script files. */
gulp.task('script', async () => {
  await child.exec('tsc');
  gulp.src([script.in, script.build])
    .pipe(
      gulpUglify.default({
        mangle: {
          eval: true,
          keep_fnames: false,
          toplevel: true,
          reserved: ['htmlBind']
        },
        compress: true
      })
    )
    .pipe(gulpConcat('index.min.js'))
    .pipe(gulp.dest(script.out));
});

/** Compress style files. */
gulp.task('style', async () => {
  gulp.src(style.in)
    .pipe(gulpCss())
    .pipe(gulpConcat('index.min.css'))
    .pipe(gulp.dest(style.out));
});

/** Clean temp files. */
gulp.task('clean', async () => {
  const clean = {
    in: 'build/'
  };
  gulp.src(clean.in, { allowEmpty: true })
    .pipe(gulpClean());
});

/** Build client. */
gulp.task('build', async () => {
  gulp.parallel('assets', 'document', 'script', 'style')(gulp.parallel('clean'));
});

/** Pack client and server to /dist. */
gulp.task('pack', async () => {
  console.log('Pack task starting...');
  gulp.parallel('build')(e => {
    gulp.src(client.in)
      .pipe(gulp.dest(client.out));
  });
  await child.exec('tsc', { cwd: '../server' });
  gulp.src(server.in)
    .pipe(gulp.dest(server.out));
  gulp.src(docker.in)
    .pipe(gulp.dest(docker.out));
});

/** Watch for build. */
gulp.task('watch', async () => {
  gulp.parallel('build')(e => console.log('First build completed.'));
  gulp.watch(assets.in, gulp.parallel('assets'));
  gulp.watch(document.in, gulp.parallel('document'));
  gulp.watch(script.src, gulp.parallel('script'));
  gulp.watch(style.in, gulp.parallel('style'));
});

/** Default to run task build. */
gulp.task('default', async () => {
  console.log('default do nothing');
  gulp.parallel('clean')(e => console.log('Clean done.'));
});
