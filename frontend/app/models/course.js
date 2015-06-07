import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  weights: DS.hasMany('weight'),
  subject: DS.attr('string'),
  number: DS.attr('number'),
  creditHours: DS.attr('number'),
  gradingScale: DS.attr('string'),

  name: function() {
    return this.get('subject') + ' ' + this.get('number')
  }.property('subject', 'number')

});
