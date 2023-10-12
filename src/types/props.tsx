import { Img } from "./type";

export type UserPanelProps = {
    name: string;
    company: string;
    image: Img;
    status: boolean;
}


export type TopBarProps = {
    name?: string;
}