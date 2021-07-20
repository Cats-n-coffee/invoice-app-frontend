import React from 'react';
// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { schemaValidation } from './invoiceValidation';
import { useAddNewInvoice, useEditInvoice } from '../../utils/apiRoutes';
import { useAuth } from '../../contexts/authProvider';
import { FormContainer, 
    FormElement, 
    FormElementBillFrom, 
    FormElementBillTo, 
    FormElementItemList, 
    FormElementButtons, 
    FormWrapperBlur, 
    FormFieldContainer, 
    FormFieldset, 
    ItemRowStyled } from './styles';
import { Button1, Button4 } from '../../styles/commonStyles';
import { Delete } from '../icons/assets/index';

export default function InvoiceForm(props) {
    const { invoice } = props;
    const { user } = useAuth();
    const submitInvoice = useAddNewInvoice();
    const modifyInvoice = useEditInvoice();
    const initialValues = {
        biller_street: invoice?.invoice_data?.biller_street || "",
        biller_city: invoice?.invoice_data?.biller_city || "",
        biller_zipcode: invoice?.invoice_data?.biller_zipcode || "",
        biller_country: invoice?.invoice_data?.biller_country || "",
        client_name: invoice?.invoice_data?.client_name || "",
        client_email: invoice?.invoice_data?.client_email || "",
        client_street: invoice?.invoice_data?.client_street || "",
        client_city: invoice?.invoice_data?.client_city || "",
        client_zipcode: invoice?.invoice_data?.client_zipcode || "",
        client_country: invoice?.invoice_data?.client_country || "",
        invoice_date: invoice?.invoice_data?.invoice_date || "",
        payment_terms: invoice?.invoice_data?.payment_terms || "1",
        project_description: invoice?.invoice_data?.project_description || "",
        item_list: invoice?.invoice_data?.item_list || []
    }
    

    function calculateTotal(quantity, price) {
        if ((quantity === "") || (price === "")) {
            return "0.00";
        }
        else {
            return parseFloat(parseFloat(quantity) * parseFloat(price)).toFixed(2);
        }
    }
    
    return (
        <div css={`${FormWrapperBlur}`}>
            <section css={`${FormContainer}`}>
                <h2>{ props.type } { props.type === "edit" ? "#" + invoice.invoice_id : null }</h2>
                <Formik 
                    validateOnChange={true}
                    initialValues={initialValues}
                    validationSchema={ schemaValidation }
                    onSubmit={(data, {setSubmitting}) => {
                    setSubmitting(true);
                    setSubmitting(false);
                    if (props.type === "new invoice") {
                        props.setToggleForm(false)
                        submitInvoice({ user_email: user.email, invoice_data: { ...data, invoice_status: "pending" } })
                    }
                    else if (props.type === "edit") {
                        props.setToggleForm(false)
                        props.setOneInvoice(null)
                        modifyInvoice({ invoice_id: invoice.invoice_id, user_email: user.email, invoice_data: { ...data, invoice_status: "pending" } })
                    }
                }}
                >
                    {
                        ({ values, isSubmitting }) => (
                            <Form css={`${FormElement}`}>
                                <fieldset css={`${FormElementBillFrom} ${FormFieldset}`}>
                                    <h3>Bill From</h3>
                                    <div className="biller-street" css={`${FormFieldContainer};`}>
                                        <label htmlFor="street-address-biller">Street Address</label>
                                        <Field id="street-address-biller" name="biller_street" type="text"/>
                                        <ErrorMessage name="biller_street"/>
                                    </div>
                                    <div className="biller-city" css={`${FormFieldContainer};`}>
                                        <label htmlFor="biller-city">City</label>
                                        <Field id="biller-city" name="biller_city" type="text"/>
                                        <ErrorMessage name="biller_city"/>
                                    </div>
                                    <div className="biller-zip" css={`${FormFieldContainer};`}>
                                        <label htmlFor="biller-zipcode">Zip Code</label>
                                        <Field id="biller-zipcode" name="biller_zipcode" type="text"/>
                                        <ErrorMessage name="biller_zipcode"/>
                                    </div>
                                    <div className="biller-country" css={`${FormFieldContainer};`}>
                                        <label htmlFor="biller-country">Country</label>
                                        <Field id="biller-country" name="biller_country" type="text"/>
                                        <ErrorMessage name="biller_country"/>
                                    </div>
                                </fieldset>
                                <fieldset css={`${FormElementBillTo} ${FormFieldset}`}>
                                    <h3>Bill To</h3>
                                    <div className="client-name" css={`${FormFieldContainer};`}>
                                        <label htmlFor="client-name">Client's Name</label>
                                        <Field id="client-name" name="client_name" type="text"/>
                                        <ErrorMessage name="client_name"/>
                                    </div>
                                    <div className="client-email" css={`${FormFieldContainer};`}>
                                        <label htmlFor="client-email">Client's Email</label>
                                        <Field id="client-email" name="client_email" type="text"/>
                                        <ErrorMessage name="client_email"/>
                                    </div>
                                    <div className="client-street" css={`${FormFieldContainer};`}>
                                        <label htmlFor="client-street">Street Address</label>
                                        <Field id="client-street" name="client_street" type="text"/>
                                        <ErrorMessage name="client_street"/>
                                    </div>
                                    <div className="client-city" css={`${FormFieldContainer};`}>
                                        <label htmlFor="client-city">City</label>
                                        <Field id="client-city" name="client_city" type="text"/>
                                        <ErrorMessage name="client_city"/>
                                    </div>
                                    <div className="client-zip" css={`${FormFieldContainer};`}>
                                        <label htmlFor="client-zip">Zip Code</label>
                                        <Field id="client-zip" name="client_zipcode" type="text"/>
                                        <ErrorMessage name="client_zipcode"/>
                                    </div>
                                    <div className="client-country" css={`${FormFieldContainer};`}>
                                        <label htmlFor="client-country">Country</label>
                                        <Field id="client-country" name="client_country" type="text"/>
                                        <ErrorMessage name="client_country"/>
                                    </div>
                                    <div className="invoice-date" css={`${FormFieldContainer};`}>
                                        <label htmlFor="invoice-date">Invoice Date</label>
                                        <Field id="invoice-date" name="invoice_date" type="date"/>
                                        <ErrorMessage name="invoice_date"/>
                                    </div>
                                    <div className="payment-terms" css={`${FormFieldContainer};`}>
                                        <label htmlFor="payment-terms">Payment Terms</label>
                                        <Field id="payment-terms" name="payment_terms" as="select">
                                            <option value="1">Net 1 Day</option>
                                            <option value="7">Net 7 Days</option>
                                            <option value="14">Net 14 Days</option>
                                            <option value="30">Net 30 Days</option>
                                        </Field>
                                        <ErrorMessage name="payment_terms"/>
                                    </div>
                                    <div className="project-description" css={`${FormFieldContainer};`}>
                                        <label htmlFor="project-description">Project Description</label>
                                        <Field id="project-description" name="project_description" type="text"/>
                                        <ErrorMessage name="project_description"/>
                                    </div>
                                    
                                </fieldset>
                                <fieldset css={`${FormElementItemList} ${FormFieldset}`}>
                                    <h3>Item List</h3>
                                    
                                    <FieldArray name="item_list">
                                        {
                                            (arrayHelpers) => (
                                                <>
                                                    {values.item_list.map((item, index) => {
                                                        return (
                                                            <div key={item.id} css={`${ItemRowStyled}`}>
                                                                <div className="item-name" css={`${FormFieldContainer}`}>
                                                                    <label htmlFor="item-name">Item Name</label>
                                                                    <Field id="item-name" name={`item_list.${index}.item_name`} type="text"/>
                                                                </div>
                                                                <div className="quantity" css={`${FormFieldContainer}`}>
                                                                    <label htmlFor="quantity">Qty.</label>
                                                                    <Field id="quantity" name={`item_list.${index}.quantity`} type="text"/>
                                                                </div>
                                                                <div className="price" css={`${FormFieldContainer}`}>
                                                                    <label htmlFor="price">Price</label>
                                                                    <Field id="price" name={`item_list.${index}.price`} type="text"/>
                                                                </div>
                                                                <div className="total" css={`${FormFieldContainer}`}>
                                                                    <label htmlFor="total">Total</label>
                                                                    <Field id="total" name={`item_list.${index}.total`} type="text" value={calculateTotal(item.quantity, item.price)} disabled/>
                                                                </div>
                                                                <button 
                                                                    type="button" 
                                                                    className="delete-row"
                                                                    onClick={ () => arrayHelpers.remove(index)}
                                                                    css={`border: none; background: none;`}
                                                                >
                                                                    <Delete css={`width: 13px; height: 16px;`}/>
                                                                </button>
                                                            </div>
                                                        )
                                                    })}
                                                    <button 
                                                        type="button" 
                                                        onClick={ () => 
                                                            arrayHelpers.push({
                                                                id: "" + Math.random(), 
                                                                item_name: "", 
                                                                quantity: "", 
                                                                price: "", 
                                                                total: ""
                                                        }) }
                                                        css={`${Button4} width: 100%; margin-top: 1em;`}
                                                    >
                                                            + Add New Item
                                                    </button>
                                                </>
                                            )
                                        }
                                    </FieldArray>
                                    
                                </fieldset>
                                <div css={`${FormElementButtons}`}>
                                    <button 
                                        type="button" 
                                        css={`${Button4}`}
                                        onClick={ () => props.setToggleForm(false) }
                                    >
                                            Discard
                                    </button>
                                    {/* <button type="submit" css={`${Button3}`}>Save as Draft</button> */}
                                    <button 
                                        disabled={isSubmitting} 
                                        type="submit" 
                                        css={`${Button1}`} 
                                        >
                                            Save &amp; Send
                                    </button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </section>
        </div>
    )
}