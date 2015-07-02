import Ember from 'ember';
import CoursesMixin from 'frontend/mixins/courses';
import GradesMixin from 'frontend/mixins/grades';

export default Ember.Controller.extend(CoursesMixin, GradesMixin, {
  courses: Ember.computed.alias('model.courses'),
  grades: Ember.computed.alias('model.grades'),
  actions: {
    back: function() {
      this.transitionToRoute('dashboard.students');
    },
    clearPage: function() {
      this.set('page', 1);
    }
  }
});
