var gulp = require('gulp')
var exec = require('child_process').exec

const gulpsync = require('gulp-sync')(gulp)

gulp.task('copy', function() {
  return gulp.src(['lib/**/*', '!lib/**/*.js']).pipe(gulp.dest('dist'))
})

gulp.task('create-public-folder', function(cb) {
  //exec('mkdir dist\\public', function (err, stdout, stderr) {
  exec('mkdir dist/public', function(err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  })
})

gulp.task('create-dist-folder', function(cb) {
  //exec('mkdir dist\\assets', function (err, stdout, stderr) {
  exec('mkdir dist', function(err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  })
})

gulp.task('create-assets-folder', function(cb) {
  //exec('mkdir dist\\assets', function (err, stdout, stderr) {
  exec('mkdir dist/assets', function(err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  })
})

gulp.task(
  'setup',
  gulpsync.sync([
    'create-dist-folder',
    'create-public-folder',
    'create-assets-folder',
    'copy'
  ])
)