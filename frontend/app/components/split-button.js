import Ember from 'ember';
import DropdownComponentMixin from 'ember-rl-dropdown/mixins/rl-dropdown-component';

export default Ember.Component.extend(DropdownComponentMixin, {
  classNames: ['btn-group'],
  selection: null,

  modelDidChange: function() {
    if (this.get('selection')) {
      this.send('filter', this.get('selection'));
    } else {
      this.send('all')
    }
  }.observes('parent.model'),

  actions: {
    filter: function(selection) {
      var filtered = this.get('parent.model').filterBy(this.get('filterBy'), selection);
      this.set('selection', selection);
      this.get('parent').filterContent(filtered);
    },
    all: function() {
      this.set('selection', null);
      this.get('parent').filterContent(null);
    }
  }
});
