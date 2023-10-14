import styled from 'styled-components';


const StyledWrapper = styled.div`
    position: fixed;
    left: 200px;
    right: 0;
    top: 0;
    .top-bar {
        display: flex;
        align-items: center;
        background-color: #fff;
        height: 66px;
    }



    .top-bar__details {
        padding: 12px 33px;
        display: flex;
        justify-content: space-between;
    }
`;

export default StyledWrapper;