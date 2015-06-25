import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var store = this.store;
    return store.find('grade', {user_id: this.get('session.content.secure.id')})
  },
  actions: {
    updateIndex: function() {
      this.refresh();
    }
  }
});
