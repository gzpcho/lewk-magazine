import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import photoshootService from '../services/photoshoot';
import GridLayout from "../layouts/GridLayout";
import Block from "../components/ui/Block";
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
 const res = photoshootService.getAll();
 console.log(res);
  return (
    <div>
      <Header />
      <GridLayout children={gridContents} />
      <Footer />
    </div>
  );
};

export default PhotoshootsPage;