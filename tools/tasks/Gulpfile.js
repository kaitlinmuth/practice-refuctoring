import gulp from 'gulp';
import copy from './copy';
import buildScripts from './buildScripts';

// server's task file is entirely self contained
import './server';

gulp.task('scripts', buildScripts);
gulp.task('copy', copy);

gulp.task('build', ['copy', 'scripts']);

gulp.task('default', ['build', 'server']);
