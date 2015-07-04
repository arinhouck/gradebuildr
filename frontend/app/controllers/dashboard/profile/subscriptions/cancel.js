import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({

  isOpenDidChange: function() {
    if (!this.get('isOpen')) {
      this.transitionToRoute('dashboard.profile.subscriptions');
    }
  }.observes('isOpen'),

  actions: {
    yes: function() {
      ajax({
        type: 'POST',
        url: '/users/cancel_subscription.json',
        data: {user_id: this.get('session.currentUser.id')}
      });
    },
    no: function() {
      this.transitionToRoute('dashboard.profile.subscriptions');
    }
  }
});
