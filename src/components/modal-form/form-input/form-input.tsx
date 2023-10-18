import { FunctionComponent, useState } from "react";
import StyledFormInput from "./style";
import { FormInputProps } from "@/types/props";
import { poppins } from "@/styles/fonts";


const FormInput: FunctionComponent<FormInputProps> = ({
    inputs,
    handleChange
}) => {
    return(
        <StyledFormInput className="form-input">
            <label className="form-input__label">{inputs?.label}</label>

            {
                inputs?.type === "select" ? (
                    <select
                        style={poppins.style}
                        name={inputs?.name}
                        onChange={handleChange}
                    >
                        {
                            inputs?.option && (
                                inputs?.option.map((item, i) => (
                                    <option key={i} value={item}>{item}</option>
                                ))
                            )
                        }
                    </select>
                ) : (
                        <input
                            style={poppins.style}
                            className="form-input__input"
                            type={inputs?.type}
                            name={inputs?.name}
                            placeholder={inputs?.placeholder}
                            required={inputs?.required}
                            onChange={handleChange}
                        />
                )
            }
        </StyledFormInput>
    )
}

export default FormInput;