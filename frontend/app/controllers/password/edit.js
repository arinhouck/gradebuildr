import Ember from 'ember';
import ajax from 'ember-ajax';

export default Ember.Controller.extend({
  queryParams: ['reset_password_token'],
  reset_password_token: null,

  actions: {
    changePassword: function() {
      var controller = this;
      ajax({
        type: 'PUT',
        url: '/users/password.json',
        data: {
                user: {
                  password: this.get('password'),
                  password_confirmation: this.get('passwordConfirmation'),
                  reset_password_token: this.get('reset_password_token')
                }
              }
      }).then(function (response) {
        controller.transitionToRoute('index');
        $.growl.notice({title:'Password', message: response.message});
      }, function(response) {
        if (response.jqXHR.responseJSON.errors.password) {
          response.jqXHR.responseJSON.errors.password.forEach(function(error) {
            $.growl.error({title:'Password', message: error});
          })
        }
        if (response.jqXHR.responseJSON.errors.password_confirmation) {
          response.jqXHR.responseJSON.errors.password_confirmation.forEach(function(error) {
            $.growl.error({title:'Password Confirmation', message: error});
          })
        }

      });
    }
  }
});
