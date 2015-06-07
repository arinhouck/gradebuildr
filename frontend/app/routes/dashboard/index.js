import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var id = this.get('session.content.secure.id');
    if (id) {
      return this.store.find('user', id);
    }
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
