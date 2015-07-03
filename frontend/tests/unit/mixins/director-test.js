import Ember from 'ember';
import DirectorMixin from '../../../mixins/director';
import { module, test } from 'qunit';

module('Unit | Mixin | director');

// Replace this with your real tests.
test('it works', function(assert) {
  var DirectorObject = Ember.Object.extend(DirectorMixin);
  var subject = DirectorObject.create();
  assert.ok(subject);
});
