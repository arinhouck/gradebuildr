import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;
    return store.find('course', params.id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  },
  actions: {
    willTransition: function() {
      var course = this.controller.get('model');
      course.rollback();
    }
  }
});
