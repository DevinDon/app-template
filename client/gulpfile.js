const gulp = require('gulp');
const gulpCss = require('gulp-clean-css');
const gulpConcat = require('gulp-concat');
// const gulpCopy = require('gulp-copy');
const gulpUglify = require('gulp-uglify-es');

const assets = {
  in: 'src/assets/**/*',
  out: 'dist/assets/'
};

const document = {
  in: 'src/**/*.html',
  out: 'dist/'
};

const script = {
  in: 'dist/script/index.src.js',
  out: 'dist/script/'
};

const style = {
  in: 'src/style/**/*.css',
  out: 'dist/style/'
};

/** 生成资源文件. */
gulp.task('assets', async () => {
  gulp.src(assets.in)
    .pipe(gulp.dest(assets.out));
});

/** 生成文档. */
gulp.task('document', async () => {
  gulp.src(document.in)
    .pipe(gulp.dest(document.out));
});

/** 压缩脚本文件. */
gulp.task('script', async () => {
  gulp.src(script.in)
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

/** 压缩样式文件. */
gulp.task('style', async () => {
  gulp.src(style.in)
    .pipe(gulpCss())
    .pipe(gulpConcat('index.min.css'))
    .pipe(gulp.dest(style.out));
});

gulp.task('build', gulp.parallel('assets', 'document', 'script', 'style'));

gulp.task('pack', async () => {
  console.log('Pack task not defined.');
});

gulp.task('watch', async () => {
  gulp.parallel('build')(e => console.log('First build completed.'));
  gulp.watch(assets.in, gulp.parallel('assets'));
  gulp.watch(document.in, gulp.parallel('document'));
  gulp.watch(script.in, gulp.parallel('script'));
  gulp.watch(style.in, gulp.parallel('style'));
});

gulp.task('default', gulp.parallel('build'));
