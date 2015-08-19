import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('session.currentUser');
  },
  afterModel(model) {
    return Ember.RSVP.hash({
      grades: model.get('grades'),
      courses: model.get('courses'),
      weights: model.get('weights')
    });
  },
});
