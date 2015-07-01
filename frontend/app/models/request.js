import DS from 'ember-data';

export default DS.Model.extend({
  director: DS.belongsTo('user'),
  student: DS.belongsTo('user', {async: true}),
  accepted: DS.attr('boolean')
});
