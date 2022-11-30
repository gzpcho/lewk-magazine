import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import photoshootService from '../services/photoshoot';
import GridLayout from "../components/GridLayout";
import Block from "../components/Block";
import { useState, useEffect } from 'react';
const PhotoshootsPage = () => {
  const [gridContents, setGridContents] = useState([]);
  const populateGridContents = () => {
    photoshootService
      .getAll()
      .then((shoots) => shoots.map(shoot =>
         <li key={shoot.metadata.photoshootId}> <Block size="large" src={shoot.photoUrls[0]} /> </li>))
      .then(data => setGridContents(data));
  }
  useEffect(() => {
    populateGridContents();
  }, [])
 console.log(gridContents);
  return (
    <div>
      <Header />
      <GridLayout children={gridContents} />
      <Footer />
    </div>
  );
};

export default PhotoshootsPage;
