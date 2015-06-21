import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  weights: DS.hasMany('weight'),
  grades: DS.hasMany('grade'),
  subject: DS.attr('string'),
  number: DS.attr('number'),
  creditHours: DS.attr('number'),
  gradingScale: DS.attr('string'),
  createdAt: DS.attr('date'),

  name: function() {
    return this.get('subject') + ' ' + this.get('number');
  }.property('subject', 'number'),

  currentGrade: function() {
    var weights = this.get('weights');
    var gradePoints = [], gradePointsTotal = [], weightGrades = [];

    weights.forEach(function(weight, i) {
      gradePoints[i] = 0;
      gradePointsTotal[i] = 0;

      var grades = weight.get('grades');

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

  }.property('grades.score', 'grades.scoreTotal', 'grades.weight'),

});
