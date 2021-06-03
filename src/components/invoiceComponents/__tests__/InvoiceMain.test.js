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
    // it('displays the dashboard upon login', async () => {
    //     setupPortal();

    //     const dashboardHeading = screen.getByRole('heading', { name: /dashboard/i })
    //     expect(dashboardHeading).toBeInTheDocument();
    // })
    it('click on invoices link shows the invoices main page', async () => {
        setupPortal();

        const invoiceLink = screen.getByRole('link', { name: /invoices/i })
        userEvent.click(invoiceLink);
        
        const invoiceHeading = await screen.findByRole('heading', { name: /invoices/i })
        expect(invoiceHeading).toBeInTheDocument();
    });

    it('click in clients link show the clients main page', async () => {
        setupPortal();

        const clientsLink = screen.getByRole('link', { name: /clients/i })
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

describe('Invoices main page', () => {
    it('displays all invoices', async () => {
        setupInvoices();

        const invoiceHeading = await screen.findAllByRole('heading', /invoice id/i)
        expect(invoiceHeading).toHaveLength(2)
    })
    it('displays no invoice page', () => {
        setupInvoices();
    })
})