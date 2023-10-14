import styled from 'styled-components';


const StyledWrapper = styled.div`
    position: fixed;
    left: 200px;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    height: 66px;
    width: auto;
    padding: 12px 33px;


    .right-bar {
        display: flex;
        align-items: center;
        gap: 31px;

        .setting-buttons {
            display: flex;
            gap: 10px;
        }
    }
`;

export default StyledWrapper;