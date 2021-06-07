// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { ArrowRight } from '../../icons/assets/index';
import { StatusStyled } from '../../../styles/commonStyles';
import { InvoiceItem } from './styles';

export default function InvoiceListItem(props) {
    const { invoice } = props;
    const invoiceStatus = invoice.invoice_data.invoice_status;

    return (
        <li 
            css={`${InvoiceItem}`}
            onClick={ () => props.selectInvoice(invoice) }
        >
            <span className="primary invoice_id">#{ invoice.invoice_id }</span>
            <span className="secondary invoice_date">Due { invoice.invoice_data.invoice_date }</span>
            <span className="secondary client_name">{ invoice.invoice_data.client_name }</span>
            <span className="primary invoice_amount" css={`font-size: 1.2rem;`}>$ { invoice.invoice_data.invoice_amount }</span>
            <span className={ invoiceStatus } css={`${StatusStyled}`}><span className="dot"></span><span className="text">{ invoiceStatus }</span></span>
            <ArrowRight className="invoice-arrow" css={`width: 7px; height: 10px;`} />
        </li>
    )
}

// one list item from invoice list