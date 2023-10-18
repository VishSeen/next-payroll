'use client';

import { AccordionProps } from "@/types/props";
import { FunctionComponent, useState } from "react";
import { usePathname } from 'next/navigation'
import StyledAccordion from "./style";
import { poppins, roboto } from "@/styles/fonts";
import Link from "next/link";
import { EspaceSvg } from "@/components/svg/icons";


const Accordion: FunctionComponent<AccordionProps> = ({
    title,
    icon,
    hasArrow,
    subItems
}) => {
    const pathname = usePathname()
    const [isOpened, setIsOpened] = useState(false);

    const toggleAccordion = () => {
        if(subItems?.length != 0) {
            setIsOpened(!isOpened)
        }
    }

    return (
        <StyledAccordion className={`accordion ${isOpened ? 'opened' : ''}`}>
            <button onClick={toggleAccordion}>
                <div className="accordion__info">
                    {
                       (icon == null) ?
                            <EspaceSvg color={isOpened ? '#084693' : "#ffffff"} />
                       :
                            <span className="icon material-symbols-outlined">
                                {icon}
                            </span>
                    }

                    <span style={poppins.style}>
                        {title}
                    </span>
                </div>

                {
                    hasArrow && (
                        <span className="ic-arrow icon material-symbols-outlined">
                            expand_more
                        </span>
                    )
                }
            </button>

            {
                subItems && (
                    <div className="accordion__accordion-collapse">
                        {
                            subItems.map((item, key) => (
                                <Link className={`link ${pathname === item?.path ? 'active' : ''}`} href={item?.path as string} key={key}>
                                    <span style={roboto.style}>
                                        {item?.title}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </StyledAccordion>
    )
}

export default Accordion;