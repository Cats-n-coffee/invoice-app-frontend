import React from 'react';
// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import { LineChartStyled } from "./styles";
import { Line } from "react-chartjs-2";

export default function LineChart(props) {
    const body = document.body.dataset.theme;
    const { allInvoices = []} = props;

    function getDays() {
        //if (allInvoices === null) return null;
        if (allInvoices !== undefined || allInvoices !== null) {
            return allInvoices?.map(invoice => {
                let date = invoice.invoice_data.invoice_date;
                return date.slice(5);
            })
        }
    }

    function getAmount() {
        if (allInvoices) {
            let itemArr = [];
            for (let i = 0; i < allInvoices.length; i += 1) {
                let items = allInvoices[i].invoice_data.item_list;
                items = items.map(item => parseFloat(parseFloat(item.quantity) * parseFloat(item.price)))
                    .reduce((acc, value) => acc + value ,0);
                itemArr.push(items)
            }
            return itemArr;
        }
        else if (allInvoices === null) return null;
        else if (allInvoices === undefined) return null;
        else if (allInvoices === []) return null;
    }

    const days = getDays();
    const amounts = getAmount();

    const data = {
        labels: days??[],
        datasets: [
            {
                label: "Total sales",
                data: amounts,
                fill: false,
                backgroundColor: '#7C5DFA',
                borderColor: '#7C5DFA'
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
        scales: {
            y: {
                ticks: {
                    color: body === 'light' ? '#0C0E16' : '#FFFFFF' 
                },
                grid: {
                    borderColor: body === 'light' ? '#0C0E16' : '#FFFFFF',
                    display: false
                }
            },
            x: {
                ticks: {
                    color: body === 'light' ? '#0C0E16' : '#FFFFFF' 
                },
                grid: {
                    borderColor: body === 'light' ? '#0C0E16' : '#FFFFFF',
                    display: false
                }
            }
        }
    }

    return (
        <div css={ LineChartStyled }>
            <h3>Daily Sales</h3>
            <Line 
                data={ data }
                options={ options }
            />
        </div>
    )
}

// https://dev.to/harshilparmar/how-to-use-chart-js-in-react-17jp