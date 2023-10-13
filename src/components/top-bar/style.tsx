import styled from 'styled-components';


const StyledWrapper = styled.div`
    .top-bar {
        display: flex;
        align-items: center;
        background-color: #fff;
        height: 66px;
    }

    .top-bar__menu {
        width: 200px;
        height: 100%;

        button {
            height: 100%;
            width: 100%;
            border-right: 2px solid #fafafa;
        }
    }

    .top-bar__details {
        padding: 12px 33px;
        display: flex;
        justify-content: space-between;
    }
`;

export default StyledWrapper;