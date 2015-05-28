import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'frontend/tests/helpers/start-app';

var application;

module('Acceptance | users/new', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Register an user', function() {
  visit('/');
  click('#register');

  fillIn('input#name', 'Arin');
  fillIn('input#gradePoints', '217.665');
  fillIn('input#gradeUnits', '63');
  fillIn('input#email', 'user@example.com');
  fillIn('input#password', 'password');
  fillIn('input#passwordConfirmation', 'password');
  click('button#createUser');

  andThen(function() {
    equal( currentRouteName(), 'dashboard', 'routed correctly');
  });
  // andThen(function() {
  //   equal(find("a:contains(Test Title)").length, 1, "post is displayed");
  // });
});
