import Route from '@ember/routing/route';
// import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  // ApplicationRouteMixin: ApplicationRouteMixin,

  beforeModel(/* transition */) {
    if (!this.session.isAuthenticated) {
      this.transitionTo('login'); // Implicitly aborts the on-going transition.
    }
  }
});