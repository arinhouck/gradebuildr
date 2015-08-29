
import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model(params) {
    this.controllerFor('dashboard.students').set('isLoading', true);
    return this.store.find('student', params.user_id);
  },
  afterModel(model) {
    return Ember.RSVP.hash({
      courses: this.store.find('course', {user_id: model.get('id')}),
      grades: this.store.find('grade', {user_id: model.get('id')})
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    this.controllerFor('dashboard.students').set('isLoading', false);
  },
});
