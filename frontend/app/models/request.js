import DS from 'ember-data';

export default DS.Model.extend({
  director: DS.belongsTo('user', {inverse: 'requests', async: true}),
  student: DS.belongsTo('user', {inverse: 'receivedRequests', async: true}),
  accepted: DS.attr('boolean')
});
