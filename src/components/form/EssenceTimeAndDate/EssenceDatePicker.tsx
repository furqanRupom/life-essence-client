"use client";
import { DatePicker, Input } from '@nextui-org/react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IEssenceInputProps {
  name: string;
  placeholder?: string;
  styleProps?: any;
  size?: "sm" | "md" | "lg"
  type?: any;
  isRequired?: boolean;
  label?:string;
  defaultValue?:any;


}

const EssenceDatePicker: React.FunctionComponent<IEssenceInputProps> = ({ name, size, type, placeholder, styleProps, isRequired,label,defaultValue }) => {
  const { control } = useFormContext();
  return <Controller name={name} control={control} render={({ field }) => (
    <DatePicker defaultValue={defaultValue}  style={{
      ...styleProps,
      background: "transparent",
      outline: "none"
    }} {...field} size={size} variant='faded' label={label} isRequired={isRequired} />
  )} />
    ;
};

export default EssenceDatePicker;
