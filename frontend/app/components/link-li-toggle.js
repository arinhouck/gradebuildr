import Ember from 'ember';

export default Em.Component.extend({
    tagName: 'li',
    classNameBindings: ['active'],
    click: function() {
      $('body').toggleClass('sidebar-open');
    },
    active: function() {
        return this.get('childViews').anyBy('active');
    }.property('childViews.@each.active')
});
