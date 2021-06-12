import React from 'react';
// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import NoInvoice from './NoInvoice';
import InvoicesList from './InvoicesList';
import NewInvoiceForm from './NewInvoiceForm';
import { ArrowDown, Plus } from '../../icons/assets';
import { TopSectionStyled, NewInvoiceButton, TopSectionFunctions, TopSectionText, TopSectionFilters, BottomSectionStyled, InvoiceSummaryStyled, RemoveFiltersButton } from './styles';
import { InvoiceWrapper } from '../styles';


export default function InvoicesSummary(props) {
    const [toggleFilters, setToggleFilters] = React.useState(false);
    const [toggleNewInvoice, setToggleNewInvoice] = React.useState(false);
    const [filter, setFilter] = React.useState(null);
    const [filteredInvoices, setFilteredInvoices] = React.useState(null);

    function filterInvoices(filterValue) {
        setFilter(filterValue);
        let selection = props.allInvoices.filter(item => item.invoice_data.invoice_status === filterValue)
        setFilteredInvoices(selection)
        setToggleFilters(false);
    }

    function removeFilters() {
        setFilter(null)
        setToggleFilters(false);
        setFilteredInvoices(null);
    }

    return (
        <section css={`${InvoiceSummaryStyled}`}>
            { toggleNewInvoice ? 
                <NewInvoiceForm 
                    setToggleForm={setToggleNewInvoice} 
                    sendNewInvoice={ props.sendNewInvoice }
                /> 
                : null }
            <div
                css={`${InvoiceWrapper} ${TopSectionStyled}`}
            >
                <div css={`${TopSectionText}`}>
                    <h1>Invoices</h1>
                    { 
                        props.allInvoices ? 
                        <p>There are { filter ? filteredInvoices.length : props.allInvoices.length } invoices</p> 
                        : <p>No Invoices</p>
                    }
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
                                <input type="radio" id="pending" name="filter" value="pending" onChange={ (e) => filterInvoices(e.target.value)}/>
                                <label htmlFor="pending">Pending</label>
                            </div>
                            <div>
                                <input type="radio" id="paid" name="filter" value="paid" onChange={ (e) => filterInvoices(e.target.value)}/>
                                <label htmlFor="paid">Paid</label>
                            </div>
                            <div onClick={ removeFilters } css={`${RemoveFiltersButton}`}>
                                Show all
                            </div>
                        </form>
                    </div>
                    <button 
                        onClick={ () => setToggleNewInvoice(!toggleNewInvoice) } 
                        aria-label="add-new-invoice" 
                        css={`${NewInvoiceButton} `} 
                    >
                        <span>
                            <Plus css={` width: 10px; height: 10px; `}/>
                        </span>
                        { window.innerWidth > 900 ? "New Invoice" : "New" }
                    </button>
                </div>         
            </div>
            <div css={`${InvoiceWrapper} ${BottomSectionStyled}`} >
                { props.allInvoices.length > 0 || props.allInvoices === null
                ? <InvoicesList 
                    allInvoices={ filteredInvoices ? filteredInvoices : props.allInvoices } 
                    selectInvoice={ props.selectInvoice }
                  />
                : <NoInvoice /> }
            </div>
        </section>
    )
}
