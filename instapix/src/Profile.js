import React from 'react';

const Profile = (props) => {
  return (
    <div className="profile">
        <div className="picture">
          <img src="https://octodex.github.com/images/grim-repo.jpg" alt="85"/>
        </div>

        <div className="details">
          <p>kaii</p>
        </div>

        <div className="time">5m</div>
    </div>
  )
};

export default Profile;
