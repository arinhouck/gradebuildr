import Ember from 'ember';

export default Ember.Controller.extend({

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
      controller.store.find('weight', this.get('selectedWeight')).then(function(weight) {
        grade.set('course', controller.get('course'));
        grade.set('weight', weight);
        grade.save().then(function() {
          controller.transitionToRoute('dashboard.grades').then(function() {
            $.growl.notice({title: 'Grade', message: 'Sucessfully updated.'});
          });
        });
      });

    }
  }

});
