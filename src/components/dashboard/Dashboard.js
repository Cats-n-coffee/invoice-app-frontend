// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import { useAuth } from "../../contexts/authProvider";
import Welcome from "./Welcome";
import LineChart from "./LineChart";
import StatusOverview from "./StatusOverview";
import Table from "./Table";
import { DashboardStyled, DashboardCharts }from "./styles";
import PieChart from "./PieChart";

export default function Dashboard(props) {
    const { user } = useAuth();
  
    return (
        <div css={ DashboardStyled }>
            <Welcome currentUser={ user }/>
            <div css={ DashboardCharts }>
                <div className="left-column">
                    <LineChart allInvoices={ props.allInvoices }/>
                    <PieChart allInvoices={ props.allInvoices }/>
                </div>
                <div className="right-column">
                    <StatusOverview allInvoices={ props.allInvoices }/> 
                    <Table allInvoices={ props.allInvoices }/>
                </div>
            </div> 
        </div>
    )
}