import {BASE_URL} from '../config';
import axios from 'axios';

// const ApiUrl = `${BASE_URL}/top-headlines?`
const requestOptions = ({action, headerReq, bodyReq}) => {
  return {method: action, headers: headerReq, body: bodyReq};
};

const getAllNews = async () => {
  try {
    let response = await fetch(
      BASE_URL,
      requestOptions({
        action: 'GET',
        headerReq: {'Content-Type': 'application/json'},
        bodyReq: null,
      }),
    );
    let json = await response.json();
    // let json = await response;
    return json.data;
  } catch (error) {
    console.error(error);
  }
};

const getNewsBookmark = async () => {
  try {
    let response = await fetch(
      '../data/bookmark.json',
      requestOptions({
        action: 'GET',
        headerReq: {'Content-Type': 'application/json'},
        bodyReq: null,
      }),
    );
    let json = await response.json();
    // let json = await response;
    return json.data;
  } catch (error) {
    console.error(error);
  }
};

const saveNewsToBookmark = async () => {
  try {
    let response = await fetch(
      '../data/bookmark.json',
      requestOptions({
        action: 'POST',
        headerReq: {'Content-Type': 'application/json'},
        bodyReq: null,
      }),
    );
    let json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
  }
};

export {getAllNews, getNewsBookmark, saveNewsToBookmark};
