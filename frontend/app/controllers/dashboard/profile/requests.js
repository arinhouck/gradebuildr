import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteRequest: function(request) {
      request.destroyRecord().then(function() {
        $.growl.notice({title: 'Request', message: 'Successfully deleted.'});
      });
    }
  }
});
