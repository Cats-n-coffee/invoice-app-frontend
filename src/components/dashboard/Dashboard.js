// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import Welcome from "./Welcome";
import LineChart from "./LineChart";
import StatusOverview from "./StatusOverview";
import Table from "./Table";
import { DashboardStyled }from "./styles";

export default function Dashboard(props) {
    return (
        <div css={ DashboardStyled }>
            <Welcome />
            <LineChart />
            <StatusOverview />
            <Table />
        </div>
    )
}