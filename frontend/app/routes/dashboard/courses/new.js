import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var store = this.store;
    return store.createRecord('course');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('isSaving', false);
    controller.set('weights', []);
  }
});
