import {BASE_URL} from '../config';
import axios from 'axios';

// const ApiUrl = `${BASE_URL}/top-headlines?`
const requestOptions = ({action, bodyReq}) => {
  method: action,
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({bodyReq}),
};

const getAllNews = async () => {
  try {
    let response = await fetch(
      // 'https://berita-indo-api.vercel.app/v1/cnn-news',
      BASE_URL,
      requestOptions({action: 'GET'})
    );
    let json = await response.json();
    // let json = await response;
    return json.data;
  } catch (error) {
    console.error(error);
  }
};



export {getAllNews};
