import { Img, typeMenuItem } from "./type";

export type UserPanelProps = {
    name: string;
    company: string;
    image: Img;
    status: boolean;
}


export type TopBarProps = {
    name?: string;
}

export type SideMenuProps = {
    isOpened: boolean;
}

export type SideMenuItemProps = {
    items: typeMenuItem[];
}