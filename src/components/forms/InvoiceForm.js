import styled, { css } from 'styled-components/macro';
import { FormContainer, FormElement, FormElementBillFrom, FormElementBillTo, FormElementItemList, FormElementButtons, FormWrapperBlur, FormFieldContainer, FormFieldset } from './styles';
import { Button1, Button3, Button4 } from '../../styles/commonStyles';

export default function InvoiceForm(props) {
    return (
        <div css={`${FormWrapperBlur}`}>
            <section css={`${FormContainer}`}>
                <h2>{ props.type }</h2>
                <form css={`${FormElement}`}>
                    <fieldset css={`${FormElementBillFrom} ${FormFieldset}`} >
                        <h3>Bill from</h3>
                        <div className="biller-street" css={`${FormFieldContainer};`}>
                            <label htmlFor="street-address-biller">Street Address</label>
                            <input id="street-address-biller" type="text"/>
                        </div>
                        <div className="biller-city" css={`${FormFieldContainer}`}>
                            <label htmlFor="city-biller">City</label>
                            <input id="city-biller" type="text"/>
                        </div>
                        <div className="biller-zip" css={`${FormFieldContainer}`}>
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="text"/>
                        </div>
                        <div className="biller-country" css={`${FormFieldContainer}`}>
                            <label htmlFor="country">Country</label>
                            <input id="country" type="text"/>
                        </div>
                    </fieldset>
                    <fieldset css={`${FormElementBillTo} ${FormFieldset}`}>
                        <h3>Bill to</h3>
                        <div className="client-name" css={`${FormFieldContainer}`}>
                            <label htmlFor="client-name">Client's Name</label>
                            <input id="client-name" type="text"/>
                        </div>
                        <div className="client-email" css={`${FormFieldContainer}`}>
                            <label htmlFor="client-email">Client's Email</label>
                            <input id="client-email" type="text"/>
                        </div>
                        <div className="client-street" css={`${FormFieldContainer}`}>
                            <label htmlFor="client-street">Street Address</label>
                            <input id="client-street" type="text"/>
                        </div>
                        <div className="client-city" css={`${FormFieldContainer}`}>
                            <label htmlFor="client-city">City</label>
                            <input id="client-city" type="text"/>
                        </div>
                        <div className="client-zip" css={`${FormFieldContainer}`}>
                            <label htmlFor="client-zip">Zip Code</label>
                            <input id="client-zip" type="text"/>
                        </div>
                        <div className="client-country" css={`${FormFieldContainer}`}>
                            <label htmlFor="client-country">Country</label>
                            <input id="client-country" type="text"/>
                        </div>
                        <div className="invoice-date" css={`${FormFieldContainer}`}>
                            <label htmlFor="invoice-date">Issue Date</label>
                            <input id="invoice-date" type="date"/>
                        </div>
                        <div className="payment-terms" css={`${FormFieldContainer}`}>
                            <label htmlFor="payment-terms">Payment Terms</label>
                            <select name="payment-terms" id="payment-terms">
                                <option value="net-1-day">Net 1 Day</option>
                                <option value="net-7-days">Net 7 Days</option>
                                <option value="net-14-days">Net 14 Days</option>
                                <option value="net-30-days">Net 30 Days</option>
                            </select>
                        </div>
                        <div className="project-description" css={`${FormFieldContainer}`}>
                            <label htmlFor="project-description">Project Description</label>
                            <input id="project-description" type="text"/>
                        </div>
                    </fieldset>
                    <fieldset css={`${FormElementItemList} ${FormFieldset}`}>
                        <h3>Item List</h3>
                    </fieldset>
                    <div css={`${FormElementButtons}`}>
                        <button type="button" css={`${Button4}`}>Discard</button>
                        <button type="submit" css={`${Button3}`}>Save as Draft</button>
                        <button type="submit" css={`${Button1}`}>Save &amp; Send</button>
                    </div>
                </form>
            </section>
        </div>
        
    )
}