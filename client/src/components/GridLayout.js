import React from "react";
import Block from "./Block.js";
function GridLayout() {
    return(
        <div style={styles.block_container}>
            <Block size="small" />
            <Block size="medium" />
            <Block size="large" />
            <Block size="small" />
            <Block size="medium" />
            <Block size="large" />
            <Block size="small" />
            <Block size="medium" />
            <Block size="large" />
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
    }
}
export default GridLayout;