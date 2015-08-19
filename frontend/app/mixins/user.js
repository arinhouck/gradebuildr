import Ember from 'ember';

export default Ember.Mixin.create({
  semesterGpa: DS.attr('string'),
  cumulativeGpa: DS.attr('string'),
  semesterCreditHours: DS.attr('number'),
  gradeCount: DS.attr('number'),
  courseCount: DS.attr('number'),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')

});
