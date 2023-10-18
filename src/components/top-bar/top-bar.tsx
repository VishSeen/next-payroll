'use client'

import { TopBarProps } from "@/types/props"
import { FunctionComponent, useState } from "react"
import UserPanel from "./user-panel/user-panel";
import config from "../../../config.json";
import userImage from "../../../public/image/user.png"
import StyledWrapper from "./style";
import Button from "./button/button";
import Breadcrumbs from "./breadcrumbs/breadcrumbs";





const TopBar: FunctionComponent<TopBarProps> = ({
    breadcrumb
}) => {

    return (
        <StyledWrapper className="top-bar__wrapper">
            <div className="left-bar">
                <Breadcrumbs />
            </div>

            <div className="right-bar">
                <div className="setting-buttons">
                    <Button
                        icon={`/svg/top-bar/${config?.ui?.topBar?.settingButtons[0]?.src}`}
                        alt={config?.ui?.topBar?.settingButtons[0]?.alt}
                    />

                    <Button
                        icon={`/svg/top-bar/${config?.ui?.topBar?.settingButtons[1]?.src}`}
                        alt={config?.ui?.topBar?.settingButtons[1]?.alt}
                    />
                </div>
                <UserPanel
                    name={config?.ui?.topBar?.userDetail?.name}
                    company={config?.ui?.topBar?.userDetail?.company}
                    image={userImage}
                    status={config?.ui?.topBar?.userDetail?.status}
                />
            </div>
        </StyledWrapper>
    )
}


export default TopBar;