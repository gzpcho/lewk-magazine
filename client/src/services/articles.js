import { handleErrors } from './utils.js';

const baseUrl = '/api/article';

const getAllArticles = async (params = {}) => {
  const urlParams = '?' + new URLSearchParams(params).toString();
  return fetch('/api/articles' + urlParams)
    .then(handleErrors)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const getArticle = async (articleId) => {
  return fetch(`${baseUrl}/${articleId}`)
    .then(handleErrors)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const postArticle = async (articleId, requestBody) => {
  return fetch(`${baseUrl}/${articleId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(handleErrors)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const articleService = {
  getAll: getAllArticles,
  get: getArticle,
  post: postArticle,
};

export default articleService;
