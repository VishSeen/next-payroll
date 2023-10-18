import { SideNavProps } from "@/types/props";
import Accordion from "@/components/side-bar/accordion/accordion";
import { FunctionComponent } from "react";


const SideNav: FunctionComponent<SideNavProps> = ({
    navItems
}) => {
    return (
        <nav>
            <ul>
                {
                    navItems.map((item, i) => (
                        <li key={i}>
                            <Accordion
                                title={item?.title}
                                icon={item?.icon}
                                hasArrow={item?.items ? (item?.items?.length > 0 ? true : false) : false}
                                subItems={item?.items ? (item?.items?.length > 0 ? item?.items : []) : []}
                            />
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default SideNav;