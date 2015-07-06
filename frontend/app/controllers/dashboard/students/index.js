import Ember from 'ember';

export default Ember.Controller.extend({
  averageSemesterGPA: function() {
    var students = this.get('students');
    var sum = 0, count = 0;
    students.forEach(function(student) {
      var gpa = student.get('semesterGpa');
      if (!isNaN(parseFloat(gpa)) && isFinite(gpa)) {
        sum += gpa
        count += 1;
      }
    })
    if (count > 0) {
      return (sum/count).toFixed(2);
    } else {
      return '—'
    }
  }.property('students.@each.semesterGpa'),

  averageCumulativeGPA: function() {
    var students = this.get('students');
    var sum = 0, count = 0;
    students.forEach(function(student) {
      var gpa = student.get('cumulativeGpa');
      if (!isNaN(parseFloat(gpa)) && isFinite(gpa)) {
        sum += gpa;
        count += 1;
      }
    })
    if (count > 0) {
      return (sum/count).toFixed(2);
    } else {
      return '—'
    }
  }.property('students.@each.cumulativeGpa')
});
