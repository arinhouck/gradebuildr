import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  weights: DS.hasMany('weight', {async: true}),
  grades: DS.hasMany('grade', {async: true}),
  subject: DS.attr('string'),
  number: DS.attr('number'),
  creditHours: DS.attr('number'),
  gradingScale: DS.attr('string'),
  semester: DS.attr('string'),
  createdAt: DS.attr('date'),
  currentGrade: DS.attr('string'),
  letterGrade: DS.attr('string'),
  score: DS.attr('number'),

  name: function() {
    return this.get('subject') + ' ' + this.get('number');
  }.property('subject', 'number'),

});
