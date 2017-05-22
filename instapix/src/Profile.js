import React from 'react';

const Profile = (props) => {
  return (
    <div className="profile">
        <div className="picture">
          <img src={ props.user.image_url } alt="85"/>
        </div>

        <div className="details">
          <p>{ props.user.name }</p>
        </div>

        <div className="time">{ props.time }</div>
    </div>
  )
};

export default Profile;
