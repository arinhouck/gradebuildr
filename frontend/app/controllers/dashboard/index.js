import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  model: {},
  sortProperties: ['createdAt:desc'],
  sortedGrades: Ember.computed.sort('model.grades', 'sortProperties'),

  page: 1,
  perPage: 5,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedGradeContent: pagedArray('sortedGrades', {pageBinding: "page", perPageBinding: "perPage"})
});
