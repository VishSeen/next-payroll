'use client'

import { FunctionComponent, useState } from "react"
import StyledSideBar from "./style";
import Image from "next/image";
import SideMenuOverlay from "./side-menu-overlay/side-menu-overlay";
import SideNav from "@/components/side-bar/side-nav/side-nav";
import SideButton from "./side-button/side-button";
import ic_menu from '../../../public/svg/side-bar-button/burger.svg';
import ic_add from '../../../public/svg/side-bar-button/add.svg';
import ic_accueil from '../../../public/svg/side-bar-button/accueil.svg';
import ic_graphic from '../../../public/svg/side-bar/graphic.svg';
import { poppins } from "@/styles/fonts";

import config from '../../../config.json';
import { SideBarProps } from "@/types/props";


const SideBar:FunctionComponent<SideBarProps> = ({
    openFormClick
}) => {
    const [opened, setOpened] = useState<boolean>(false);
    const openMenuOverlay = () => {
        setOpened(!opened)
    }

    return(
        <StyledSideBar className="side-bar__wrapper" >
            <SideButton icon={ic_menu} isBlue={false} click={openMenuOverlay} className="ic-burger"/>

            <SideButton isBlue={true} href="/" text="Accueil" icon={ic_accueil}/>

            <SideButton isBlue={true} text="Ajouter" icon={ic_add} click={openFormClick}/>


            <SideMenuOverlay isOpened={opened} click={openMenuOverlay}/>

            <div className="side-bar__nav-content">
                <SideNav navItems={config?.ui?.sideBar?.navItems} />

                <Image
                    className="img-background"
                    src={ic_graphic}
                    alt="Side bar graphic background"
                    priority={true}
                />
            </div>
        </StyledSideBar>
    )
}

export default SideBar;