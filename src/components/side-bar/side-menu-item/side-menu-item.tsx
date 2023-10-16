import { FunctionComponent } from "react";
import Image from 'next/image';
import { SideMenuItemProps } from "@/types/props";
import { poppins } from "@/styles/fonts";
import StyledSideMenuItem from "./style";
import Link from "next/link";


const SideMenuItem: FunctionComponent<SideMenuItemProps> = ({
    items
}) => {
    return (
        <StyledSideMenuItem className="menu-items__wrapper">
            <nav>
                <ul>
                    {
                        items.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link href={item?.href} >
                                        <Image
                                            src={`/svg/side-bar-overlay/${item?.image?.src}`}
                                            alt={item?.image?.alt as string}
                                            width={75}
                                            height={100}
                                        />

                                        <p style={poppins.style}>
                                            {item?.title}
                                        </p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </StyledSideMenuItem>
    )
}

export default SideMenuItem;