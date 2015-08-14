import Ember from 'ember';

export default Ember.Controller.extend({
  model: {},
  semesterNames: Ember.computed.alias('semesters.@each.name'),
  isStudent: Ember.computed.equal('model.accountType', 'student'),

  actions: {
    continue: function() {
      this.set('registration', true);
    },
    back: function() {
      this.set('registration', false);
    },
    createUser: function() {
      var user = this.get('model');
      var self = this;
      this.set('isSaving', true)
      user.save().then(function() {
        // self.get('session').authenticate('simple-auth-authenticator:devise', {
        //   identification: user.get('email'),
        //   password: user.get('password')
        // }).then((function() {
        self.transitionToRoute('confirmation').then(function(route) {
          route.controller.set('email', user.get('email'));
        });
        // }));
      }, function(response) {
        var errors = response.responseJSON.errors;
        errors.forEach(function(error_message){
          $.growl.error({ message: error_message });
        });

        self.set('isSaving', false)
      });
    }
  }


});
