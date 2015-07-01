import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function(controller, model) {
    this.get('session.currentUser').then(function(user) {
      controller.set('students', user.get('students'));
    });
  }
});
