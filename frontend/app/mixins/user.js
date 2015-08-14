import Ember from 'ember';

export default Ember.Mixin.create({

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

  semesterGradePoints: function() {
    var courses = this.get('courses').filterBy('semester', this.get('activeSemester'));
    var gradePoints = 0;
    var self = this;
    courses.forEach(function(course){
      gradePoints += course.get('score')*(course.get('creditHours'))
    });
    return gradePoints;
  }.property('courses.@each.currentGrade', 'courses.@each.creditHours', 'activeSemester'),

  semesterCreditHours: function() {
    var courses = this.get('courses').filterBy('semester', this.get('activeSemester'));
    var creditHours = 0;
    courses.forEach(function(course) {
      creditHours += course.get('creditHours')
    });
    return creditHours;
  }.property('courses.@each.creditHours'),

  semesterGpa: function() {
    if (this.get('semesterCreditHours') == 0) {
      return '—';
    }

    var semesterGpa = this.get('semesterGradePoints') / this.get('semesterCreditHours')
    return semesterGpa.toFixed(2);
  }.property('courses.@each.currentGrade', 'courses.@each.creditHours', 'activeSemester'),

  inactiveSemesterGradePoints: function() {
    var model = this;
    var courses = this.get('courses').filter(function(course) {
      return course.get('semester') !== model.get('activeSemester')
    });
    var gradePoints = 0;
    var self = this;
    courses.forEach(function(course){
      gradePoints += course.get('score')*(course.get('creditHours'))
    });
    return gradePoints;
  }.property('courses.@each.currentGrade', 'courses.@each.creditHours', 'activeSemester'),

  inactiveSemesterCreditHours: function() {
    var model = this;
    var courses = this.get('courses').filter(function(course) {
      return course.get('semester') !== model.get('activeSemester')
    });
    var creditHours = 0;
    courses.forEach(function(course) {
      creditHours += course.get('creditHours')
    });
    return creditHours;
  }.property('courses.@each.creditHours', 'activeSemester'),

  cumulativeGpa: function() {
    var totalPoints = this.get('gradePoints') + this.get('semesterGradePoints') + this.get('inactiveSemesterGradePoints');
    var totalUnits = this.get('gradeUnits') + this.get('semesterCreditHours') + this.get('inactiveSemesterCreditHours');
    if (totalUnits == 0) {
      return '—';
    }

    var cumulativeGpa = totalPoints / totalUnits;
    return cumulativeGpa.toFixed(2);
  }.property('semesterGradePoints', 'semesterCreditHours', 'gradePoints', 'gradeUnits', 'activeSemester')

});
