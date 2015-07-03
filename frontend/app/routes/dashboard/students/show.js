import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params) {
    var store = this.store;
    return ajax({
      type: 'GET',
      url: '/users/show_student.json',
      data: {id: params.user_id}
    }).then(function (response) {
      store.pushPayload('user', response);
      return store.getById('user', params.user_id);
    });
  }
});
