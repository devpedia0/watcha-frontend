import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const ReactFacebookLogin = () => {
  const [accessToken, setAccessToken] = useState('');

  const componentClicked = (data) => {
    console.log('data', data);
  };

  const responseFacebook = (response) => {
    // console.log(response.accessToken);
    const accessToken = response.accessToken;
  };

  return (
    <div>
      <FacebookLogin
        appId="1060966807680621"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

export default ReactFacebookLogin;
