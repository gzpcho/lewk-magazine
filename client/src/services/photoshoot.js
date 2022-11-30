import { handleErrors } from './utils.js';

const baseUrl = '/api/photoshoot';

const getAllPhotoshoots = async (params = {}) => {
  const urlParams = '?' + new URLSearchParams(params).toString();
  return fetch('/api/photoshoots' + urlParams)
    .then(handleErrors)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const getPhotoshoot = async (photoshootId) => {
  return fetch(`${baseUrl}/${photoshootId}`)
    .then(handleErrors)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const postPhotoshoot = async (photoshootId, requestBody, token) => {
  return fetch(`${baseUrl}/${photoshootId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(handleErrors)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const photoshootService = {
  getAll: getAllPhotoshoots,
  get: getPhotoshoot,
  post: postPhotoshoot,
};

export default photoshootService;
