import InvoiceForm from "../../forms/InvoiceForm";

export default function EditForm(props) {
    return (
        <>
            <InvoiceForm type="edit" setToggleForm={ props.setToggleForm } invoice={ props.invoice }/>
        </>
    )
}
// edit form - needed?