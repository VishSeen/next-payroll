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
                                <Link href={item?.href} key={i}>
                                    <button>
                                        <Image
                                            src={`/svg/side-bar-overlay/${item?.image?.src}`}
                                            alt={item?.image?.alt as string}
                                            width={74}
                                            height={99}
                                        />

                                        <p style={poppins.style}>
                                            {item?.title}
                                        </p>
                                    </button>
                                </Link>
                            )
                        })
                    }
                </ul>
            </nav>
        </StyledSideMenuItem>
    )
}

export default SideMenuItem;