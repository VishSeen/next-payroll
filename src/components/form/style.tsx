import styled from 'styled-components'


const StyledForm = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: rgba(206, 206, 206, 0.40);
    backdrop-filter: blur(5px);
    padding: 24px;
    /* display: none; */

    &.opened {
        display: block;
    }


    .form {
        position: relative;
        width: 600px;
        background-color: #fff;
        border-radius: 12px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 24px 16px 40px;

        /* .btn-close {
            position: absolute;
            right: 0;
            top: 0;
        } */
    }

    .form__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 42px;

        .btn-close {
            display: flex;
            align-items: center;
            padding: 10px;
            :hover {
                cursor: pointer;
            }
        }
    }


    .form__body {
        .button-container {
            display: flex;
            justify-content: flex-end;
            margin-top: 24px;

            button:nth-child(1) {
                margin-right: 12px;
            }
        }
    }

    .MuiFormControl-root {
        display: flex;
        gap: 17px;
    }
`;

export default StyledForm;