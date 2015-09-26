import Ember from 'ember';

export default Ember.Controller.extend({
  students: Ember.computed.map('model.students', item => item),
  sortProperties: ['firstName'], // Default sort
  sortAscending: true,

  sortedStudents: function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: this.get('sortProperties'),
      sortAscending: this.get('sortAscending'),
      content: this.get('model.students')
    });
  }.property('students'),

});
