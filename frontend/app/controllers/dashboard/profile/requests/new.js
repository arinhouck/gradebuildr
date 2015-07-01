import Ember from 'ember';

export default Ember.Controller.extend({
  isOpenDidChange: function() {
    if (!this.get('isOpen') && !this.get('isSaving')) {
      this.transitionToRoute('dashboard.profile.requests');
    }
  }.observes('isOpen'),

  actions: {
    sendRequest: function() {
      var email = this.get('email');
      var request = this.get('model')
      this.store.find('user', {email: email}).then(function(user) {
        request.set('student', user.content[0]);
        request.save().then(function() {
          $.growl.notice({ title: 'Request', message: 'Successfully sent.' });
        }, function(response) {
          request.rollback();
          var errors = response.responseJSON.errors;
          errors.forEach(function(error_message){
            $.growl.error({ message: error_message });
          });
        });
      });
    }
  }
});
