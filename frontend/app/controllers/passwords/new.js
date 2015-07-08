import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  actions: {
    newPassword: function() {
      ajax({
        type: 'POST',
        url: '/users/password.json',
        data: {user: {email: this.get('email')} }
      }).then(function (response) {
        $.growl.notice({title:'Reset Password', message: response.message});
      }, function(error) {
        $.growl.error({title:'Reset Password', message: error.jqXHR.responseJSON.message});
      });
    }
  }
});
