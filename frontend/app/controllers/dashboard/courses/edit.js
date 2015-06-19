import Ember from 'ember';

export default Ember.Controller.extend({
  scales: ['Regular', 'Plus/Minus', 'Plus', 'Minus'],
  weights: [],

  actions: {
    editCourse: function() {
      var self = this;
      var course = this.get('model');
      var weights = this.get('model.weights');
      course.save().then(function(course) {
        // TODO: Filter by is dirty
        if (weights.length > 0) {
          weights.forEach(function(weight) {
            if (weight.get('isDirty')) {
              weight.save();
            }
          });
        }
      }).then(function() {
        self.transitionToRoute('dashboard.courses').then(function() {
          $.growl.notice({title: 'Course', message: 'Sucessfully updated.'});
        });
      });
    },
    addWeight: function() {
      var weight = this.store.createRecord('weight');
      weight.set('course', this.get('model'));
      this.get('model.weights').pushObject(weight);
    },
    removeWeight: function(weight) {
      this.get('weights').removeObject(weight);
    }
  }
});
