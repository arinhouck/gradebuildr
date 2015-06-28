import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  course: DS.belongsTo('course'),
  weight: DS.belongsTo('weight'),
  name: DS.attr('string'),
  score: DS.attr('number'),
  scoreTotal: DS.attr('number'),
  createdAt: DS.attr('date')

});
