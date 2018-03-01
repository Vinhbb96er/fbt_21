let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .js('resources/assets/templates/bookingtour/js/custom.js', 'public/templates/bookingtour/js/custom.js')
   .styles('resources/assets/templates/bookingtour/css/style.css', 'public/templates/bookingtour/css/style.css')
   .copyDirectory('resources/assets/templates/bookingtour/images', 'public/templates/bookingtour/img');
