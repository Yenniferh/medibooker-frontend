import React from "react";
import Doctor from "@/assets/doctor.svg?react";
import { DoctorCardProps } from "./types";

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  speciality,
  yearsOfExperience,
  consultationPrice,
  onClick,
}) => {
  return (
    <li
      data-testid="doctor-card"
      onClick={onClick}
      className="flex h-24 rounded-lg bg-white drop-shadow xs:mx-auto xs:min-w-96"
    >
      <div className="flex w-[6.25rem] items-center justify-center">
        <Doctor />
      </div>
      <div className="flex w-auto flex-1 flex-col justify-between p-2">
        <div className="">
          <h2 className="font-headings leading-none text-deep-teal">{name}</h2>
          <p className="font-headings text-xs text-teal-gray">
            {speciality} | {yearsOfExperience} Years
          </p>
        </div>
        <p className="font-body text-sm font-medium text-teal">${consultationPrice}/hour</p>
      </div>
    </li>
  );
};

export default DoctorCard;
