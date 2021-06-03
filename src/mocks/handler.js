import { rest } from 'msw';

export const handlers = [
    rest.get('http://127.0.0.1:8080/api/invoices', (req, res, ctx) => {
        return res (
            ctx.json([
                { invoice_id: "BC8F544D", user_email: "mario@gmail.com", invoice_data: { biller_street: "523 lane", biller_city: "westerfield" } },
                { invoice_id: "242A2A6F", user_email: "chichi@gmail.com", invoice_data: { biller_street: "123 lane", biller_city: "miami" } }
            ])
        )
    })
]