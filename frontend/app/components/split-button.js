import Ember from 'ember';
import DropdownComponentMixin from 'ember-rl-dropdown/mixins/rl-dropdown-component';

export default Ember.Component.extend(DropdownComponentMixin, {
  classNames: ['btn-group'],
  selection: null,

  actions: {
    filter: function(selection) {
      this.set('selection', selection);
    },
    all: function() {
      this.set('selection', null);
    }
  }
});
