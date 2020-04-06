const axios = require('axios')


module.exports = {
    getCoordinates: async function(){
        return axios.get('http://127.0.0.1:3030/')
    },

    getNewRoute: async function(coordinates){
        return axios.post('http://127.0.0.1:3030/', coordinates)
    },

    getRoute: async function(){
        return axios.post('http://127.0.0.1:3030/', coordinates)
    },

    run: async function(route){
        return axios.post('http://127.0.0.1:3030/', route)
    }
}
