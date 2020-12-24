import axios from 'axios';

export default {
    //signup user
    userSignup: function(signupPayload) {
        return axios.post('/api/signup', signupPayload)
    },

    userLogin: function(loginPayload) {
        return axios.post('/api/login', loginPayload)
    }
}