import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import InvoicesSummary from '../allInvoices/InvoicesSummary';
import NewInvoiceForm from '../allInvoices/NewInvoiceForm';

test('New invoice form shows on the page upon button click', () => {
    render(<InvoicesSummary />);

    const newInvoiceButton = screen.getByLabelText(/add-new-invoice/i);
    userEvent.click(newInvoiceButton);

    const newInvoiceHeading = screen.getByRole('heading', { name: /new invoice/i });
    expect(newInvoiceHeading).toBeInTheDocument();
})

describe('New invoice form', () => {
    test('Save & send button is disabled when form shows', () => {
        render(<NewInvoiceForm />)
    
        const saveSendButton = screen.getByRole('button', { name: /save & send/i });
        expect(saveSendButton).toBeDisabled();
    })

    test('Save & send button enabled after filling out the entire form', () => {
        // const clientNameInput = screen.getByRole('spinbutton', { name: /client's name/i });
        // userEvent.clear(clientNameInput);
        // userEvent.type('cat');
        // expect(clientNameInput).toHaveTextContent('cat');
    })
})
