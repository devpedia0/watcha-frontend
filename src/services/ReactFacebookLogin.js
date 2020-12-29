import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const ReactFacebookLogin = (props) => {

    const componentClicked = () => {
        console.log("Facebook Btn clicked!");
    };

    const responseFacebook = (response) => {
        console.log(response);
    };

    return (
        <>
            <FacebookLogin
                appId="2816577751934501"
                autoLoad={false}
                version="3.1"
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                render={(renderProps) => (
                    <button
                        style={{
                            backgroundColor: "#3c5aa0",
                            color: "#fff",
                            lineHeight: "44px",
                        }}
                        onClick={renderProps.onClick}
                    >
                        Facebook 으로 로그인
                    </button>
                )}
            />
        </>
    );
};

export default ReactFacebookLogin;
