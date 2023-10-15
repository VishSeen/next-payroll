import styled from 'styled-components';

const StyledAccordion = styled.div`
    width: 100%;
    border-bottom: 2px solid #0489E0;

    &.opened {
        height: 100%;
        background-color: #fff;
        color: #084693;

        button {
            span {
                color: #084693;
            }

            .ic-arrow {
                color: #084693;
                transform: rotate(180deg);
            }
        }

        .accordion__accordion-collapse {
            display: flex;
        }
    }


    button {
        width: 100%;
        height: 66px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;

        .ic-arrow {
            color: #fff;
        }
    }

    .accordion__info {
        display: flex;
        align-items: center;
        gap: 13px;

        span {
            color: #fff;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            &.icon {
                font-size: 24px;
            }
        }
    }



    .accordion__accordion-collapse {
        width: 100%;
        display: none;
        flex-direction: column;
        align-items: flex-end;
        padding: 15px;
        padding-top: 0;

        a {
            padding-bottom: 18px;
        }

        span {
            color: #646464;
            text-align: right;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.2px;
        }
    }
`;

export default StyledAccordion;