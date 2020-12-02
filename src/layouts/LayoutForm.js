import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

// Components
import { Header, Footer, FormNav } from "../components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 0px);
    margin-top: 74px;
    width: 100%;
    background: #f5f5f7;
    @media only screen and (min-width: 600px) {
        min-height: calc(100vh - 343px);
        margin-top: 74px;
    }

    @media only screen and (min-width: 760px) {
        margin-top: 62px;
    }
`;

const FormBox = styled.div`
    background: white;
    margin: 30px auto 50px auto;
    width: ${(props) => (props.width ? props.width : "750px")};
    border-radius: ${(props) => (props.radius ? props.radius : "1%")};

    padding: 0 20px 20px 20px;
    border: 1px solid #ededed;

    .title {
        margin-top: 5px;
        margin-bottom: 15px;
        font-size: 1.4rem;
        font-weight: bold;
    }

    a {
        padding: 15px 25px;
    }

    label {
        margin: 10px 0;
    }

    h2 {
        font-size: 1.4rem;
        font-weight: bold;
    }
`;

const LayoutForm = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <>
                    <Header />
                    <Wrapper>
                        <FormBox>
                            <FormNav />
                            <Component {...props} {...rest} />
                        </FormBox>
                    </Wrapper>
                    <Footer />
                </>
            )}
        />
    );
};

export default LayoutForm;
