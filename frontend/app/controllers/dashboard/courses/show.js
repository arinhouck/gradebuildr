import Ember from 'ember';

export default Ember.Controller.extend({
  donut: {title: 'Weights'},
  size: {height: 280, width: 280},

  isOpenDidChange: function() {
    if (!this.get('isOpen')) {
      this.transitionToRoute('dashboard.courses');
    }
  }.observes('isOpen'),

  chartData: function() {
    var data = {columns: [], type: 'donut', size: {height: 300, width: 300}}
    this.get('model.weights').forEach(function(weight) {
      var weightPiece = [weight.get('name'), weight.get('percentage')];
      data.columns.push(weightPiece)
    })
    return data;
  }.property('model.weights')

});
