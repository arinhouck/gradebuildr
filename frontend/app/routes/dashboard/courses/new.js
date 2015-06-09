import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var store = this.store;
    return store.find('user', this.get('session.content.secure.id'));
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('course', controller.store.createRecord('course', {user_id: model.get('id')}));
  },
  actions: {
    willTransition: function() {
      var course = this.controller.get('model');
      course.rollback();
    }
  }
});
