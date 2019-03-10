const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const gulpConcat = require('gulp-concat');

const read = gulp.src;
const save = gulp.dest;

const task = process.argv[2];
const arch = process.argv[3];
console.log(
  '\x1B[36m%s\x1B[0m',
  `
  -------------------------------
  command: ${task}, arch: ${arch || 'amd64'}
  -------------------------------
  `
);

function catchError(err) {
  const noSuchArch = err.toString().search('File not found') > -1;
  if (noSuchArch) {
    console.error(
      '\x1B[31m%s\x1B[39m',
      `
  -------------------------------------------------
  No matching arch: ${arch}, docker file not found.
  -------------------------------------------------
      `
    );
  } else {
    console.error(err);
  }
  throw `
  -------------------------
  No matching arch: ${arch}
  -------------------------
  `;
}

/** Clean all dist folder. */
async function clean() {
  read(
    [
      'client/dist',
      'server/dist',
      'dist'
    ],
    { allowEmpty: true }
  )
    .pipe(gulpClean());
}

/** Build and pack application. */
async function pack(arch) {
  const suffix = arch ? `.${arch}` : '';
  // read(`docker/config/**/*`)
  //   .pipe(save('dist/config'));
  // read(`docker/server/Dockerfile${suffix}`)
  //   .on('error', catchError)
  //   .pipe(gulpConcat('Dockerfile'))
  //   .pipe(save('dist/server'));
  // read(`docker/docker-compose${suffix}.yml`)
  //   .on('error', catchError)
  //   .pipe(gulpConcat('docker-compose.yml'))
  //   .pipe(save('dist'));
  read(`docker/**/*`)
    .pipe(save('dist'))
  read(`client/dist/**/*`)
    .pipe(save('dist/client'));
  read([
    'server/dist/**/*.js',
    'server/package*.json',
    'server/server.config.json'
  ]).pipe(save('dist/server'));
}

switch (task.toLowerCase()) {
  case 'clean': clean(); break;
  case 'pack': pack(arch); break;
  default: console.error('Task: clean or pack.'); break;
}
