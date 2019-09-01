const gulp = require('gulp');
const browserSync = require('browser-sync');
const dir = {
    src: 'www/site/public/',
    build: 'www/build/'
};

// Browser sync server
const bsp =
    function bsp() {
        browserSync.init({
            server: {
                baseDir: dir.src
            }
        });
        gulp.watch(dir.src + '**/*.html').on('change', browserSync.reload);
        gulp.watch(dir.src + 'assets/css/*.css').on('change', browserSync.reload);
        gulp.watch(dir.src + 'assets/js/*.js').on('change', browserSync.reload);
    };

gulp.task('default', gulp.parallel(
    gulp.series(bsp)
));

exports.bsp = bsp;
exports.default = 'default';
