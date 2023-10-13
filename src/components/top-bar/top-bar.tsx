'use client'

import { TopBarProps } from "@/types/props"
import { FunctionComponent, useState } from "react"
import UserPanel from "./user-panel/user-panel";
import config from "../../../config.json";
import userImage from "../../../public/image/user.png"
import StyledWrapper from "./style";

import ic_menu from '../../../public/svg/Burger button.svg'
import Image from "next/image";
import SideMenu from "./side-menu/side-menu";



const TopBar: FunctionComponent<TopBarProps> = ({
    name
}) => {
    const [opened, setOpened] = useState<boolean>(false)

    const icMenuClick = () => {
        setOpened(!opened)
    }


    return (
        <StyledWrapper className="top-bar__wrapper">
            <div className="top-bar">
                <div className="top-bar__menu">
                    <button onClick={icMenuClick}>
                        <Image
                            src={ic_menu}
                            alt="icon burger menu"
                        />
                    </button>
                </div>

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

            <SideMenu isOpened={opened}/>
        </StyledWrapper>
    )
}


export default TopBar;