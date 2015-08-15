import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  uniqueOrganizations: Ember.computed('organizations', function() {
    var organizations = this.get('organizations');
    if (organizations) {
      return _.uniq(organizations.toArray() , 'groupId');
    }
  }),

  actions: {
    leaveOrganization: function(organization) {
      var controller = this;
      var organizations = this.get('organizations');
      ajax({
        type: 'post',
        url: '/group_memberships/remove.json',
        data: {
          user_id: this.get('session.currentUser.id'),
          group_id: organization.get('groupId')
        }
      }).then(function (response) {
        // TODO: This needs serious refactor
        var remove = _.remove(organizations.toArray(), function(org) {
          var condition = org.get('groupId') != organization.get('groupId')
          if (!condition) { org.deleteRecord(); }
          return condition;
        });
        controller.set('organizations', remove);
        $.growl.notice({title: 'Organization', message: 'Successfully deleted.'});
      });
    }
  }
});
