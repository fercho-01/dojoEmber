import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contactos');
  this.route('perfil');
  this.route('contact');
  this.route('spies');
});

export default Router;
