import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  name: '',
  password: '',

  actions: {
    onsubmit(e){
      e.preventDefault();
      const credentials = this.getProperties(['name', 'password'])
      this.get('authenticate')(credentials);
    }
  }
});
