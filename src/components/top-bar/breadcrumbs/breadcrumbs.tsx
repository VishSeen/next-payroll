import { BreadcrumbProps } from "@/types/props"
import { FunctionComponent, useEffect, useState } from "react"
import StyledBreadcrumb from "./style"
import { usePathname } from "next/navigation"
import config from '../../../../config.json';
import Link from "next/link";
import { NavItem, TypePath, typeMenuItem } from "@/types/type";
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
                    <Link href={`/${path[1]}`}>
                        {path[1]}
                    </Link>
                </li>

                {
                    path[2] && (
                        <>
                            <span className="icon material-symbols-outlined">
                                chevron_right
                            </span>

                            <li className="link-child">
                                <Link href={`/${path[2]}`}>
                                    {path[2]}
                                </Link>
                            </li>
                        </>
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