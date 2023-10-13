import { SideMenuProps } from "@/types/props";
import { FunctionComponent } from "react";
import Image from 'next/image';
import logo from '../../../../public/svg/Logo.svg';
import StyledSideMenu from "./style";
import config from '../../../../config.json';
import SideMenuItem from "../side-menu-item/side-menu-item";




const SideMenu: FunctionComponent<SideMenuProps> = ({
    isOpened
}) => {
    return (
        <StyledSideMenu className={`menu-side__wrapper ${isOpened ? 'opened' : ''}`}>
            <div className="menu-side__content">
                <div className="block-logo">
                    <Image
                        src={logo}
                        alt="Logo Manatime"
                    />
                </div>

                <SideMenuItem items={config?.ui?.menuItems} />
            </div>
        </StyledSideMenu>
    )
}

export default SideMenu;