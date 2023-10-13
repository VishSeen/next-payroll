import styled from 'styled-components';


const StyledSideMenu = styled.div`
    display: none;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 200px;
    right: 0;
    bottom: 0;
    background: rgba(206, 206, 206, 0.40);
    backdrop-filter: blur(5px);

    &.opened {
        display: block;
    }

    .menu-side__content {
        width: 800px;
        height: 100%;
        border-radius: 0 40px 40px 0px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 48px;
        padding-top: 118px;


        .block-logo {
            margin-bottom: 120px;
        }
    }
`;


export default StyledSideMenu;