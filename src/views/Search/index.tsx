import DoctorCard from "@/components/DoctorCard";

const SearchPage = () => {
  return (
    <div className="">
      <div
        className="flex h-[11.25rem] flex-col justify-end px-4 pb-2 xs:h-52 md:h-64 md:pb-4"
        style={{ backgroundColor: "#3ca6a6cc" }}
      >
        <div className="xs:mx-auto xs:min-w-96">
          <h1 className="mb-2 font-headings text-xl capitalize text-white md:mb-4 md:text-2xl">
            Let’s find your doctor
          </h1>
          <label htmlFor="search" className="hidden">
            Search
          </label>
          <input
            id="search"
            className="w-full rounded-3xl border-none bg-white bg-opacity-40 px-4 py-3 font-body text-sm text-deep-teal backdrop-blur-sm placeholder:text-white focus:ring-white"
            type="text"
            placeholder="Search by name or specialization"
          />
        </div>
      </div>
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
    </div>
  );
};

export default SearchPage;
