import DS from 'ember-data';
import UserMixin from 'frontend/mixins/user';

export default DS.Model.extend(UserMixin, {
  user: DS.belongsTo('user'),
  courses: DS.hasMany('course', {async: true}),
  grades: DS.hasMany('grade', {async: true}),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  gradePoints: DS.attr('number'),
  gradeUnits: DS.attr('number'),
  activeSemester: DS.attr('string')

});
