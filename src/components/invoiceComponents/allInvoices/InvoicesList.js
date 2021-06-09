// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import InvoiceListItem from './InvoiceListItem';
import { InvoiceListStyled } from './styles';

export default function InvoicesList(props) {
    return (
        <ul css={`${InvoiceListStyled}`}>
            { props.allInvoices.map(invoice => {
                return (
                    <InvoiceListItem 
                    key={ invoice.invoice_id } 
                    invoice={ invoice }
                    selectInvoice={ props.selectInvoice } 
                    />
                )
            }) }
        </ul>
    )
}

// display list of invoices