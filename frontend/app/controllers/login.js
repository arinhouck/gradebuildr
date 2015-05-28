import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',

  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:devise', data)
      .catch(function(response){
        $.growl.error({message: response.error})
      });
    },
    toggleMenu: function() {
      $('li.dropdown a').parent().toggleClass('open');
    }
  }

});
