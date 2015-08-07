import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  weights: DS.hasMany('weight'),
  grades: DS.hasMany('grade'),
  subject: DS.attr('string'),
  number: DS.attr('number'),
  creditHours: DS.attr('number'),
  gradingScale: DS.attr('string'),
  semester: DS.attr('string'),
  createdAt: DS.attr('date'),

  name: function() {
    return this.get('subject') + ' ' + this.get('number');
  }.property('subject', 'number'),

  currentGrade: function() {
    var model = this;
    var weights = this.get('weights');
    var gradePoints = [], gradePointsTotal = [], weightGrades = [];

    weights.forEach(function(weight, i) {
      gradePoints[i] = 0;
      gradePointsTotal[i] = 0;

      var grades = model.get('grades').filterBy('weight.name', weight.get('name'))

      grades.forEach(function(grade) {
        gradePoints[i] += grade.get('score');
        gradePointsTotal[i] += grade.get('scoreTotal');
      })

      if (gradePointsTotal[i] == 0) {
        weightGrades[i] = 1 * weight.get('percentage');
      } else {
        weightGrades[i] = (gradePoints[i] / gradePointsTotal[i]) * weight.get('percentage');
      }
    })
    if (weightGrades.length == 0) {
      return 100;
    } else {
      var currentGrade = weightGrades.reduce(function(a, b) {
        return a + b;
      });
      return currentGrade.toFixed(2);
    }

  }.property('grades.@each.score', 'grades.@each.scoreTotal', 'grades.@each.weight', 'weights.@each.percentage', 'semester'),

  scoreToGradePoints: function() {
    var score = this.get('currentGrade');
    var gradingScale = this.get('gradingScale');
    var plus = gradingScale.indexOf('Plus') >= 0;
    var minus = gradingScale.indexOf('Minus') >= 0;
    debugger;
    if (score >= 97) { // A+
      if (plus) {
        this.set('letterGrade', 'A+');
        this.set('score', 4.333);
      } else {
        this.set('letterGrade', 'A');
        this.set('score', 4);
      }
    } else if (score >= 93) { // A
      this.set('letterGrade', 'A');
      this.set('score', 4);
    } else if (score >= 90) { // A-
      if (minus) {
        this.set('letterGrade', 'A-');
        this.set('score', 3.667);
      } else {
        this.set('letterGrade', 'A');
        this.set('score', 4);
      }
    } else if (score >= 87) { // B+
      if (plus) {
        this.set('letterGrade', 'B+');
        this.set('score', 3.333);
      } else {
        this.set('letterGrade', 'B');
        this.set('score', 3);
      }
    } else if (score >= 83) { // B
      this.set('letterGrade', 'B');
      this.set('score', 3);
    } else if (score >= 80) { // B-
      if (minus) {
        this.set('letterGrade', 'B-');
        this.set('score', 2.667);
      } else {
        this.set('letterGrade', 'B');
        this.set('score', 3);
      }
    } else if (score >= 77) { // C+
      if (plus) {
        this.set('letterGrade', 'C+');
        this.set('score', 2.333);
      } else {
        this.set('letterGrade', 'C');
        this.set('score', 2);
      }
    } else if (score >= 73) { // C
      this.set('letterGrade', 'C');
      this.set('score', 2);
    } else if (score >= 70) { // C-
      if (minus) {
        this.set('letterGrade', 'C-');
        this.set('score', 1.667);
      } else {
        this.set('letterGrade', 'C');
        this.set('score', 2);
      }
    } else if (score >= 67) { // D+
      if (plus) {
        this.set('letterGrade', 'D+');
        this.set('score', 1.333);
      } else {
        this.set('letterGrade', 'D');
        this.set('score', 1);
      }
    } else if (score >= 63) { // D
      this.set('letterGrade', 'D');
      this.set('score', 1);
    } else if (score >= 60) { // D-
      if(minus) {
        this.set('letterGrade', 'D-');
        this.set('score', 0.667);
      } else {
        this.set('letterGrade', 'D');
        this.set('score', 1);
      }
    } else {
      this.set('letterGrade', 'F');
      this.set('score', 0);
    }
  }.observes('currentGrade', 'creditHours', 'user.activeSemester')

});
