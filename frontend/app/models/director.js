import DS from 'ember-data';

export default DS.Model.extend({
  organization: DS.attr('string'),
  groupCode: DS.attr('string'),
  email: DS.attr('string')
});
