import Ember from 'ember';
import ajax from 'ember-ajax';

export default Ember.Controller.extend({

  isOpenDidChange: function() {
    if (!this.get('isOpen') && !this.get('isSaving')) {
      this.transitionToRoute('dashboard.profile.organizations');
    }
  }.observes('isOpen'),

  actions: {
    joinOrganization: function() {
      var controller = this;
      var data = { code: this.get('code'), user_id: this.get('session.currentUser.id') };
      ajax({
        type: 'POST',
        url: '/groups/join.json',
        data: data
      }).then(function (response) {
        controller.send('pushMemberships', response.groups);
        $.growl.notice({title: 'Organization', message: 'Successfully joined.'});
      }, function(response) {
        controller.set('code', null);
        $.growl.error({title: 'Organization', message: response.jqXHR.responseJSON.error});
      });
    }
  }
});
