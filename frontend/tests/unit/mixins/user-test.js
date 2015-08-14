import Ember from 'ember';
import UserMixin from '../../../mixins/user';
import { module, test } from 'qunit';

module('Unit | Mixin | user');

// Replace this with your real tests.
test('it works', function(assert) {
  var UserObject = Ember.Object.extend(UserMixin);
  var subject = UserObject.create();
  assert.ok(subject);
});
