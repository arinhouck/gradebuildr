import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this.set('controller.openModal', true);
  },

  willDestroyElement: function() {
    this.get('controller.weights').filterProperty('isDirty').forEach(function(weight) {
      weight.rollback();
    });
  }

});
