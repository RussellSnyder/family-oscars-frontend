import Controller from '@ember/controller';

export default Controller.extend({
  email: '',
  password: '',

  actions: {
    login(e){
      e.preventDefault();

      const { email, password } = this.getProperties(['email', 'password'])
    }
  }
});
