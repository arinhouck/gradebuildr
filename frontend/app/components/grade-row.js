import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {
    deleteGrade: function(grade) {
      var gradeName = grade.get('name');
      var grades = this.get('parent.pagedContent');
      grade.destroyRecord().then(function() {
        grades.removeObject(grade);
        $.growl.notice({ title: 'Grade', message: "Sucessfully deleted " + gradeName + "."})
      });
    }
  }
});
