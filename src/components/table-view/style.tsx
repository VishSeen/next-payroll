import styled from 'styled-components';

const StyledTable = styled.table`
    width: 100%;
    border: 1px solid #C4C4C4;
    border-radius: 4px;
    border-collapse: collapse;
    background: #FFF;

    tr {
        &:nth-child(even) {
            background: #F2F2F2;
        }
        th, td {
            padding: 10px 14px;
            border: 1px solid #dddddd;
            text-align: left;
        }
    }

    thead {
        th {
            color: #494949;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
    }


    tbody {
        td {
            color: #646464;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            &:nth-child(2) {
                div {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }
            }
        }

        .button-container {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
    }


    .circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
`;

export default StyledTable;