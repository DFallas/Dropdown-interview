import React from 'react';

const Arrow = ({
    ...props
})=>{

    let defaultClass = props.position === 'up'? 'arrow' : `arrow ${props.position}`;
    return (
        <div className={`${defaultClass} ${props.className ? props.className:''}`}/>
    );
}
export default Arrow;