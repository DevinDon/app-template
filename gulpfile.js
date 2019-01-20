const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const gulpTypeScript = require('gulp-typescript');
const execSync = require('child_process').execSync;

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

async function clean() {
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

gulp.task('clean', clean);

// Pack app to /dist folder
gulp.task('pack', async () => {
  gulp.src(PATH.docker.path + '**/*')
    .pipe(gulp.dest(PATH.dist));
  gulp.src(PATH.client.dist + '**/*')
    .pipe(gulp.dest(PATH.dist + 'client'));
  gulp.src([PATH.server.dist + '**/*.js', PATH.server.path + '*.json'])
    .pipe(gulp.dest(PATH.dist + 'server'));
});

gulp.task('default', gulp.parallel('pack'));
