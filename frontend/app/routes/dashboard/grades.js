import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      grades: store.find('grade', {user_id: this.get('session.content.secure.id')}),
      semesters: store.find('semester')
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model.grades);
    controller.set('semesters', model.semesters);
  },
  actions: {
    updateIndex: function() {
      this.refresh();
    }
  }
});
