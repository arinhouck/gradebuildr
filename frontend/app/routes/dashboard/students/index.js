import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('session.currentUser');
  },
  afterModel(model) {
    return model.get('students');
  }
});
