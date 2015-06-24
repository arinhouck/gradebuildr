import Ember from 'ember';

export default Ember.Component.extend({
  alertBox: false,
  confirm: false,
  weightToDelete: null,

  deleteWeight: function() {
    var weight = this.get('weightToDelete');
    var weights = this.get('parent.weights');
    if (this.get('editMode')) {
      weights = this.get('parent.model.weights');
      weight.destroyRecord();
    }
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
      if (this.get('editMode')) {
        this.set('alertBox', true);
      } else {
        this.set('confirm', true);
      }
    }
  }
});
