'use client'

import { ChangeEvent, FunctionComponent, MouseEvent, useEffect, useState } from "react";
import StyledModalForm from "./style";
import { ModalFormProps } from "@/types/props";
import { v4 as uuid } from 'uuid';

import removeDuplicate from "@/util/RemoveDuplicate";
import { poppins } from "@/styles/fonts";
import FormInput from "./form-input/form-input";
import { Inputs, TableData } from "@/types/type";
import { useRouter } from "next/navigation";
import { getLocalStorage, setLocalStorage } from "@/util/getLocalStorage";
import config from '../../../config.json';


const txtError = "** Aucun champs peut etre vide.. **"


const ModalForm: FunctionComponent<ModalFormProps> = ({
    open,
    viewModalClick
}) => {
    const router = useRouter()
    const [users, setUsers] = useState<string[]>();
    const [showErrorMessage, setshowErrorMessage] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<TableData>({
        id: "",
        user: "",
        category: "",
        period: "",
        actual: 0,
        taken: 0,
        future: 0
    });

    // element to render inputs field
    const inputs: Inputs[] = [
        {
            id: 1,
            label: "Utilisateurs",
            type: "select",
            name: "user",
            placeholder: "Selectez l'utilisateur",
            required: true,
            option: users
        },
        {
            id: 2,
            label: "Catégorie",
            type: "text",
            name: "category",
            placeholder: "Ajouter Catégorie",
            required: true
        },
        {
            id: 3,
            label: "Période",
            type: "date",
            name: "period",
            placeholder: "Choissisez la date",
            required: true
        },
        {
            id: 4,
            label: "Solde actuel",
            type: "number",
            name: "actual",
            placeholder: "Montant solde actuel",
            required: true
        },
        {
            id: 5,
            label: "Solde pris",
            type: "number",
            name: "taken",
            placeholder: "Montant solde prise",
            required: true
        },
        {
            id: 6,
            label: "Solde futur",
            type: "number",
            name: "future",
            placeholder: "Montant solde futur",
            required: true
        }
    ]

    const value: TableData[] = getLocalStorage("Table");


    useEffect(() => {
        setUsers(config?.data?.users);

        if (users !== undefined) {
            const selectItem = removeDuplicate(value);
            setUsers(selectItem);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // Check validity of the input fields
    const isValid = () => {
        if (formValues.taken === undefined || formValues.actual === undefined || formValues.future === undefined) {
            return false;
        }

        if (formValues.user === "" || formValues.category === "" || formValues.period === "") {
            return false;
        }

        return true;
    }

    // handle on input change event
    const handleChange = (e: any) => {
        let target = e?.target;
        setshowErrorMessage(false);

        setFormValues({ ...formValues, [target?.name]: target?.value })
    }


    const handleFormValidation = (e: any) => {
        e.preventDefault();

        const uniqueId = uuid();
        setFormValues({ ...formValues, id: uniqueId });

        if (isValid()) {
            if (value !== undefined || value !== null) {
                const tempLocalData: TableData[] = value;
                tempLocalData?.push(formValues);
                setLocalStorage("Table", tempLocalData);
            }

            router.push(`?dataId=${uniqueId}`, { scroll: true });

            if (viewModalClick) {
                viewModalClick();
            }
        } else {
            setshowErrorMessage(true);
        }
    }



    return (
        <StyledModalForm className={`modal-form ${open ? 'opened' : ''}`}>
            <div className="form">
                <div className="form__header">
                    <h1>
                        Ajouter une nouvelle données
                    </h1>

                    <div className="btn-close" onClick={viewModalClick}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </div>
                </div>

                <div className="form__body">
                    <form>
                        {
                            inputs.map((item) => (
                                <FormInput
                                    key={item?.id}
                                    inputs={item}
                                    handleChange={handleChange}
                                />
                            ))
                        }

                        <span className={`form-body__error ${showErrorMessage ? 'error' : ''}`}>{txtError}</span>

                        <div className="button-container">
                            <button className="btn-cancel" onClick={viewModalClick} style={poppins.style}>
                                Cancel
                            </button>

                            <button
                                className="btn-add"
                                onClick={handleFormValidation}
                                style={poppins.style}
                            >
                                Ajouter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </StyledModalForm>
    )
}

export default ModalForm;