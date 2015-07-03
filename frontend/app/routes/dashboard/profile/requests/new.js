import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function(controller, model) {
    var store = this.store;
    this.get('session.currentUser').then(function(user) {
      controller.set('model', store.createRecord('request', {director: user}));
    });
    controller.set('email', '');
    controller.set('isSaving', false);
  }
});
