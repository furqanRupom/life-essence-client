"use client";
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

interface IEssenceFormProps {
    onSubmit: any
    children: React.ReactNode
}

const EssenceForm: React.FunctionComponent<IEssenceFormProps> = ({ onSubmit, children }) => {
    const methods = useForm();
    const { handleSubmit } = methods;

    return <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    </FormProvider>;
};

export default EssenceForm;
