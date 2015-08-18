
import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model() {
    return this.get('model');
  },
  afterModel(model) {
    return Ember.RSVP.hash({
      grades: model.get('grades'),
      courses: model.get('courses')
    });
  }
});
