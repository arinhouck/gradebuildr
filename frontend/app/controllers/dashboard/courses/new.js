import Ember from 'ember';

export default Ember.Controller.extend({
  scales: ['Regular', 'Plus/Minus', 'Plus', 'Minus'],
  weights: [],
  isSaving: false,

  isOpenDidChange: function() {
    if (!this.get('isOpen') && !this.get('isSaving')) {
      this.transitionToRoute('dashboard.courses');
    }
  }.observes('isOpen'),

  actions: {
    createCourse: function() {
      var controller = this;
      var model = this.get('model');
      var weights = this.get('weights');
      this.set('isSaving', true);
      this.store.find('user', this.get('session.content.secure.id')).then(function(user) {
        model.set('user', user);
        return model.save();
      }).then(function(course) {
        if (weights.length > 0) {
          weights.forEach(function(weight) {
            weight.save();
          });
        }
      }).then(function() {
        controller.transitionToRoute('dashboard.courses');
        $.growl.notice({title: 'Course', message: 'Sucessfully created.'});
      });
    },
    addWeight: function() {
      var weight = this.store.createRecord('weight');
      weight.set('course', this.get('model'));
      this.get('weights').pushObject(weight);
    },
    removeWeight: function(weight) {
      this.get('weights').removeObject(weight);
    }
  }
});
