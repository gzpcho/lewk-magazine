import '../styles/cell_styles.css';
function Cell(props){
    return(
       <div className='cell'>
            <div className={props.size}></div>
        </div>
    );
};
export default Cell;
