import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    rollbackUser: function() {
      this.get('model').rollback();
    },
    saveUser: function() {
      var controller = this;
      this.get('model').save().then(function() {
        controller.transitionToRoute('dashboard.profile.password');
        $.growl.notice({title: 'User', message: 'Sucessfully updated password.'});
      });
    }
  }

});
