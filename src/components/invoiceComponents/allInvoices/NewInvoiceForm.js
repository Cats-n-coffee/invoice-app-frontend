// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import InvoiceForm from '../../forms/InvoiceForm';

export default function NewInvoiceForm(props) {
    return (
        <>
            <InvoiceForm 
                type="new invoice" 
                setToggleForm={ props.setToggleForm }
            />
        </>
    )
}