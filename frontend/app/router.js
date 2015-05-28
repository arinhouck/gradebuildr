import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('users', function() {
    this.route('new');
  });
  this.route('dashboard', function() {
    this.route('courses', function() {
      this.route('show');
    });
  });
});

export default Router;
