import styled from 'styled-components';

const StyledBreadcrumb = styled.div`
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 17px;

        li {
            display: flex;
            align-items: center;
            gap: 29px;

            .icon {
                color: #858585;
            }
        }

        .link-parent {
            a {
                color: #494949;
                font-size: 24px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }

        .link-child {
            a {
                color: #858585;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }

        .link-sub {
            a {
                color: #858585;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
    }
`;


export default StyledBreadcrumb;