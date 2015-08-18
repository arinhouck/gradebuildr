import Ember from 'ember';

export default Ember.Controller.extend({
  students: Ember.computed.map('model.students', item => item)
});
