import { SvgElement } from "@/types/type";
import { FunctionComponent } from "react";

export const ArrowDownSvg:FunctionComponent<SvgElement> = ({
    color
 }) => (
    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.05558 6.74375C5.74874 7.08546 5.25126 7.08546 4.94442 6.74375L0.23013 1.49375C-0.0767112 1.15204 -0.0767111 0.59802 0.23013 0.256312C0.536971 -0.0853968 1.03446 -0.0853967 1.3413 0.256312L5.5 4.88759L9.6587 0.256313C9.96554 -0.0853959 10.463 -0.0853959 10.7699 0.256313C11.0767 0.598021 11.0767 1.15204 10.7699 1.49375L6.05558 6.74375Z" fill={color} />
    </svg>
 );


export const EspaceSvg: FunctionComponent<SvgElement> = ({
    color
}) => (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 0H1.5C0.671875 0 0 0.671875 0 1.5V2H18V1.5C18 0.671875 17.3281 0 16.5 0ZM0 12.5C0 13.3281 0.671875 14 1.5 14H16.5C17.3281 14 18 13.3281 18 12.5V3H0V12.5ZM11 5.25C11 5.1125 11.1125 5 11.25 5H15.75C15.8875 5 16 5.1125 16 5.25V5.75C16 5.8875 15.8875 6 15.75 6H11.25C11.1125 6 11 5.8875 11 5.75V5.25ZM11 7.25C11 7.1125 11.1125 7 11.25 7H15.75C15.8875 7 16 7.1125 16 7.25V7.75C16 7.8875 15.8875 8 15.75 8H11.25C11.1125 8 11 7.8875 11 7.75V7.25ZM11 9.25C11 9.1125 11.1125 9 11.25 9H15.75C15.8875 9 16 9.1125 16 9.25V9.75C16 9.8875 15.8875 10 15.75 10H11.25C11.1125 10 11 9.8875 11 9.75V9.25ZM5.5 5C6.60313 5 7.5 5.89687 7.5 7C7.5 8.10312 6.60313 9 5.5 9C4.39687 9 3.5 8.10312 3.5 7C3.5 5.89687 4.39687 5 5.5 5ZM2.09687 11.3813C2.35938 10.5781 3.1125 10 4 10H4.25625C4.64062 10.1594 5.05937 10.25 5.5 10.25C5.94063 10.25 6.3625 10.1594 6.74375 10H7C7.8875 10 8.64062 10.5781 8.90312 11.3813C9.00313 11.6906 8.74062 12 8.41562 12H2.58437C2.25937 12 1.99687 11.6875 2.09687 11.3813Z" fill={color} />
    </svg>
);