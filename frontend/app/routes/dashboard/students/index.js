import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('session.currentUser');
  },
  afterModel(model) {
    this.controllerFor('dashboard.students.index').set('students', model.get('students'))
  }

});
