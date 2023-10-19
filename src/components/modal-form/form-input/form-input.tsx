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
            <label className="form-input__label" htmlFor={(inputs?.id).toString()}>{inputs?.label}</label>

            {
                inputs?.type === "select" ? (
                    <select
                        id={(inputs?.id).toString()}
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
                        id={inputs?.id.toString()}
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