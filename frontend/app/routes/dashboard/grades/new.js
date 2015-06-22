import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('user', this.get('session.content.secure.id'));
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('selectedCourse', void 0);
    controller.set('isSaving', false);
  }
});
