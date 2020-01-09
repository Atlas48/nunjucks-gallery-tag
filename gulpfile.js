var gif, gls, gcat;
gif=require('gulp-if');
gls=require('gulp-livescript');
gcat=require('gulp-concat');

class NotImplementedError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "NotImplementedError";
  }
}

function def() {
//TODO: add logic
}

gulp.task('build', def);
gulp.task('default', 'build');
