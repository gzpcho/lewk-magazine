import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import photoshootService from '../services/photoshoot';
import { useParams } from 'react-router-dom';
import GridLayout from "../layouts/GridLayout";
import Block from "../components/ui/Block";
import { useState, useEffect } from 'react';
const ShootPage = () => {
    let params = useParams();
    const [gridContents, setGridContents] = useState([]);
    
    const populateGridContents = () => {
        photoshootService.get(params.photoshootId).then((photos) =>
        photos.map(photo => photo.photoUrls.map(url => <li key={url}> <Block size="large" src={url} /> </li> ).then(data => setGridContents(data))));
    }
      useEffect(() => {
        populateGridContents();
      }, [])
      console.log(gridContents);
    return(
        <div>
            <Header />
             {/* <GridLayout children={gridContents} /> */}
            <Footer />
        </div>
)};
export default ShootPage;