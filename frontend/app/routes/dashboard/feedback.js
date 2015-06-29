import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var store = this.store;
    this.get('session.currentUser').then(function(user) {
      controller.set('model', store.createRecord('feedback', {email: user.get('email')}));
    });
    controller.set('isSaving', false);
  }
});
