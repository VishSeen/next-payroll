import { FunctionComponent } from "react";
import Image from 'next/image';
import { MenuItemProps } from "@/types/props";
import { poppins } from "@/styles/fonts";
import StyledMenuItems from "./style";
import Link from "next/link";


const MenuItem: FunctionComponent<MenuItemProps> = ({
    items
}) => {
    return (
        <StyledMenuItems className="menu-items__wrapper">
            <nav>
                <ul>
                    {
                        items.map((item, i) => {
                            return (
                                <Link href={item?.href} key={i}>
                                    <button>
                                        <Image
                                            src={`/svg/${item?.image?.src}`}
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
        </StyledMenuItems>
    )
}

export default MenuItem;