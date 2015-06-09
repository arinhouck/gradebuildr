import Ember from 'ember';

export default Ember.Controller.extend({
  scales: ['Regular', 'Plus/Minus', 'Plus', 'Minus'],
  weights: [],

  actions: {
    createCourse: function() {
      var self = this;
      var weights = this.get('weights')
      if (weights.length > 0) {
        weights.forEach(function(weight) {
          weight.save()
        });
      }
      this.get('course').save().then(function(course){
        self.get('model.courses').pushObject(course);
        $.growl.notice({title: 'Course', message: 'Sucessfully created course.'})
      })
    },
    addWeight: function() {
      var weight = this.store.createRecord('weight', {course: this.get('model.id')});
      debugger;
      this.get('weights').pushObject(weight);
    }
  }
});
