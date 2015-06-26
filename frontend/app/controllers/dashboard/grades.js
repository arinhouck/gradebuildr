import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  sortProperties: ['createdAt:desc'],
  semesterNames: Ember.computed.alias('semesters.@each.name'),
  uniqueSemesters: Ember.computed.uniq('semesterNames'),
  sortedGrades: Ember.computed.sort('filteredGrades', 'sortProperties'),
  courses: Ember.computed.alias('model.@each.course'),
  names: Ember.computed.alias('courses.@each.name'),
  uniqueNames: Ember.computed.uniq('names'),
  selectedSemester: null,
  selectedCourse: null,

  filteredGrades: function(){
    var grades = this.get('model');
    var selectedSemester = this.get('selectedSemester');
    var selectedCourse = this.get('selectedCourse');
    var matched;
    if(selectedSemester && selectedCourse) {
      var matched = grades.filterBy("course.semester", selectedSemester).
                           filterBy('course.name', selectedCourse);
    } else if (selectedSemester) {
      matched = grades.filterBy("course.semester", selectedSemester);
    } else if (selectedCourse) {
      matched = grades.filterBy("course.name", selectedCourse);
    } else {
      matched = grades;
    }
    return matched;
 }.property('model', 'selectedSemester', 'selectedCourse'),

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
