import Ember from 'ember';
import ajax from 'ember-ajax';

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
      }).then(function (response) {
        $.growl.notice({title: 'Subscription' , message: response.message})
      }, function(error) {
        // TODO: REMOVE THESE ON LIVE STRIPE
        console.log(error)
      });
    },
    no: function() {
      this.transitionToRoute('dashboard.profile.subscriptions');
    }
  }
});
