"use client";
import * as React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form"

interface IFormConfig {
    defaultValues?: Record<string,any>;
}
interface IEssenceFormProps {
    onSubmit: any
    children: React.ReactNode
    
}

const EssenceForm: React.FunctionComponent<IEssenceFormProps & IFormConfig> = ({ onSubmit, children,defaultValues }) => {
    const formConfig: IFormConfig = {};
  
 
    if(defaultValues){
        formConfig['defaultValues'] = defaultValues;
    }
    const methods = useForm(formConfig);
    const { handleSubmit } = methods;

    const formSubmit: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data);
    }

    return <FormProvider {...methods} >
        <form onSubmit={handleSubmit(formSubmit)}>
            {children}
        </form>
    </FormProvider>;
};

export default EssenceForm;
