import axios from 'axios';

export default {
    //signup user
    userSignup: function(signupPayload) {
        return axios.post('/api/signup', signupPayload)
    },

    userLogin: function(loginPayload) {
        return axios.post('/api/login', loginPayload)
    },

    getUserInfo: function() {
        return axios.get('/api/user_data')
    },

    getItemInfo: function() {
        return axios.get('/api/item_info')
    }
}