import path from 'path';

import gulp from 'gulp';
import connect from 'gulp-connect';

gulp.task('connect', () => {
    connect.server({
        root: 'build',
        fallback: './src/index.html',
        livereload: !global.argv.noReload,
        port: global.argv.port || 8080,
        debug: global.argv.debug,
    });
});

gulp.task('reload', () => {
    gulp.src('./build/**/*')
        .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch(['./build/**/*'], ['reload']);
});

gulp.task('server', ['connect', 'watch']);
