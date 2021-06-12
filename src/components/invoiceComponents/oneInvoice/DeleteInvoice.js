// eslint-disable-next-line
import styled, { css } from 'styled-components/macro'
import { useDeleteInvoice } from '../../../utils/apiRoutes';
import { DeleteInvoicePopup } from './styles';
import { Button2, Button3 } from '../../../styles/commonStyles';

export default function DeleteInvoice(props) {
    const { invoice } = props;
    const deleteInvoice = useDeleteInvoice();

    function deleteAndClose(invoiceId) {
        deleteInvoice({ data: { invoice_id: invoiceId } })
        props.setToggleDelete(false)
        props.setOneInvoice(null)
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