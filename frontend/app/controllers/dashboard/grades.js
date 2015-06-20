import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteGrade: function(grade) {
      var gradeName = grade.get('name');
      grade.destroyRecord().then(function() {
        $.growl.notice({ title: 'Grade', message: "Sucessfully deleted " + gradeName + "."})
      });
    }
  }
});
