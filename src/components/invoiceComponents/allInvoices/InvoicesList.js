import InvoiceListItem from './InvoiceListItem';

export default function InvoicesList(props) {
    return (
        <ul>
            { props.allInvoices.map(invoice => {
                return (
                    <InvoiceListItem key={ invoice.invoice_id } invoice={ invoice } />
                )
            }) }
        </ul>
    )
}

// display list of invoices