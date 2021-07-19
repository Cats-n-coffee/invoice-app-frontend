import React from 'react';
// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
//import Chart from 'chart.js/auto';
import { LineChartStyled } from "./styles";
import { Line } from "react-chartjs-2";

export default function LineChart(props) {
    const body = document.body.dataset.theme;

    function getDays() {
        if (props.allInvoices === null) return null;
        if (props.allInvoices !== undefined || props.allInvoices !== null) {
            return props.allInvoices.map(invoice => {
                let date = invoice.invoice_data.invoice_date;
                return date.slice(5);
            })
        }
        
    }

    function getAmount() {
        if (props.allInvoices) {
            let itemArr = [];
            for (let i = 0; i < props.allInvoices.length; i += 1) {
                let items = props.allInvoices[i].invoice_data.item_list;
                items = items.map(item => parseFloat(parseFloat(item.quantity) * parseFloat(item.price)))
                    .reduce((acc, value) => acc + value ,0);
                itemArr.push(items)
            }
            return itemArr;
        }
        else if (props.allInvoices === null) return null;
        else if (props.allInvoice === undefined) return null;
        else if (props.allInvoices === []) return null;
    }

    const days = getDays();
    const amounts = getAmount();
console.log('amounts', amounts)
    const data = {
        labels: days,
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