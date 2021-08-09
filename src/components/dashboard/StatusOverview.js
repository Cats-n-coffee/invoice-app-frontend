import React from 'react';
// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import { StatusOverviewStyled } from "./styles";

export default function StatusOverview(props) {
    const { allInvoices = []} = props;

    function countPending() {
        let filter;
        if (allInvoices === null) return 0;
        if (allInvoices !== undefined || allInvoices !== null) {
            filter = allInvoices?.filter(item => item.invoice_data.invoice_status === 'pending');
        }
        else { return 0; }
        return filter.length || 0;
    }

    function countPaid() {
        let filter;
        if (allInvoices === null) return 0;
        if (allInvoices !== undefined || allInvoices !== null) {
            filter = allInvoices?.filter(item => item.invoice_data.invoice_status === 'paid');
        }
        else { return 0; }
        return filter.length || 0;
    }

    return (
        <section css={ StatusOverviewStyled }> 
            <div className="status-type">
                <span css={`color: var(--status-yellow);`}>Pending: </span>
                <span>{ countPending() }</span>
            </div>
            <div className="status-type">
                <span css={`color: var(--status-green);`}>Paid: </span>
                <span>{ countPaid() }</span>
            </div>
            <div className="status-type">
                <span>Total: </span>
                <span>
                    { (allInvoices === undefined 
                        || allInvoices === null
                        || allInvoices === []) 
                        ? 0 : allInvoices.length
                    }</span>
            </div>
        </section>
    )
}