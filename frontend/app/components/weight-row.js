import Ember from 'ember';

export default Ember.Component.extend({
  alertBox: false,
  confirm: false,
  weightToDelete: null,
  onlyWeight: Ember.computed.equal('parent.weights.length', 1),

  didInsertElement: function() {
    this.validatePercentage();
  },

  validatePercentage: function(){
    var percentageSum = 0;
    var weights = this.get('parent.weights');
    weights.forEach(function(weight) {
      percentageSum += parseInt(weight.get('percentage'));
    });

    this.set('parent.isValid', percentageSum == 100);
  }.observes('weight.percentage', 'parent.weights.length'),

  deleteWeight: function() {
    var weight = this.get('weightToDelete');
    var weights = this.get('parent.weights');
    weight.destroyRecord();
    $.growl.notice({title: 'Weight', message: 'Successfully deleted.'});
    weights.removeObject(weight);
  }.observes('confirm'),

  actions: {
    yes: function() {
      this.set('confirm', true)
    },
    no: function() {
      this.set('alertBox', false);
    },
    removeWeight: function(weight) {
      this.set('weightToDelete', weight);
      this.set('alertBox', true);
    }
  }
});
