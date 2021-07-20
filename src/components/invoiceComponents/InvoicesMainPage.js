import React from 'react';
import InvoicesSummary from './allInvoices/InvoicesSummary';
import Invoice from './oneInvoice/Invoice';

export default function InvoicesMainPage(props) {

    function selectInvoice(invoice) {
        props.setOneInvoice(invoice)
    }

    function resetInvoice() {
        props.setOneInvoice(null)
    }

    return (
        <>
            { props.oneInvoice ? 
                <Invoice 
                    invoice={ props.oneInvoice }
                    setOneInvoice={ props.setOneInvoice }
                    resetInvoice={ resetInvoice }
                />
                : <InvoicesSummary
                    allInvoices={ props.allInvoices }
                    setAllInvoices={ props.setAllInvoices }
                    selectInvoice={ selectInvoice }
                />
            } 
        </>
    )
}
