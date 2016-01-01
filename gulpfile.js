var gulp       = require('gulp')
var browserify = require('browserify')
var source     = require('vinyl-source-stream')

gulp.task('elec-run', function() {
  gulp.src('node_modules/.bin/electron .');
})

gulp.task('browserify-run', function() { // build というタスクを定義します
  browserify({
    'entries': ['./main.js']
  }) // browserify の設定をして・・・
  .bundle().pipe(source('bundle.js')).pipe(gulp.dest('css/'));
})

// gulp.task('default', ['build']) // デフォルトの gulp タスクは build です。
gulp.task('build', ['elec-run', 'browserify-run'])