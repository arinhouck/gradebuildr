import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var id = this.get('session.content.secure.id');
    if (id) {
      var url = "/users/" + id + ".json";
      return new Ember.RSVP.Promise(function(resolve, reject) {
        return $.ajax({
          type: 'GET',
          url: url,
          success: function(response) {
            return resolve(response);
          },
          error: function(error) {
            return reject(error);
          }
        });
      });
    }
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
