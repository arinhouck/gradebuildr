import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user', this.get('session.content.secure.id'));
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('isSaving', false);
  }
});
