import Ember from 'ember';

export default Ember.Controller.extend({
  grades: [],

  setCourse: function() {
    var controller = this;
    this.set('grades', []); // Reset grades
    this.set('gradeWeights', []); // Reset gradeWeights

    this.store.find('course', this.get('selectedCourse')).then(function(course){
      controller.set('course', course);
      controller.send('addGrade'); // Push first grade
      if (course) {
        controller.set('gradeWeights', course.get('weights'));
      }
    });
  }.observes('selectedCourse'),

  actions: {
    createGrades: function() {
      var controller = this;
      var grades = this.get('grades');
        if (grades.length > 0) {
          // TODO: Use Ember Promise (then doesn't work)
          grades.forEach(function(grade) {
            controller.store.find('weight', grade.get('selectedWeight')).then(function(weight) {
              grade.set('weight', weight)
              grade.save();
            });
          });
          // .then(function() {
          //   controller.transitionToRoute('dashboard.grades').then(function() {
          //     $.growl.notice({title: 'Grades', message: 'Sucessfully created.'});
          //   });
          // });
        }
    },
    addGrade: function() {
      var grade = this.store.createRecord('grade');
      grade.set('user', this.get('model'));
      grade.set('course', this.get('course'));
      this.get('grades').pushObject(grade);
    },
    removeGrade: function(grade) {
      this.get('grades').removeObject(grade);
    }
  }

});
