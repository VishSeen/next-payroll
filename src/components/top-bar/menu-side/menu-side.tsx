import { MenuItemProps, MenuSideProps } from "@/types/props";
import { FunctionComponent } from "react";
import Image from 'next/image';
import logo from '../../../../public/svg/Logo.svg';
import StyledMenuSide from "./style";
import config from '../../../../config.json';
import MenuItem from "../menu-item/menu-items";



const MenuSide: FunctionComponent<MenuSideProps> = ({
    isOpened
}) => {
    return (
        <StyledMenuSide className={`menu-side__wrapper ${isOpened ? 'opened' : ''}`}>
            <div className="menu-side__content">
                <div className="block-logo">
                    <Image
                        src={logo}
                        alt="Logo Manatime"
                    />
                </div>

                <MenuItem items={config?.ui?.menuItems} />
            </div>
        </StyledMenuSide>
    )
}

export default MenuSide;