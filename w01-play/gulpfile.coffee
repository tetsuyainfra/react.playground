
gulp  = require('gulp')
shell = require('gulp-shell')

src  = "src/"
dest = "built/"

#gulp.task 'httpd', shell.task(["npm run httpd"],      {verbose: true})

gulp.task 'watch:jade', shell.task(["npm run watch-jade"], {verbose: true})
gulp.task 'watch:js',   shell.task(["npm run watch-js"],   {verbose: true})
gulp.task 'watch', ['watch:jade', 'watch:js']
#gulp.task 'watch', ['watch:jade', 'watch:js', 'httpd']
#gulp.task 'watch', ['build:jade', 'watch:js', 'httpd']

gulp.task 'build:jade', shell.task(["npm run build-jade"], {verbose: true})
gulp.task 'build:js',   shell.task(["npm run build-js"],   {verbose: true})
gulp.task 'build', ['build:jade', 'build:js']


gulp.task 'default', ['build']
