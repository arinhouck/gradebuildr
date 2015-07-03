import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params) {
    return ajax({
      type: 'GET',
      url: '/users/show_student.json',
      data: {id: params.user_id}
    });
  }
});
