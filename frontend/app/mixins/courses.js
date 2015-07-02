import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Mixin.create({
  sortProperties: ['createdAt:desc'],
  sortedCourses: Ember.computed.sort('courses', 'sortProperties'),
  semesterNames: Ember.computed.alias('semesters.@each.name'),
  uniqueSemesters: Ember.computed.uniq('semesterNames'),
  selectedSemester: null,
  filteredCourses: Ember.computed.defaultTo('sortedCourses'),

  coursesDidChange: function() {
    var courses = this.get('sortedCourses');
    var selectedSemester = this.get('selectedSemester');
    if(selectedSemester) {
      this.set('page', 1)
    }
    if (selectedSemester) {
      this.set('filteredCourses', courses.filterBy('semester', selectedSemester));
    } else {
      this.set('filteredCourses', courses);
    }
 }.observes('sortedCourses', 'sortedCourses.[]', 'selectedSemester'),

  // setup our query params
  queryParams: ["page", "perPage"],

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  page: 1,
  perPage: 10,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedCourseContent: pagedArray('filteredCourses', {pageBinding: 'page', perPageBinding: 'perPage'}),

  // binding the property on the paged array
  // to a property on the controller
  totalPagesBinding: 'pagedCourseContent.totalPages'
});
