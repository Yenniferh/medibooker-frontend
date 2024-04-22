import { FieldValues } from "react-hook-form";
import { InputProps } from "./types";
import ErrorIcon from "@/assets/error.svg?react";

const Input = <T extends FieldValues>({
  label,
  type,
  name,
  register,
  placeholder = "",
  error,
  required = false,
}: InputProps<T>) => {
  const hasError = error?.message;
  return (
    <div data-testid="input" className="mb-4 mt-2 flex flex-col">
      <label htmlFor={name} className={`label-base ${hasError ? "label-error" : ""}`}>
        {label}
        {required && "*"}
      </label>
      <input
        id={name}
        className={`input-base ${hasError ? "input-error" : ""}`}
        aria-invalid={hasError ? "true" : "false"}
        type={type}
        placeholder={placeholder}
        {...register(name, { required: { value: required, message: "Required field" } })}
      />
      {hasError && (
        <p role="alert" className="label-error pt-1.5 text-xs">
          <ErrorIcon aria-hidden="true" className="-mt-1 inline-flex pr-1" />
          <span>{error.message}</span>
        </p>
      )}
    </div>
  );
};

export default Input;
