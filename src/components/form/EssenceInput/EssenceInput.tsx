"use client";
import { Input } from '@nextui-org/react';
import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';


interface IEssenceInputProps {
  name: string;
  placeholder?: string;
  styleProps?: any;
  size?: "sm" | "md" | "lg";
  type?: string;
  isRequired?: boolean;
  defaultValues?: string;
  isReadOnly?: boolean;
  label?: string;
  endContent?: any;
  hasPasswordToggle?: boolean; // New prop for password toggle
}

const EssenceInput: React.FunctionComponent<IEssenceInputProps> = ({
  name,
  size,
  type,
  label,
  placeholder,
  styleProps,
  isRequired,
  defaultValues,
  isReadOnly,
  endContent,
  hasPasswordToggle // Destructure the new prop
}) => {
  const { control } = useFormContext();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Determine the input type based on visibility state and hasPasswordToggle prop
  const inputType = hasPasswordToggle && type === 'password' ? (isVisible ? 'text' : 'password') : type || 'text';

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          style={{
            ...styleProps,
            background: "transparent",
            outline: "none"
          }}
          {...field}
          type={inputType}
          isReadOnly={isReadOnly}
          size={size}
          variant='faded'
          label={label || name}
          placeholder={placeholder}
          isRequired={isRequired}
          endContent={
            hasPasswordToggle && type === 'password' ? (
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Eye className="text-xl text-default-400 pointer-events-none mb-1" />
                ) : (
                  <EyeOff className="text-xl text-default-400 pointer-events-none mb-1" />
                )}
              </button>
            ) : (
              endContent
            )
          }
        />
      )}
    />
  );
};

export default EssenceInput;
