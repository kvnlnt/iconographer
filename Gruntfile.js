module.exports = function (grunt) {

  grunt.initConfig({
    open: {
      dev: {
        path:'./target/nml-icons.html',
        app: 'Google Chrome'
      }
    },
    webfont: {
      icons: {
        src: "icons/*.svg",
        dest: "target",
        destCss: "target",
        options: {
          font: "nml-icons",
          types: ["eot", "woff2", "woff", "ttf", "svg"],
          htmlDemo: true,
          htmlDemoTemplate: 'templates/demo.html',
          templateOptions: {
            fontFamilyName: "NovoMedLink Icons",
            baseClass: "nml-icon",
            classPrefix: "nml-icon-"
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-open');
  grunt.registerTask('default', ['webfont']);
  grunt.registerTask('preview', ['open:dev'])

};