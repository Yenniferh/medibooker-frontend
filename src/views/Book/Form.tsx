import Button from "@/components/Button";
import Input from "@/components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormFields, PatientSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";

const Form = () => {
  const { timeSlot } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    mode: "all",
    resolver: zodResolver(PatientSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) =>
    console.log(data, "submitted for booking time slot", timeSlot);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <Input
        label="Name"
        type="text"
        name="name"
        required
        register={register}
        placeholder="John"
        error={errors.name}
      />
      <Input
        label="Last Name"
        type="text"
        name="lastName"
        required
        register={register}
        placeholder="Smith"
        error={errors.lastName}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        required
        register={register}
        placeholder="johnsmith@me.com"
        error={errors.email}
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        register={register}
        placeholder="+1 123 456 7890"
        error={errors.phone}
      />
      <Input
        label="Comment"
        type="text"
        name="comment"
        register={register}
        placeholder="I have had a headache for a week."
        error={errors.comment}
      />
      <div className="pt-6">
        <Button label="Submit" type="submit" />
      </div>
    </form>
  );
};

export default Form;
