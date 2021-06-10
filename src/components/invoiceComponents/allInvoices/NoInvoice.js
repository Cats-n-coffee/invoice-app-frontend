import styled, { css } from 'styled-components/macro';
import Illustration from '../../icons/illustration-empty.svg';
import { NoInvoicePage } from './styles';

export default function NoInvoice(props) {
    return (
        <div css={`${NoInvoicePage}`}>
            <img src={ Illustration } alt="No invoices" />
            <h2>There is nothing here</h2>
            <p>Create an invoice by clicking the <strong>New Invoice</strong> button and get started.</p>
        </div>
    )
}

// display no invoice image