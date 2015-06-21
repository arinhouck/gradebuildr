import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  sortProperties: ['createdAt:desc'],
  sortedCourses: Ember.computed.sort('model.courses', 'sortProperties'),

  // setup our query params
  queryParams: ["page", "perPage"],

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  page: 1,
  perPage: 10,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedContent: pagedArray('sortedCourses', {pageBinding: "page", perPageBinding: "perPage"}),

  // binding the property on the paged array
  // to a property on the controller
  totalPagesBinding: "model.courses.totalPages",

  actions: {
    deleteCourse: function(course) {
      var courseName = course.get('name');
      course.destroyRecord().then(function() {
        $.growl.notice({ title: 'Course', message: "Sucessfully deleted " + courseName + "."})
      });
    }
  }
});
