import Ember from 'ember';

export default Ember.Controller.extend({
  openModal: false,
    actions: {
      openModal: function(){
        this.set('openModal', true);
      }
    }

});
