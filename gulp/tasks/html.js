import fileInclude from "gulp-file-include";
import webpHtmlNoSvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fileInclude())
        .pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
        .pipe(app.plugins.replace(/@css\//g, 'assets/css/'))
        .pipe(app.plugins.replace(/@sass\//g, 'assets/sass/'))
        .pipe(app.plugins.replace(/@js\//g, 'assets/js/'))
        .pipe(app.plugins.replace(/@json\//g, 'assets/json/'))
        .pipe(webpHtmlNoSvg())
        .pipe(
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream())
}