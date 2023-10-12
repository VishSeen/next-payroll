'use client'

import { TopBarProps } from "@/types/props"
import { FunctionComponent } from "react"
import UserPanel from "./user-panel/user-panel";
import config from "../../../config.json";
import userImage from "../../../public/image/user.png"
import StyledWrapper from "./style";



const TopBar: FunctionComponent<TopBarProps> = ({
    name
}) => {
    return (
        <StyledWrapper className="top-bar">
            <div className="top-bar__menu"></div>

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
        </StyledWrapper>
    )
}


export default TopBar;