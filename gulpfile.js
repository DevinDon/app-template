const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const gulpConcat = require('gulp-concat');

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

// Pack app to /dist folder, x86/64 platform
gulp.task('pack', async () => {
  gulp.src(PATH.docker.path + 'config/**/*')
    .pipe(gulp.dest(PATH.dist + 'config'));
  gulp.src(PATH.docker.path + 'server/Dockerfile')
    .pipe(gulp.dest(PATH.dist + 'server'));
  gulp.src(PATH.docker.path + 'docker-compose.yml')
    .pipe(gulp.dest(PATH.dist));
  gulp.src(PATH.client.dist + '**/*')
    .pipe(gulp.dest(PATH.dist + 'client'));
  gulp.src([PATH.server.dist + '**/*.js', PATH.server.path + '*.json'])
    .pipe(gulp.dest(PATH.dist + 'server'));
});

// Pack app to /dist folder, arm32v7 platform
gulp.task('pack:arm32v7', async () => {
  gulp.src(PATH.docker.path + 'config/**/*')
    .pipe(gulp.dest(PATH.dist + 'config'));
  gulp.src(PATH.docker.path + 'server/Dockerfile.arm32v7')
    .pipe(gulpConcat('Dockerfile'))
    .pipe(gulp.dest(PATH.dist + 'server'));
  gulp.src(PATH.docker.path + 'docker-compose.arm32v7.yml')
    .pipe(gulpConcat('docker-compose.yml'))
    .pipe(gulp.dest(PATH.dist));
  gulp.src(PATH.client.dist + '**/*')
    .pipe(gulp.dest(PATH.dist + 'client'));
  gulp.src([PATH.server.dist + '**/*.js', PATH.server.path + '*.json'])
    .pipe(gulp.dest(PATH.dist + 'server'));
});

gulp.task('default', gulp.parallel('pack'));
