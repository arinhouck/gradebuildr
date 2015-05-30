import Ember from 'ember';
import Session from 'simple-auth/session';

var SessionWithCurrentUser = Session.extend({
  after:'simple-auth',
  currentUser: function() {
    var userId = this.get('user_id');
    if (!Ember.isEmpty(userId)) {
      return this.container.lookup('store:main').find('user', userId);
    }
  }.property('user_id')
});

export default {
  name: 'custom-session',
  before: 'simple-auth',
  initialize: function(container) {
    container.register('session:withCurrentUser', SessionWithCurrentUser);
  }
};
