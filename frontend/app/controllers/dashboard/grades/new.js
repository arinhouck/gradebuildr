import Ember from 'ember';

export default Ember.Controller.extend({
  courses: Ember.computed.map('model.courses', item => item),
  noGrades: Ember.computed.empty('grades'),

  isOpenDidChange: function() {
    if (!this.get('isOpen') && !this.get('isSaving')) {
      this.transitionToRoute('dashboard.grades');
    }
  }.observes('isOpen'),

  setCourse: function() {
    var controller = this;
    var course = this.get('selectedCourse');
    this.set('grade', []); // Reset grades
    this.set('gradeWeights', []); // Reset gradeWeights
    if (course) {
      controller.send('addGrade'); // Push first grade
      controller.set('gradeWeights', course.get('weights'));
    }
  }.observes('selectedCourse'),

  actions: {
    createGrades: function() {
      var controller = this;
      var grades = this.get('grades');
      if (grades.length > 0) {
        this.set('isSaving', true);

        var promises = grades.map(function(grade) {
            return grade.save();
        }, []);

        Ember.RSVP.all(promises).then(function(grades) {
          controller.store.find('user', controller.get('session.currentUser.id')).then(function(user) {
            user.reload();
          })
          controller.get('selectedCourse').reload();
          controller.transitionToRoute('dashboard.grades');
          $.growl.notice({title: 'Grades', message: 'Sucessfully created.'});
        });

      }
    },
    addGrade: function() {
      var grade = this.store.createRecord('grade');
      grade.set('user', this.get('model'));
      grade.set('course', this.get('selectedCourse'));
      this.get('grades').pushObject(grade);
    },
    removeGrade: function(grade) {
      this.get('grades').removeObject(grade);
    }
  }

});
