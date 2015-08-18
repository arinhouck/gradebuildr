import Ember from 'ember';

export default Ember.Controller.extend({

  isOpenDidChange: function() {
    if (!this.get('isOpen') && !this.get('isSaving')) {
      this.transitionToRoute('dashboard.grades');
    }
  }.observes('isOpen'),

  setCourse: function() {
    var controller = this;
    this.set('gradeWeights', []); // Reset gradeWeights

    this.store.find('course', this.get('selectedCourse')).then(function(course){
      controller.set('course', course);
      if (course) {
        controller.set('gradeWeights', course.get('weights'));
      }
    });
  }.observes('selectedCourse'),

  actions: {
    editGrade: function() {
      var controller = this;
      var grade = this.get('model');
      this.set('isSaving', true);
      controller.store.find('weight', grade.get('selectedWeight')).then(function(weight) {
        grade.set('course', controller.get('course'));
        grade.set('weight', weight);
        grade.save().then(function() {
          controller.get('course').reload();
          controller.store.find('user', controller.get('session.currentUser.id')).then(function(user) {
            user.reload();
          })
          controller.transitionToRoute('dashboard.grades');
          $.growl.notice({title: 'Grade', message: 'Sucessfully updated.'});
        });
      });

    }
  }

});
