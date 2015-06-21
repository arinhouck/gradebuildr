import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  model: {},

  page: 1,
  perPage: 5,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedGradeContent: pagedArray('model.grades', {pageBinding: "page", perPageBinding: "perPage"}),

});
