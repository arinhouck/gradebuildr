import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  directors: Ember.computed.map('model.directors', item => item),
  director: Ember.computed('model.groupMemberships', function() {
    return this.get('directors.firstObject');
  }),

  organizations: Ember.computed.map('model.groupMemberships', item => item),
  uniqueOrganizations: Ember.computed('organizations', function() {
    var organizations = this.get('model.groupMemberships');
    if (organizations) {
      return _.uniq(organizations.toArray() , 'groupId');
    }
  }),
  inOrganization: Ember.computed.equal('uniqueOrganizations.length', 1),

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
        // controller.set('model.groupMemberships', remove);
        controller.send('updateIndex');
        $.growl.notice({title: 'Organization', message: 'Successfully deleted.'});
      });
    }
  }
});
