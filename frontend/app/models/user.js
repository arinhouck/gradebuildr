import DS from 'ember-data';

export default DS.Model.extend({
  courses: DS.hasMany('course'),
  grades: DS.hasMany('grade'),
  email: DS.attr('string'),
  name: DS.attr('string'),
  gradePoints: DS.attr('number'),
  gradeUnits: DS.attr('number'),
  activeSemester: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),

  semesterGradePoints: function() {
    var courses = this.get('courses').filterBy('semester', this.get('activeSemester'));
    var gradePoints = 0;
    var self = this;
    courses.forEach(function(course){
      gradePoints += self.scoreToGradePoints(course.get('currentGrade'), course)*(course.get('creditHours'))
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
      gradePoints += self.scoreToGradePoints(course.get('currentGrade'), course)*(course.get('creditHours'))
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
  }.property('semesterGradePoints', 'semesterCreditHours', 'gradePoints', 'gradeUnits', 'activeSemester'),

  scoreToGradePoints: function(score, course) {
    var gradingScale = course.get('gradingScale');
    var plus = gradingScale.indexOf('Plus') >= 0;
    var minus = gradingScale.indexOf('Minus') >= 0;
    if (score >= 97) // A+
      if (plus)
        return 4.333;
      else
        return 4;
    else if (score >= 93) // A
      return 4;
    else if (score >= 90) // A-
      if (minus)
        return 3.667;
      else
        return 4;
    else if (score >= 87) // B+
      if (plus)
        return 3.333;
      else
        return 3;
    else if (score >= 83) // B
      return 3;
    else if (score >= 80) // B-
      if (minus)
        return 2.667;
      else
        return 3;
    else if (score >= 77) // C+
      if (plus)
        return 2.333;
      else
        return 2;
    else if (score >= 73) // C
      return 2;
    else if (score >= 70) // C-
      if (minus)
        return 1.667;
      else
        return 2;
    else if (score >= 67) // D+
      if (plus)
        return 1.333;
      else
        return 1;
    else if (score >= 63) // D
      return 1;
    else if (score >= 60) // D-
      if(minus)
        return 0.667;
      else
        return 1;
    else
      return 0;
  }

});
