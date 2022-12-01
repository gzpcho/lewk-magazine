import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import articleService from '../services/articles';
import GridLayout from '../layouts/GridLayout';
import Block from '../components/ui/Block';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [gridContents, setGridContents] = useState([]);
  const populateGridContents = () => {
    articleService
      .getAll()
<<<<<<< HEAD
      .then((articles) => articles.map(one =>
         <li key={one.metadata.articleId}> <Block size="large" src={one.imageUrl} x="a" Id={one.metadata.articleId} /> </li>))
      .then(data => setGridContents(data));
  }
=======
      .then((articles) =>
        articles.map((article) => (
          <li key={article.metadata.articleId}>
            <Block
              size="large"
              src={article.imageUrl}
              onClick={() => navigate(`/a/${article.metadata.articleId}`)}
            />
          </li>
        ))
      )
      .then((data) => setGridContents(data));
  };

>>>>>>> cf46f46 (Add routing from articles page to article content page)
  useEffect(() => {
    populateGridContents();
  }, []);

  console.log(gridContents);
  return (
    <>
      <Header />
      <GridLayout children={gridContents} />
      <Footer />
    </>
  );
};

export default ArticlesPage;
