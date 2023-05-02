import React from 'react';

const Selection = (props) => {   
    function helper(e){
        console.log(e.target);
        e.target.style.backgroundColor = applyColor.background;
    }
   
    const { applyColor } = props;
    console.log("Selection applyColor background is == ", applyColor.background);
return <div className='fix-box' onClick={(e) => {helper(e)}}>        
    </div>;
}

export default Selection;