import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  sortProperties: ['createdAt:desc'],
  semesterNames: Ember.computed.alias('semesters.@each.name'),
  uniqueSemesters: Ember.computed.uniq('semesterNames'),
  sortedGrades: Ember.computed.sort('grades', 'sortProperties'),
  filteredGrades: Ember.computed.defaultTo('sortedGrades'),
  courses: Ember.computed.alias('grades.@each.course'),
  names: Ember.computed.alias('courses.@each.name'),
  uniqueNames: Ember.computed.uniq('names'),
  selectedSemester: null,
  selectedCourse: null,

  gradesDidChange: function(){
    var grades = this.get('sortedGrades');
    var selectedSemester = this.get('selectedSemester');
    var selectedCourse = this.get('selectedCourse');
    if( selectedCourse || selectedSemester) {
      this.set('page', 1)
    }
    if(selectedSemester && selectedCourse) {
      this.set('filteredGrades', grades.filterBy("course.semester", selectedSemester).
                           filterBy('course.name', selectedCourse));
    } else if (selectedSemester) {
      this.set('filteredGrades', grades.filterBy("course.semester", selectedSemester));
    } else if (selectedCourse) {
      this.set('filteredGrades', grades.filterBy("course.name", selectedCourse));
    } else {
      this.set('filteredGrades', grades);
    }
 }.observes('sortedGrades', 'sortedGrades.[]', 'selectedSemester', 'selectedCourse'),

  // setup our query params
  queryParams: ["page", "perPage"],

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  page: 1,
  perPage: 10,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedContent: pagedArray('filteredGrades', {pageBinding: "page", perPageBinding: "perPage"}),

  // binding the property on the paged array
  // to a property on the controller
  totalPagesBinding: "pagedContent.totalPages"

});
