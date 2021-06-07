import React from 'react';
import InvoicesSummary from './allInvoices/InvoicesSummary';
import Invoice from './oneInvoice/Invoice';
import { useAuth } from '../../contexts/authProvider';

export default function InvoicesMainPage(props) {
    const { user } = useAuth();
    const [oneInvoice, setOneInvoice] = React.useState(null);

    function selectInvoice(invoice) {
        console.log('invoice selected ', invoice);
        setOneInvoice(invoice)
    }

    function resetInvoice() {
        setOneInvoice(null)
    }

    return (
        <>
            { oneInvoice ? 
                <Invoice 
                    invoice={ oneInvoice }
                    setOneInvoice={ setOneInvoice }
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

// handles functionality ALL STATE HERE ??
// renders 3 displays? invoices list OR no invoices screen OR one invoice once clicked? 
// keep state for one specific invoice (once clicked)

// Any form/popup should be controlled from here and block any other action until window is 
// closed/ cancelled ??
// --> from here : new invoice form, edit form, delete popup