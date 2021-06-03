export default function InvoiceListItem(props) {
    const { invoice } = props;

    return (
        <li>
            <span>{ invoice.invoice_id }</span>
            <span>{ invoice.invoice_data.invoice_date }</span>
            <span>{ invoice.invoice_data.project_description }</span>
        </li>
    )
}

// one list item from invoice list