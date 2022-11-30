//to be done later: get article / photoshoot pics to populate the grid template
//import { redirect } from "react-router-dom";
function Block(props) {
  console.log(props);
  const imageClick = () => {
    console.log('Click');
  }
  return(
      <div style={{...styles.block, ...styles[props.size]}}>
              <img src={props.src} alt="" onClick={() => imageClick()} />
              
      </div>
  );
}
const styles = {
  block: {
      margin: '10px 10px',
      padding: 0,
      borderRadius: '16px',
      backgroundColor: 'blue',
      position: 'relative',
      overflow: 'hidden',
  },
  small: {
      gridRowEnd: 'span 26'
  },
  medium: {
      gridRowEnd: 'span 33'
  },
  large: {
      gridRowEnd: 'span 45'
  }
}
export default Block;