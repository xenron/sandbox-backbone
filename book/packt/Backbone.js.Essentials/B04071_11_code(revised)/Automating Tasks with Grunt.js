module.exports = function(grunt) {
    grunt.initConfig({
        requirejs: {
            app: {
                options: {
                    findNestedDependencies: true,
                    mainConfigFile: 'public/js/config.js',
                    baseUrl : 'public/js',
                    name : 'app',
                    out : 'build.js',
                    optimize : 'none'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', ["requirejs"]);
};