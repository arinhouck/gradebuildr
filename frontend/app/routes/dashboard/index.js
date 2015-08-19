import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, RouteMixin, {
  perPage: 5,

  model() {
    return this.get('session.currentUser');
  },
  afterModel(model) {
    var params = this.paramsFor();
    params.user_id = model.get('id');
    this.controllerFor('dashboard.index').set('grades', this.findPaged('grade', params));
    this.controllerFor('dashboard.index').set('courses', this.findPaged('course', params));
  }
});
