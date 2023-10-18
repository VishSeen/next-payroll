import styled from 'styled-components';

const StyledFormInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .form-input__label {
        margin-bottom: 4px;
    }

    .form-input__input, select {
        padding: 16px 10px;
        border: 1px solid #9f9f9f;
        border-radius: 6px;
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 4px;
    }
`;

export default StyledFormInput;