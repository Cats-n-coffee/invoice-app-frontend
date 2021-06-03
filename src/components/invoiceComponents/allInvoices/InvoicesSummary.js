// eslint-disable-next-line
import styled from 'styled-components/macro';
import NoInvoice from './NoInvoice';
import InvoicesList from './InvoicesList';
import { TopSectionStyled } from './styles';

export default function InvoicesSummary(props) {
    return (
        <>
            <section
                css={`${TopSectionStyled}`}
            >
                <div>
                    <h1>Invoices</h1>
                    <p>invoices on page</p>
                </div>
                <div className="top-section-functionality">
                    <div>
                        filters
                    </div>
                    <button>add invoice</button>
                </div>         
            </section>
            <section>
                { props.allInvoices ? <InvoicesList allInvoices={ props.allInvoices } />
                : <NoInvoice /> }
            </section>
        </>
    )
}

// add a new invoice
// filter invoices

// display list of all invoices
// display no invoices image

// state kept in main page