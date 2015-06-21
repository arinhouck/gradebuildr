import Ember from 'ember';
import DropdownComponentMixin from 'ember-rl-dropdown/mixins/rl-dropdown-component';

export default Ember.Component.extend(DropdownComponentMixin,{
  authenticator: 'simple-auth-authenticator:devise',
  tagName: 'li',
  classNames: ['user', 'user-menu'],

  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:devise', data)
      .catch(function(response){
        $.growl.error({message: response.error})
      });
    },
    invalidateSession: function() {
      this.get('session').invalidate();
      this.send('toggleMenu');
    }
  }
});
