var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    babel = require("gulp-babel"),
    sass = require("gulp-sass"),
    concatCss = require("gulp-concat-css");


gulp.task("js", () => {
    gulp.src("src/**/*.js")
        .pipe(concat("ng-floating-label.js"))
        .pipe(babel({
            presets: ["es2015"],
            plugins: ["transform-remove-strict-mode"]
        }))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("css", () => {
    gulp.src("src/**/*.scss")
        .pipe(sass({ outputStyle: "compressed" }).on('error', function (e) { console.log(e); }))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("minify-css", ["css"], () => {
    gulp.src(["dist/css/**/*.css"])
        .pipe(concatCss("ng-floating-label.min.css"))
        .pipe(gulp.dest("dist"));
});

gulp.task("minify-js", ["js"], () => {
    gulp.src([ "dist/js/ng-floating-label.js" ])
        .pipe(concat("ng-floating-label.min.js"))
        .pipe(uglify().on('error', function (e) { console.log(e); }))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["minify-css", "minify-js"], () => { });