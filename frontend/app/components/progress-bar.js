import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  colors: 'primary,info,success,warning,danger,gray,navy,teal,purple,orange,maroon,black',
  classNames: ['progress-bar'],
  attributeBindings: ['style', 'role', 'aria-valuemin', 'ariaValueNow:aria-valuenow', 'aria-valuemax'],
  classTypePrefix: 'progress-bar',
  role: 'progressbar',
  'aria-valuemin': 0,
  'aria-valuemax': 100,

  init: function() {
    return this._super();
  },

  didInsertElement: function() {
    var colors = this.colors.split(',');
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    this.$().addClass('bg-' + randColor)
  },

  style: function() {
    return "width:" + this.percentage + "%;";
  }.property('percentage').cacheable(),

  // color: function() {
  //   this.$().
  // }.observes('color'),
  ariaValueNow: function() {
    return this.percentage;
  }.property('percentage').cacheable()

});
