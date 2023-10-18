import styled from 'styled-components'


const StyledModalForm = styled.div`
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
    display: none;
    align-items: center;
    justify-content: center;

    &.opened {
        display: flex;
    }

    .form {
        position: relative;
        width: 600px;
        padding: 24px 32px;
        background-color: #fff;
        border-radius: 12px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: stretch;
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
        .form-body__error {
            font-size: 13px;
            font-weight: 500;
            color: red;
            display: none;
            &.error {
                display: block;
            }
        }

        .button-container {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            margin-top: 24px;

            button {
                font-size: 16px;
                padding: 6px 16px;
                min-width: 64px;
                border-radius: 4px;

                    :nth-child(1) {
                    margin-right: 12px;
                }
            }

            .btn-close {
                color: #929292;
            }

            .btn-add {
                color: #fff;
                background-color: rgb(25, 118, 210);
                box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
            }
        }

        .soldes {
            display: flex;
            gap: 12px;
        }
    }

    .MuiFormControl-root {
        display: flex;
        gap: 17px;
    }
`;

export default StyledModalForm;