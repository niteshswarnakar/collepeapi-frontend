import React from 'react';

const MyComponent = ({ blobUrl }) => {
  return (
    <div>
      <h1>Image File</h1>
      <img src={blobUrl} alt="Image" />
    </div>
  );
};

export default MyComponent;
