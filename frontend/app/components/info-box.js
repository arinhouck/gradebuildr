import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['info-box'],
  average: function() {
    var values = this.get('values');
    if (values) {
      var component = this;
      var sum = 0, count = 0;
      values.forEach(function(value) {
        var gpa = value.get(component.get('value'));
        if (!isNaN(parseFloat(gpa)) && isFinite(gpa)) {
          sum += parseFloat(gpa)
          count += 1;
        }
      })
      if (count > 0) {
        return (sum/count).toFixed(2);
      } else {
        return '—';
      }
    }
  }.property('values')
});
