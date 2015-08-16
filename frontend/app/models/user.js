import DS from 'ember-data';
import UserMixin from 'frontend/mixins/user';

export default DS.Model.extend(UserMixin, {
  courses: DS.hasMany('course'),
  grades: DS.hasMany('grade'),
  isOrganization: DS.attr('boolean'),
  isStudent: DS.attr('boolean'),
  organization: DS.attr('string'),
  accountType: DS.attr('string'),
  activeUntil: DS.attr('date'),
  subscription: DS.attr('string'),
  canceledSubscription: DS.attr('boolean'),
  students: DS.hasMany('student', {async: true}),
  directors: DS.hasMany('director', {async: true}),
  groupMemberships: DS.hasMany('groupMembership'),
  email: DS.attr('string'),
  unconfirmedEmail: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  gradePoints: DS.attr('number'),
  gradeUnits: DS.attr('number'),
  activeSemester: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string')
});
