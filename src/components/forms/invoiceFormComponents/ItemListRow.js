// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { Field } from 'formik';
import { ItemRowStyled } from '../styles';

export default function ItemListRow(props) {
    const { item, index } = props;

    return (
        <div css={`${ItemRowStyled}`}>
            <div>
                <label htmlFor="item-name">Item Name</label>
                <Field id="item-name" name={`item_list${index}.item_name`} type="text"/>
            </div>
            <div>
                <label htmlFor="quantity">Quantity</label>
                <Field id="quantity" name={`item_list${index}.quantity`} type="text"/>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <Field id="price" name={`item_list${index}.price`} type="text"/>
            </div>
            <div>
                <label htmlFor="total">Total</label>
                <Field id="total" name={`item_list${index}.total`} type="text"/>
            </div>
            <button type="button">X</button>
        </div>
    )
}