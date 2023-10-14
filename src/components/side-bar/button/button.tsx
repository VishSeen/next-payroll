import { FunctionComponent } from "react"
import Image from "next/image";
import { ButtonProps } from "@/types/props";
import StyledButton from "./style";

const Button: FunctionComponent<ButtonProps> = ({
    text,
    icon,
    isBlue,
    click
}) => {

    return (
        <StyledButton className={`button__wrapper ${isBlue ? 'blue' : ''}`}>
            <button onClick={click}>
                {
                    icon && (
                        <Image
                            src={icon}
                            alt="icon burger menu"
                        />
                    )
                }
                {
                    text && (
                        <span>
                            {text}
                        </span>
                    )
                }
            </button>
        </StyledButton>
    );
}

export default Button;