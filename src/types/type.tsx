export type Img = {
    src: string;
    alt?: string;
}

export type typeMenuItem = {
    title: string;
    href: string;
    image: Img;
}


export type NavItem = {
    title: string;
    items?: NavSubItem[]
}

export type NavSubItem = {
    title: string;
    path?: string;
}

export type SvgElement = {
    color?: string;
}

export type TableData = {
    users: string;
    category: string;
    period: number;
    actual: number;
    taken: number;
    future: number;
}