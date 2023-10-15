import styled from 'styled-components';


const StyledSideBar = styled.div`
    width: 200px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

    .img-background {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }


    .side-bar__nav-content {
        height: 100%;
        background: linear-gradient(180deg, #094694 0%, #0096FF 134.71%);
    }
`;


export default StyledSideBar;