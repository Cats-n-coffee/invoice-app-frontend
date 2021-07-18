import React from 'react';
// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import { TableStyled } from "./styles";

export default function Table(props) {
    return (
        <section css={ TableStyled }>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Client' Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.allInvoices !== null ?
                        props.allInvoices.map(invoice => {
                            return <tr key={invoice.invoice_id}>

                            </tr>
                        }) 
                        : <tr><td>No Invoices to Show</td></tr>
                    }
                </tbody>
            </table>
        </section>
    )
}