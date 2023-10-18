import { MouseEventHandler } from "react";
import { Img, Inputs, NavItem, NavSubItem, TableData, typeMenuItem } from "./type";

export type UserPanelProps = {
    name: string;
    company: string;
    image: Img;
    status: boolean;
}


export type TopBarProps = {
    name?: string;
}

export type SideBarProps  = {
    openFormClick: () => void;
}

export type SideMenuProps = {
    isOpened: boolean;
}

export type SideMenuItemProps = {
    items: typeMenuItem[];
}

export type SideNavProps = {
    navItems: NavItem[]
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


export type ModalFormProps = {
    open: boolean;
    viewModalClick?: () => void;
    handleFormValidation?: (e: MouseEvent) => {};
}

export type FormInputProps = {
    inputs: Inputs;
    handleChange?: (e) => void;
}


export type AccordionProps = {
    title: string;
    icon?: string | null;
    hasArrow: boolean;
    subItems?: NavSubItem[];
}


export type TableProps = {
    data: TableData[];
    editClick?: () => void;
    transferClick?: () => void;
    deleteClick?: (e) => void;
}