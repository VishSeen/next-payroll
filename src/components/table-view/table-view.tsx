'use client'

import { TableProps } from "@/types/props";
import { FunctionComponent } from "react";
import StyledTable from "./style";
import config from "../../../config.json";
import { roboto } from "@/styles/fonts";
import Image from "next/image";

import icEdit from '../../../public/svg/table/button/ic-edit.svg';
import icTransfer from '../../../public/svg/table/button/ic-transfer.svg';
import icDelete from '../../../public/svg/table/button/ic-delete.svg';

const TableView: FunctionComponent<TableProps> = ({
    data,
    editClick,
    transferClick,
    deleteClick,
}) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    {
                        config?.data?.table?.head.map((item, i) => (
                            <th key={i} style={roboto.style}>
                                {item}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    config?.data?.table?.mock.map((item, i) => (
                        <tr key={i} >
                            <td style={roboto.style}>
                                {item?.user}
                            </td>

                            <td style={roboto.style}>
                                <div>
                                    <div className="circle" style={{ backgroundColor: item?.category?.color }}></div>
                                    {item?.category?.title}
                                </div>
                            </td>

                            <td style={roboto.style}>
                                {item?.period}
                            </td>

                            <td style={roboto.style}>
                                {item?.actual}
                            </td>

                            <td style={roboto.style}>
                                {item?.taken}
                            </td>

                            <td style={roboto.style}>
                                {item?.taken}
                            </td>

                            <td style={roboto.style}>
                                <div className="button-container">
                                    <button onClick={editClick}>
                                        <Image
                                            src={icEdit}
                                            alt="Icon Edit"
                                            width={32}
                                            height={32}
                                        />
                                    </button>

                                    <button onClick={transferClick}>
                                        <Image
                                            src={icTransfer}
                                            alt="Icon Delete"
                                            width={32}
                                            height={32}
                                        />
                                    </button>

                                    <button onClick={deleteClick}>
                                        <Image
                                            src={icDelete}
                                            alt="Icon Delete"
                                            width={32}
                                            height={32}
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </StyledTable>
    )
}

export default TableView;