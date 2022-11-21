import React from 'react';
function Block(props) {
    return(
        <div style={{
            ...styles.block,
            ...styles[props.size]
        }}>
        </div>
    )
}
const styles = {
    block: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red'
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