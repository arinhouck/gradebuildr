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
      this.get('model').save().then(function() {
        controller.transitionToRoute('dashboard.index')
        $.growl.notice({title: 'Feedback', message: 'Sucessfully sent.'})
      });
    }
  }
});
