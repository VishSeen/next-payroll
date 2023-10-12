'use client'

import { UserPanelProps } from "@/types/props";
import { FunctionComponent } from "react";
import Image from 'next/image';
import StyledWrapper from "./style";


const UserPanel: FunctionComponent<UserPanelProps> = ({
    name,
    company,
    image,
    status
}) => {
    return (
        <StyledWrapper className="user-panel">
            <div className="user-panel__info">
                <span className="info-name">
                    {name}
                </span>

                <span className="info-company">
                    {company}
                </span>
            </div>

            <div className="user-panel__image">
                <Image
                    src={image?.src}
                    alt="Text"
                    width={42}
                    height={42}
                />

                {
                    status && (
                        <div className="ic-online"></div>
                    )
                }
            </div>
        </StyledWrapper>
    )
}


export default UserPanel;