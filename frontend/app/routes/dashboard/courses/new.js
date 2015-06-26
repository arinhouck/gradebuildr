import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      course: store.createRecord('course'),
      semesters: store.find('semester')
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model.course);
    controller.set('semesters', model.semesters);
    controller.set('selectedSemester', null);
    controller.set('isSaving', false);
    controller.set('weights', [ controller.store.createRecord('weight', {course: model.course}) ]);
  }
});
