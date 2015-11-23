import Ember from 'ember';
import ajax from 'ember-ajax';

export default Ember.Controller.extend({
  actions: {
    newPassword: function() {
      var controller = this;
      ajax({
        type: 'POST',
        url: '/users/password.json',
        data: {user: {email: this.get('email')} }
      }).then(function (response) {
        controller.transitionToRoute('index');
        $.growl.notice({title:'Reset Password', message: response.message});
      }, function(error) {
        $.growl.error({title:'Reset Password', message: error.jqXHR.responseJSON.message});
      });
    }
  }
});
