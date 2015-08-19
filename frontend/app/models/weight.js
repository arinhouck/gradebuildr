import DS from 'ember-data';

export default DS.Model.extend({
  course: DS.belongsTo('course'),
  grades: DS.hasMany('grade', {async: true}),
  name: DS.attr('string'),
  percentage: DS.attr('number')
});
