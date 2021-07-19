import React from 'react'
// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import Chart from 'chart.js/auto';
import { PieChartStyled } from "./styles";

export default function PieChart(props) {
    return (
        <div css={ PieChartStyled }>
            pie chart
        </div>
    )
}