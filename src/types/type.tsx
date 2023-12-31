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
    icon?: string | null;
    items?: NavSubItem[]
}

export type NavSubItem = {
    title: string;
    path?: string;
    icon?: string;
}


export type SvgElement = {
    color?: string;
}


export type TableData = {
    id: string;
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

export type TypePath = {
    parent: typeMenuItem | null;
    child: NavItem | null;
}