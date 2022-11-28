import Header from '../components/Header';
import articleService from '../services/articles';
import { useEffect, useState } from 'react';
import Article from '../components/Article';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const ArticleContentPage = () => {
  let params = useParams();

  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    articleService.get(params.articleId).then((data) => setArticleData(data));
  }, [params.articleId]);

  return (
    <>
      <Header />
      <Article {...articleData} />
      <Footer />
    </>
  );
};

export default ArticleContentPage;
