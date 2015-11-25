/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
      emberCliFontAwesome: {
        includeFontAwesomeAssets: false
      }
    });


    /** CSS **/
    app.import('bower_components/admin-lte/bootstrap/css/bootstrap.min.css');
    app.import('bower_components/admin-lte/dist/css/AdminLTE.min.css');
    app.import('bower_components/admin-lte/dist/css/skins/skin-black.min.css');
    app.import('bower_components/growl/stylesheets/jquery.growl.css');

    /** Chart C3 **/

    app.import('bower_components/d3/d3.min.js');
    app.import('bower_components/c3/c3.css');
    app.import('bower_components/c3/c3.min.js');
    app.import('bower_components/ember-c3/build/lib.js');

    /** JS **/
    app.import('bower_components/admin-lte/bootstrap/js/bootstrap.min.js');
    app.import('bower_components/admin-lte/dist/js/app.min.js');
    app.import('bower_components/growl/javascripts/jquery.growl.js');
    app.import('bower_components/moment/moment.js');

    return app.toTree();
};
