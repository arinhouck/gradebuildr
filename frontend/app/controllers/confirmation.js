import Ember from 'ember';

export default Ember.Controller.extend({
  isOpenDidChange: function() {
    if (!this.get('isOpen')) {
      this.transitionToRoute('index');
    }
  }.observes('isOpen')

});
