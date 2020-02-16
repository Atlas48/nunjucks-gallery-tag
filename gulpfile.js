var gif, gls, gcat;
gif=require('gulp-if');
gls=require('gulp-livescript');
gcat=require('gulp-concat');
del=require('delete');
tap=require('gulp-tap');

//BEGIN: (MIT)<https://github.com/gkz/prelude-ls/blob/master/lib/Obj.js>
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}
omap = curry$(function(f, object){
  var k, x, resultObj$ = {};
  for (k in object) {
    x = object[k];
    resultObj$[k] = f(x);
  }
  return resultObj$;
});
//END
var o={
  build: function() {
   function hnd(){ if(path.extname(f.path)=='.ls;') t.through(gls({bare:true}), []); }
    return gulp.src('src/*')
    .pipe(tap(hnd))
    .on('error', log.error)
    .pipe(gcat('index.js'))
    .on('error', log.error)
    .pipe(gulp.dest('.'));
  },
  clean: function(cb) {
    del('index.js', cb);
  }
}

omap(gulp.task, o);
gulp.task('default', 'build');
