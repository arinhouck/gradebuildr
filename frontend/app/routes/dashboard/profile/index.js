import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var store = controller.get('store');
    this.get('session.currentUser').then(function(user) {
      controller.set('model', user);
      store.find('semester').then(function(semesters) {
        controller.set('semesters', semesters);
      });
    });
  }
});
