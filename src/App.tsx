import { useCounterStore } from "@/counterStore";
import TimeSlotPill from "@/components/TimeSlotPill";
import DatePill from "@/components/DatePill";
import DoctorCard from "@/components/DoctorCard";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { SubmitHandler, useForm } from "react-hook-form";

function App() {
  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <div>
      <h1 className="text-center">MediBooker</h1>
      <div>
        <p className="text-lg">Counter: {counter}</p>
        <button
          className="mx-1 my-1 rounded-sm bg-blue-50 p-2 text-sm text-blue-600"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="mx-1 my-1 rounded-sm bg-blue-50 p-2 text-sm text-blue-600"
          onClick={decrease}
        >
          Decrease
        </button>
      </div>
      <ol className="flex min-w-full gap-2 overflow-x-auto p-2 xs:mx-auto xs:w-[26rem] xs:min-w-0">
        <DatePill date="2024-04-21" onClick={() => console.log("clicked 2024-04-21")} />
        <DatePill date="2024-04-22" onClick={() => console.log("clicked 2024-04-22")} />
        <DatePill date="2024-04-23" onClick={() => console.log("clicked 2024-04-23")} />
        <DatePill date="2024-04-24" onClick={() => console.log("clicked 2024-04-24")} />
        <DatePill date="2024-04-25" onClick={() => console.log("clicked 2024-04-25")} isSelected />
        <DatePill date="2024-04-26" onClick={() => console.log("clicked 2024-04-26")} />
        <DatePill date="2024-04-27" onClick={() => console.log("clicked 2024-04-27")} />
        <DatePill date="2024-04-28" onClick={() => console.log("clicked 2024-04-28")} />
        <DatePill date="2024-04-29" onClick={() => console.log("clicked 2024-04-29")} />
        <DatePill date="2024-04-30" onClick={() => console.log("clicked 2024-04-30")} />
        <DatePill date="2024-05-01" onClick={() => console.log("clicked 2024-05-01")} />
        <DatePill date="2024-05-02" onClick={() => console.log("clicked 2024-05-02")} />
        <DatePill date="2024-05-03" onClick={() => console.log("clicked 2024-05-03")} />
        <DatePill date="2024-05-04" onClick={() => console.log("clicked 2024-05-04")} />
        <DatePill date="2024-05-05" onClick={() => console.log("clicked 2024-05-05")} />
        <DatePill date="2024-05-06" onClick={() => console.log("clicked 2024-05-06")} />
        <DatePill date="2024-05-07" onClick={() => console.log("clicked 2024-05-07")} />
        <DatePill date="2024-05-08" onClick={() => console.log("clicked 2024-05-08")} />
        <DatePill date="2024-05-09" onClick={() => console.log("clicked 2024-05-09")} />
        <DatePill date="2024-05-10" onClick={() => console.log("clicked 2024-05-10")} />
        <DatePill date="2024-05-11" onClick={() => console.log("clicked 2024-05-11")} />
        <DatePill date="2024-05-12" onClick={() => console.log("clicked 2024-05-12")} />
        <DatePill date="2024-05-13" onClick={() => console.log("clicked 2024-05-13")} />
        <DatePill date="2024-05-14" onClick={() => console.log("clicked 2024-05-14")} />
        <DatePill date="2024-05-15" onClick={() => console.log("clicked 2024-05-15")} />
      </ol>
      <ol className="flex flex-wrap justify-center gap-2 pt-1 xs:mx-auto xs:max-w-80">
        <TimeSlotPill hour="08:00 AM" onClick={() => console.log("clicked 08:00 AM")} />
        <TimeSlotPill hour="09:00 AM" onClick={() => console.log("clicked 09:00 AM")} />
        <TimeSlotPill hour="10:00 AM" onClick={() => console.log("clicked 10:00 AM")} isSelected />
        <TimeSlotPill hour="11:00 AM" onClick={() => console.log("clicked 11:00 AM")} />
        <TimeSlotPill hour="12:00 PM" onClick={() => console.log("clicked 12:00 PM")} />
        <TimeSlotPill hour="01:00 PM" onClick={() => console.log("clicked 01:00 PM")} />
        <TimeSlotPill hour="02:00 PM" onClick={() => console.log("clicked 02:00 PM")} />
        <TimeSlotPill hour="03:00 PM" onClick={() => console.log("clicked 03:00 PM")} />
        <TimeSlotPill hour="04:00 PM" onClick={() => console.log("clicked 04:00 PM")} />
        <TimeSlotPill hour="05:00 PM" onClick={() => console.log("clicked 05:00 PM")} />
        <TimeSlotPill hour="06:00 PM" onClick={() => console.log("clicked 06:00 PM")} />
        <TimeSlotPill hour="07:00 PM" onClick={() => console.log("clicked 07:00 PM")} />
      </ol>
      <ol className="flex flex-col gap-4 px-4 py-5">
        <DoctorCard
          name="John Doe"
          speciality="Cardiologist"
          yearsOfExperience={10}
          consultationPrice={100}
          onClick={() => console.log("clicked John Doe")}
        />
        <DoctorCard
          name="Jane Doe"
          speciality="Dermatologist"
          yearsOfExperience={15}
          consultationPrice={150}
          onClick={() => console.log("clicked Jane Doe")}
        />
        <DoctorCard
          name="James Doe"
          speciality="Endocrinologist"
          yearsOfExperience={20}
          consultationPrice={200}
          onClick={() => console.log("clicked James Doe")}
        />
        <DoctorCard
          name="Jill Doe"
          speciality="Gastroenterologist"
          yearsOfExperience={25}
          consultationPrice={250}
          onClick={() => console.log("clicked Jill Doe")}
        />
        <DoctorCard
          name="Jack Doe"
          speciality="Hematologist"
          yearsOfExperience={30}
          consultationPrice={300}
          onClick={() => console.log("clicked Jack Doe")}
        />
        <DoctorCard
          name="Jenny Doe"
          speciality="Immunologist"
          yearsOfExperience={35}
          consultationPrice={350}
          onClick={() => console.log("clicked Jenny Doe")}
        />
        <DoctorCard
          name="Josh Doe"
          speciality="Nephrologist"
          yearsOfExperience={40}
          consultationPrice={400}
          onClick={() => console.log("clicked Josh Doe")}
        />
        <DoctorCard
          name="Jessica Doe"
          speciality="Neurologist"
          yearsOfExperience={45}
          consultationPrice={450}
          onClick={() => console.log("clicked Jessica Doe")}
        />
        <DoctorCard
          name="Jerry Doe"
          speciality="Oncologist"
          yearsOfExperience={50}
          consultationPrice={500}
          onClick={() => console.log("clicked Jerry Doe")}
        />
      </ol>
      <Form />
      <div className="p-4">
        <Button label="Book Appointment" onClick={() => console.log("clicked Book Appointment")} />
      </div>
    </div>
  );
}

export default App;

type FormValues = {
  username: string;
  password: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-3">
      <Input
        label="Username"
        type="text"
        name="username"
        required
        register={register}
        placeholder="Enter your username"
        error={errors.username}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        register={register}
        placeholder="Enter your password"
        error={errors.password}
      />
      <div className="pt-6">
        <Button label="Submit" type="submit" />
      </div>
    </form>
  );
};
