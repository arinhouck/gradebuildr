import Ember from 'ember';
import GradesMixin from '../../../mixins/grades';
import { module, test } from 'qunit';

module('Unit | Mixin | grades');

// Replace this with your real tests.
test('it works', function(assert) {
  var GradesObject = Ember.Object.extend(GradesMixin);
  var subject = GradesObject.create();
  assert.ok(subject);
});
