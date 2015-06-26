import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      courses: store.find('course', {user_id: this.get('session.content.secure.id')}),
      weights: store.all('weight'),
      semesters: store.find('semester')
    });
  },
  setupController: function(controller, model) {
    controller.set('courses', model.courses);
    controller.set('semesters', model.semesters);
    controller.set('weights', model.weights);
  },
  actions: {
    updateIndex: function() {
      this.refresh();
    }
  }
});
