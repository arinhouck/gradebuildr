import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  subject: DS.attr('string'),
  number: DS.attr('number'),
  creditHours: DS.attr('number'),
  gradingScale: DS.attr('string')

});
