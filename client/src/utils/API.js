import axios from 'axios';

export default {
    //signup user
    userSignup: function(userPayload) {
        return axios.post('/api/signup', userPayload)
    }
}