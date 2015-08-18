import Ember from 'ember';

export default Ember.Mixin.create({
  semesterGpa: DS.attr('number'),
  cumulativeGpa: DS.attr('number'),
  semesterCreditHours: DS.attr('number'),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')

});
