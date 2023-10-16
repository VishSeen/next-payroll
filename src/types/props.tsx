import { Img, NavItem, NavSubItem, TableData, typeMenuItem } from "./type";

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
    className?: string;
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


export type SideNavProps = {
    navItems: NavItem[]
}

export type AccordionProps = {
    title: string;
    icon?: string | null;
    hasArrow: boolean;
    subItems?: NavSubItem[];
}


export type TableProps = {
    data?: TableData;
    editClick?: () => void;
    transferClick?: () => void;
    deleteClick?: () => {};
}