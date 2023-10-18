import { BreadcrumbProps } from "@/types/props"
import { FunctionComponent, useEffect, useState } from "react"
import StyledBreadcrumb from "./style"
import { usePathname } from "next/navigation"
import config from '../../../../config.json';


const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({
    parent
}) => {
    const pathName = usePathname();
    const [path, setPath] = useState<string[]>([])

    const splitPath = (): string[] => {
        const splittedValues = pathName.split('/')
        return splittedValues;
    }


    const comparePath = (url: string) => {

    }

    useEffect(() => {
        setPath(splitPath());
    },[pathName]);




    return(
        <StyledBreadcrumb className="breadcrumbs">
            <div>
                <ul>
                    {
                        path
                    }
                </ul>
            </div>
        </StyledBreadcrumb>
    )
}

export default Breadcrumb;