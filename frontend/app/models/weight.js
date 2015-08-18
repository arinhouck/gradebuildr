import DS from 'ember-data';

export default DS.Model.extend({
  course: DS.belongsTo('course'),
  grades: DS.hasMany('grade', {async: true}),
  name: DS.attr('string'),
  percentage: DS.attr('number'),

  // scoreSum: function() {
  //   var sum = 0;
  //   this.get('grades').forEach(function(grade) {
  //     sum += grade.get('score');
  //   })
  //   return sum;
  // }.property('grades.@each.score'),
  //
  // scoreTotalSum: function() {
  //   var sum = 0;
  //   this.get('grades').forEach(function(grade) {
  //     sum += grade.get('scoreTotal');
  //   })
  //   return sum;
  // }.property('grades.@each.scoreTotal')
});
