import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import articleService from '../services/articles';
import GridLayout from "../layouts/GridLayout";
import Block from "../components/ui/Block";
import { useState, useEffect } from 'react';
const ArticlesPage = () => {
  const [gridContents, setGridContents] = useState([]);
  const populateGridContents = () => {
    articleService
      .getAll()
      .then((articles) => articles.map(one =>
         <li key={one.metadata.articleId}> <Block size="large" src={one.imageUrl} /> </li>))
      .then(data => setGridContents(data));
  }
  useEffect(() => {
    populateGridContents();
  }, [])
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
