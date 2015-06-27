import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  sortProperties: ['createdAt:desc'],
  sortedCourses: Ember.computed.sort('filteredCourses', 'sortProperties'),
  semesterNames: Ember.computed.alias('semesters.@each.name'),
  uniqueSemesters: Ember.computed.uniq('semesterNames'),
  selectedSemester: null,

  filteredCourses: function(){
    var courses = this.get('courses');
    var selectedSemester = this.get('selectedSemester');
    var matched;
    if (selectedSemester) {
      matched = courses.filterBy('semester', selectedSemester);
    } else {
      matched = courses;
    }
    return matched;
 }.property('courses', 'courses.[]', 'selectedSemester'),

  // setup our query params
  queryParams: ["page", "perPage"],

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  page: 1,
  perPage: 10,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedContent: pagedArray('sortedCourses', {pageBinding: 'page', perPageBinding: 'perPage'}),

  // binding the property on the paged array
  // to a property on the controller
  totalPagesBinding: 'courses.totalPages',

  actions: {
    deleteCourse: function(course) {
      var courseName = course.get('name');
      course.destroyRecord().then(function() {
        $.growl.notice({ title: 'Course', message: "Sucessfully deleted " + courseName + "."})
      });
    }
  }
});
