import Ember from 'ember';

export function pluralize(params/*, hash*/) {
  return params;
}

export default Ember.HTMLBars.makeBoundHelper(pluralize);
