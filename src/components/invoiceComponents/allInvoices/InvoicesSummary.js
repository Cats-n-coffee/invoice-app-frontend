import React from 'react';
// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import NoInvoice from './NoInvoice';
import InvoicesList from './InvoicesList';
import { ArrowDown, Plus } from '../../icons/assets';
import { TopSectionStyled, NewInvoiceButton, TopSectionFunctions, TopSectionText, TopSectionFilters, BottomSectionStyled } from './styles';
import { InvoiceWrapper } from '../styles';

export default function InvoicesSummary(props) {
    const [toggleFilters, setToggleFilters] = React.useState(false)

    return (
        <>
            <section
                css={`${InvoiceWrapper} ${TopSectionStyled}`}
            >
                <div css={`${TopSectionText}`}>
                    <h1>Invoices</h1>
                    <p>invoices on page</p>
                </div>
                <div css={`${TopSectionFunctions}`}>
                    <div css={`${TopSectionFilters}`}>
                        <div 
                            className="filters-button" 
                            onClick={ () => setToggleFilters(!toggleFilters)}
                        >
                            <span>Filters</span>
                            <ArrowDown css={` width: 10px; height: 10px; `}/>
                        </div>
                        <form className={ toggleFilters ? "display" : null }>
                            <div className="filter-single">
                                <input type="checkbox" id="pending" />
                                <label htmlFor="pending">Pending</label>
                            </div>
                            <div>
                                <input type="checkbox" id="paid" />
                                <label htmlFor="paid">Paid</label>
                            </div>
                        </form>
                    </div>
                    <button css={`${NewInvoiceButton}`}>
                        <span>
                            <Plus css={` width: 10px; height: 10px; `}/>
                        </span>
                        { window.innerWidth > 900 ? "New Invoice" : "New" }
                    </button>
                </div>         
            </section>
            <section css={`${InvoiceWrapper} ${BottomSectionStyled}`} >
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