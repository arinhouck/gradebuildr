import DS from 'ember-data';

export default DS.Model.extend({
  courses: DS.hasMany('course'),
  grades: DS.hasMany('grade'),
  isDirector: DS.attr('boolean'),
  activeUntil: DS.attr('date'),
  subscription: DS.attr('string'),
  canceledSubscription: DS.attr('boolean'),
  directors: DS.hasMany('user', {inverse: 'students', async: true}),
  students: DS.hasMany('user', {inverse: 'directors', async: true}),
  requests: DS.hasMany('request'),
  receivedRequests: DS.hasMany('request', {async: true}),
  email: DS.attr('string'),
  unconfirmedEmail: DS.attr('string'),
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
  }.property('semesterGradePoints', 'semesterCreditHours', 'gradePoints', 'gradeUnits', 'activeSemester')

});
