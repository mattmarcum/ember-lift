import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', function() {
    this.route('forgot-password');
  });
  this.route('logout');
  this.route('sessions', function() {
    this.route('new');
  });
  this.route('session');
  this.route('exercises', function() {
    this.route('new');
  });
  this.route('exercise');
  this.route('workouts', function() {
    this.route('new');
  });
  this.route('workout');
});

export default Router;
