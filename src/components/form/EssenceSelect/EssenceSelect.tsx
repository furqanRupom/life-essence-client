"use client"
import { Select, SelectItem } from '@nextui-org/react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IEssenceSelectProps {
    name: string;
    placeholder?: string;
    styleProps?: any;
    size?: "sm" | "md" | "lg"
    isRequired?: boolean;
    menuItems:any;
    label?:string;
}

const EssenceSelect: React.FunctionComponent<IEssenceSelectProps> = ({name,menuItems,placeholder,size,isRequired,label}) => {
    const {control} = useFormContext();
  return <Controller control={control} name={name} render={({field}) => (
    <Select isRequired={isRequired} variant='faded' label={label} size={size} placeholder={placeholder} {...field}>
          {
            // @ts-ignore
            menuItems.map((menu) => <SelectItem value={menu.name}  key={menu.name}>{menu.value}</SelectItem>)
          }
    </Select>
  )} />;
};

export default EssenceSelect;
