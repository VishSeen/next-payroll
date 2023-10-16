import styled from 'styled-components';


const StyledSideMenuItem = styled.div`
    width: 100%;

    ul {
        display: flex;
        gap: 8px;
        flex-direction: row;
        flex-wrap: wrap;

        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            border: 1px solid #D4D4D4;
            background: #FFF;
            width: 170px;
            height: 170px;
            padding: 15px 12px;

            &:hover {
                border: 2px solid #0090F5;
                p {
                    color: #0090F5;
                }
            }

            p {
                color: #494949;
                text-align: center;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                transition: all 0.2s ease;
            }
        }
    }
`;


export default StyledSideMenuItem;