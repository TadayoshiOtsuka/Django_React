import React from "react";

const Menu = () => {
    const liStyle = {
        display: 'inline',
        width: '100px'
    }

    return (
        <div style={{textAlign: 'center'}}>
            <ul>
                <li style={liStyle}>top</li>
                <li style={liStyle}>page1</li>
                <li style={liStyle}>page2</li>
                <li style={liStyle}>page3</li>
            </ul>
        </div>)
}

export default Menu;