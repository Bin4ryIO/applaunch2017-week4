import React from 'react';

const Profile = (props) => {
  return (
    <div className="User-Basic-Info">
        <div className="Profile-Picture">
          <img src="https://octodex.github.com/images/grim-repo.jpg" alt="85"/>
        </div>

        <div className="Details">
          <p>kaii</p>
        </div>

        <div className="Time">5m</div>
    </div>
  )
};

export default Profile;
