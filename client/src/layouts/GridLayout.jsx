function GridLayout(props) {
  return(
      <div style={styles.block_container}>
          {props.children}
      </div>
  )
}
const styles = {
  block_container: {
      margin: 0,
      padding: 0,
      width: '100vw',
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 250px)',
      gridAutoRows: '10px',
      position: 'absolute', 
      left: '50%',
      transform: 'translateX(-50%)',
      justifyContent: 'center',
      backgroundColor: 'white',

  }
}
export default GridLayout;