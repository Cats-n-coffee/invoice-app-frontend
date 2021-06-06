import styled, { css } from 'styled-components/macro';
import { GoBackButton } from '../../../styles/commonStyles';

export default function Invoice(props) {
    const { oneInvoice } = props;

    return (
        <section>
            <button 
            onClick={ props.resetInvoice }
            css={`${GoBackButton}`}
            >
                Go Back
            </button>
            <article>
                <div>
                    <span>Status</span>
                    <span>"status"</span>
                </div>
                <div>
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                    <button type="button">Mark as Paid</button>
                </div>
            </article>
            <article>
                <h1>invoice number</h1>
                <span>invoice desc</span>
                <div>
                    <span>Invoice Date</span>
                    <span>"date"</span>
                </div>
                <div>
                    <span>Payment Due</span>
                    <span>"due date"</span>
                </div>
                <div>
                    <span>Bill To</span>
                    <span>"client address"</span>
                </div>
                <div>
                    <span>Send To</span>
                    <span>"client email"</span>
                </div>
                <div>"biller address"</div>
                <ul>
                    <li><span>Item Name</span><span>QTY</span><span>Price</span><span>Total</span></li>
                </ul>
            </article>
        </section>
    )
}

// one single invoice with all the details - display?