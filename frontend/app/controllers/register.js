import Ember from 'ember';

export default Ember.Controller.extend({
  model: {},
  semesterNames: Ember.computed.alias('semesters.@each.name'),

  actions: {
    createUser: function() {
      var user = this.get('model');
      var self = this;
      user.save().then(function() {
        self.get('session').authenticate('simple-auth-authenticator:devise', {
          identification: user.get('email'),
          password: user.get('password')
        }).then((function() {
          self.transitionToRoute('dashboard');
        }));
      }, function(response) {
        user.rollback();
        var errors = response.responseJSON.errors;
        errors.forEach(function(error_message){
          $.growl.error({ message: error_message });
        });
      });
    }
  }


});