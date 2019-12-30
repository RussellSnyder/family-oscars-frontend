import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('categories', function() {
    this.route('add');
    this.route('edit', { path: '/edit/:category_id/' });
    this.route('show', { path: '/show/:category_id/' });
  });
});

export default Router;
