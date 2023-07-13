import axios from 'axios';
const KEY = ''; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 100,
        key: "AIzaSyBR2eXDHfJYzTLOF7mZLJZbedxqlGZl400"
    }
})