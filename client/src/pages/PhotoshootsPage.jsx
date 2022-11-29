import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import photoshootService from '../services/photoshoot';
import GridLayout from "../components/GridLayout";
import Block from "../components/Block";
const PhotoshootsPage = () => {
//   const [gridContents, setGridContents] = useState([]);
//   const populateGridContents = () => {
//     photoshootService
//       .getAllPhotoshoots()
//       .then((shoots) => shoots.map(shoot =>
//          <li key={shoot.metadata.photoshootId}> <Block size="large" src={shoot.photoUrls[0]} /> </li>))
//       .then(data => setGridContents(data));
//   }
//   useEffect(() => {
//     populateGridContents();
//   }, [])
//  console.log(gridContents);
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default PhotoshootsPage;
