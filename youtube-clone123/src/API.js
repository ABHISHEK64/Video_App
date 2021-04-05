import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request=axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/",
    params:{
        key:'AIzaSyDPpHJJlVu3bqVZo2lo_ZraRu8QOfbc8pc',
    },

})
export default request;