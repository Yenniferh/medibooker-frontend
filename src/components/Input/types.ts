import { FieldError, Path, UseFormRegister } from "react-hook-form";

export interface InputProps<T extends Record<string, unknown>> {
  label: string;
  type: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  placeholder?: string;
  error?: FieldError;
  required?: boolean;
}
