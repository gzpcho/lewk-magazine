import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import articleService from '../services/articles';
import GridLayout from "../components/GridLayout";
import Block from "../components/Block";
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
      <Navbar />
      <GridLayout children={gridContents} />
      <Footer />
    </>
  );
};

export default ArticlesPage;
