import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('session.currentUser');
  },
  afterModel(model) {
    return Ember.RSVP.hash({
      courses: model.get('courses'),
      weights: model.get('weights')
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('grades', []);
    controller.set('selectedCourse', void 0);
    controller.set('isSaving', false);
  },
  deactivate: function() {
    this.send('rollbackGrades', this.get('controller.grades'));
  }
});
