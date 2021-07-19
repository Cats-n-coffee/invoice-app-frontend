import { css } from 'styled-components';

export const DashboardStyled = css`
    width: 100%;
    height: 100%;
    padding: 1em 2em;

    @media screen and (min-width: 500px) {
        padding: 2em 3em;
    }

    @media screen and (min-width: 900px) {
        padding: 3em;
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export const WelcomeStyled = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 2em;
    background: var(--boxes);
    border-radius: 8px;
    text-align: right;

    .welcome-name {
        padding: 0 0 1em;
        font-size: 2rem;
        font-weight: 700;
    }

    .welcome-date {
        font-size: 1.5rem;
    }
    
    @media screen and (min-width: 700px) {
        flex-direction: row;
        align-items: center;
        padding: 2em 4em;
        .welcome-name {
            padding: 0;
        }
    }
`;

export const DashboardCharts = css`
    display: flex;
    flex-direction: column;
    padding: 2em 0;
    
    .left-column {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 1em 0 0;
    }

    .right-column {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media screen and (min-width: 700px) {
        flex-direction: row;
    }
`;

export const LineChartStyled = css`
    background: var(--boxes);
    border-radius: 8px;
    padding: 2em;

    @media screen and (min-width: 700px) {
        
    }
   
`;

export const TableStyled = css`
    background: var(--boxes);
    border-radius: 8px;
    margin: 1em 0 0 0;
    padding: 2em 2em;
    height: 100%;

    table {
        width: 100%;
        border-collapse: collapse;

        thead{
            tr {
                
                th{
                    text-align: center;
                    padding: 0 0 1em 0;
                    font-size: 1.2rem;
                    border-bottom: 1px solid grey;
                }
            }
        }

        tbody {
            tr{
                td {
                    text-align: center;
                    padding: 1em 0 0 0;
                }
            }
        }
    }
`;

export const StatusOverviewStyled = css`
    background: var(--boxes);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 3em;
    border-radius: 8px;
    max-height: 70px;

    .status-type {
        display: flex;
        flex-direction: column;

        span:first-of-type {
            font-size: 1.3rem;
            font-weight: 700;
            padding: 0 0 .5em 0;
        }
        span:nth-of-type(2) {
            font-size: 1.6rem;
            text-align: center;
        }
    }

    @media screen and (min-width: 700px) {
        padding: 2em 3em;

        .status-type {
            flex-direction: row;

            span:first-of-type {
                padding: 0 1em 0 0;
            }
        }
    }
`;

export const PieChartStyled = css`
    background: var(--boxes);
    border-radius: 8px;
    padding: 2em;
    @media screen and (min-width: 700px) {
      
    }
`;