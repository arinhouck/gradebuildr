import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  actions: {
    changePassword: function() {
      ajax({
        type: 'PUT',
        url: '/users/password.json',
        data: {user: {password: this.get('password'), password_confirmation: this.get('passwordConfirmation')} }
      }).then(function (response) {
        $.growl.notice({title:'Password', message: response.message});
      }, function(error) {
        $.growl.error({title:'Password', message: error.jqXHR.responseJSON.message});
      });
    }
  }
});
