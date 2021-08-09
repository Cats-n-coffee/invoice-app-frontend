import React from 'react'
// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import { PieChartStyled } from "./styles";
import { Pie } from "react-chartjs-2";

export default function PieChart(props) {
    const body = document.body.dataset.theme;
    const { allInvoices = []} = props;
  
    function countPending() {
        let filter;
        if (allInvoices === null) return 0;
        if (allInvoices !== undefined || allInvoices !== null) {
            filter = allInvoices?.filter(item => item.invoice_data.invoice_status === 'pending');
        }
        else { return 0; }
        return filter.length || 0;
    }

    function countPaid() {
        let filter = [];
        if (allInvoices === null) return 0;
        if (allInvoices !== undefined || allInvoices !== null) {
            filter = allInvoices?.filter(item => item.invoice_data.invoice_status === 'paid');
        }
        else { return 0; }
        return filter.length || 0;
    } 

    const pending = countPending();
    const paid = countPaid();

    const data = {
        labels: ['Pending', 'Paid'],
        datasets: [
            {
                label: "Invoice Status",
                data: [pending, paid],
                backgroundColor: ["#FF8F00", "#33D69F"]
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: body === 'light' ? '#0C0E16' : '#FFFFFF'
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: 20
        }
    }

    return (
        <div css={ PieChartStyled }>
            <h3>Invoices Status</h3>
            <Pie 
            data={ data }
            options={ options }
            />
        </div>
    )
}