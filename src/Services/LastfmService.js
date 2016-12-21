import {API_KEY, API_URL} from './../../config/lastfm.js'
import fetch from 'node-fetch'
import querystring from 'querystring'
import * as _ from 'lodash'

export const searchArtists = function (text) {
  let params = {
    artist: text,
    method: 'artist.search'
  };

  return makeApiRequest(params)
    .then(function (data) {
      return data.results.artistmatches.artist;
    });
};

export const getArtistByMbId = function (mbid) {
  let params = {
    mbid: mbid,
    method: 'artist.getInfo'
  };

  return makeApiRequest(params)
    .then(function (data) {
      return data.artist;
    });
};


let prepareRequestUrl = function (params) {
  let requestParams = _.merge(params, {
    format: 'json',
    api_key: API_KEY
  });
  return API_URL + '?' + querystring.stringify(requestParams);
};

let fetchAndParseJsonData = function (url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    }, function (error) {
      throw error;
    })
};

let makeApiRequest = function (params) {
  let requestUrl = prepareRequestUrl(params);
  return fetchAndParseJsonData(requestUrl)
};

