import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      user: store.createRecord('user', {accountType: 'student'}),
      semesters: store.find('semester')
    });
  },
  setupController: function(controller, model){
    controller.set('model', model.user);
    controller.set('semesters', model.semesters);
    controller.set('isSaving', false);
    controller.set('registration', false);
  }
});
