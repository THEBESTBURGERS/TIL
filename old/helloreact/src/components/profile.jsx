import React from 'react';
import { useHistory } from 'react-router-dom';

const Profile = (props) => {
  const history = useHistory();
  return (
    <>
      <h1>Profile</h1>
      <button
        onClick={() => {
          history.push('/')
        }}
      >Go to HOME</button>
    </>
  )
};

export default Profile;