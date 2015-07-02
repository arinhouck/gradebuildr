import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    back: function() {
      this.transitionToRoute('dashboard.students');
    }
  }
});
