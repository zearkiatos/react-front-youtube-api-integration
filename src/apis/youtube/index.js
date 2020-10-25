import axios from 'axios';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL_BASE } from '../../config/constants';

export default axios.create({
    baseURL: YOUTUBE_API_URL_BASE,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: YOUTUBE_API_KEY
    }
});
