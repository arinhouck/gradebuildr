import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var store = controller.get('store');
    this.get('session.currentUser').then(function(user) {
      controller.set('requests', user.get('receivedRequests'));
    });
  }
});
