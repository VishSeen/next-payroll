'use client'

import { TopBarProps } from "@/types/props"
import { FunctionComponent, useState } from "react"
import UserPanel from "./user-panel/user-panel";
import config from "../../../config.json";
import userImage from "../../../public/image/user.png"
import StyledWrapper from "./style";





const TopBar: FunctionComponent<TopBarProps> = ({
    name
}) => {



    return (
        <StyledWrapper className="top-bar__wrapper">
            <div className="top-bar">
                <div className="top-bar__details">
                    <div className="left-bar"></div>

                    <div className="right-bar">
                        <UserPanel
                            name={config?.userDetail?.name}
                            company={config?.userDetail?.company}
                            image={userImage}
                            status={config?.userDetail?.status}
                        />
                    </div>
                </div>
            </div>

        </StyledWrapper>
    )
}


export default TopBar;