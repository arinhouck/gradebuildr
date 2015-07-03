import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Gradebuildr',
  logo: '/assets/apple-touch-icon-152x152.png',
  basic: {name: 'Basic', to_cents: 500},
  premium: {name: 'Premium', to_cents: 1500},
  ultimate: {name: 'Ultimate', to_cents: 5000},
  noPlan: Ember.computed.not('plan'),
  plan: null,
  actions: {
    selectPlan: function(plan) {
      $('.price-table').removeClass('active');
      $('#'+plan.name.toLowerCase()).addClass('active');
      this.set('plan', plan);
    },
    processStripeToken: function(token) {
      // Charge card based on subscription
      // Need webhooks implemented
      // debugger;
    }
  }
});
