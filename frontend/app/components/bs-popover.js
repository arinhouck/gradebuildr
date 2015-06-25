import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: '',
  placement: 'auto',

  click: function() {
    this.sendAction('action', this.get('model'));
  },

  didInsertElement: function () {
    var component = this,
        contents = this.$('.popoverJs');
    component.$().popover({
      animation: false,
      title: component.get('title'),
      placement: component.get('placement'),
      trigger: 'hover focus click',
      html: true,
      content: contents
    }).on('show.bs.popover', function () {
      contents.removeClass('hide');
    });
  },
  willDestroyElement: function () {
    this.$().popover('destroy');
  }
});
