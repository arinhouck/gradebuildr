import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function(controller, model) {
    this.get('session.currentUser').then(function(user) {
      controller.set('model', user);
    });
    controller.set('selectedCourse', void 0);
    controller.set('isSaving', false);
  },
  deactivate: function() {
    this.get('controller.grades').filterProperty('isDirty').forEach(function(grade) {
      grade.rollback();
    });
  }
});
