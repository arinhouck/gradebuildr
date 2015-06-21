import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('isSaving', false);
    controller.set('courses', this.store.all('course'));
    controller.set('selectedCourse', model.get('course.id'));
    controller.set('model.selectedWeight', model.get('weight.id'));
  },
  actions: {
    willTransition: function() {
      var grade = this.controller.get('model');
      grade.rollback();
    }
  }
});
