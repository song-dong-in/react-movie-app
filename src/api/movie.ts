import axios ,{AxiosResponse} from 'axios';


type NowPlayingData = any;
type MovieDetailData = any;

const REST_API_ADDR = axios.create({
    baseURL : "ttps://api.themoviedb.org/3/",
    params : {
        language : "KO-KR",
    },
});

export const homeApi = {
    

}