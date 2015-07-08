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
      this.route('show', {path: '/:course_id'});
    });
    this.route('grades', function() {
      this.route('new');
      this.route('edit', {path: 'edit/:grade_id'});
    });
    this.route('profile', function() {
      this.route('requests', function() {
        this.route('new');
      });
      this.route('password');
      this.route('received-requests');
      this.route('subscriptions', function() {
        this.route('cancel');
      });
    });
    this.route('feedback');
    this.route('students', function() {
      this.route('show', {path: '/:user_id'});
    });
  });
  this.route('register');
  this.route('confirmation');
  this.route('confirmed');

  this.route('password', function() {
    this.route('new');
    this.route('edit');
  });
});

export default Router;
