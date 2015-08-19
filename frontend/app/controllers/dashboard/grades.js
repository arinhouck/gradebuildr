import Ember from 'ember';
import GradesMixin from 'frontend/mixins/grades';

export default Ember.Controller.extend(GradesMixin, {
  grades: Ember.computed.map('model.grades', item => item),
  courses: Ember.computed.map('model.courses', item => item)
});
