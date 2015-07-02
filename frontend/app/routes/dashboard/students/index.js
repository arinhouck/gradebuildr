import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.get('session.currentUser').then(function(user) {
      controller.set('students', user.get('students'));
    });
  }
});
