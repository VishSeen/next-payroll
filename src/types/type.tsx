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
    category: string;
    period: string;
    actual: number;
    taken: number;
    future: number;
}

export type TableCategory = {
    title: string;
    color: string;
}


export type Inputs = {
    id: number;
    label: string;
    type: string;
    name: string;
    placeholder: string;
    required?: boolean;
    errorMessage?: string;
    option?: string[]
}