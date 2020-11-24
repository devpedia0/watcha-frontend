import React from "react";
//import React, { useState } from 'react';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const ReactFacebookLogin = (props) => {
    //const [accessToken, setAccessToken] = useState('');

    const componentClicked = (data) => {
        console.log("data", data);
    };

    const responseFacebook = (response) => {
        console.log(response.accessToken);
        //const accessToken = response.accessToken;
    };

    return (
        <>
            <FacebookLogin
                appId="1060966807680621"
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                render={(renderProps) => (
                    <button
                        style={{
                            backgroundColor: "#3c5aa0",
                            color: "#fff",
                        }}
                        onClick={renderProps.onClick}
                    >
                        Facebook 으로 로그인
                    </button>
                )}
            ></FacebookLogin>
        </>
    );
};

export default ReactFacebookLogin;
