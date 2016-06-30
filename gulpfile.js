var gulp = require('gulp');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync').create();

gulp.task('webpack', function() {
    return gulp.src('src/main.js')
        .pipe(webpack({
            output: {
                filename: 'bundle.js',
            },
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

gulp.task('html-watch', function() {
    browserSync.reload();
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });

    gulp.watch(['src/*'], ['webpack']);
    gulp.watch(['index.html'], ['html-watch']);
});

gulp.task('default', ['watch']);
