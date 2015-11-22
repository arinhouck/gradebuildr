import Ember from 'ember';

export default Ember.Controller.extend(Ember.SortableMixin, {
  // students: Ember.computed.map('model.students', item => item),
  sortProperties: ['fullName'], // Default sort
  // sortAscending: true,

  sortedStudents: Ember.computed.sort('students', 'sortProperties'),

  // sortedStudents: function() {
  //   debugger
  //   return Ember.ArrayProxy.extend(Ember.SortableMixin).create({
  //     sortProperties: this.get('sortProperties'),
  //     sortAscending: this.get('sortAscending'),
  //     content: this.get('model.students')
  //   });
  // }.property('model.students'),

  actions: {
    sortBy: function(sortProperty) {
      // if (sortProperty == this.get('sortProperties')[0]) {
      //   this.toggleProperty('sortAscending');
      // } else {
      //   this.set('sortAscending', true);
      // }
      this.set('sortProperties', [sortProperty]);
    }
  }

});
