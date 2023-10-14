import { ButtonProps } from "@/types/props";
import { FunctionComponent } from "react";
import StyledButton from "./style";
import Image from "next/image";


const Button: FunctionComponent<ButtonProps> = ({
    icon,
    alt,
    click
}) => {
    return (
        <StyledButton className="button">
            <button onClick={click}>
                <Image
                    src={icon}
                    alt={alt as string}
                    width={42}
                    height={42} />
            </button>
        </StyledButton>
    )
}


export default Button;