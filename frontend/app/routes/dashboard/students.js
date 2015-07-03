import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import DirectorMixin from 'frontend/mixins/director';

export default Ember.Route.extend(AuthenticatedRouteMixin, DirectorMixin, {
});
