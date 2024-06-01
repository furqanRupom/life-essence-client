"use client";
import { Input } from '@nextui-org/react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IEssenceInputProps {
  name: string;
  placeholder?: string;
  styleProps?:any;
  size?: "sm" | "md" | "lg"
  type?:any;
  isRequired?:boolean;
  defaultValues?:string;
  isReadOnly?:boolean;
  label?:string;


}

const EssenceInput: React.FunctionComponent<IEssenceInputProps> = ({ name,size,type, label, placeholder,styleProps,isRequired,defaultValues,isReadOnly }) => {
  const { control } = useFormContext();
  return <Controller name={name} control={control} render={({ field }) => (
    <Input  style={{
      ...styleProps,
      background:"transparent",
      outline:"none"
    }} {...field} type={type || "text"}  isReadOnly={isReadOnly} size={size} variant='faded' label={label || name} placeholder={placeholder} isRequired={isRequired}  />
  )} />
    ;
};

export default EssenceInput;
