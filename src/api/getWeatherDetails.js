import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_Key = 'c958a7f9bf065a98f023c45d75dacc19';

export const getCityWeatherDetails = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key
        }
    }).then( response =>{
        return response;
    }).catch(err =>{
        return { data: { error: true}}
    });
    return data;
}

