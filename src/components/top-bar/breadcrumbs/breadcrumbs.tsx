
import { FunctionComponent, useEffect, useState } from "react"
import StyledBreadcrumb from "./style"
import { usePathname } from "next/navigation"
import config from '../../../../config.json';
import Link from "next/link";
import Image from "next/image";


const Breadcrumb: FunctionComponent = () => {
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
                        config?.ui?.sideBar?.menuItems.map((item) => (
                            (item?.href.replace("/", "") === path[1]) ? (
                                <>
                                    <Image
                                        src={`/svg/side-bar-overlay/${item?.image?.src}`}
                                        alt={item?.image?.alt}
                                        width={60}
                                        height={61}
                                    />

                                    <Link href={`/${path[1]}`}>
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
                        config?.ui?.sideBar?.navItems.map((item) => (
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
                                <Link href={`/${path[1]}/${path[2]}/${path[3]}`}>
                                    {path[3].replaceAll("-", " ")}
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