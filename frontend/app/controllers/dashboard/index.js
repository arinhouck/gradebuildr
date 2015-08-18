import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  grades: Ember.computed.map('model.grades', item => item),
  courses: Ember.computed.map('model.courses', item => item),
  sortProperties: ['createdAt:desc'],
  sortedGrades: Ember.computed.sort('grades', 'sortProperties'),

  page: 1,
  perPage: 5,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedGradeContent: pagedArray('sortedGrades', {pageBinding: "page", perPageBinding: "perPage"})
});
