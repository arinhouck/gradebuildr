import Session from 'simple-auth/session';

export default Session.extend({

  currentUser: function() {
    var userId = this.get('secure.id');
    if (userId && this.get('isAuthenticated')) {
      return this._store.find('user', userId);
    }
  }.property('secure.id', 'isAuthenticated')

});
