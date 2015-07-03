import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function(transition) {
    if (!this.get('session.currentUser.isDirector')) {
      transition.abort();
      this.transitionTo('dashboard');
    }
  }
});
