const axios = require('axios');

axios.post('https://webdev-api.loftschool.com/login', {
        name: 'vasily1388',
        password: '1388'
    })
    .then(function (response) {

        let token = response.data.token
        window.localStorage.setItem('token', token);
    })
    .catch(function (error) {
        console.log(error);
    });