import { z, ZodType } from "zod";

export type FormFields = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  comment: string;
};

export const PatientSchema: ZodType<FormFields> = z.object({
  name: z
    .string({
      required_error: "required field",
      invalid_type_error: "Name is required",
    })
    .min(2, { message: "Name is too short" }),
  lastName: z
    .string({
      required_error: "required field",
      invalid_type_error: "Last Name is required",
    })
    .min(2, { message: "Last Name is too short" }),
  email: z
    .string({
      required_error: "required field",
      invalid_type_error: "Email is required",
    })
    .email({ message: "Invalid email" }),
  phone: z.string(),
  comment: z.string(),
});
