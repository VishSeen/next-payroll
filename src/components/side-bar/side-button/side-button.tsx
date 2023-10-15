import { FunctionComponent } from "react"
import Image from "next/image";
import { SideButtonProps } from "@/types/props";
import StyledSideButton from "./style";
import Link from "next/link";
import { poppins } from "@/styles/fonts";

const Button: FunctionComponent<SideButtonProps> = ({
    text,
    icon,
    isBlue,
    href,
    click
}) => {
    return (
        <StyledSideButton className={`button__wrapper ${isBlue ? 'blue' : ''}`}>
            {
                href ? (
                    <Link href={href}>
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
                                <span  style={poppins.style}>
                                    {text}
                                </span>
                            )
                        }
                    </Link>
                )
                : (
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
                                    <span  style={poppins.style}>
                                        {text}
                                    </span>
                                )
                            }
                        </button>
                )
            }
        </StyledSideButton>
    );
}

export default Button;