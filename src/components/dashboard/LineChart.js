import React from 'react';
// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import Chart from 'chart.js/auto';
import { LineChartStyled } from "./styles";

export default function LineChart(props) {

    return (
        <div css={ LineChartStyled }>
            <canvas id="line-chart" width="400" height="500"></canvas>
        </div>
    )
}

// https://dev.to/harshilparmar/how-to-use-chart-js-in-react-17jp