import { render, screen, waitFor } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import InvoicesMainPage from '../InvoicesMainPage';
import PortalScreen from '../../../screens/PortalScreen';

// test('click on invoices Link renders the invoices main page', () => {
//     const history = createMemoryHistory();
//     const route = '/invoicesmain';
//     history.push(route);

//     render(<Router history={ history }>
//                 <PortalScreen />
//             </Router>)
//     const invoiceIcon = screen.getByRole('')
// })

function setupPortal() {
    return render(
            <MemoryRouter>
                <PortalScreen />
            </MemoryRouter>
        )
}

describe('Portal screen', () => {
    it('click on invoices link shows the invoices main page', async () => {
        setupPortal();

        const invoiceLink = screen.getByLabelText(/go-to-invoice/i)
        userEvent.click(invoiceLink);
        
        const invoiceHeading = await screen.findByRole('heading', { name: /invoices/i })
        expect(invoiceHeading).toBeInTheDocument();
    });

    it('click in clients link show the clients main page', async () => {
        setupPortal();

        const clientsLink = screen.getByLabelText(/go-to-clients/i)
        userEvent.click(clientsLink)

        const clientHeading = screen.getByRole('heading', { name: /clients/i })
        expect(clientHeading).toBeInTheDocument();
    })
})

function setupInvoices() {
    return render (
        <MemoryRouter>
            <InvoicesMainPage />
        </MemoryRouter>
    )
}

