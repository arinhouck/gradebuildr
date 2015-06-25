import Ember from 'ember';

export default Ember.Controller.extend({
  scales: ['Regular', 'Plus/Minus', 'Plus', 'Minus'],
  isntValid: Em.computed.not('isValid'),
  weights: Em.computed.alias('model.weights'),

  isOpenDidChange: function() {
    if (!this.get('isOpen') && !this.get('isSaving')) {
      this.transitionToRoute('dashboard.courses');
    }
  }.observes('isOpen'),

  actions: {
    editCourse: function() {
      var controller = this;
      var course = this.get('model');
      var weights = this.get('model.weights');
      this.set('isSaving', true);
      course.save().then(function(course) {
        // TODO: Filter by is dirty
        var dirtyWeights = weights.filterProperty('isDirty')
        if (dirtyWeights.length > 0) {
          dirtyWeights.forEach(function(weight) {
              weight.save();
          });
        }
      }).then(function() {
        controller.transitionToRoute('dashboard.courses');
        $.growl.notice({title: 'Course', message: 'Sucessfully updated.'});
      });
    },
    addWeight: function() {
      var weight = this.store.createRecord('weight');
      weight.set('course', this.get('model'));
      this.get('model.weights').pushObject(weight);
    }
  }
});
