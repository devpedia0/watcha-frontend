import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

// Component
import FormNav from "../component/Form/FormNav";
import FormTag from "../component/Form/FormTag";
import FormPeople from "../component/Form/FormPeople.js";
// import FormContent from "../component/Form/FormContent";
import FormCollection from "../component/Form/FormCollection";
import FormContent from '../component/FormContent';

const Wrapper = styled.div`
    
    background: #f8f8f8;
    padding-top: 71px;
    padding-bottom: 50px;
    width: 100%;

    a {
        padding: 15px 25px;
    }

    label {
        margin: 10px 0;
    }

    h2{
        font-size: 1.4rem;
        font-weight: bold;
    }

    @media only screen and (min-width: 737px) {
        margin-top: 62px;
        height: 100%;
    }
`;

const AdminForm = () => {
    return (
        <Wrapper>
            <FormNav />
            <Switch>
                <Route path="/form/tag" exact component={FormTag} />
                <Route path="/form/people" exact component={FormPeople} />
                <Route path="/form/content" exact component={FormContent} />
                <Route path="/form/collection" component={FormCollection} />
                <Redirect from="/form" to="form/tag" />
            </Switch>
        </Wrapper>
    );
};

export default AdminForm;
