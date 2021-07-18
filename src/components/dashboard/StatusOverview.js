import React from 'react';
// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import { StatusOverviewStyled } from "./styles";

export default function StatusOverview(props) {
    console.log(props.allInvoices)
    return (
        <section css={ StatusOverviewStyled }> 
            <div>
                <span>Pending: </span>
                <span></span>
            </div>
            <div>
                <span>Paid: </span>
                <span></span>
            </div>
            <div>
                <span>Total: </span>
                <span>
                    { (props.allInvoices.length === undefined 
                        || props.allInvoices.length === null
                        || props.allInvoices.length === []) 
                        ? 0 : props.allInvoices.length
                    }</span>
            </div>
        </section>
    )
}