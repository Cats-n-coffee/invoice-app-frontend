import { render, screen, waitFor } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import InvoiceList from '../allInvoices/InvoicesList';

test('Select one invoice from the list displays the invoice clicked', async () => {
    render(<InvoiceList />)

    await waitFor(async () => {
        const invoiceItem = screen.getByRole('menuitem', { name: /BC8F544D/i })
        expect(invoiceItem).toBeInTheDocument()
    })
})