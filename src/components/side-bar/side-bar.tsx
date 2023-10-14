'use client'

import { FunctionComponent, useState } from "react"
import StyledSideBar from "./style";
import Image from "next/image";
import SideMenu from "./side-menu-overlay/side-menu-overlay";
import Button from "./side-button/side-button";
import ic_menu from '../../../public/svg/side-bar-button/burger.svg';
import ic_add from '../../../public/svg/side-bar-button/add.svg';
import ic_accueil from '../../../public/svg/side-bar-button/accueil.svg';
import ic_graphic from '../../../public/svg/side-bar/graphic.svg';


const SideBar:FunctionComponent = () => {
    const [opened, setOpened] = useState<boolean>(false)

    const icMenuClick = () => {
        setOpened(!opened)
    }

    return(
        <StyledSideBar className="side-bar__wrapper">
            <Button icon={ic_menu} isBlue={false} click={icMenuClick}/>

            <Button isBlue={true} href="/" text="Accueil" icon={ic_accueil}/>

            <Button isBlue={true} text="Ajouter" icon={ic_add}/>


            <SideMenu isOpened={opened} />

            <Image
                className="img-background"
                src={ic_graphic}
                alt="Side bar graphic background"
            />

        </StyledSideBar>
    )
}

export default SideBar;