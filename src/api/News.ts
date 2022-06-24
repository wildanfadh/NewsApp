import {BASE_URL, API_KEY} from '../config';

// const ApiUrl = `${BASE_URL}/top-headlines?`

const getAllNews = async (req, res) => {
  try {
    let response = await fetch(
      BASE_URL + 'top-headlines?country=' + req.country + '&apiKey=' + API_KEY,
    );
    let json = await response.json();
    return json.articles;
  } catch (error) {
    console.error(error);
  }
};

export {getAllNews};
