import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  notifications: service('toast'),
 
  actions: {
    login(email, password) {
      console.log(email, password)
  
      this.notifications.info('text', 'title', options);
    }  
  }
});
