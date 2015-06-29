import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', function() {
    this.route('courses', function() {
      this.route('new');
      this.route('edit', {path: 'edit/:course_id'});
    });
    this.route('grades', function() {
      this.route('new');
      this.route('edit', {path: 'edit/:grade_id'});
    });
    this.route('profile', function() {
      this.route('edit');
    });
    this.route('feedback');
  });
  this.route('register');
});

export default Router;
