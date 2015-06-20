import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var store = this.store;
    return store.find('course', {user_id: this.get('session.content.secure.id')}).then(function(courses){
      return {
        courses: courses,
        weights: store.all('weight')
      }
    });
  },
  actions: {
    updateIndex: function() {
      this.refresh();
    }
  }
});
