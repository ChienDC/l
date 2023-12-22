import React from 'react';

const Avatar = ({ name, imageUrl }) => {
  return (
    <div className="avatar-container">
      <img className="avatar-img" src={imageUrl} alt={name} />
      <p className="avatar-name">{name}</p>
    </div>
  );
}

export default Avatar;
