import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('semesters', this.store.all('semester'));
    controller.set('isSaving', false);
  }
});
