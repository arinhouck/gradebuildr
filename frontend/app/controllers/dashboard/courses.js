import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteCourse: function(course) {
      var courseName = course.get('name');
      course.destroyRecord().then(function() {
        $.growl.notice({ title: 'Course', message: "Sucessfully deleted " + courseName + "."})
      });
    }
  }
});
