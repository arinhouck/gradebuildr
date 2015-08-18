import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  // setupController: function(controller, model) {
  //   this.get('session.currentUser').then(function(user) {
  //     controller.set('courses', user.get('courses'));
  //     controller.set('grades', user.get('grades'));
  //   });
  // }
});
