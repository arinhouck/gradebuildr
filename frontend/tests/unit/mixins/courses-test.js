import Ember from 'ember';
import CoursesMixin from '../../../mixins/courses';
import { module, test } from 'qunit';

module('Unit | Mixin | courses');

// Replace this with your real tests.
test('it works', function(assert) {
  var CoursesObject = Ember.Object.extend(CoursesMixin);
  var subject = CoursesObject.create();
  assert.ok(subject);
});
