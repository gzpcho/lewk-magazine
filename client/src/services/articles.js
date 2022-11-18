import { handleErrors } from './utils.js';

const baseUrl = '/api/article';

const getAllArticles = async () => {
  return fetch('/api/articles')
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

const articleService = {
  getAll: getAllArticles,
  get: getArticle,
};

export default articleService;
