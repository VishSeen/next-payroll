import { BreadcrumbProps } from "@/types/props"
import { FunctionComponent, useEffect, useState } from "react"
import StyledBreadcrumb from "./style"
import { usePathname } from "next/navigation"
import config from '../../../../config.json';
import Link from "next/link";
import Image from "next/image";


const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({
    parent
}) => {
    const pathName = usePathname();
    const [path, setPath] = useState<string[]>([]);


    useEffect(() => {
        const splitValues: string[] = pathName.split('/');

        setPath(splitValues);
    },[pathName]);




    return(
        <StyledBreadcrumb className="breadcrumbs">
            <ul>
                <li className="link-parent">
                    {
                        config?.ui?.sideBar?.menuItems.map((item, i) => (
                            (item?.href.replace("/", "") === path[1]) ? (
                                <>
                                    <Image
                                        src={`/svg/side-bar-overlay/${item?.image?.src}`}
                                        alt={item?.image?.alt}
                                        width={60}
                                        height={61}
                                    />

                                    <Link href={`/${path[1]}`} key={i}>
                                        {item?.title}
                                    </Link></>
                            ) : (
                                <></>
                            )
                        ))
                    }
                </li>

                {
                    path[2] && (
                        config?.ui?.sideBar?.navItems.map((item, i) => (
                            (item?.title.toLowerCase() === path[2]) ? (
                                <>
                                    <span className="icon material-symbols-outlined">
                                        chevron_right
                                    </span>

                                    <li className="link-child">
                                        <span className="icon material-symbols-outlined">
                                            {item?.icon}
                                        </span>

                                        <Link href={`/${path[1]}/${path[2]}`}>
                                            {item?.title}
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <></>
                            )
                        ))
                    )
                }

                {
                    path[3] && (
                        <>
                            <span className="icon material-symbols-outlined">
                                chevron_right
                            </span>

                            <li className="link-sub">
                                <Link href={`/${path[2]}`}>
                                    {path[3]}
                                </Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </StyledBreadcrumb>
    )
}

export default Breadcrumb;