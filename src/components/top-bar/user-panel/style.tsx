import styled from 'styled-components';


const StyledWrapper = styled.div`
    &.user-panel {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-left: 1px solid #858585;
    }

    .user-panel__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 28px;

        .info-name {
            color: #494949;
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        .info-company {
            color: #858585;
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
        }
    }


    .user-panel__image {
        position: relative;
        .ic-online {
            position: absolute;
            right: 0;
            top: 0;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #3CE021;
        }
    }
`;

export default StyledWrapper;