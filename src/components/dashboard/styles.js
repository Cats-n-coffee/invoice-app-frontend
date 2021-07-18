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
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    margin: 2em 0 0 0;
    
    @media screen and (min-width: 700px) {
        grid-template-columns: 50% 50%;
    }
`;

export const LineChartStyled = css`
    @media screen and (min-width: 700px) {
        grid-column: 1 / 2;  
        grid-row: 1 /2;  
    }
   
`;

export const TableStyled = css`
    @media screen and (min-width: 700px) {
        grid-column: 2 / -1;
    }
`;

export const StatusOverviewStyled = css`
    background: var(--boxes);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 3em;
    border-radius: 8px;

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
        grid-column: 2 / -1;
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
    @media screen and (min-width: 700px) {
        grid-column: 1 / 2;
    }
`;