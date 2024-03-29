import Ember from 'ember';

export default Ember.Controller.extend({
  scales: ['Regular', 'Plus/Minus', 'Plus', 'Minus'],
  semesterNames: Ember.computed.alias('semesters.@each.name'),
  isntValid: Em.computed.not('isValid'),

  isOpenDidChange: function() {
    if (!this.get('isOpen') && !this.get('isSaving')) {
      this.transitionToRoute('dashboard.courses');
    }
  }.observes('isOpen'),

  actions: {
    createCourse: function() {
      var controller = this;
      var course = this.get('model');
      var weights = this.get('weights');
      this.set('isSaving', true);
      this.get('session.currentUser').then(function(user) {
        course.set('user', user);
        return course.save();
      }).then(function(course) {
        if (weights.length > 0) {
          weights.forEach(function(weight) {
            weight.save();
          });
        }
      }).then(function() {
        course.reload();
        controller.store.find('user', controller.get('session.currentUser.id')).then(function(user) {
          user.reload();
        })
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
