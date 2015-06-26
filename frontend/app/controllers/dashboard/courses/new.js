import Ember from 'ember';

export default Ember.Controller.extend({
  scales: ['Regular', 'Plus/Minus', 'Plus', 'Minus'],
  isntValid: Em.computed.not('isValid'),

  isOpenDidChange: function() {
    if (!this.get('isOpen') && !this.get('isSaving')) {
      this.transitionToRoute('dashboard.courses');
    }
  }.observes('isOpen'),

  selectionDidChange: function() {
    this.set('model.semester', this.get('selectedSemester.name'))
  }.observes('selectedSemester'),

  actions: {
    createCourse: function() {
      var controller = this;
      var course = this.get('model');
      var weights = this.get('weights');
      this.set('isSaving', true);
      this.store.find('user', this.get('session.content.secure.id')).then(function(user) {
        course.set('user', user);
        return course.save();
      }).then(function(course) {
        if (weights.length > 0) {
          weights.forEach(function(weight) {
            weight.save();
          });
        }
      }).then(function() {
        controller.transitionToRoute('dashboard.courses');
        controller.send('updateIndex');
        $.growl.notice({title: 'Course', message: 'Sucessfully created.'});
      });
    },
    addWeight: function() {
      var weight = this.store.createRecord('weight');
      weight.set('course', this.get('model'));
      this.get('weights').pushObject(weight);
    }
  }
});
