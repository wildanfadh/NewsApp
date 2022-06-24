import {BASE_URL, API_KEY} from '../config';
import axios from 'axios';

// const ApiUrl = `${BASE_URL}/top-headlines?`

const getAllNews = async (req, res) => {
  try {
    let response = await axios.get(
      // BASE_URL + 'top-headlines?country=' + req.country + '&apiKey=' + API_KEY,
      BASE_URL + 'top-headlines?country=id&apiKey=' + API_KEY,
    );
    let json = await response.json();
    // let json = await response;
    return json;
    console.log(json);
  } catch (error) {
    console.error(error);
  }
};

export {getAllNews};
