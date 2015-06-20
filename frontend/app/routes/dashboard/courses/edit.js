import Ember from 'ember';

export default Ember.Route.extend({
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
