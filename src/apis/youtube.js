import axios from  'axios'

const KEY = 'AIzaSyABSP_GRDtdhQkQunt1rG0Ht1kULUquPi0';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});