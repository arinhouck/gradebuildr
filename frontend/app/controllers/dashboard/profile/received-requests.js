import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    accept: function(receivedRequest) {
      var director = receivedRequest.get('director.id');
      var student = receivedRequest.get('student.id');

      var promise = new Em.RSVP.Promise(function(resolve, reject) {
        return $.ajax({
          type: 'POST',
          url: '/requests/accept.json',
          data: {director_id: director, student_id: student},
          success: function(response) {
            return resolve(response);
          },
          error: function(error) {
            return reject(error);
          }
        });
      });

      promise.then(function(response) {
        receivedRequest.reload();
        $.growl.notice({ title: 'Received Request', message: 'Accepted.' });
      }, function(error) {
        $.growl.error({ message: 'Error' });
      })
    }
  }
});
