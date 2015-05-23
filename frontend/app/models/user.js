import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  gradePoints: DS.attr('float'),
  gradeUnits: DS.attr('float'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string')

});
