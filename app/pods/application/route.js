import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  session: service(),

  beforeModel(/* transition */) {
    if (!this.session.isAuthenticated) {
      this.transitionTo('login'); // Implicitly aborts the on-going transition.
    }
  }
});