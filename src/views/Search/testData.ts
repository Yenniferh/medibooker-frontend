import { RemoteDoctor } from "@/types/doctor";

export const DOCTORS: RemoteDoctor[] = [
  {
    id: 1,
    specializations: [
      {
        id: 1,
        name: "Cardiology",
        description:
          "Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.",
      },
    ],
    name: "Dr. John Doe",
    years_experience: 5,
    description:
      "Dr. John Doe is a Cardiologist with 5 years of experience. He has treated over 1000 patients with heart diseases and has a success rate of 95%.",
    consultation_price: 500,
  },
  {
    id: 2,
    specializations: [
      {
        id: 2,
        name: "Dermatology",
        description:
          "Dermatology is the branch of medicine dealing with the skin, nails, hair and its diseases. It is a specialty with both medical and surgical aspects. A dermatologist treats diseases, in the wpkest sense, and some cosmetic problems of the skin, scalp, hair, and nails.",
      },
    ],
    name: "Dr. Jane Smith",
    years_experience: 8,
    description:
      "Dr. Jane Smith is a Dermatologist with 8 years of experience. She specializes in treating skin diseases and cosmetic problems. She has a passion for helping patients achieve healthy and beautiful skin.",
    consultation_price: 600,
  },
];
