import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {
    deleteGrade: function(grade) {
      var component = this;
      var gradeName = grade.get('name');
      var grades = this.get('parent.pagedGradeContent');
      grade.destroyRecord().then(function(grade) {
        component.store.find('user', component.get('session.currentUser.id')).then(function(user) {
          user.reload();
        })
        grades.removeObject(grade);
        $.growl.notice({ title: 'Grade', message: "Sucessfully deleted " + gradeName + "."})
      });
    }
  }
});
