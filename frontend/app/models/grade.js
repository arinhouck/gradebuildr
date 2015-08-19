import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  course: DS.belongsTo('course', {async: true}),
  weight: DS.belongsTo('weight', {async: true}),
  name: DS.attr('string'),
  score: DS.attr('number'),
  scoreTotal: DS.attr('number'),
  percentage: DS.attr('number'),
  createdAt: DS.attr('date')
});
