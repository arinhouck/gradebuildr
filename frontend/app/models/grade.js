import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  course: DS.belongsTo('course', {async: true}),
  weight: DS.belongsTo('weight', {async: true}),
  name: DS.attr('string'),
  score: DS.attr('number'),
  scoreTotal: DS.attr('number'),
  createdAt: DS.attr('date'),

  // percentage: function() {
  //   var weightedSum = this.get('weight.scoreTotalSum');
  //   var percentage = (this.get('score')/weightedSum)*(this.get('weight.percentage'))
  //   return percentage.toFixed(2);
  // }.property('score', 'weight.scoreTotalSum', 'weight.percentage')

});
