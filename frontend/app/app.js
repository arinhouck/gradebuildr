import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver: Resolver
});

Ember.Router.reopen({
  notifyGoogleAnalytics: function() {
    if (!ga || EmberENV.environment == 'test' || EmberENV.environment == 'development') { return; }
    return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition')
});

loadInitializers(App, config.modulePrefix);

export default App;
