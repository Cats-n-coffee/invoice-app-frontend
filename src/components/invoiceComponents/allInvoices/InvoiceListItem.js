// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { InvoiceItem } from './styles';

export default function InvoiceListItem(props) {
    const { invoice } = props;

    return (
        <li 
            css={`${InvoiceItem}`}
            onClick={ () => props.selectInvoice(invoice) }
        >
            <span className="primary">#{ invoice.invoice_id }</span>
            <span className="secondary">Due { invoice.invoice_data.invoice_date }</span>
            <span className="secondary">{ invoice.invoice_data.client_name }</span>
            <span className="primary" css={`font-size: 1.2rem;`}>$ { invoice.invoice_data.invoice_amount }</span>
            <span >{ invoice.invoice_data.invoice_status }</span>
        </li>
    )
}

// one list item from invoice list