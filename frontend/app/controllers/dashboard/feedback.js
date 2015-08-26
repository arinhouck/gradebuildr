import Ember from 'ember';

export default Ember.Controller.extend({

  isOpenDidChange: function() {
    if (!this.get('isOpen') && !this.get('isSaving')) {
      this.transitionToRoute('dashboard.index');
    }
  }.observes('isOpen'),

  actions: {
    submitFeedback: function() {
      var controller = this;
      this.set('isSaving', true);
      this.get('model').save().then(function() {
        controller.transitionToRoute('dashboard.index');
        $.growl.notice({title: 'Feedback', message: 'Sucessfully sent.'});
      }, function(response) {
        var errors = response.errors;
        errors.forEach(function(error_message){
          $.growl.error({ message: error_message });
        });
        controller.set('isSaving', false);
      });
    }
  }
});
