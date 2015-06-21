import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],

  setWeight: function() {
    var grade = this.get('grade');
    this.store.find('weight', grade.get('selectedWeight')).then(function(weight) {
      grade.set('weight', weight)
    });
  }.observes('grade.selectedWeight')

});
