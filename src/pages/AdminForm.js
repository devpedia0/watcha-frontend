import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

// Component
import FormNav from "../component/Form/FormNav";
import FormTag from "../component/Form/FormTag";
import FormPeople from "../component/Form/FormPeople.js";
import FormContent from "../component/Form/FormContent";
import FormCollection from "../component/Form/FormCollection";
// delete
import FormMovie from "../component/Form/FormMovie";
import FormBook from "../component/Form/FormBook";
import FormTV from "../component/Form/FormTV";

const Wrapper = styled.div`
    background: #f8f8f8;
    padding-top: 71px;
    width: 100%;
    height: calc(100vh - 71px);

    @media only screen and (min-width: 737px) {
        margin-top: 62px;
        height: calc(100vh - 62px);
    }
`;

const FormContainer = styled.div`
    background: white;
    margin: 0 auto;
    padding: 30px 30px;
    max-width: 900px;
    border: 1px solid #ededed;
`;

const AdminForm = () => {
    return (
        <Wrapper>
            <FormContainer>
                <FormNav />
                <Switch>
                    <Route path="/form/tag" exact component={FormTag} />
                    <Route path="/form/people" exact component={FormPeople} />
                    <Route path="/form/content" exact component={FormContent} />
                    <Route path="/form/content/movie" component={FormMovie} />
                    <Route path="/form/content/book" component={FormBook} />
                    <Route path="/form/content/tv" component={FormTV} />
                    <Route path="/form/collection" component={FormCollection} />

                    <Redirect from="/form" to="form/tag" />
                </Switch>
            </FormContainer>
        </Wrapper>
    );
};

export default AdminForm;
