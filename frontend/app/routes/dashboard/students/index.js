import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('isLoading', true);
    this.get('session.currentUser').then(function(user) {
       user.get('students').then(function(students) {
         controller.set('students', students);
         controller.set('isLoading', false);
       });
    });
  }
});
