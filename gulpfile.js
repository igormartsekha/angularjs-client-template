var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    del = require('del'),
    angularbuilder = require("gulp-angular-builder"),
    runSequence = require('run-sequence').use(gulp);

var destinationFolder = 'static';

gulp.task('html', function(){
    return gulp.src('index.html')
        .pipe(gulp.dest(destinationFolder));
});

gulp.task("html-build-files", function () {
    return gulp.src([
        "./app/**/*.+(html)"
    ]).pipe(
        gulp.dest(destinationFolder)
    );
});

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
        .pipe(gulp.dest(destinationFolder+'/js'));
});

var css_array = [
    "bower_components/bootstrap/dist/css/bootstrap.css"
];
gulp.task('css', function(){
    return gulp.src(css_array)
        .pipe(gp_concat('app.css'))
        .pipe(gulp.dest(destinationFolder+'/css'));
});

gulp.task('fonts', function(){
    return gulp.src('bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest(destinationFolder+'/fonts'));
});

gulp.task('clean-tmp', function(){
    return del('dist');
});

gulp.task('default', function() {
    runSequence('html', 'html-build-files', 'js', 'css', 'fonts', 'clean-tmp', function(){
        console.log("Done");
    });
});