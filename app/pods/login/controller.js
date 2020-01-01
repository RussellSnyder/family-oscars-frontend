import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    authenticate: async function(credentials) {
      const authenticator = 'authenticator:custom'; // or 'authenticator:jwt'
      try {
        await this.session.authenticate(authenticator, credentials);
      } catch(error) {
        this.set('errorMessage', error.error || error);
      }

      if (this.session.isAuthenticated) {
        this.transitionToRoute('categories');
      }
    }
  }    
});
