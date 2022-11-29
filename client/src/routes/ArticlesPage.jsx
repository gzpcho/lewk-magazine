import Navbar from '../components/Navbar';
//import Footer from "../components/Footer";
import articleService from '../services/articles';
import GridLayout from "../components/GridLayout";
import Block from "../components/Block";
import { useState } from 'react';
const ArticlesPage = () => {
  const [gridContents, setGridContents] = useState({});

  function populategrid(){
    articleService.getAll().then((data) => {
      data.map((article) => {
        return <Block image_url={article.imageUrl} />
      })
      setGridContents(data);
    })
  }
  res = populategrid();
  return (
    <>
      <Navbar />
      {/* <GridLayout children={res}/> */}
      
    </>
  );
};

export default ArticlesPage;

