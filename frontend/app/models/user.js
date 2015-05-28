import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  gradePoints: DS.attr('number'),
  gradeUnits: DS.attr('number'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string')

});