import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    if (Ember.isBlank(this.get('controller.reset_password_token'))) {
      this.transitionTo('index');
    }
  }
});
