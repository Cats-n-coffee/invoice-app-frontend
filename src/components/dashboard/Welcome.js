import React from 'react';
// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import { WelcomeStyled } from './styles';

export default function Welcome(props) {
    function currentDate() {
        let today = new Date();
        let dateString = today.toDateString();
        return dateString;    
    }
    return (
        <section css={ WelcomeStyled}>
            <div className="welcome-name">
                Welcome <span>{ props.currentUser.username }</span>
            </div>
            <div className="welcome-date">
                { currentDate() }
            </div>
        </section>
    )
}