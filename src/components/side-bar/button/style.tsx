import styled from "styled-components";


const StyledButton = styled.div`
    &.button__wrapper {
        width: 200px;
        height: 66px;
        background-color: white;

        &.blue {
            background-color: #0090F5;
            border-top: 2px solid #0799FF;
            border-bottom: 2px solid #0084E1;
        }

        button {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                margin-right: 25px;
            }
            span {
                color: #FFF;
                text-align: center;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }
    }
`;

export default StyledButton;