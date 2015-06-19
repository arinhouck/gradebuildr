import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('user', this.get('session.content.secure.id'));
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  },
  actions: {
    willTransition: function() {
      var grades = this.controller.get('grades');
      grades.forEach(function(grade){
        grade.rollback();
      })
    }
  }
});
