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


}

const EssenceInput: React.FunctionComponent<IEssenceInputProps> = ({ name,size,type,  placeholder,styleProps,isRequired }) => {
  const { control } = useFormContext();
  return <Controller name={name} control={control} render={({ field }) => (
    <Input  style={{
      ...styleProps,
      background:"transparent",
      outline:"none"
    }} {...field} type={type || "text"} size={size} variant='faded' label={name} placeholder={placeholder} isRequired={isRequired}  />
  )} />
    ;
};

export default EssenceInput;
