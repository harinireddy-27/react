
import React from 'react';

function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>

      {/* Calling the parent function on button click */}
      <button onClick={props.showMessage}>
        Click Me
      </button>
    </div>
  );
}

export default Child;
