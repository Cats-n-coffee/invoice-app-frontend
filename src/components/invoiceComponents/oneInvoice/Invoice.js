import React from 'react';
// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { GoBackButton, Button1, Button2, Button3, StatusStyled } from '../../../styles/commonStyles';
import { ArrowLeft } from '../../icons/assets/index';
import { InvoiceTopPanel, InvoiceStyled, InvoiceWrapperModified, InvoiceDetails, InvoiceTable, InvoiceContainer } from './styles';
import { InvoiceWrapper } from '../styles';
import EditForm from './EditInvoice';
import DeleteInvoice from './DeleteInvoice';


export default function Invoice(props) {
    const { invoice } = props;
    const [toggleEditForm, setToggleEditForm] = React.useState(false);
    const [toggleDelete, setToggleDelete] = React.useState(false)
    const invoiceStatus = invoice.invoice_data.invoice_status;

    function formatDate(date) {
        let newDate = new Date(date)
        let options = { year: 'numeric', month: 'short', day: 'numeric' }
        let formattedDate = new Intl.DateTimeFormat('en-US', options).format(newDate);
        console.log(formattedDate)
        return formattedDate;
    }

    console.log(invoice.invoice_data.item_list)

    function itemTotal(quantity, price) {
        return parseFloat(quantity * parseFloat(price)).toFixed(2);
    }

    return (
        <div css={`${InvoiceContainer}`}>
            { toggleEditForm ? <EditForm setToggleForm={ setToggleEditForm } invoice={ invoice }/> : null }
            { toggleDelete ? 
                <DeleteInvoice 
                    setToggleDelete={ setToggleDelete } 
                    confirmDelete={ props.confirmDelete }
                    invoice={ invoice }
                    setOneInvoice={ props.setOneInvoice }
                /> 
                : null }
            <div css={`${InvoiceWrapper} ${InvoiceWrapperModified}`}>
                <section css={`${InvoiceStyled}`}>
                    <button 
                        onClick={ props.resetInvoice }
                        css={`${GoBackButton}`}
                        aria-label="go-back-button"
                    >
                        <ArrowLeft css={`width: 7px; height: 10px;`}/>
                        <span>Go Back</span>
                    </button>
                    <article css={`${InvoiceTopPanel}`}>
                        <div className="status-panel">
                            <span>Status</span>
                            <span className={ invoiceStatus } css={`${StatusStyled}`} ><span className="dot"></span><span>{ invoiceStatus }</span></span>
                        </div>
                        <div className="actions-panel">
                            <button type="button" css={`${Button3}`} onClick={ () => setToggleEditForm(!toggleEditForm) }>Edit</button>
                            <button type="button" css={`${Button2}`} onClick={ () => setToggleDelete(true) }>Delete</button>
                            <button type="button" css={`${Button1}`}>Mark as Paid</button>
                        </div>
                    </article>
                    <article css={`${InvoiceDetails}`}>
                        <div className="invoice-details-top-row">
                            <h1 className="primary"># { invoice.invoice_id }</h1>
                            <span className="invoice-description secondary capitalize">{ invoice.invoice_data.project_description }</span>
                            <div className="biller-address">
                                <span className="secondary capitalize">{ invoice.invoice_data.biller_street }</span>
                                <span className="secondary capitalize">{ invoice.invoice_data.biller_city }</span>
                                <span className="secondary capitalize">{ invoice.invoice_data.biller_zipcode }</span>
                                <span className="secondary capitalize">{ invoice.invoice_data.biller_country }</span>
                            </div>
                        </div>
                        <div className="invoice-details-middle-row">
                            <div className="invoice-date column">
                                <span className="secondary label">Invoice Date</span>
                                <span className="primary">{ invoice.invoice_data.invoice_date }</span>
                            </div>
                            <div className="invoice-due column">
                                <span className="secondary label">Payment Due</span>
                                <span className="primary">"due date"</span>
                            </div>
                            <div className="invoice-bill-to column">
                                <span className="secondary label">Bill To</span>
                                <span className="primary capitalize">{ invoice.invoice_data.client_name }</span>
                                <span className="secondary capitalize">{ invoice.invoice_data.client_street }</span>
                                <span className="secondary capitalize">{ invoice.invoice_data.client_city }</span>
                                <span className="secondary capitalize">{ invoice.invoice_data.client_zipcode }</span>
                                <span className="secondary capitalize">{ invoice.invoice_data.client_country }</span>
                            </div>
                            <div className="invoice-email column">
                                <span className="secondary label">Send To</span>
                                <span className="primary">{ invoice.invoice_data.client_email }</span>
                            </div>
                        </div>
                        <table css={`${InvoiceTable}`}>
                            <thead>
                                <tr>
                                    <th className="secondary left">Item Name</th>
                                    <th className="secondary center">QTY</th>
                                    <th className="secondary right">Price</th>
                                    <th className="secondary right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                { invoice.invoice_data.item_list.map(item => {
                                    return (
                                        <tr key={ item.item_name }>
                                            <td className="primary">{ item.item_name }</td>
                                            <td className="secondary-big center">{ item.quantity }</td>
                                            <td className="secondary-big right">$ { parseInt(item.price).toFixed(2) }</td>
                                            <td className="primary right">$ { itemTotal(item.quantity, item.price) }</td>
                                        </tr>
                                    )
                                }) }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className="secondary">Amount Due</td>
                                    <td className="total right" colSpan="3">$ "big amount"</td>
                                </tr>
                            </tfoot>
                        </table>
                    </article>
                </section>
            </div>
        </div>
        
        
    )
}

// one single invoice with all the details - display?