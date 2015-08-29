import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('session.currentUser');
  },
  afterModel(model) {
    return Ember.RSVP.hash({
      courses: this.store.find('course', {user_id: model.get('id')}),
      grades: this.store.find('grade', {user_id: model.get('id')})
    });
  },
  setupController: function(controller, model) {
    var store = controller.get('store');
    controller.set('model', model);
    store.find('semester').then(function(semesters) {
      controller.set('semesters', semesters);
    });
  },
  actions: {
    updateIndex: function() {
      this.refresh();
    },
    rollbackGrades: function(grades) {
      grades.filterProperty('isDirty').forEach(function(grade) {
        grade.rollback();
      });
    }
  }
});
