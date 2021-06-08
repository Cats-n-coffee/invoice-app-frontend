// eslint-disable-next-line
import styled, { css } from 'styled-components/macro'
import { DeleteInvoicePopup } from './styles';
import { Button2, Button3 } from '../../../styles/commonStyles';

export default function DeleteInvoice(props) {
    const { invoice } = props;

    function deleteAndClose(invoiceId) {
        props.confirmDelete(invoiceId);
        props.setOneInvoice(null);
        props.setToggleDelete(false)
    }

    return (
        <div css={`${DeleteInvoicePopup}`}>
            <section>
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete invoice #{ invoice.invoice_id }? This action cannot be undone.</p>
                <div>
                    <button type="button" css={`${Button3}`} onClick={ () => props.setToggleDelete(false) }>Cancel</button>
                    <button type="button" css={`${Button2}`} onClick={ () => deleteAndClose(invoice.invoice_id) }>Delete</button>
                </div>
            </section>
        </div>
    )
}

// delete invoice popup