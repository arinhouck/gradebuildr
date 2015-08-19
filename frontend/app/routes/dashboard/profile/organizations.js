import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('session.currentUser');
  },
  afterModel(model) {
    return Ember.RSVP.hash({
      groupMemberships: model.get('groupMemberships'),
      directors: model.get('directors')
    });
  },
  actions: {
    pushMemberships: function(response) {
      this.controller.set('uniqueOrganizations', _.uniq(response, 'groupId'));
    },
    updateIndex: function() {
      this.transitionTo('dashboard.profile.organizations');
    }
  }
});
