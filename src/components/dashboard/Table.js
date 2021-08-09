import React from 'react';
// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import { TableStyled } from "./styles";

export default function Table(props) {
    const { allInvoices = []} = props;

    function getAmount(itemsArray) {
        return itemsArray
                .map(item => parseFloat(parseFloat(item.quantity) * parseFloat(item.price)))
                .reduce((acc, value) => acc + value ,0)
                .toFixed(2);
    }

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
                        allInvoices !== null ?
                        allInvoices.map(invoice => {
                            return <tr key={ invoice.invoice_id }>
                                <td>{ invoice.invoice_data.invoice_date }</td>
                                <td>$ { getAmount(invoice.invoice_data.item_list) }</td>
                                <td>{ invoice.invoice_data.client_name }</td>
                                <td css={`text-transform: capitalize;`}>{ invoice.invoice_data.invoice_status }</td>
                            </tr>
                        }) 
                        : <tr><td colSpan="4">No Invoices to Show</td></tr>
                    }
                </tbody>
            </table>
        </section>
    )
}