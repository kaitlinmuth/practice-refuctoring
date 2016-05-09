import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import watchify from 'watchify';
import babel from 'babelify';
import stringify from 'stringify';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const paths = {
    index: './src/scripts/index.js',
    out: 'scripts/build.js',
    mapsOut: './',
    gulpDest: './build',
};

const bundler = watchify(
    browserify(
        paths.index,
        { debug: IS_PRODUCTION }
    )
    .transform(stringify, {
        appliesTo: { includeExtensions: ['.html'] },
        minifiy: true,
    })
    .transform(babel)
);

function bundle() {
    bundler.bundle()
        .on('error', function onBundleError(e) {
            console.error(e);
            this.emit('end');
        })
        .pipe(source(paths.out))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: !IS_PRODUCTION }))
        .pipe(sourcemaps.write(paths.mapsOut))
        .pipe(gulp.dest(paths.gulpDest));
}

// if (global.argv.watch) {
    console.log('watching scripts');
    bundler.on('update', () => {
        console.log('-> bundling...');
        bundle();
    });
// } else {
//     console.log('single build running');
//     bundler.on('log', function onSingleBuildEnd() {
//         bundler.close();
//         this.emit('end');
//     });
// }

export default function () {
    return bundle();
}
