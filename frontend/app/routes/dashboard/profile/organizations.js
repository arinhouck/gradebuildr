import Ember from 'ember';

export default Ember.Route.extend( {
  setupController: function(controller, model) {
    var store = controller.get('store');
    this.get('session.currentUser').then(function(user) {
      controller.set('organizations', user.get('groupMemberships'));
    });
  },
  actions: {
    updateIndex: function(response) {
      this.controller.store.pushPayload('groupMembership', response);
      this.controller.set('organizations', response.group_memberships);
    }
  }
});
