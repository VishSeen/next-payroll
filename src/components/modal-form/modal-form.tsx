'use client'

import { ChangeEvent, FunctionComponent, MouseEvent, MouseEventHandler, useEffect, useRef, useState } from "react";
import StyledModalForm from "./style";
import { ModalFormProps } from "@/types/props";

import useLocalStorage from "@/hooks/useLocalStorage";
import removeDuplicate from "@/util/RemoveDuplicate";
import { poppins } from "@/styles/fonts";
import FormInput from "./form-input/form-input";
import { Inputs, TableData } from "@/types/type";

const txtError = "** Aucun champs peut etre vide.. **"


const ModalForm: FunctionComponent<ModalFormProps> = ({
    open,
    viewModalClick
}) => {
    const [user, setUser] = useState<string[]>();
    const [value, setValue] = useLocalStorage("Table");
    const [showErrorMessage, setshowErrorMessage] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<TableData>({
        id: 0,
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
            option: user
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


    useEffect(() => {
        if(value !== undefined) {
            const selectItem = removeDuplicate(value);
            setUser(selectItem);
        }
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
    const handleChange = (e: Event) => {
        setFormValues({ ...formValues, [e?.target?.name]: e?.target?.value })
    }


    const handleFormValidation = (e: MouseEvent) => {
        e.preventDefault();


        if (isValid()) {
            const tempLocalData:TableData[] = value;
            tempLocalData?.push(formValues);

            setValue(tempLocalData);

            console.log(tempLocalData)

            viewModalClick()
        } else {
            console.log("empty");
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