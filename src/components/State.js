import { useState } from 'react';

function Likes() {
  const [likes, setLikes] = useState(495);

  return (
    <>
      <p>Video : Hooks</p>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like video</button>
      {likes >= 500 && <p>Likes reached to 500!</p>}
    </>
  );
}

export default Likes;