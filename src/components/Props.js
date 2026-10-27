import React from 'react';
function Name(props) {
    console.log(props);
    return (
        <div>
            <h1> hello, {props.name} </h1>
        </div>
    )
}
export default Name;