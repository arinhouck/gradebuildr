import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {

  confirmed: function(){
    this.transitionTo('index');
    $.growl.notice({title: 'Email', message: 'Sucessfully confirmed email. You may login now.'});
  }.on('activate')

});
