import Ember from 'ember';

export default Ember.Controller.extend({
  scales: ['Regular', 'Plus/Minus', 'Plus', 'Minus'],
  weights: [],

  actions: {
    createCourse: function() {
      var self = this;
      var course = this.get('model');
      var weights = this.get('weights');
      this.store.find('user', this.get('session.content.secure.id')).then(function(user) {
        course.set('user', user);
        return course.save();
      }).then(function(course) {
        if (weights.length > 0) {
          weights.forEach(function(weight) {
            weight.set('course', course);
            weight.save();
          });
        }
      }).then(function() {
        self.transitionToRoute('dashboard.courses').then(function() {
          $.growl.notice({title: 'Course', message: 'Sucessfully created course.'});
        });
      });
    },
    addWeight: function() {
      var weight = this.store.createRecord('weight');
      this.get('weights').pushObject(weight);
    }
  }
});
