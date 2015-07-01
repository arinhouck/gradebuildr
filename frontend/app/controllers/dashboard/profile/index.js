import Ember from 'ember';

export default Ember.Controller.extend({
  semesterNames: Ember.computed.alias('semesters.@each.name'),

  actions: {
    rollbackUser: function() {
      this.get('model').rollback();
    },
    saveUser: function() {
      var controller = this;
      this.get('model').save().then(function() {
        controller.transitionToRoute('dashboard.profile.index');
        $.growl.notice({title: 'User', message: 'Sucessfully updated profile.'});
      });
    }
  }
});
