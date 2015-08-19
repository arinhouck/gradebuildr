
import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model(params) {
    this.controllerFor('dashboard.students').set('isLoading', true);
    return this.store.find('student', params.user_id);
  },
  afterModel(model) {
    return Ember.RSVP.hash({
      grades: model.get('grades'),
      courses: model.get('courses')
    });
  }
});
