import Ember from 'ember';

export default Ember.Controller.extend({
  openModal: false,

  isDashboard: function() {
    return this.get('currentPath') === 'dashboard';
  }.property('currentPath'),

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
