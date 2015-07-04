import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  name: 'Gradebuildr',
  logo: 'http://i.imgur.com/SSW2gda.png',
  basic: {name: 'Basic', identifier: 'basic_monthly', to_cents: 1000},
  premium: {name: 'Premium', identifier: 'premium_monthly', to_cents: 2500},
  ultimate: {name: 'Ultimate', identifier: 'ultimate_monthly', to_cents: 9900},
  noPlan: Ember.computed.not('plan'),
  plan: null,
  canceledSubscription: Ember.computed.alias('session.currentUser.canceledSubscription'),
  noSubscription: Ember.computed.not('session.currentUser.subscription'),
  canceledSubscriptionOrNoSubscription: Ember.computed.or('noSubscription', 'canceledSubscription'),
  sameAsBasic: Ember.computed.equal('session.currentUser.subscription', 'basic_monthly'),
  sameAsPremium: Ember.computed.equal('session.currentUser.subscription', 'premium_monthly'),
  sameAsUltimate: Ember.computed.equal('session.currentUser.subscription', 'ultimate_monthly'),
  actions: {
    selectPlan: function(plan) {
      var controller = this;
      $('.price-table').removeClass('active');
      $('#'+plan.name.toLowerCase()).addClass('active');
      this.set('plan', plan);
      if (this.get('session.currentUser.subscription')) {
        ajax({
          type: 'POST',
          url: '/users/proration_price.json',
          data: {plan: this.get('plan.identifier'), user_id: this.get('session.currentUser.id')}
        }).then(function (response) {
          controller.set('proratedPrice', response.cost);
          alert('Your price will be prorated for current month to $' + (controller.get('proratedPrice')/100) +
                ' because you already have an existing subscription. These changes will reflect next bill cycle on ' +
                moment(controller.get('session.currentUser.activeUntil')).format('LL') + '.');
          controller.set('prorationDate', response.proration_date)
          console.log(response);
        }, function(error) {
          // TODO: REMOVE THESE ON LIVE
          console.log(error)
        });
      }
    },
    processStripeToken: function(token) {
      token.plan = this.get('plan.identifier');
      if (this.get('prorationDate')) {
        token.proration_date = this.get('prorationDate');
      }
      ajax({
        type: 'POST',
        url: '/users/process_payment.json',
        data: {token: token, user_id: this.get('session.currentUser.id')}
      }).then(function (response) {
        // TODO: REMOVE THESE ON LIVE
        console.log(response)
      }, function(error) {
        // TODO: REMOVE THESE ON LIVE
        console.log(error)
      });
    }
  }
});
