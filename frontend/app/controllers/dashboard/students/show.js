import Ember from 'ember';
import CoursesMixin from 'frontend/mixins/courses';
import GradesMixin from 'frontend/mixins/grades';

export default Ember.Controller.extend(CoursesMixin, GradesMixin, {
  courses: Ember.computed.alias('model.courses'),
  grades: Ember.computed.alias('model.grades'),

  init: function() {
    this.controllerFor('dashboard.students').set('isLoading', false);
  },
  
  actions: {
    back: function() {
      this.transitionToRoute('dashboard.students');
    },
    clearPage: function() {
      this.set('page', 1);
    }
  }
});
