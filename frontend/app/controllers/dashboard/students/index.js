import Ember from 'ember';

export default Ember.Controller.extend({
  averageSemesterGPA: function() {
    var students = this.get('students');
    var studentLength = students.get('length');
    var sum = 0;
    students.forEach(function(student) {
      sum += student.get('semesterGpa')
    })
    if (studentLength > 0) {
      return (sum/studentLength).toFixed(2);
    } else {
      return '—'
    }
  }.property('students.@each.semesterGpa'),

  averageCumulativeGPA: function() {
    var students = this.get('students');
    var studentLength = students.get('length');
    var sum = 0;
    students.forEach(function(student) {
      sum += student.get('cumulativeGpa')
    })
    if (studentLength > 0) {
      return (sum/studentLength).toFixed(2);
    } else {
      return '—'
    }
  }.property('students.@each.cumulativeGpa')
});
