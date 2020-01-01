import Base from 'ember-simple-auth/authenticators/base';
import $ from 'jquery';

export default Base.extend({
  restore(data) {
    if (data) {
      return Promise.resolve(data)  
    }
  },

  async authenticate(credentials) {
    const { name, password } = credentials
    const capitalizedName = name.charAt(0).toUpperCase() + name.substring(1)
    try {
      const res = await $.ajax({
        type: "POST",
        url: "auth/login/",
        data: { 
          email: capitalizedName + '@terzakis.de',
          password
        }
      })

      return {
        user: capitalizedName,
        auth_token: res.auth_token,
      }

    } catch(err) {  
      console.log(err);
    }
  },

  invalidate(data) {
    return Promise.resolve(data)
  }
});