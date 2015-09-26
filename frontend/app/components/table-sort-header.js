import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',
  classNames: ['pointerCursor'],
  sortableArrayBinding: 'controller', //default the controller //'bindingContext.content'

  icon: function () {
    var sortableArray = this.get('sortableArray');
    if (!Ember.isEmpty(sortableArray)) {
      var sortProps = sortableArray.get('sortProperties');
      if (Ember.isArray(sortProps) && sortProps.contains(this.get('property'))) {
        if (sortableArray.get('sortAscending')) {
          return 'fa-sort-up';
        } else {
          return 'fa-sort-down';
        }
      }
    }
    return 'fa-sort';
  } .property('sortableArray.sortProperties', 'sortableArray.sortAscending'),

  click: function (evt) {
    var sortableArray = this.get('sortableArray');
    var sortProps = sortableArray.get('sortProperties');
    if (Ember.isArray(sortProps) && sortProps.contains(this.get('property'))) {
      sortableArray.toggleProperty('sortAscending');
    }
    sortableArray.set('sortProperties', Ember.makeArray(this.get('property'))); //sortProperties triggers the sort
  }
});
