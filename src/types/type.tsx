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
    id: number;
    user: string;
    category: TableCategory;
    period: string;
    actual: number;
    taken: number;
    future: number;
}

export type TableCategory = {
    title: string;
    color: string;
}