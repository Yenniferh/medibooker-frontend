import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div data-testid="success" className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col justify-center p-4">
        <h1 className="pb-6 text-center font-headings text-3xl text-deep-teal md:pb-10 md:text-5xl">
          Your appointment was booked!
        </h1>
        <p className="text-center font-body text-lg text-deep-teal md:text-xl">
          You will receive a confirmation email shortly.
        </p>
        <p className="text-center font-body text-lg text-deep-teal md:text-xl">
          Thank you for using MediBooker!
        </p>
        <div className="flex w-full justify-center pt-8 md:w-96 md:self-center md:pt-12">
          <Button onClick={() => navigate("/")} label="Book another appointment" />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
