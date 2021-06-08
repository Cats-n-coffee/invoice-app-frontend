export default function ItemListForm(props) {
    return (
        <div>
            <div>
                <label htmlFor="item-name">Item Name</label>
                <input id="item-name" type="text" />
            </div>
            <div>
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" type="text" />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input id="price" type="text" />
            </div>
            <div>
                <label htmlFor="total">Total</label>
                <input id="total" type="text" />
            </div>
            <button type="button">delete</button>
        </div>
    )
}