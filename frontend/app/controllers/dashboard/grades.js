import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  sortProperties: ['createdAt:desc'],
  sortedGrades: Ember.computed.sort('filteredGrades', 'sortProperties'),
  courses: Ember.computed.alias('model.@each.course'),
  names: Ember.computed.alias('courses.@each.name'),
  uniqueNames: Ember.computed.uniq('names'),

  filteredGrades: function() {
    return this.get('model');
  }.on('init').property(),

  filterContent: function(filtered) {
    if (filtered) {
      this.set('filteredGrades', filtered);
    } else {
      this.set('filteredGrades', this.get('model'));
    }
  },

  // setup our query params
  queryParams: ["page", "perPage"],

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  page: 1,
  perPage: 10,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedContent: pagedArray('sortedGrades', {pageBinding: "page", perPageBinding: "perPage"}),

  // binding the property on the paged array
  // to a property on the controller
  totalPagesBinding: "model.totalPages"

});
