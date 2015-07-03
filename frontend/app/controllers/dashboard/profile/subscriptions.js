import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Gradebuildr',
  logo: '/assets/apple-touch-icon-152x152.png',
  basicPlan: {name: 'Basic', to_cents: 500},
  premiumPlan: {name: 'Premium', to_cents: 1500},
  ultimatePlan: {name: 'Ultimate', to_cents: 5000},
  actions: {
    processStripeToken: function(token) {
      debugger;
    }
  }
});
