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

export type SideButtonProps = {
    text?: string;
    icon?: string;
    isBlue: boolean;
    href?: string;
    click?: () => void;
}


export type ButtonProps = {
    icon: string;
    alt: string;
    click?: () => {}
}


export type FormProps = {
    isOpened: boolean;
    handleValidation: () => void;
}