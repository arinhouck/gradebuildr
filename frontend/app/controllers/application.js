import Ember from 'ember';

export default Ember.Controller.extend({
  openModal: false,

  isDashboard: function() {
    if(!this.get('currentPath')) {
      return false;
    } else {
      return this.get('currentPath').indexOf('dashboard') >= 0;
    }
  }.property('currentPath'),

  isAuthenticatedChanged: function() {
    if (this.get('session.isAuthenticated')) {
      $.growl.notice({message: 'Sucessfully logged in.'})
    } else {
      $.growl.notice({message: 'Sucessfully logged out.'})
    }
  }.observes('session.isAuthenticated'),

  containerClass: function() {
    if(this.get('isDashboard')) {
      $('body').removeClass('layout-top-nav');
    } else {
      $('body').addClass('layout-top-nav');
    }
  }.observes('isDashboard').on('init'),

    actions: {
      openModal: function(){
        this.set('openModal', true);
      }
    }

});
