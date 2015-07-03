import Ember from 'ember';
import DirectorMixin from 'frontend/mixins/director';

export default Ember.Route.extend(DirectorMixin, {
  setupController: function(controller, model) {
    var store = controller.get('store');
    this.get('session.currentUser').then(function(user) {
      controller.set('requests', user.get('requests'));
    });
  }
});
