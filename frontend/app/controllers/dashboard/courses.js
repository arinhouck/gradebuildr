import Ember from 'ember';
import CoursesMixin from 'frontend/mixins/courses';

export default Ember.Controller.extend(CoursesMixin, {
  courses: Ember.computed.map('model.courses', item => item),
  actions: {
    deleteCourse: function(course) {
      var controller = this;
      var courseName = course.get('name');
      course.destroyRecord().then(function() {
        controller.get('pagedCourseContent').removeObject(course);
        $.growl.notice({ title: 'Course', message: "Sucessfully deleted " + courseName + "."})
      });
    }
  }
});
