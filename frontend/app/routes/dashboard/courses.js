import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function(controller, model) {
    var store = controller.get('store');
    this.get('session.currentUser').then(function(user) {
      controller.set('courses', user.get('courses'));
      controller.set('weights', user.get('courses.@each.weights'));
      store.find('semester').then(function(semesters) {
        controller.set('semesters', semesters);
      });
    });
  },
  actions: {
    updateIndex: function() {
      this.refresh();
    }
  }
});
