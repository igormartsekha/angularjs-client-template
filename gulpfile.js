var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    del = require('del'),
    runSequence = require('run-sequence').use(gulp);


var js_array = [
    "bower_components/angular/angular.js",
    "bower_components/angular-ui-router/release/angular-ui-router.js",
    "bower_components/angular-bootstrap/ui-bootstrap.js",
    'app/app.js',
    'app/*/*/*.js'
];
gulp.task('js', function(){
    return gulp.src(js_array)
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('app.js'))
        //.pipe(gp_uglify())
        .pipe(gulp.dest('static/js'));
});

var css_array = [
    "bower_components/bootstrap/dist/css/bootstrap.css"
];
gulp.task('css', function(){
    return gulp.src(css_array)
        .pipe(gp_concat('app.css'))
        .pipe(gulp.dest('static/css'));
});

gulp.task('fonts', function(){
    return gulp.src('bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('static/fonts'));
});

gulp.task('clean-tmp', function(){
    return del('dist');
});

gulp.task('default', function() {
    runSequence('js', 'css', 'fonts', 'clean-tmp', function(){
        console.log("Done");
    });
});