import DS from 'ember-data';

export default DS.Model.extend({
  groupId: DS.attr('number'),
  groupName: DS.attr('string')
});
