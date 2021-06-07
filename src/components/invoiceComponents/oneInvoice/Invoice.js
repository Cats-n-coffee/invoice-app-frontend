// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { GoBackButton, Button1, Button2, Button3, StatusStyled } from '../../../styles/commonStyles';
import { ArrowLeft } from '../../icons/assets/index';
import { InvoiceTopPanel, InvoiceStyled, InvoiceWrapperModified, InvoiceDetails } from './styles';
import { InvoiceWrapper } from '../styles';

export default function Invoice(props) {
    const { invoice } = props;
    const invoiceStatus = invoice.invoice_data.invoice_status;

    return (
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
                        <button type="button" css={`${Button3}`}>Edit</button>
                        <button type="button" css={`${Button2}`}>Delete</button>
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
                    <ul className="item-list">
                        <li><span>Item Name</span><span>QTY</span><span>Price</span><span>Total</span></li>
                    </ul>
                </article>
            </section>
        </div>
        
    )
}

// one single invoice with all the details - display?